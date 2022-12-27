import React from 'react';
import { BookingsType } from '../../ts/bookingTypes';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import Loading from '../utility/Loading';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

type BookingItemProps = {
  booking: BookingsType;
};
const BookingItem = ({ booking }: BookingItemProps) => {
  const date = new Date(booking?.createdAt);
  return (
    <div>
      <div className="bg-gray-200 mt-4 p-4 rounded-md">
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Status: </span> <span className={`${booking?.status === true ? 'bg-green-500' : 'bg-purple-500'}  p-1 px-2 rounded-xl`}> {booking?.status === true ? 'Completed' : 'Pending'} </span>{' '}
          </p>
          <div className="flex gap-3 text-xl items-center">
            <BsFillCheckCircleFill className={`${booking.status === true ? 'text-green-500' : 'text-black'} cursor-pointer hover:text-green-500 `} />
            <Loading />
            <MdDeleteForever className="text-2xl cursor-pointer text-red-700" />
          </div>
        </div>

        <p>
          <span className="font-semibold">Package name: </span> {booking?.packageName}
        </p>
        <p>
          <span className="font-semibold">Booked at: </span> {formatDistanceToNow(date, { addSuffix: true })}
        </p>
        <p>
          <span className="font-semibold">Customer name: </span> {booking?.customerName}
        </p>
        <p>
          <span className="font-semibold">Email: </span> {booking?.email}
        </p>
        <p>
          <span className="font-semibold">Contact number: </span> {booking?.contact}
        </p>
        <p>
          <span className="font-semibold">Customer count: </span>
          {booking?.customerCount}
        </p>
        <p>
          <span className="font-semibold">Hotel:</span> {booking?.hotel}
        </p>
        <p>
          <span className="font-semibold">Number of rooms:</span> {booking?.numberOfRooms}
        </p>
        <p>
          <span className="font-semibold">Tour date:</span> {booking?.tourDate}
        </p>

        <p>
          <span className="font-semibold">Note/Message:</span> {booking?.note}
        </p>
      </div>
    </div>
  );
};

export default BookingItem;
