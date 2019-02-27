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

import './Calendar.css';
import Button from '../Button';

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

const renderDayCell = (date) => {
  const dateString = format(date, 'DD');

  return (
    <td className="day-cell">{dateString}</td>
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

const renderWeek = (date) => {
  const first = startOfISOWeek(date);
  const last = endOfISOWeek(date);

  const days = eachDay(first, last);

  return (
    <tr className="week">
      {days.map(renderDayCell)}
    </tr>
  );
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekStartDates = generateWeekStartDates(currentDate);

  const changeMonth = (diff) => {
    const newMonth = addMonths(startOfMonth(currentDate), diff);
    setCurrentDate(newMonth);
  };
  const setToPrevMonth = () => changeMonth(-1);
  const setToNextMonth = () => changeMonth(1);

  return (
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
  );
};

export default Calendar;
