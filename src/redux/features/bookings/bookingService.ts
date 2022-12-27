import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/booking/`;

// GET ALL BOOKINGS
const getAllBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET A SINGLE BOOKING
const getBooking = async (id: string) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// UPDATE BOOKING STATUS
const updateStatus = async (id: string, status: boolean) => {
  const response = await axios.patch(`${API_URL}${id}`, { status: status });
  return response.data;
};
const bookingService = {
  getAllBookings,
  updateStatus,
  getBooking,
};
export default bookingService;
