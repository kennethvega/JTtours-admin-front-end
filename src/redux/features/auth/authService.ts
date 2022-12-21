import axios from 'axios';
import { toast } from 'react-hot-toast';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(`${BACKEND_URL}/api/users/register`);
type UserDataProps = {
  name: string;
  email: string;
  password: string;
};
export const registerUser = async (userData: UserDataProps) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/users/register`, userData, { withCredentials: true });
    if (response.statusText === 'OK') {
      toast.success('Account created');
    }
    return response.data;
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
  }
};
