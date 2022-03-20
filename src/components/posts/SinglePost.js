import React, { useEffect } from "react";
import { Alert, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import commentsAction from "../../redux/comments/action";
import singlePostAction from "../../redux/singlePost/action";
import Comments from "../comments/Comments";

const SinglePost = () => {

    const { id } = useParams();

    const post = useSelector(state => state.postData);
    const comments = useSelector(state => state.commentsData);
    const dispatch = useDispatch();

    const { title, body } = post.postData;

    useEffect(() => {
        dispatch(singlePostAction(id));
        dispatch(commentsAction(id));
    }, [dispatch, id])

    // console.log(comments);

    return (
        <div>
            {
                post.loading ?
                    <div className="text-center">
                        <Spinner animation='border' variant='warning' className='mt-5' />
                    </div> :
                    post.error ?
                        <Alert variant='danger' className='m-5 text-center text-dark' style={{ maxWidth: '669px !important' }}>Something went wrong!
                            <br />
                            Please try again.
                        </Alert> :
                        <>
                            <div style={{ height: "450px" }}>
                                <Card
                                    className="mx-auto mt-3 w-75"
                                    bg="info"
                                    text="white"
                                >
                                    <Card.Header as="h5">Post Number #{id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title as="h3" className="text-dark">{title}</Card.Title>
                                        <Card.Text>
                                            {body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            {
                                comments.commentsData.length &&
                                <Alert variant="info" className="w-50 mt-3 mx-auto">Users' Comments</Alert>
                            }

                            {
                                comments.commentsData.length ?
                                    comments.commentsData.map(comment => (
                                        <Comments key={comment.id} comment={comment} />
                                    )) :
                                    <Alert variant="warning">No Comments for this post.</Alert>
                            }
                        </>

            }
        </div>
    )
}

export default SinglePost;