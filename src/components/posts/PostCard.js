import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shorten } from "../../helpers/fucntions";

const PostCard = ({ post }) => {

    const { id, title, body } = post;

    return (
        <>
            <Card
                className="m-3"
                bg="info"
                style={{ width: "20rem" }}
            >
                <Card.Header className="h5">
                    {
                        shorten(title)
                    }
                </Card.Header>
                <Card.Body>
                    {/* <Card.Title>
                    {
                        shorten(title)
                    }
                    </Card.Title> */}
                    <Card.Text className="text-white">
                        {
                            `${body.substring(0, 70)} ...`
                        }
                    </Card.Text>
                    {/* <Card.Link> */}
                        <Button as={Link} variant="outline-light" to={`/posts/${id}`}>Read More</Button>
                    {/* </Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default PostCard;