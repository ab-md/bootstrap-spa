import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAction from '../../redux/posts/action';
import PostCard from './PostCard';

const Posts = () => {

    const posts = useSelector(state => state.postsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsAction())
    }, [dispatch])

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
                posts.loading ?
                    <p>Loading</p> :
                    posts.error ?
                        <p>Error</p> :
                        posts.postsData.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))
            }
        </div>
    );
}

export default Posts;
