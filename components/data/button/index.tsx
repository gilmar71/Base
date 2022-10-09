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
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  ...props
}: ButtonProps) {
  return (
    <S.Button backgroundColor={backgroundColor} $loading={loading}>
      {href && !type ? (
        <Link href={href} passHref>
          <a href="" className="txt-sz-8-medium uppercase" {...props}>
            {text}
          </a>
        </Link>
      ) : (
        <button
          className="txt-sz-8-medium uppercase"
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
