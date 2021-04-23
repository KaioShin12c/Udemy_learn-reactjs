import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id : 1,
            name : 'Nhac 1',
            image : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/8/3/8/c8380271699dc9ec3fcd5650b3db16f2.jpg',
        },
        {
            id : 2,
            name : 'Nhac 2',
            image : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/8/a/e/b8aec4920a846e3d1854c89ee0bb1e93.jpg',
        },
        {
            id : 3,
            name : 'Nhac 3',
            image : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/a/f/e/cafed8b10c57dee44fe377034ddc4670.jpg',
        },

    ]

    return (
        <div>
            <h2>Co the ban se thich</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;