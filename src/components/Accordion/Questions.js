import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ title, detail }) => {
    console.log(title, detail);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <article className="bg-gray-700 sm:p-2 md:p-6 mb-3">
        <header className="flex justify-between">
          <h4 className="sm:text-2xl md:text-3xl pb-4">{title}</h4>
          <button className="md:text-3xl" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p className="md:text-3xl">{detail}</p>}
      </article>
    </div>
  );
};

export default Questions;
