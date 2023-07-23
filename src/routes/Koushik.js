import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';
import './Koushik.css';

const Koushik =()=>{
    const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Hard-coded events for demonstration purposes
  const events = {
    '2023-07-23': ['Event A', 'Event B'],
    '2023-07-25': ['Event C'],
    '2023-07-28': ['Event D'],
  };

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className="header">
        <button onClick={prevMonth}>&#8249;</button>
        <span>{format(currentDate, dateFormat)}</span>
        <button onClick={nextMonth}>&#8250;</button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = 'eeee';
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = 'd';
    const rows = [];

    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      const weekDays = [];
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        weekDays.push(
          <div
            className={`cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, currentDate) ? 'selected' : ''}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            {renderEventsForDay(day)}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {weekDays}
        </div>
      );
    }

    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const prevMonth = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const getEventsForDate = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return events[formattedDate] || [];
  };

  const renderEventsForDay = (day) => {
    const eventsForDay = getEventsForDate(day);

    if (eventsForDay.length === 0) {
      return null;
    }

    return (
      <ul className="events-for-day">
        {eventsForDay.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    );
  };

  const closePopover = () => {
    setSelectedDate(null);
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {selectedDate && (
        <div className="popover" style={{ top: selectedDate.clientY, left: selectedDate.clientX }}>
          <div className="popover-content">
            <h3>{format(selectedDate, 'MMMM d, yyyy')}</h3>
            {renderEventsForDay(selectedDate)}
            <button className="close-button" onClick={closePopover}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Koushik;