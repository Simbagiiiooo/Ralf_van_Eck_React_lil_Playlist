import React from 'react';
import MusicItem from './MusicItem/MusicItem'

const List = (props) => {
    const songList = props.allMusic.map((item, index) => 
        <MusicItem key={index} id={index} {...item}/>)
    
    return (
        <ul>
            {songList}
        </ul>
    )
}

export default List;