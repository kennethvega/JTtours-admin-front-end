import React, { useState, FormEvent } from 'react';
import { BookingsType } from '../../ts/bookingTypes';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import Loading from '../utility/Loading';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getAllBookings, getBooking, updateStatus } from '../../redux/features/bookings/bookingSlice';

type BookingItemProps = {
  booking: BookingsType;
};
const BookingItem = ({ booking }: BookingItemProps) => {
  const dispatch = useAppDispatch();
  const date = new Date(booking?.createdAt);
  const id = booking._id;
  const status = !booking.status;

  const handleStatus = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await dispatch(updateStatus({ id, status }));
    await dispatch(getAllBookings());
  };

  const handleDelete = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // await dispatch(updateStatus({ id, status }));
    // await dispatch(getAllBookings());
  };
  return (
    <div>
      <div className={`${booking?.status === true ? 'bg-green-500' : 'bg-gray-200'}  mt-4 p-4 rounded-md`}>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Status: </span> <span className={`${booking.status === true ? 'bg-green-900' : 'bg-orange-500'} text-white p-1 px-2 rounded-xl`}> {booking?.status === true ? 'Completed' : 'Pending'} </span>{' '}
          </p>
          <div className="flex gap-3 text-xl items-center">
            <BsFillCheckCircleFill onClick={handleStatus} className="cursor-pointer" />
            <MdDeleteForever onClick={handleDelete} className="text-2xl cursor-pointer text-red-700" />
          </div>
        </div>

        <p>
          <span className="font-semibold">Package name: </span> {booking?.packageName}
        </p>
        <p>
          <span className="font-semibold">Booked: </span> {formatDistanceToNow(date, { addSuffix: true })}
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
