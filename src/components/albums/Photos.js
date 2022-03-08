import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import photosAction from "../../redux/photos/action";
import Photocard from './PhotoCard';

const Photos = () => {

    const { id } = useParams();
    const photos = useSelector(state => state.photosData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosAction(id));
    }, [dispatch, id])

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
                photos.loading ? 
                    <p>Loading ...</p> : 
                photos.error ? 
                    <p>Error!</p> : 
                    photos.photosData.map(photo => (
                        <Photocard key={photo.id} photo={photo} />
                    ))
            }
        </div>
    );
}

export default Photos;
