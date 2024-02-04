/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from '../../services/axios';
import { ReservationsSection } from './styled';

export default function Reservations() {
  const authReducer = useSelector((state) => state.authReducer);
  const location = useLocation();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({});

  // Verifica se tem o id do veículo
  useEffect(() => {
    if (!location.state) { // se não tiver estado
      return navigate('/');
    }
    if (!location.state.idVehicle) return navigate('/'); // se não tiver id do veículo
  }, [location]);

  // Solicitando dados do usuário logado
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get('/users', {
          headers: {
            Authorization: `Bearer ${authReducer.token}`, // passando tokendo do usuário logado
          },
        });
        setDataUser(data); // setando dados do usuário
      } catch (e) {
        const { data } = e;
        console.log(data);
      }
    }

    getUser(); // chamando função
  }, []);

  return (
    <ReservationsSection>
      <h1>teste</h1>
    </ReservationsSection>
  );
}
