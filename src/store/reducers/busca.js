import * as types from '../actions/types';

const INITIAL_STATE = {
	videos: [],
	carregando: false,
	erro: false
};

export default function busca (state = INITIAL_STATE, action) {
	console.log('state', state);
	console.log('action', action);

	switch (action.type) {
		case types.BUSCA_VIDEO_INICIO:
			return {
				videos: [],
				carregando: true,
				erro: false
			};
		
		case types.BUSCA_VIDEO_SUCESSO:
			return {
				videos: action.videos,
				carregando: false,
				erro: false
			}
		case types.BUSCA_VIDEO_ERRO:
			return {
				videos: [],
				carregando: false,
				erro: true
			};
	}	

	return state;
};
