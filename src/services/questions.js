const questions = [
  {
    id: "1",
    question: "Actress Mila Kunis was born in which country?",
    options: {
      option_1: "USA",
      option_2: "Russia",
      option_3: "Ukraine"
    },
    answer: "Ukraine"
  },
  {
    id: "2",
    question: "Which national park became Britain’s first in 1951?",
    options: {
      option_1: "Cairngorms",
      option_2: "Peak District",
      option_3: "South Downs"
    },
    answer: "Peak District"
  },
  {
    id: "3",
    question:
      "Which X-Men star went autograph hunting by having his shirt signed in red pen by many of his fellow actors?",
    options: {
      option_1: "James McAvoy",
      option_2: "Hugh Jackman",
      option_3: "Patrick Stewart"
    },
    answer: "James McAvoy"
  },
  {
    id: "4",
    question:
      "Since 2001 the Wimbledon courts have been sown with which type of grass?",
    options: {
      option_1: "Blugrass",
      option_2: "Fine Fescue",
      option_3: "Perennial Ryegrass"
    },
    answer: "Perennial Ryegrass"
  },
  {
    id: "5",
    question: "What is the capacity of the Centre Court?",
    options: {
      option_1: 15000,
      option_2: 17000,
      option_3: 19000
    },
    answer: "15000"
  }
];

export function getQuestions() {
  return questions;
}
