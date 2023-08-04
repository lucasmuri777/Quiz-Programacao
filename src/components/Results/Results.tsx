import { Question } from "@/types/Question"

type Props = {
    questions: Question[],
    answers: number[]
}

export const Results = ({questions, answers}:Props) =>{
    return (
        <div className="p-5">
            {questions.map((item, key)=>(
                <div
                    key={key}
                    className="mb-3"
                >
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <p>Você colocou: {item.options[answers[key]]}</p>
                        <span>({item.answer === answers[key] ? 'Acertou!' : 'Errou!'}) - </span>
                        Resposta Certa: {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    )
}