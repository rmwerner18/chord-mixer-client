import React from 'react'
import SongsContainer from './songs_container'

const UserPage = (props) => {
    return (
        <div className="user-page">
            <SongsContainer player={props.player} state={props.state} playHandler={props.playHandler} editHandler={props.editHandler} usersSongs={true}/>
            <SongsContainer player={props.player} state={props.state} playHandler={props.playHandler} editHandler={props.editHandler} favoritedSongs={true}/>
        </div>
    )
        

}

export default UserPage