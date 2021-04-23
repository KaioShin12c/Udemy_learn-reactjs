import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import queryString from 'query-string';

function PostFeature(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page : 1,
        _limit : 10,
        _totalRows : 1
    })

    const [filter, setFilter] = useState({
        _limit : 10,
        _page : 1,
    })

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filter);
                const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(url);
                const responseJson = await response.json();
                const {data ,pagination} = responseJson;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList();
    }, [filter])

    function handlePageChange(newPage) {
        console.log(newPage);
        setFilter({
            ...filter,
            _page : newPage,
        })
    }
    return (
        <div>
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default PostFeature;