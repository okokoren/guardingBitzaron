import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const getShifts = async () => {
  return (await axios.get(`${baseUrl}/shifts`)).data;
};

export { getShifts };
