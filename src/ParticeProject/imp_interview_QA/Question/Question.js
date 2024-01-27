import React, { useState } from "react";
import { question } from "./QuestionData"
import { useNavigate } from 'react-router-dom'

const Question = () => {
    const [accordian, setAccordian] = useState(false)

    const ShowAnswer = () => {
        setAccordian(!accordian)
    }

    return (
        <>
            <div>
                {question?.map((item) => {
                    return (
                        <div>
                            <div style={{display: "flex",justifyContent:"space-between",margin: "12px"}}>
                                <span key={item?.id} >{item?.question}</span>
                                <button onClick={ShowAnswer}>Answer</button>
                            </div>
                            {accordian && <div style={{display:"flex",margin:"12px"}}>{item?.answer}</div>}
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Question