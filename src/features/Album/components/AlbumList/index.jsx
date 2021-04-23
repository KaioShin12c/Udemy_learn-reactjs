import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AlbumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired,
    
};

function AlbumList({albumList}) {
    return (
        <ul>
            {albumList.map(album => (
                <li key={album.id}>
                    <AlbumItem album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;