import styled from 'styled-components';

interface IGalleryViwerStyles {
  $open?: boolean;
}

export const GalleryViwer = styled.div<IGalleryViwerStyles>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  align-items: center;
  justify-content: center;

  .big-gallery {
    width: 100%;
    max-width: 80vw;
    max-height: 90vh;

    img {
      object-fit: contain !important;
    }
  }

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    border: none;
    padding: 0;
    color: #fff;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;
