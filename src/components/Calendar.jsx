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

const Calendar = () => {
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

  const [currentDate, setCurrentDate] = useState(new Date());

  const weekStartDates = generateWeekStartDates(currentDate);

  const setToPrevMonth = () => {
    const prevMonth = addMonths(startOfMonth(currentDate), -1);
    setCurrentDate(prevMonth);
  };
  const setToNextMonth = () => {
    const prevMonth = addMonths(startOfMonth(currentDate), 1);
    setCurrentDate(prevMonth);
  };

  return (
    <div>
      <h1>{format(currentDate, 'MMMM YYYY')}</h1>

      <div className="calendar-wrapper">
        <button type="button" onClick={setToPrevMonth}>
          Back
        </button>

        <table className="month-table">
          <tbody>
            {renderMonthHeader()}
            {weekStartDates.map(renderWeek)}
          </tbody>
        </table>

        <button type="button" onClick={setToNextMonth}>
          Forward
        </button>
      </div>
    </div>
  );
};

export default Calendar;
