import React from 'react';
import {connect} from 'react-redux';

import {getSelectedVideo} from '../selectors/video';

const VideoDetail = ({video}) => {

  if (!video) { // Psuedo load screen
    return <div className="col-md-8">No video selected.</div>;
  }
  
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="card card-block">
        <h1 className="card-title">{video.snippet.title}</h1>
        <p className="card-text">{video.snippet.description}</p>
      </div> 
    </div>
  );
}

// Add certain state properties to this.props
function mapStateToProps(state) {
  return {
    video: getSelectedVideo(state),
  }
}

// When state changes, re-render this component with new state
export default connect(mapStateToProps)(VideoDetail);
