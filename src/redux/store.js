import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import RootReducer from './rootReducer';

const makeStore = () => configureStore({
  reducer: {
    RootReducer
  },
  
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const wrapper = createWrapper(makeStore);