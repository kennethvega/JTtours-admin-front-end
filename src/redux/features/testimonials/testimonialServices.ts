import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/testimonial/`;

// CREATE NEW TESTIMONIAL
const createTestimonial = async (formData: FormData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const testimonialService = {
  createTestimonial,
};

export default testimonialService;
