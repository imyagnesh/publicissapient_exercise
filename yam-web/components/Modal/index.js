import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portal from './portal';
import './modal.module.css';

const Index = ({ open, onClose, children }) => {
  return (
    <>
      {open && (
        <Portal selector="#modal">
          <Modal
            show={open}
            onHide={onClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            animation={false}
          >
            <div
              style={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 10,
                display: 'flex',
                backgroundColor: 'rgba(0,0,0,0.4)',
                width: 32,
                height: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 0,
              }}
              role="button"
              onClick={onClose}
              aria-hidden="true"
              tabIndex="0"
            >
              <FontAwesomeIcon icon="times" color="#fff" fixedWidth />
            </div>
            {children}
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Index;
