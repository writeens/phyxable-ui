import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styles from './Booking.module.css';
import BookingItem from './BookingItem';
import { generateWeek, buildTitle } from '../helpers/helpers';

const Booking = ({ handleDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');
  const [week, setWeek] = useState([]);
  const [title, setTitle] = useState([]);

  const handleCurrentDate = (value) => {
    setCurrentDate(value);
    const newWeek = generateWeek(value);
    setWeek(newWeek);
  };

  const handleCurrentTime = (time) => {
    setCurrentTime(time);
  };

  const handleNavigateWeek = (type) => {
    let newDate = new Date();
    if (type === 'next') {
      newDate = dayjs(currentDate).add(1, 'week');
    } else {
      newDate = dayjs(currentDate).subtract(1, 'week');
    }
    const newWeek = generateWeek(newDate.toDate());
    setCurrentDate(newDate.toDate());
    setWeek(newWeek);
  };

  useEffect(() => {
    const fullWeek = generateWeek(currentDate);
    setWeek(fullWeek);
    const newTitle = buildTitle(fullWeek);
    setTitle(newTitle);
  }, []);

  useEffect(() => {
    const newTitle = buildTitle(week);
    setTitle(newTitle);
  }, [week]);

  useEffect(() => {
    if (currentDate && currentTime) {
      handleDate(currentDate, currentTime);
    }
  }, [currentDate, currentTime]);

  /** Show varied background */
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
      <div className=" shadow-2xl flex rounded-lg px-4 pb-8 pt-4 mb-4">
        {/** Calendar */}
        <div className="w-1/2 md:w-1/3 pr-4">
          <Calendar
            calendarType="US"
            className={styles.calendarContainer}
            onChange={handleCurrentDate}
            value={currentDate}
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
        <div className="w-1/2 md:w-2/3 text-phyxable-blue border-l-2 border-gray-300 pl-8">
          <div className="flex justify-between mb-8">
            <p className="text-2xl font-bold flex justify-center items-center">{title}</p>
            <div className="flex">
              <button
                type="button"
                style={{ width: '40px', height: '40px' }}
                className="text-2xl flex justify-center items-center cursor-pointer"
                onClick={() => handleNavigateWeek('prev')}
              >
                ‹

              </button>
              <button
                type="button"
                style={{ width: '40px', height: '40px' }}
                className="text-2xl flex justify-center items-center cursor-pointer"
                onClick={() => handleNavigateWeek('next')}
              >
                ›

              </button>
            </div>
          </div>
          {/** Booking Items */}
          <div className="flex rounded-lg">
            {week.map((item, index) => (
              <BookingItem
                key={`${item}`.split(' ')[0]}
                odd={!index % 2}
                date={item}
                onClick={handleCurrentTime}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <p className="text-phyxable-blue font-bold border-phyxable-blue border-2 rounded-full px-4 mr-3 text-sm">AVAILABLE</p>
        <p style={{ backgroundColor: '#E4E7ED', color: '#A7ACBD' }} className="rounded-full px-4 ml-3 text-sm">BOOKED</p>
      </div>
    </div>
  );
};

export default Booking;
