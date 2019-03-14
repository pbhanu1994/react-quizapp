import React from "react";

const QuestionForm = ({ question, handleChange }) => {
  return (
    <div className="card text-white bg-secondary m-3">
      <h5 className="card-header">
        <b>QuizApp</b>
      </h5>
      <div className="card-body">
        <h3 className="card-title">
          <b>{question.question}</b>
        </h3>
        <form>
          {Object.keys(question.options).map(q => {
            let item = question.options[q];
            return (
              <div className="form-check" key={q}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.id}
                  onChange={handleChange}
                  id={q}
                  value={item}
                  required
                />
                <label className="form-check-label" htmlFor={q}>
                  {item}
                </label>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
