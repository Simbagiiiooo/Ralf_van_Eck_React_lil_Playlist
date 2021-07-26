export const sortMusic = (fieldName, reverse) => {
    return {
        type: 'SORTMUSIC',
        payload: {fieldName, reverse}
    }
}

export const filterMusic = filters => {
    return {
        type: 'FILTERMUSIC',
        payload: filters
    }
}

export const deleteMusic = id => {
    return {
        type: 'DELETEMUSIC',
        payload: id
    }
}

export const addMusic = newMusic => {
    return {
        type: 'ADDMUSIC',
        payload: newMusic
    }
}