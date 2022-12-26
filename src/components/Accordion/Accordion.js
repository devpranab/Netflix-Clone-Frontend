import React, { useState } from 'react';
import Questions from './Questions';
import QuestionsData from '../../dbLocal/QuestionsData'

const Accordion = () => {
    const [questions, setQuestions] = useState(QuestionsData);

    return (
        <div className="w-full h-full text-white p-10">
            <h1 className="text-5xl text-center font-bold pb-4">Frequently Asked Questions</h1>
         <main>
            <section>
                {questions.map(question => {
                    return(
                        <Questions key={question.id} {...question}/>
                    )
                })}
            </section>
        </main>   
        </div>
    );
};

export default Accordion;