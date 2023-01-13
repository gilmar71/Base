/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import { teste } from './data';

export function Banner() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  const disabledDateRanges = teste.map(({ start, end }) => ({
    start: new Date(start),
    end: new Date(end),
  }));

  return (
    <S.Banner>
      <DatePicker
        selected={startDate}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setStartDate(date)}
        value={startDate}
        excludeDateIntervals={disabledDateRanges}
      />

      <DatePicker
        selected={startDate}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setStartDate2(date)}
        value={startDate2}
        excludeDateIntervals={disabledDateRanges}
      />
    </S.Banner>
  );
}
