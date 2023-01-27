/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, DateRangePicker } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import { subDays, addDays, toDate, parse } from 'date-fns';
import { InstagramIcon } from 'public/icons/icons';
import { toNumber } from 'lodash';
import { teste } from './data';
import { date } from 'yup';

export function DatePickerTeste() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const nameMapper = {
    pt: 'Portuguese',
    enUS: 'English (United States)',
  };

  const localeOptions = Object.keys(locales)
    .map((key) => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ''}`,
    }))
    .filter((item) => nameMapper[item.value]);
  const [locale, setLocale] = useState('pt');

  const disabledDateRanges = teste.map(({ start, end }) => ({
    start: new Date(start),
    end: new Date(end),
  }));

  const handleTest = () => {
    console.log(toDate(startDate));
    console.log(endDate);
  };

  return (
    <S.DatePickerTesteTuto>
      {/* <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#fd5b61']}
          onChange={handleSelect}
        /> */}
      <select
        style={{ margin: '20px' }}
        onChange={(e) => setLocale(e.target.value)}
        value={locale}
      >
        {localeOptions.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>

      <DateRange
        ranges={[selectionRange]}
        date={new Date()}
        minDate={new Date()}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        locale={locales[locale]}
        selected={startDate}
        startText="Check-in"
        endText="Check-out"
      />
      {/* <button onClick={handleTest}>teste</button> */}
    </S.DatePickerTesteTuto>
  );
}
