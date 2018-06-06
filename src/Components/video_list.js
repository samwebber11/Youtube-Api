import React from 'react';
import VideoListItem from './item';
	const VideoList=(props)=>
	{
		const items=props.videos.map((video)=>
		{
			return ( <VideoListItem 
					onVideoSelect={props.onVideoClick}
					key={video.etag}
					video={video} />
			)
		});

		return <ul className="col-md-4 list-group">{items}</ul>
	};

export default VideoList;