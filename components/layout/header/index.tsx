/* Next/React */
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* Components */

/* Styles */
import * as S from './styles';

interface HeaderComponentProps {
  logo: string;
}

export function HeaderComponent({ logo }: HeaderComponentProps) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  return <S.Header></S.Header>;
}
