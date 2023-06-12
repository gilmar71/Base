import { useEffect, useRef, useState } from 'react';
import { NavDownIcon } from 'components/icons';
import { IFaqs } from 'src/interfaces/pageInformations';

import * as S from './styles';
import { Error } from 'components/data';

interface ICardFaq {
  faq: IFaqs;
  index: number;
}

export function CardFaq({ faq, index }: ICardFaq) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, [open]);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <Error name="card-faq">
      <S.CardFaq $open={open} onClick={handleOpen} $height={height}>
        <div className="box">
          <h2 className="paragraph-2-poppinsBold uppercase">{faq.titulo}</h2>

          <NavDownIcon />
        </div>
        <div
          ref={contentRef}
          // style={{ height: `${height}px` }}
          className="paragraph-2 answer"
          dangerouslySetInnerHTML={{ __html: faq.descricao }}
        ></div>
      </S.CardFaq>
    </Error>
  );
}
