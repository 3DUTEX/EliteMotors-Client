/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Imports Libs
import React, { useEffect, useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// Imports Modules
import FooterBar from '../../components/FooterBar';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import axios from '../../services/axios';
import { CustomButton } from '../../styles/index';
import { OneVehicleSection } from './styled';

export default function OneVehicle() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams();

  // Get vehicle of URL
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getVehicle() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/vehicles/${id}`);

        setVehicle(data);
      } catch (e) {
        const { response } = e;
        console.log(response.data);
      } finally {
        setLoading(false);
      }
    }
    getVehicle();
  }, [id]);

  const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  function changeMainImage(index) {
    const newOrderImages = [...vehicle.images]; // Copiando array de imagens
    newOrderImages.splice(0, 0, newOrderImages[index]); // Adicionando imagem clicada no index 0

    // adiciona 1 ao index pois foi adicionada mais uma imagem no array
    newOrderImages.splice(index + 1, 1);

    // Copiando o objeto do veiculo para substuir o array de imagens
    const newVehicle = { ...vehicle };

    newVehicle.images = newOrderImages;
    setVehicle(newVehicle); // substituindo
  }

  // Click on button "reserva"
  function handleClickButton() {
    if (isLoggedIn) {
      // TODO create reservation
    } else {
      toast.error('Login necessário');
      navigate('/login', { state: { prevPath: location.pathname } });
    }
  }

  return (
    <>
      <NavBar />
      <OneVehicleSection>
        <div className="main-container">
          {!loading && (
          <div className="images-vehicle">
            {vehicle.images && vehicle.images.length > 0 ? (
              <div>
                <img src={vehicle.images[0].url} alt="imagem de um carro" className="main-image" />
                <div className="other-images">
                  {vehicle.images.map(
                    (image, index) => (
                      <img
                        key={image.id}
                        src={image.url}
                        alt="imagem de um carro"
                        onClick={() => {
                          changeMainImage(index);
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            ) : (
              <FaExclamationCircle className="main-image" />
            )}
          </div>
          )}

          {loading ? (
            <Loading />
          ) : (
            <div className="details-vehicle">
              <h2 className="name-vehicle">{vehicle.name}</h2>
              <div className="detail-vehicle">
                <p>Marca</p>
                <span>{vehicle.brand}</span>
              </div>
              <div className="detail-vehicle">
                <p>Modelo</p>
                <span>{vehicle.model}</span>
              </div>
              <h3>
                Por apenas:
                {' '}
                <span className="price-vehicle">{BRL.format(vehicle.price)}</span>
              </h3>
              <CustomButton padding="18px" onClick={handleClickButton}>Reservar</CustomButton>
            </div>
          )}

        </div>
      </OneVehicleSection>
      <FooterBar />
    </>
  );
}
