import { createReducer } from '@reduxjs/toolkit';

import * as types from '../actions/actiontypes';

const INITIAL_STATE = {
  user: null,
};

const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(types.SET_USER, (state, action) => {
      state.user = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export default userReducer;
