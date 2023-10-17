
import { shufferArray } from './utils';
export type Question = {
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    type:string
}
export type QuestionState = Question & {answers:string[]}

export enum Dificulty {
    Easy='easy',
    Medium='medium',
    Hard='hard'
}

export const featchQuizQuestion = async (amount:number, difficulty:Dificulty) =>{
    const api = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data  = await (await fetch(api)).json();
    return data.results.map((item:Question)=>(
        {
            ...item,
            answers:shufferArray([...item.incorrect_answers,item.correct_answer])
        }
    ))
    
    
    
}