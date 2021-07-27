import React from 'react';
import ListMusic from './Components/ListMusic/ListMusic';
import GenreRatingFilter from './Components/GenreRatingFilter/GenreRatingFilter';
import EnterMusic from './Components/EnterMusic/EnterMusic';
import SortUpDown from './Components/SortUpDown/SortUpDown';
import {useSelector} from 'react-redux';




const Container = () => {
    const songs = useSelector(state => state.songs)

    return (
        <main>
            <GenreRatingFilter />
            <SortUpDown />
            <ListMusic {...songs}/>
            <EnterMusic />
        </main>
        )
}

export default Container;