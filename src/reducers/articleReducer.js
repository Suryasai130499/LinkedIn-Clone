import { createReducer } from '@reduxjs/toolkit';

import * as types from '../actions/actiontypes';

const INITIAL_STATE = {
  loading: false,
  articles: [],
};

const articleReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(types.SET_LOADING, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(types.SET_ARTICLES, (state, action) => {
      state.articles = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export default articleReducer;
