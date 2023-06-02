import { useState } from 'react';

import Image from 'next/image';
import { ErrorBoundary } from 'react-error-boundary';

import { pathsApi } from 'src/services/api';

import { ErrorBoundaryComponent } from '../error-boundary';

import * as S from './styles';

interface NextImageProps {
  alt?: string;
  sizes?: string;
  className?: string;
  hasHover?: boolean;
  isUploads?: boolean;
  isProduct?: boolean;
  isService?: boolean;
  onClick?: () => void;
  isPortfolio?: boolean;
  forceLoading?: boolean;
  isBasePathApi?: boolean;
  src: string | undefined;
}

export function NextImage({
  src,
  alt,
  sizes,
  onClick,
  hasHover,
  className,
  isService,
  isUploads,
  isProduct,
  isPortfolio,
  forceLoading,
}: NextImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <ErrorBoundary
      FallbackComponent={() =>
        ErrorBoundaryComponent({ nameComponent: 'Next-Image' })
      }
      onError={(arg1, arg2) => {
        console.log('erro:');
        console.log(arg1, arg2);
      }}
    >
      <S.Image
        onClick={onClick}
        $hasHover={hasHover}
        className={
          loading || forceLoading
            ? `loading next-image ${className ? className : ''}`
            : `next-image ${className ? className : ''}`
        }
      >
        <Image
          src={
            src
              ? isUploads
                ? pathsApi.uploads + src
                : isProduct
                ? pathsApi.product + src
                : isPortfolio
                ? pathsApi.portfolio + src
                : isService
                ? pathsApi.service + src
                : src
              : '/images/default-image.png'
          }
          fill
          alt={alt || src || ''}
          onLoad={() => setLoading(true)}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setLoading(false);
          }}
          sizes={sizes}
        />
      </S.Image>
    </ErrorBoundary>
  );
}
