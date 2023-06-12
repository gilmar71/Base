import { Error } from '../error-body';
import * as S from './styles';

interface IButton {
  url: string;
  text?: string;
  hasBg?: boolean;
  icon?: JSX.Element;
  borderRadius?: string;
  externalLink?: boolean;
}

export function Button({
  url,
  text,
  icon,
  hasBg,
  externalLink,
  borderRadius,
}: IButton) {
  return (
    <Error name="button-component">
      <S.Button
        href={url}
        className="link-1 uppercase button"
        $hasBg={hasBg}
        rel={`${externalLink ? 'external' : ''}`}
        target={`${externalLink ? '_blank' : ''}`}
        $borderRadius={borderRadius}
      >
        {icon}
        {text}
      </S.Button>
    </Error>
  );
}
