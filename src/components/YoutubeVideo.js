
import React from 'react';
import YouTube from 'react-youtube';

class YouTube1 extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,

            },
        };

        return <YouTube videoId={this.props.videoCode} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}


export default YouTube1