/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Imports Libs
import gsap from 'gsap';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Imports modules
import { QuestionContainer } from './styled';

export default function Question({ id, title, desc }) {
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    if (isShow) {
      gsap.to(`#questionDesc${id}`, {
        height: 0,
        opacity: 0,
      });
      gsap.to(`#arrow${id}`, {
        rotate: '180',
      });
      return setIsShow(false);
    }
    if (!isShow) {
      console.log(window.innerWidth);
      // tamanho da descrição da questão de acordo com tamanho da tela
      const tamanho = window.innerWidth > 420 ? 75 : 140;
      gsap.to(`#questionDesc${id}`, {
        height: tamanho,
        opacity: 1,
      });
      gsap.to(`#arrow${id}`, {
        rotate: '0',
      });
      return setIsShow(true);
    }
    return null;
  }

  return (
    <QuestionContainer>
      <div className="question-title" id={`questionTitle${id}`} onClick={handleClick}>
        <h2>{title}</h2>
        <FaArrowUp size={30} cursor="pointer" className="arrow" id={`arrow${id}`} />
      </div>
      <div className="question-desc" id={`questionDesc${id}`}>
        <p>{desc}</p>
      </div>
    </QuestionContainer>
  );
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
