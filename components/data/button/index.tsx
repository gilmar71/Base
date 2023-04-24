/* React/Next */
import Link from 'next/link';

/* Components */
import { LoaderCircle } from '../loader-circle';

/* Styles */
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: boolean;
  href?: string;
  type?: 'submit' | 'button';
  loading?: boolean;
  rel?: 'external';
  target?: '_blanck';
  color?: string;
  maxWidth?: string;
  marginTop?: boolean;
  center?: boolean;
  hoverColor?: string;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  rel,
  target,
  color,
  maxWidth,
  marginTop,
  center,
  hoverColor,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      className="button"
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      $loading={loading}
      maxWidth={maxWidth}
      marginTop={marginTop}
      center={center}
    >
      {href && !type ? (
        <Link
          href={href}
          rel={rel}
          target={target}
          className="link-4 uppercase"
          {...props}
        >
          {text}
        </Link>
      ) : (
        <button
          className="link-4 uppercase"
          type={type ? type : 'submit'}
          disabled={loading}
          {...props}
        >
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  );
}
