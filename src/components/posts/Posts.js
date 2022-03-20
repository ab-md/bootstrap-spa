import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import postsAction from '../../redux/posts/action';
import PostCard from './PostCard';
import styles from '../../style/global.module.css';

const Posts = () => {

    const posts = useSelector(state => state.postsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsAction())
    }, [dispatch])

    return (
        <div className='text-center'>
            {
                posts.loading ?
                    <Spinner animation='border' variant='warning' className='mt-5' /> :
                    posts.error ?
                        <Alert variant='danger' className='m-5 text-center text-dark' style={{ maxWidth: '669px !important' }}>Something went wrong!
                            <br />
                            Please try again.
                        </Alert> :
                        <div className={styles.justify}>
                            {
                                posts.postsData.map(post => (
                                    <PostCard key={post.id} post={post} />
                                ))
                            }
                        </div>
            }
        </div>
    );
}

export default Posts;
