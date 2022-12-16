/* React/Next */
import Link from 'next/link';

/* Components */
import { LoaderCircle } from '../loader-circle';

/* Styles */
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: string;
  href?: string;
  type?: 'submit' | 'button';
  loading?: boolean;
  color?: string;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  color,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      className="button-component"
      color={color}
      backgroundColor={backgroundColor}
      $loading={loading}
    >
      {href ? (
        <Link href={href} className="link-4-nhdisplaybold" {...props}>
          {text}
        </Link>
      ) : (
        <button
          className="link-4-nhdisplaybold"
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
