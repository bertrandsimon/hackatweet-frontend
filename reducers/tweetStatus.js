import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	newTweet: false,

};

export const tweetStatus = createSlice({
	name: 'tweetStatus',
	initialState,
	reducers: {
		newTweetTrigger: (state, action) => {
			state.newTweet = !state.newTweet;
		
		}
		
	},
});

export const { newTweetTrigger } = tweetStatus.actions;
export default  tweetStatus.reducer;
