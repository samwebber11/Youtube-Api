
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/detail';
import lodash from 'lodash';
//Component List

//Youtube Search Api key

const key='AIzaSyB-xpVZHPNMEyyC-uht_1YyC8vexdEXhUI';

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state={ videos : [] ,
		selectedVideo: null
		};

	this.VideoSearch('ek ajnabee haseena se');
    }

	VideoSearch(term)
	{
			YTSearch({key:key, term:term},(data)=>
		{
			this.setState({
				videos:data,
				selectedVideo:data[0]});
		});
    }
	


	render()
	{

	const edited=lodash.debounce((term)=>{this.VideoSearch(term)},300);
	return ( <div><SearchBar onSearch={ edited } />
	<VideoDetail video={this.state.selectedVideo} />
	<VideoList onVideoClick={(selected)=>{this.setState({selectedVideo:selected})}}
	 videos={this.state.videos} />
	</div> );
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));



