import React from "react";
import { Card } from "react-bootstrap";

const Comments = ({comment}) => {

    const { id, name, email, body } = comment;

    return (
        <>
            <Card bg="warning" className="m-3 mx-auto w-50">
                <Card.Header>Comment #{id}</Card.Header>
                <Card.Body>
                    <p>{email}</p>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {body}
                        </p>
                        <footer className="blockquote-footer">
                            {name}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
    )
}

export default Comments;