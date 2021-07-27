import React from 'react';
import './SortUpDown.css'
import {sortMusic} from '../../Actions';
import {useDispatch} from 'react-redux';

const HeadSort = () => {
    const dispatch = useDispatch()

    return (
        <header className='list-head'>
            <div className='list-head__container song'>
                <button className='sort sort-a-z pointer' onClick={()=>dispatch(sortMusic('song', false))}></button>
                <p>Song</p>
                <button className='sort sort-z-a pointer' onClick={()=>dispatch(sortMusic('song', true))}></button>
            </div>
            <div  className='list-head__container'>
                <button className='sort sort-a-z pointer' onClick={()=>dispatch(sortMusic('artist', false))}></button>
                <p>Artist</p>
                <button className='sort sort-z-a pointer' onClick={()=>dispatch(sortMusic('artist', true))}></button>
            </div>
            <p className="genre-p">Genre</p>
            <div  className='list-head__container rating'>
                <button className='sort sort-1-9 pointer' onClick={()=>dispatch(sortMusic('rating', false))}></button>
                <p>Rating</p>
                <button className='sort sort-9-1 pointer' onClick={()=>dispatch(sortMusic('rating', true))}></button>           
            </div>
            <div  className='list-head__container'>
                <p className="p-remove">Remove</p>
            </div>
        </header>  
    )
}

export default HeadSort;