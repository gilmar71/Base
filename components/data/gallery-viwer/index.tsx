import { cmbBrContext } from 'src/contexts/context';
import * as S from './styles';
import { NextImage } from '../next-image';

interface IGalleryViwer {
  image: string;
}

export function GalleryViwer({ image }: IGalleryViwer) {
  const { openGallery, handleGallery } = cmbBrContext();

  return (
    <S.GalleryViwer $open={openGallery} onClick={() => handleGallery('')}>
      <button className="title-2 close">X</button>

      <NextImage className="big-gallery" isBaseImageGallery src={image} />
    </S.GalleryViwer>
  );
}
