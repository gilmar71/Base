/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { subDays, addDays } from 'date-fns';
import { teste } from './data';
import { InstagramIcon } from 'public/icons/icons';
import { toNumber } from 'lodash';

export function DatePicker() {
  const [searchInput, setSearchInput] = useState('');

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const [noOfGuests, setNoOfGuests] = useState(1);

  const resetInput = () => {
    setSearchInput('');
  };

  return (
    <S.DatePickerTuto>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Start your search"
      />
      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />
          <div>
            <h2>Number of guests</h2>

            <InstagramIcon />
            <input
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(toNumber(e.target.value))}
              type="number"
            />
          </div>
          <div className="buttons">
            <button onClick={resetInput}>Cancel</button>
            <button>Search</button>
          </div>
        </div>
      )}
    </S.DatePickerTuto>
  );
}
