import React from "react";

import { AnswerObject } from "../App";
import { BtnCard, Card } from './Questions.style';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject|undefined ;
  questionNumber: number;
  totalQuestion: number;
};


const QuiztionsCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNumber,
  totalQuestion,
  userAnswer,
}) => {
    console.log(userAnswer);
    
  return (
    <Card>
      <p className="number">
        Question {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers?.map((item) => (
          <BtnCard correct={userAnswer?.correctAnswer=== item} userClick={userAnswer?.answer === item} key={item}>
            <button disabled={userAnswer?true:false} value={item} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </button>
          </BtnCard>
        ))}
      </div>
    </Card>
  );
};

export default QuiztionsCard;
