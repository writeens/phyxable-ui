import React from 'react';

const BookingClicked = () => (
  <div className="fixed inset-0 bg-phyxable-blue flex justify-center items-center p-4">
    <div className=" relative flex flex-col bg-white rounded-lg py-8 px-32 text-phyxable-black">
      <h2 className="font-extrabold text-4xl mb-8">Appointment Details</h2>
      <p className="text-center font-bold text-xl mb-2">Wednesday, August 8th, 2020</p>
      <p className="text-center text-xl mb-8">9:30am - 10:00am</p>
      <p className="text-center font-bold text-3xl mb-8">
        Free Consultation
        <span className="font-normal"> - 30 mins</span>
      </p>
      <form>
        <div className="mb-6">
          <p className="font-bold text-lg mb-2">Phone Number</p>
          <input type="text" className="text-md rounded-md bg-gray-300 p-3 flex-1 w-full" placeholder="000-000-0000" required />
        </div>
        <div className="mb-20">
          <p className="font-bold text-lg mb-2">Reason for booking</p>
          <textarea rows="5" className="text-sm rounded-md bg-gray-300 p-3 flex-1 w-full" placeholder="Please share anything that will help the Practitioner prepare for your session" required />
        </div>
        <div className="flex justify-center">
          <button type="submit" className=" bg-phyxable-blue text-white px-8 py-3 rounded-md">
            Make Appointment
          </button>
        </div>
      </form>
      <p
        style={{
          position: 'absolute', color: '#363B44', top: '0rem', right: '1rem',
        }}
        className="text-5xl font-light cursor-pointer"
      >
        &times;
      </p>
    </div>
  </div>
);

export default BookingClicked;
