import React from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed } from 'semantic-ui-react';

const VideoPlayer = (props) => {
	return (
		<div className="video-player">
		{
			!props.video.id && (
				<div className="video-player">
					<h1>teste</h1>
					<Advertisement style={{height: '433px'}} unit="top banner" test="Escolha um vídeo para reproduzir"/>
				</div>
			)
		}
		{
			props.video.id && (
				<div>
					<Embed id={props.video.id} source="youtube" />
					<p>{props.video.snippet.title}</p>
					<p>{props.video.snippet.description}</p>
				</div>
			)
		}
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		video: state.reproduz.video
	};
};

export default connect(mapStateToProps, null)(VideoPlayer);