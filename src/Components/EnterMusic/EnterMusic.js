import React, {useState} from 'react';
import './EnterMusic.css'
import {useDispatch} from 'react-redux';
import {addMusic} from '../../Actions';

const EnterMusic = () => {
    const dispatch = useDispatch()
    
    const [newMusic, setNewMusic] = useState({
        song: '',
        artist: '',
        genre: '',
        rating: '1'
    })

    const handleChange = (e) => {  
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'newMusic'){
            dispatch(addMusic(newMusic))
            return setNewMusic({
                song: '',
                artist: '',
                genre: '',
                rating: '1'
            })
        }
        setNewMusic(Object.assign({...newMusic}, {[name]: value}))
    }

    return (
        <form className="enter-music" name='newMusic' onSubmit={handleChange}>
            <input
                type='text'
                name='song'
                value={newMusic.song}
                placeholder='Enter song name'
                onChange={handleChange}/>
            <input
                type='text'
                name='artist'
                value={newMusic.artist}
                placeholder='Artist'
                onChange={handleChange}/>
            <input
                type='text'
                name='genre'
                value={newMusic.genre}
                placeholder='Genre'
                onChange={handleChange}/>
            <label>Rating: </label>
            <select
                name='rating'
                placeholder='Rating'
                value={newMusic.rating}
                onChange={handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
            </select>
            <button className='add pointer'>Add song</button>
        </form>
    )
}

export default EnterMusic;