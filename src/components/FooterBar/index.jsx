// Imports Libs
import React from 'react';
import {
  FaAddressBook,
  FaEnvelope,
  FaExclamationTriangle,
  FaMapMarked,
  FaPhone,
  FaUser,
} from 'react-icons/fa';

// Imports Modules
import { FooterBarContainer, FooterBarSection } from './styled';

export default function FooterBar() {
  return (
    <FooterBarSection>
      <FooterBarContainer>
        <h2 className="logo">
          ELITE
          <span className="detach"> MOTORS </span>
        </h2>
        <div className="grid">
          <div className="item-container">
            <div className="sub-title">
              <FaAddressBook />
              <h3>
                Contate-
                <span className="detach">nos</span>
              </h3>
            </div>
            <ul className="contact-list">
              <li className="contact-item">
                <FaEnvelope className="icon" />
                eliteetecmotors@gmail.com
              </li>
              <li className="contact-item">
                <FaPhone className="icon" />
                (11) 969459786
              </li>
              <li className="contact-item">
                <FaMapMarked className="icon" />
                Rua Guaipá, 678 -Vila Leopoldina,SP
              </li>
            </ul>
          </div>
          <div className="item-container">
            <div className="sub-title">
              <FaUser />
              <h3>
                Sobre
                <span className="detach"> nós</span>
              </h3>
            </div>
            <p>
              Bem-vindo à Elite Motors, onde a paixão por automóveis encontra o compromisso
              com a excelência. Desde a nossa fundação,
              temos o orgulho de ser uma referência no setor
              automotivo, oferecendo aos nossos clientes uma experiência única e inesquecível.
            </p>
          </div>
        </div>
        <div className="sub-title warning">
          <FaExclamationTriangle className="detach exclamation" />
          <p className="detach">
            Projeto apenas para portfólio e apresentação, nenhuma venda é realizada!
          </p>
        </div>
      </FooterBarContainer>
    </FooterBarSection>
  );
}
