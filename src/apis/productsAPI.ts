import axiosInstance from '../utils/axiosInstance';

const productsAPI = {
  getProducts: async () => {
    const res = await axiosInstance.get('/');
    return res.data;
  },
  getOneProduct: async (id:string) => {
    const res = await axiosInstance.get(`/${id}`);
    return res.data;
  },
};

export default productsAPI;
