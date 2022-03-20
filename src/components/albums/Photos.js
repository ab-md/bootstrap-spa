import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import photosAction from "../../redux/photos/action";
import Photocard from './PhotoCard';
import styles from '../../style/global.module.css';

const Photos = () => {

    const { id } = useParams();
    const photos = useSelector(state => state.photosData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosAction(id));
    }, [dispatch, id])

    return (
        <div className='text-center'>
            {
                photos.loading ?
                    <Spinner animation='border' variant='danger' className='mt-5' /> :
                    photos.error ?
                        <Alert variant='danger' className='m-5 text-center text-dark' style={{ maxWidth: '669px !important' }}>Something went wrong!
                            <br />
                            Please try again.
                        </Alert> :
                        <div className={styles.justify}>
                            {
                                photos.photosData.map(photo => (
                                    <Photocard key={photo.id} photo={photo} />
                                ))
                            }
                        </div>

            }
        </div>
    );
}

export default Photos;
