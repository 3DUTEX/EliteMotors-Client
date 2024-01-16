import gsap from 'gsap';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import { QuestionContainer } from './styled';

export default function Question({ id }) {
  const [display, setDisplay] = useState(false);

  function handleClick() {
    if (display) {
      gsap.to(`#questionDesc${id}`, {
        height: 0,
        opacity: 0,
      });
      gsap.to(`#arrow${id}`, {
        rotate: '0',
      });
      setTimeout(() => {
        setDisplay(false);
      }, 150);
    }
    if (!display) {
      setDisplay(true);
      setTimeout(() => {
        gsap.to(`#questionDesc${id}`, {
          height: 75,
          opacity: 1,
        });
        gsap.to(`#arrow${id}`, {
          rotate: '180',
        });
      }, 50);
    }
  }

  return (
    <QuestionContainer display={display}>
      <div className="question-title" id={`questionTitle${id}`}>
        <h2>Question title</h2>
        <FaArrowUp
          size={30}
          cursor="pointer"
          onClick={handleClick}
          className="arrow"
          id={`arrow${id}`}
        />
      </div>
      <div className="question-desc" id={`questionDesc${id}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste itaque ut pariatur deserunt nam quam nobis.
          Odit sed sint qui libero vero adipisci facilis, laborum minima esse, tempore, aliquam molestias.

        </p>
      </div>
    </QuestionContainer>
  );
}
