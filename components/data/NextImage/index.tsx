/* React/Next */
import Image from 'next/image';

/* Api/Data */
import { baseImage, baseImageGallery } from 'src/services/api';

/* Styles */
import * as S from './styles';

interface NextImageProps {
  isBaseUrl?: boolean;
  isBaseImageGallery?: boolean;
  src: string | undefined;
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | 'raw' | undefined;
}
export function NextImage({
  src,
  layout,
  isBaseUrl,
  isBaseImageGallery,
}: NextImageProps) {
  return (
    <S.Image>
      <Image
        src={
          src
            ? isBaseUrl
              ? baseImage + src
              : isBaseImageGallery
              ? baseImageGallery + src
              : src
            : '/images/default-image.webp'
        }
        layout={layout}
      />
    </S.Image>
  );
}
