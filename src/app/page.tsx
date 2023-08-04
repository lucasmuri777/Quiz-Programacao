'use client'
import { QuestioItem } from '@/components/QuestionItem/QuestionItem';
import { Results } from '@/components/Results/Results';
import { questions } from '@/data/questions';
import Image from 'next/image'

import {useState} from 'react'

export default function Home() {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de Culinária';

  const loadNextQuestion = () =>{
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1)
      return;
    }
    setShowResult(true);
  } 

  const handleAnswered = (answer: number) =>{
    setAnswers([...answers, answer])
    loadNextQuestion();
  }

  const handleRestartButton = () =>{
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  } 

  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-600'>
      <div className='w-full max-w-xl rounded-md bg-white text-black shadow shadow-black/30'>
        {/* Titulo */}
        <div className='p-5 font-bold text-2xl border-b border-gray-300'>{title}</div>
          {/* Componente das questoes*/}
          {!showResult &&
            <QuestioItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {showResult &&
            <Results questions={questions} answers={answers}/>
          }
        {/* Area que mostra em qual questão o usuário está */}
        <div className='p-5 text-center border-t border-gray-300'>
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className='px-3 py-2 rounded-md bg-blue-800 text-white'>Reiniciar Quiz</button>
          }
          
        </div>

      </div>
    </div>
  )
}
