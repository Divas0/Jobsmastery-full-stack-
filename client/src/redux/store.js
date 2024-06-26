import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit'
import searchSlice from './searchSlice';

const persistConfig = {
  key: 'root',
  storage
};

const reducer=combineReducers({
  auth:authSlice,
  search:searchSlice
})

const persistedReducer=persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer:persistedReducer
 
})