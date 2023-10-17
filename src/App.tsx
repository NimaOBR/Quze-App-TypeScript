import React, { useState, useEffect } from "react";
import { Dificulty, featchQuizQuestion, QuestionState } from "./API";
import QuiztionsCard from "./Components/QuiztionsCard";
import { GlobalStyle,Wrapper } from "./App.style";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const Total_Question = 10;
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(question);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await featchQuizQuestion(
      Total_Question,
      Dificulty.Easy
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = question[number].correct_answer === answer;
      if (correct) setScore((pre) => pre + 1);
      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correctAnswer: question[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };
  const nextQuiztion = async () => {
    const nextQuestion = number + 1;
    if (nextQuestion === Total_Question) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };





  return (
    <>
      <GlobalStyle />
        <Wrapper>
          <h1>Quiz Time</h1>
          {gameOver || userAnswer.length === Total_Question ? (
            <button className="btnstart" onClick={startTrivia}>
              Start
            </button>
          ) : null}
          {!gameOver ? <p className="score">Score : {score}</p> : null}
          {loading && <p>Quiztions Loading ...</p>}
          {!loading && !gameOver && (
            <QuiztionsCard
              questionNumber={number + 1}
              totalQuestion={Total_Question}
              question={question[number].question}
              answers={question[number].answers}
              userAnswer={userAnswer ? userAnswer[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver &&
          !loading &&
          userAnswer.length === number + 1 &&
          number !== Total_Question - 1 ? (
            <button className="btnstart" onClick={nextQuiztion}>
              Next Question
            </button>
          ) : null}
        </Wrapper>
    </>
  );
}

export default App;
