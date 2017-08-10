import React, {Component} from 'react';
import Song from './Song';


class SongCollection
 extends Component{
  constructor(props) {
    super(props)
    this.state={


    }
  }
  render() {
    let className;


    let songs = this.props.songs.map(song => {
      if (song.id=== this.props.selectedSongId){
        className= "selected"
      } else {
        className = ""
      }

      return (
        <Song
          name = {song.name}
          key = {song.id}
          id = {song.id}
          artist = {song.artist}
          album = {song.album}
          className={className}
        />
      )
    })
    //

    return(
      <div>
        <ul>
          {songs}
        </ul>
      </div>
    )
  }


}



export default SongCollection
