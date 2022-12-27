import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/booking/`;

// GET ALL PRODUCTS
const getAllBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const bookingService = {
  getAllBookings,
};
export default bookingService;
