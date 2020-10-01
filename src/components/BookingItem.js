import React from 'react';
import { generateTimes } from '../helpers/helpers';
import styles from './Booking.module.css';

const BookingItem = ({ odd = true, date = new Date(), onClick }) => {
  const timeSlots = generateTimes(9, 14);
  const day = `${date}`.split(' ')[0].toUpperCase();
  const dayNum = `${date}`.split(' ')[2];
  return (
    <div style={{ backgroundColor: `${odd ? '#d7dee95e' : '#eff2f696'}` }} className="flex flex-col px-2 py-4 flex-1">
      <p className="text-sm">{day}</p>
      <p className="text-4xl font-bold">{dayNum}</p>
      <div className="flex flex-col">
        {timeSlots.map((item) => (
          <button
            type="button"
            key={item.time}
            className={`cursor-pointer text-phyxable-blue border-2 text-center px-2 font-bold rounded-sm mt-4 py-1 border-phyxable-blue ${styles.time}`}
            disabled={!item.available}
            onClick={() => onClick(item.time)}
          >
            {item.time}

          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingItem;
