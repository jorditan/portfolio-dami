import { configureStore } from '@reduxjs/toolkit';
import reproduccionReducer from './reducer'; // Asegúrate de tener tu reducer

const store = configureStore({
     reducer: {
          reproduccion: reproduccionReducer,
     },
});

export default store;