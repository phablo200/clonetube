import youtubeSearch from 'youtube-api-v3-search';
import { API_KEY } from '../../api';
import * as types from './types';

export const buscaVideoInicio = () => {
	return {
		type: types.BUSCA_VIDEO_INICIO,
		carregando: true,
		erro: false
	};
};

export const buscaVideoSucesso = (videos) => {
	return {
		type: types.BUSCA_VIDEO_SUCESSO,
		videos,
		carregando: false,
		erro: false,
	}
};

export const buscaVideoErro = () => {
	return {
		type: types.BUSCA_VIDEO_ERRO,
		carregando: false,
	};
};

export const buscaVideo = (termo) => {
	return dispatch => {
		dispatch(buscaVideoInicio());
		youtubeSearch(API_KEY, {q: termo})
			.then((data) => data.items)
			.then((items) => dispatch(buscaVideoSucesso(items)))
			.catch(() => dispatch(buscaVideoErro()));
	};
};