import { configureStore } from '@reduxjs/toolkit';

// import { applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
