import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const userStore = (set) => ({
  backendUrl: import.meta.env.VITE_BACKEND_URL
});

const useUserStore = create(persist(userStore, { name: 'user-store' }));
export default useUserStore;

import create from 'zustand';