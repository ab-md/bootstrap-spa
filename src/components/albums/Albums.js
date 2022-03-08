import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import albumsAction from '../../redux/albums/action';

const Albums = () => {

    const albums = useSelector(state => state.albumsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(albumsAction());
    }, [dispatch])

    return (
        <div>
            {
                albums.loading ?
                    <p>Loading ...</p> :
                    albums.error ?
                        <p>Error!</p> :
                        albums.albumsData.map(album => (
                            <Card key={album.id} bg="secondary" className="m-5">
                                <Card.Body className='text-center text-light'>{album.title}</Card.Body>
                                <Button as={Link} to={`/albums/${album.id}`}>See Photos</Button>
                            </Card>
                        ))
            }
        </div>
    );
}

export default Albums;
