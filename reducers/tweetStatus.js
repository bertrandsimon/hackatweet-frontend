import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	newTweet: false,
	newLike: null,
};

export const tweetStatus = createSlice({
	name: 'tweetStatus',
	initialState,
	reducers: {
		newTweetTrigger: (state, action) => {
			state.newTweet = !state.newTweet;
		
		},
		newLikeTrigger: (state, action) => {
			state.newLike = !state.newLike;
		
		}
		
	},
});

export const { newTweetTrigger, newLikeTrigger } = tweetStatus.actions;
export default  tweetStatus.reducer;
