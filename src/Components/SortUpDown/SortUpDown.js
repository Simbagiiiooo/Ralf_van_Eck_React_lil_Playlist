import React from 'react';
import './SortUpDown.css'
import {sortMusic} from '../../Actions';
import {useDispatch} from 'react-redux';

const HeadSort = () => {
    const dispatch = useDispatch()

    return (
        <header className='list-head'>
            <div className='list-head__container'>
                <button className='arrow sort--za pointer' onClick={()=>dispatch(sortMusic('song', false))}></button>
                <p>Song</p>
                <button className='arrow sort--az pointer' onClick={()=>dispatch(sortMusic('song', true))}></button>
            </div>
            <div  className='list-head__container'>
                <button className='arrow sort--za pointer' onClick={()=>dispatch(sortMusic('artist', false))}></button>
                <p>Artist</p>
                <button className='arrow sort--az pointer' onClick={()=>dispatch(sortMusic('artist', true))}></button>
            </div>
            <p>Genre</p>
            <div  className='list-head__container'>
                <button className='arrow sort--19 pointer' onClick={()=>dispatch(sortMusic('rating', false))}></button>
                <p>Rating</p>
                <button className='arrow sort--91 pointer' onClick={()=>dispatch(sortMusic('rating', true))}></button>           
            </div>
        </header>  
    )
}

export default HeadSort;