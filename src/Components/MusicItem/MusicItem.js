import React from 'react';
import './MusicItem.css'
import {deleteMusic} from '../../Actions';
import {useDispatch} from 'react-redux';

const MusicItem = (props) => {
    const dispatch = useDispatch()

    return (
        <li id={props.id}>
            <span>{props.song}</span>
            <span>{props.artist}</span>
            <span>{props.genre}</span>
            <span>{props.rating}</span>
            <button className='remove pointer' onClick={()=>dispatch(deleteMusic(props.id))}></button>
        </li>
    )
}

export default MusicItem;