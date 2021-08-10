import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { buscaVideo } from '../store/actions/busca-video';

class SearchBar extends Component {
	pesquisaTermo = e => {
		if (e.keyCode === 13) {
			const termo = e.target.value;
			this.props.buscarVideo(termo);
		}
	}

	render () {
		return (
			<div className="search-bar">
				<Segment stacked>
					<Input onKeyDown={(e) => this.pesquisaTermo(e)} icon="search" size="large" placeholder="Search..."/>
				</Segment>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buscarVideo: (termo) => {
			const action = buscaVideo(termo);
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);