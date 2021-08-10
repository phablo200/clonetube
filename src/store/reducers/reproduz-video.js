const initialState = {
	video: {}
};

export const reproduzVideo = (state = initialState, action) => {
	if (action.type === 'REPRODUZ_VIDEO') {
		return {
			...state,
			video: action.video
		};
	} else {
		return state;
	}
};
