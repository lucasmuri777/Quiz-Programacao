import { Question } from "@/types/Question"

import {useState} from 'react'

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void
}

export const QuestioItem = ({question, count, onAnswer}: Props) =>{
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    
    const checkQuestion = (key: number) =>{
        if(selectedAnswer === null){
            setSelectedAnswer(key)

            setTimeout(()=>{
                onAnswer(key)
                setSelectedAnswer(null)
            }, 2000)
            
        }
    }

    return(
        <div className="p-5">

            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>    
            <div>
                {question.options.map((item, key)=>(
                    <div
                        key={key}
                        onClick={()=>checkQuestion(key)}
                        className={`border px-2 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                            
                            ${selectedAnswer !== null ? 'cursor-auto' : 'hover:opacity-70 cursor-pointer'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-200 border-green-400'}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-200 border-red-400'}
                        `}
                    >
                        {item}
                    </div>
                ))}
            </div>
        
        </div>
    )
}