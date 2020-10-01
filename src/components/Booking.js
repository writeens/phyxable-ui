import React from 'react';
import Calendar from 'react-calendar';
import styles from './Booking.module.css';

const Booking = () => {
  const handleTile = (date) => {
    const mydate = `${date.date}`.split(' ')[0];
    const options = ['Mon', 'Wed', 'Fri'];
    return options.includes(mydate)
      ? `${styles.tile} ${styles['color-one']}`
      : `${styles.tile} ${styles['color-two']}`;
  };
  return (
    <div className="bg-white flex flex-col p-8 text-phyxable-black">
      <p className="font-extrabold text-4xl mb-6 text-center">Appointment Booking</p>
      <div className=" shadow-2xl flex rounded-lg px-4 pb-16 pt-4">
        {/** Calendar */}
        <div className="w-1/2 md:w-1/3">
          <Calendar
            calendarType="US"
            className={styles.calendarContainer}
            tileClassName={handleTile}
            view="month"
          />
          <div className="mt-24 text-phyxable-blue">
            <p className="mb-4 text-center text-2xl text-phyxable-blue">Appointment Type</p>
            <p className="mb-8 text-center font-bold text-2xl">Free Consultation</p>
            <p className=" text-center">
              Please select an availble time that
              works best for your schedule.
            </p>
          </div>
        </div>
        {/** Full View */}
        <div style={{ border: '1px solid red' }} className="w-1/2 md:w-2/3" />
      </div>
    </div>
  );
};

export default Booking;
