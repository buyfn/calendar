import React, { useState } from 'react';
import {
  format,
  eachDay,
  startOfMonth,
  endOfMonth,
  compareAsc,
  addWeeks,
  addMonths,
  startOfISOWeek,
  endOfISOWeek,
} from 'date-fns';
import { Link } from 'react-router-dom';

import './Calendar.css';
import Button from '../Button';
import { NEW_ENTRY } from '../../constants/routes';

const renderMonthHeader = () => (
  <tr>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
);

const renderDayCell = (date, hours = 0) => {
  const dateString = format(date, 'DD');

  const cellColorClass = () => {
    if (hours > 8) {
      return 'red';
    }
    if (hours === 0) {
      return 'gray';
    }
    if (hours >= 4) {
      return 'green';
    }
    return '';
  };

  return (
    <td className={`day-cell ${cellColorClass()}`} key={date}>
      <div className="day-cell-date">{dateString}</div>
      {hours > 0
        ? <div className="day-cell-hours">{hours}</div>
        : ''}
    </td>
  );
};

const generateWeekStartDates = (date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  const iter = (acc, currentDate) => {
    if (compareAsc(startOfISOWeek(currentDate), monthEnd) === 1) {
      return acc;
    }

    return iter([...acc, currentDate],
      addWeeks(currentDate, 1));
  };

  return (iter([], monthStart));
};

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekStartDates = generateWeekStartDates(currentDate);

  const changeMonth = (diff) => {
    const newMonth = addMonths(startOfMonth(currentDate), diff);
    setCurrentDate(newMonth);
  };
  const setToPrevMonth = () => changeMonth(-1);
  const setToNextMonth = () => changeMonth(1);

  const renderWeek = (date, key) => {
    const first = startOfISOWeek(date);
    const last = endOfISOWeek(date);

    const days = eachDay(first, last);

    return (
      <tr className="week" key={key}>
        {days.map((d) => {
          const formattedDate = format(d, 'YYYY-MM-DD');
          const hours = formattedDate in props.loggedTime
            ? props.loggedTime[formattedDate]
            : 0;

          return renderDayCell(d, hours);
        })}
      </tr>
    );
  };

  return (
    <div>
      <div>
        <h1>{format(currentDate, 'MMMM YYYY')}</h1>

        <div className="calendar-wrapper">
          <Button onClick={setToPrevMonth}>Back</Button>

          <table className="month-table">
            <tbody>
              {renderMonthHeader()}
              {weekStartDates.map(renderWeek)}
            </tbody>
          </table>

          <Button onClick={setToNextMonth}>Forward</Button>
        </div>
      </div>

      <Link to={NEW_ENTRY}>New entry</Link>
    </div>
  );
};

export default Calendar;
