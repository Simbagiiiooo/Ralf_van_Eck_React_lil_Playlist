const stateOrigen = {
    allMusic: [
        {
            song: 'Dat ik je zo zou missen',
            artist: 'Tino Martin',
            genre: 'Dutch',
            rating: '5'
        },
        {
            song: 'Adagio For Strings',
            artist: 'Tiesto',
            genre: 'Techno',
            rating: '4'
        },
        {
            song: 'Adagio',
            artist: 'Hauser',
            genre: 'Classic',
            rating: '4'
        },
        {
            song: 'Mooi',
            artist: 'Marco Borsato',
            genre: 'Dutch',
            rating: '4'
        },
        {
            song: 'Leef',
            artist: 'André Hazes',
            genre: 'Dutch',
            rating: '3'
        },
        {
            song: 'Historia de un Amor',
            artist: 'Hauser',
            genre: 'Classic',
            rating: '2'
        },
        {
            song: 'Acid Is The Answer',
            artist: 'Klanglos',
            genre: 'Acid Techno',
            rating: '4'
        },
        {
            song: 'Hardcore Vibes',
            artist: 'Dune',
            genre: 'Happy Hardcore',
            rating: '3'
        },
        {
            song: 'Sensemilla',
            artist: 'Yellowman',
            genre: 'Reggae',
            rating: '2'
        },
        {
            song: 'Adagio for Strings',
            artist: 'Hauser',
            genre: 'Classic',
            rating: '4'
        },
        {
            song: 'Brabant',
            artist: 'Guus Meeuwis',
            genre: 'Dutch',
            rating: '5'
        },
        {
            song: 'Acid Phase',
            artist: 'Emmanuel Top',
            genre: 'Acid Techno',
            rating: '5'
        },
        {
            song: 'No Woman, No Cry',
            artist: 'Bob Marley',
            genre: 'Reggae',
            rating: '5'
        },
        {
            song: 'Mijn Jongen',
            artist: 'Sander Kwarten',
            genre: 'Dutch',
            rating: '4'
        },
        {
            song: 'True To Myself',
            artist: 'Ziggy Marley',
            genre: 'Reggae',
            rating: '1'
        },
        {
            song: 'Sexy als ik dans',
            artist: 'Nielson ',
            genre: 'Dutch',
            rating: '4'
        },
        {
            song: 'Hello',
            artist: 'Adele',
            genre: 'Pop',
            rating: '3'
        },
    ]
}

let prevSongs = {allMusic: []}

const songReducer = (state=stateOrigen, action) => {
    switch(action.type){
        case 'ADDMUSIC':
            return {allMusic: [...state.allMusic].concat(action.payload)}
        case 'DELETEMUSIC':
            const filteredSongs = state.allMusic.filter((item, index) => index !== action.payload)
            return {allMusic: filteredSongs}
        case 'SORTMUSIC':
            const sortedSongs = state.allMusic.sort((item1, item2) => {
            if (item1[action.payload.fieldName]<item2[action.payload.fieldName]){
                return -1
            }
            if (item1.song<item2.song){
                return 1
            }
            else return 0
            })
            action.payload.reverse && sortedSongs.reverse()
            return {allMusic: sortedSongs}
        case 'FILTERMUSIC':
            if (prevSongs.allMusic.length === 0){
                prevSongs = state
            }
            let filterTempSongs = [...prevSongs.allMusic]
            const filterSongs = filterTempSongs.filter(item => {
                if (action.payload.genre && action.payload.rating){
                    return item.genre === action.payload.genre && item.rating === action.payload.rating
                }
                if (action.payload.genre && !action.payload.rating){
                    return item.genre === action.payload.genre
                }
                if (!action.payload.genre && action.payload.rating){
                    return item.rating === action.payload.rating
                }
                return item
            })
            return {allMusic: filterSongs}
        default: return state
    }
}

export default songReducer;