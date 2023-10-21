import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const getShifts = async () => {
  return (await axios.get(`${baseUrl}/shifts`)).data;
};

const addVolenteer = async (volenteer) => {
  await axios.post(`${baseUrl}/volenteers`, volenteer);
};

const removeVolenteer = async (volenteer) => {
  await axios.delete(
    `${baseUrl}/volenteers?shift=${volenteer.shift}&name=${
      volenteer.name
    }&date=${new Date(volenteer.date).getTime()}`
  );
};

const getVolenteersByDate = async (date) => {
  return (await axios.get(`${baseUrl}/volenteers/${date.getTime()}`)).data;
};

export { getShifts, addVolenteer, getVolenteersByDate, removeVolenteer };
