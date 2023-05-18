import Image from 'next/image';

import { baseImage, baseImageGallery } from 'src/services/api';

import * as S from './styles';

interface INextImage {
  alt: string;
  priority?: boolean;
  isBaseUrl?: boolean;
  src: string | undefined;
  isBaseImageGallery?: boolean;
  loading?: 'eager' | 'lazy' | undefined;
}
export function NextImage({
  src,
  alt,
  isBaseUrl,
  isBaseImageGallery,
}: INextImage) {
  return (
    <S.Image className="next-image">
      <Image
        alt={alt}
        src={
          src
            ? isBaseUrl
              ? baseImage + src
              : isBaseImageGallery
              ? baseImageGallery + src
              : src
            : '/images/default-image.png'
        }
        fill
      />
    </S.Image>
  );
}
