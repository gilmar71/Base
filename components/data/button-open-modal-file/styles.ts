import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  .big-gallery {
    width: 100%;
    max-width: 80vw;
    max-height: 90vh;

    img {
      object-fit: contain !important;
    }
  }

  iframe {
    width: 100%;
    /* max-width: 70vw; */
    aspect-ratio: 560/315;
  }
`;

export const customStyles = {
  overlay: {
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 0,
    width: '100%',
    maxWidth: '80vw',
    maxHeight: '90vh',
    padding: 0,
    background: 'none',
  },
};
