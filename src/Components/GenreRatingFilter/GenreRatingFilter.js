import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {filterMusic} from '../../Actions';
import './GenreRatingFilter.css'

const GenreRatingFilter = () => {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()

    const [filters, setFilters] = useState({
        genre: false,
        rating: false
    })
    const genreList = useRef()

    const generateGenreList = () => {
        if (!filters.genre && !filters.rating){
            const genreItems = Array.from(new Set(songs.allMusic.map(item => item.genre)))
            const genres = genreItems.map((item,index) => <option key={index} value={item}>{item}</option>)
            genreList.current = genres
            return genres
        }
        return genreList.current
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        let newValue = !value ? false : value
        setFilters({...filters, [name]: newValue})
        dispatch(filterMusic({...filters, [name]: newValue}))
    }

    return (
        <section>
            <label>Genre filter:</label>
            <select className="pointer"
                name='genre'
                value={filters.genre}
                onChange={handleChange}>
                    <option default value=''>All</option>
                    {generateGenreList()}
            </select>
            <label>Rating filter:</label>
            <select className="pointer"
                name='rating'
                value={filters.rating}
                onChange={handleChange}>
                    <option default value=''>All</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
            </select>
        </section>
    )
}

export default GenreRatingFilter;