import React from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop/Backdrop.js';

const Modal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 50%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 30px;
  left: 25%;
  top: 25%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-100vh)')};
  opacity: ${props => (props.show ? '1' : '0')};
  > * {
    text-align: center;
  }
`;

const modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <Modal show={props.show}>{props.children}</Modal>
  </React.Fragment>
);

export default modal;
