import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ title, detail }) => {
    console.log(title, detail);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <article>
        <header>
          <h4>{title}</h4>
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{detail}</p>}
      </article>
    </div>
  );
};

export default Questions;