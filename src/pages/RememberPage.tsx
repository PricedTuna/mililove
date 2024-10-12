import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EscritoComponent from '../components/cartas/EscritoComponent';

// Definir la estructura de 'escrito' para tipar correctamente
interface Escrito {
  text: string;
  title: string;
}

interface Poema {
  title: string;
  text: string;
}

const escritos: Poema[] = [
  {
    title: "Mi luz",
    text: `Como el sol por las mañanas\nAsomas e iluminas\nAsomas la felicidad e\nIluminas mi camino\nUna luz relajante\nUna luz tranquila\nUna luz bella\nUna luz que ilumina`,
  },
  {
    title: "Mi luz",
    text: `Como el sol por las mañanas\nAsomas e iluminas\nAsomas la felicidad e\nIluminas mi camino\nUna luz relajante\nUna luz tranquila\nUna luz bella\nUna luz que ilumina`,
  },
  {
    title: "La paz",
    text: `Cuando te miro, me das paz\nDespertar y verte a mi lado\nA mi lado sonriendo durmiendo\nEres lo más bello y más calmante\nEres la paz, como un cielo brillante`,
  },
  {
    title: "Mis pensamientos",
    text: `Aunque parezca ocupado\nAunque parezca cansado\nEn mis pensamientos estás\ncomo motivo\ncomo motor\ncomo razón\ncomo final\nSiempre ahí estás\nsonriente y serena\nmotivadora y trabajadora\nComo motivo\nComo motor\nComo razón\nComo final`,
  },
];

const RememberPage = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  // Función para mostrar el modal con el texto
  const handleShowModal = (text: string) => {
    setModalContent(text.replace(/\n/g, '<br />')); // Reemplazar saltos de línea con <br />
    setShow(true);
  };

  // Función para cerrar el modal
  const handleClose = () => setShow(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2 h-100 min-vh-100">
      <p className="p-0 m-0 fs-1 fw-bold text-center">
        Eres lo que más amo en esta vida, y por eso escribí estos poemas, por y para ti
      </p>
      <div className="d-flex justify-content-center flex-wrap row">
        {escritos.map((escrito, index) => (
          <div className="container col-6" key={index}>
            <div className="card d-flex flex-column justify-content-center align-items-center shadow-sm border rounded p-3 mb-4 rounded-4" onClick={() => handleShowModal(escrito.text)}>
              <EscritoComponent
                text={escrito.text}
              />
              <p className="fs-5 card-title text-center text-dark fw-bolder">
                {escrito.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar el contenido del poema */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Texto Completo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark" dangerouslySetInnerHTML={{ __html: modalContent }} />
      </Modal>
    </div>
  );
};

export default RememberPage;
