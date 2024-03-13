import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import axios from '../../services/axios';
import Reservation from './components/Reservation';
import { Container, Content } from './styled';

export default function Reservations() {
  const dateNow = Number(new Date());

  const navigate = useNavigate();
  const authReducer = useSelector((reducers) => reducers.authReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (!authReducer.isLoggedIn) {
      navigate('/login', { replace: true });
      return;
    }

    async function getReservations() {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/reservations', {
          headers: {
            Authorization: `Bearer ${authReducer.token}`,
          },
        });

        setReservations(data);
      } catch (e) {
        toast.error('Error on request reservations');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    }

    getReservations();
  }, []);

  useEffect(() => {
    if (!authReducer.isLoggedIn) navigate('/');
  }, [authReducer.isLoggedIn]);

  if (isLoading) {
    return <Loading blocked />;
  }
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <h1>{`Bem vindo ${authReducer.user.name}!`}</h1>
          <h3 className="sub-title">Suas reservas</h3>
          <ul className="list-reservations">
            {reservations.length > 0 ? (
              reservations.map((reservation) => (
                <Reservation
                  key={reservation.id}
                  visitDate={reservation.visitDate}
                  name={reservation.Vehicle.name}
                  price={reservation.Vehicle.price}
                  dateNow={dateNow}
                />
              ))
            ) : (
              <h1>Você não fez nenhuma reserva até o momento</h1>
            )}
          </ul>
        </Content>
      </Container>
    </>
  );
}
