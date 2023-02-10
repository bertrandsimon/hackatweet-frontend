import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	firstname: '',
	userId: {},

};

export const userInfos = createSlice({
	name: ' userInfos',
	initialState,
	reducers: {
		memorizeUsername: (state, action) => {
			state.username = action.payload;
			
		},
		memorizeFirstname: (state, action) => {
			state.userId = action.payload;
			
		},
		memorizeUserID: (state, action) => {
			state.firstname = action.payload;
			
		},
		
	},
});

export const { memorizeUsername, memorizeFirstname, memorizeUserID } = userInfos.actions;
export default  userInfos.reducer;
