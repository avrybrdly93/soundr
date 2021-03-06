import React, { Component } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import MusicCard from "../MusicCard/MusicCard";
import "./style.css";
import axios from "axios";

class MediaGridList extends Component {
  state = {
    songs: Songs,
    currentlyPlaying: []
  };

  componentDidMount() {
    axios.get("/api/music").then(results => {
      this.setState({ songs: results.data });
    });
  }

  render() {
    let songs = this.state.songs;
    var renderCards = songs.map(songs => (
      <li key={songs._id}>
        <MusicCard
          songid={songs._id}
          cover={songs.cover}
          coverTitle={songs.artist}
          profilePic={songs.profilePic}
          producer={songs.producer}
          artist={songs.artist}
          title={songs.title}
          // likes={songs.likes}
        />
      </li>
    ));
    return (
      <div className="container">
        <div data-uk-slider>
          <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-small">
            {renderCards}
          </ul>
          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="/"
            data-uk-slidenav-previous
            data-uk-slider-item="previous">
            <i class="material-icons">keyboard_arrow_left</i>
          </a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="/"
            data-uk-slidenav-next
            data-uk-slider-item="next">
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
        </div>
      </div>
    );
  }
}

export default MediaGridList;
