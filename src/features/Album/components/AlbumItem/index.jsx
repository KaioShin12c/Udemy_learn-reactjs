import React from 'react';
import './styles.scss';

function AlbumItem({album}) {
    return (
        <div className="album">
            <div className="album__image">
                <img src={album.image} alt={album.name}/>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default AlbumItem;