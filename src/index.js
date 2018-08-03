import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

import SearchBar from './components/search_bar';
import { combineReducers } from '../node_modules/redux';

const API_KEY = 'AIzaSyBnAO4KfamON9B3aAecv1rU4wPa8UHz5Qk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      console.log(videos);
      this.setState({
        videos
      })
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));