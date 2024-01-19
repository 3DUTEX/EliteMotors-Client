import React, { useRef, useState } from 'react';
import { LoginSection } from './styled';

import Loading from '../../components/Loading';
import LogIn from './components/LogIn';
import Register from './components/Register';

export default function Login() {
  const [logIn, setLogIn] = useState(true);

  const btnLoginRef = useRef();
  const btnRegisterRef = useRef();

  function changeOption() {
    const btnLogin = btnLoginRef.current;
    const btnRegister = btnRegisterRef.current;
    if (logIn) {
      btnLogin.classList.replace('selected', 'not-selected');
      btnRegister.classList.replace('not-selected', 'selected');
      setLogIn(false);
    } else {
      btnLogin.classList.replace('not-selected', 'selected');
      btnRegister.classList.replace('selected', 'not-selected');
      setLogIn(true);
    }
  }

  return (
    <LoginSection>
      <Loading />
      <div className="main-container">
        <div>
          <button
            ref={btnLoginRef}
            type="button"
            className="btn-option radius-left selected"
            onClick={changeOption}
          >
            Logar
          </button>
          <button
            ref={btnRegisterRef}
            type="button"
            className="btn-option radius-right not-selected"
            onClick={changeOption}
          >
            Registrar
          </button>
        </div>
        {logIn ? <LogIn /> : <Register />}
      </div>
    </LoginSection>
  );
}
