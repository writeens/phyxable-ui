import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const BookingClicked = ({ date, time, handleClose }) => {
  const [UIdate, setUIdate] = useState('');
  const [UItime, setUItime] = useState('');

  useEffect(() => {
    const newDate = `${date}`.split(' ').filter((item, index) => index <= 3).join(' ');
    const fullDateAndTime = `${newDate} ${time}`;
    const newFullDateAndTime = new Date(fullDateAndTime);
    const startTime = dayjs(newFullDateAndTime).format('hh:mm A');
    const endTime = dayjs(newFullDateAndTime).add(30, 'minute').format('hh:mm A');
    setUItime(`${startTime} - ${endTime}`);
    const fullDate = dayjs(newFullDateAndTime).format('dddd MMM DD, YYYY');
    setUIdate(fullDate);
  }, []);

  return (
    <div className="fixed inset-0 bg-phyxable-blue flex justify-center items-center p-4">
      <div className=" relative flex flex-col bg-white rounded-lg py-8 px-32 text-phyxable-black">
        <h2 className="font-extrabold text-4xl mb-8">Appointment Details</h2>
        <p className="text-center font-bold text-2xl mb-2">{UIdate}</p>
        <p className="text-center text-2xl mb-8">{UItime}</p>
        <p className="text-center font-bold text-3xl mb-8">
          Free Consultation
          <span className="font-normal"> - 30 mins</span>
        </p>
        <form>
          <div className="mb-6">
            <p className="font-bold text-lg mb-2">Phone Number</p>
            <input type="text" className="text-md rounded-md bg-gray-300 p-3 flex-1 w-full" placeholder="000-000-0000" required />
          </div>
          <div className=" mb-16">
            <p className="font-bold text-lg mb-2">Reason for booking</p>
            <textarea rows="5" className="text-sm rounded-md bg-gray-300 p-3 flex-1 w-full" placeholder="Please share anything that will help the Practitioner prepare for your session" required />
          </div>
          <div className="flex justify-center">
            <button type="submit" className=" bg-phyxable-blue text-white px-8 py-3 rounded-md">
              Make Appointment
            </button>
          </div>
        </form>
        <button
          type="button"
          style={{
            position: 'absolute', color: '#363B44', top: '0rem', right: '1rem',
          }}
          className="text-5xl font-light cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default BookingClicked;
