import React, { Component } from "react";
import { getQuestions } from "../services/questions";
import NavBar from "./common/navBar";
import QuestionForm from "./common/questionForm";
import EvaluateButton from "./common/evaluateButton";
import ScoreCardButton from "./common/scoreCardButton";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Questions extends Component {
  state = {
    questions: [],
    options: [],
    answers: [],
    filteredAnswers: [],
    finalResult: [],
    currentPage: 1,
    pageSize: 1
  };

  componentDidMount() {
    this.setQuestions();
    this.setAnswers();
  }

  setQuestions() {
    const questions = [...getQuestions()];
    this.setState({ questions });
  }

  setAnswers() {
    const questions = [...getQuestions()];
    const answers = [];
    questions.map(q => {
      const getAnswers = {};
      getAnswers.id = q.id;
      getAnswers.answer = q.answer;
      return answers.push(getAnswers);
    });
    this.setState({ answers });
  }

  handleChange = ({ currentTarget }) => {
    const options = [...this.state.options];
    const selectedOption = {};

    selectedOption.id = currentTarget.name;
    selectedOption.answer = currentTarget.value;

    //If Selected Question already Exists in the State
    const resultExist = options.filter(q => q.id === currentTarget.name);

    if (resultExist.length > 0) {
      const existingResult = resultExist;
      const existingResultIndex = options.indexOf(existingResult[0]);
      options[existingResultIndex].answer = currentTarget.value;
    } else {
      options.push(selectedOption);
    }
    this.setState({ options });
  };

  renderQuestions() {
    const { questions: allQuestions, currentPage, pageSize } = this.state;
    const questions = paginate(allQuestions, currentPage, pageSize);

    return questions.map(question => (
      <QuestionForm
        key={question.id}
        question={question}
        handleChange={this.handleChange}
      />
    ));
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleEvaluate = () => {
    const options = [...this.state.options];
    const answers = [...this.state.answers];
    let filteredAnswers = [];
    let finalResult = [...this.state.finalResult];

    if (options.index === 0) return;

    if (options.length > 0) {
      filteredAnswers = _.intersectionBy(answers, options, "id");
      this.setState({ filteredAnswers });
      finalResult = _.intersectionWith(filteredAnswers, options, _.isEqual);
      this.setState({ finalResult });
    }
    this.setState({ submit: true });
  };

  renderScoreCardButton() {
    const { options, filteredAnswers, finalResult, submit } = this.state;

    if (submit) {
      return (
        <ScoreCardButton
          username={this.props.location.state.username}
          options={options}
          filteredResult={filteredAnswers}
          result={finalResult}
        />
      );
    }
  }

  render() {
    const { questions, pageSize, currentPage, finalResult } = this.state;

    return (
      <React.Fragment>
        <NavBar username={this.props.location.state.username} />
        {this.renderQuestions()}
        <center>
          <Pagination
            itemsCount={questions.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          <EvaluateButton
            evaluateResults={this.handleEvaluate}
            finalResult={finalResult}
          />
          {this.renderScoreCardButton()}
        </center>
      </React.Fragment>
    );
  }
}

export default Questions;
