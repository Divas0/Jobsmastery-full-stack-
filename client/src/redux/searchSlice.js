import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
        if (state.searchValue !== action.payload) {
            state.searchValue = action.payload;
          }
    }
  }
});

export const { updateSearchValue } = searchSlice.actions;


export default searchSlice.reducer;
