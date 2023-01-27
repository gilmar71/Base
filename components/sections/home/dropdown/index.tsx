/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';

/* Styles */
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import { teste } from './data';

export function Dropdown() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [startDate2, setStartDate2] = useState(new Date());

  const disabledDateRanges = teste.map(({ start, end }) => ({
    start: new Date(start),
    end: new Date(end),
  }));

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <S.Dropdown>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </S.Dropdown>
  );
}
