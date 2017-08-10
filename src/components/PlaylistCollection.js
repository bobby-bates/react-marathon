import React, {Component} from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends Component{
  constructor(props) {
    super(props)
    this.state={


    }
  }
  render() {


    let playlists = this.props.playlists.map(playlist => {
      return (
        <Playlist
          name = {playlist.name}
          key = {playlist.id}
          id = {playlist.id}
          songs = {playlist.songs}
        />
      )
    })
    //

    return(
      <div>
        <ul>
          {playlists}
        </ul>
      </div>
    )
  }


}

export default PlaylistCollection
