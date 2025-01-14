import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  errorMessage: "",
  isLoading: false,
  accessToken: null,
  userDetails: {},
  login: async (userData, navigate) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      const { data } = await axios.post(`${backendUrl}/users/login`, userData, {
        withCredentials: true,
      });
      const responseData = data.data; 
      // console.log("user data after login request: ", data.success);
      // console.log(data);

      if (data.success) {
        navigate("/");
        responseData.accessToken && set({ accessToken: responseData.accessToken });
        // console.log(useAuthStore.getState().accessToken);
      } 
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  },

  register: async (formData, navigate) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
    useAuthStore.setState({ isLoading: true });
  
    try {
      const { data } = await axios.post(`${backendUrl}/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(data.message);
      navigate("/login");
      console.log("User registered successfully");
  
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred during registration. Please try again.";
      useAuthStore.getState().setErrorMessage(errorMessage);
  
    } finally {
      useAuthStore.getState().setIsLoading(false);
    }
  },
  
  refreshAccessToken: async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      const { data } = await axios.get(`${backendUrl}/users/refreshToken`, {
      withCredentials: true,
      });
      if (data.success) {
      set({ accessToken: data.data.accessToken });
      console.log(useAuthStore.getState().accessToken);
      
      }
    } catch (error) {
      console.log("Error refreshing access token:", error);
      set({ accessToken: null });
    }
  },

  logout: () => {
    set({ accessToken: null, refreshToken: null });
  },

  setIsLoading: (value) => set({ isLoading: value }),

  setErrorMessage: (message) => set({ errorMessage: message }),
}));

export default useAuthStore;
