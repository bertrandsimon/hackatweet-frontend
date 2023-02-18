import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	firstname: '',
	token: '',
	
};

export const userInfos = createSlice({
	name: ' userInfos',
	initialState,
	reducers: {
		memorizeUsername: (state, action) => {
			state.username = action.payload;
			
		},
		memorizeFirstname: (state, action) => {
			state.firstname = action.payload;
			
		},
		memorizeUserToken: (state, action) => {
			state.token = action.payload;
			
		},
		
	},
});

export const { memorizeUsername, memorizeFirstname, memorizeUserToken } = userInfos.actions;
export default  userInfos.reducer;
