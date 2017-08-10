import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <h1>PlaylistCollection</h1>
        <PlaylistCollection
          playlists={this.props.data.playlists}
        />
        <h1>SongCollection</h1>
        <SongCollection
          songs={this.props.data.songs}
          selectedSongId={this.props.data.selectedSongId}
        />
      </div>
    );
  }
}

export default App;
