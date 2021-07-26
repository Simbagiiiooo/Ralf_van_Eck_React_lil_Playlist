import React from 'react';
import './ListMusic.css'
import ListItem from '../MusicItem/MusicItem'

const ListMusic = (props) => {
    const songList = props.allMusic.map((item, index) => 
        <ListItem key={index} id={index} {...item}/>)
    
    return (
        <ul>
            {songList}
        </ul>
    )
}

export default ListMusic;