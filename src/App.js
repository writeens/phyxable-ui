import React, { Fragment, useState } from 'react';
import Booking from './components/Booking';
import BookingClicked from './components/BookingClicked';
// Import React Calendar
import 'react-calendar/dist/Calendar.css';
// Import globals
import './App.global.css';
// Import Tailwind
import './styles/main.css';

const App = () => {
  const [dateSelected, setDateSelected] = useState(false);
  const [fullDate, setFullDate] = useState(new Date());
  const [fullTime, setFullTime] = useState('');

  /** Change View Based on Dates */
  const handleDate = (date, time) => {
    setDateSelected(true);
    setFullDate(date);
    setFullTime(time);
  };

  /** Return to Booking */
  const handleOpenBooking = () => {
    setDateSelected(false);
  };

  const renderView = () => {
    if (dateSelected) {
      return <BookingClicked date={fullDate} time={fullTime} handleClose={handleOpenBooking} />;
    }
    return (
      <Booking handleDate={handleDate} />
    );
  };
  return (
    <Fragment>
      {renderView()}
    </Fragment>
  );
};

export default App;
