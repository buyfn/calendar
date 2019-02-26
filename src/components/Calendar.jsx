import React from 'react';
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDay,
  startOfMonth,
  endOfMonth,
  compareAsc,
  addWeeks,
} from 'date-fns';

import './Calendar.css';

class Calendar extends React.Component {
  static renderMonthHeader() {
    return (
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
  }

  static renderDayCell(date) {
    const dateString = format(date, 'DD');

    return (
      <td className="day-cell">{dateString}</td>
    );
  }

  static generateWeekStartDates(date) {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    const iter = (acc, currentDate) => {
      if (compareAsc(startOfWeek(currentDate), monthEnd) === 1) {
        return acc;
      }

      return iter([...acc, currentDate],
        addWeeks(currentDate, 1));
    };

    return (iter([], monthStart));
  }

  static renderWeek(date) {
    const first = startOfWeek(date);
    const last = endOfWeek(date);

    const days = eachDay(first, last);

    return (
      <tr className="week">
        {days.map(Calendar.renderDayCell)}
      </tr>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;

    const weekStartDates = Calendar.generateWeekStartDates(currentDate);

    return (
      <div>
        <h1>{format(currentDate, 'MMMM')}</h1>

        <div className="calendar-wrapper">
          <table className="calendar">
            <tbody>
              {Calendar.renderMonthHeader()}
              {weekStartDates.map(Calendar.renderWeek)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calendar;
