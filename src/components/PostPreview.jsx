import React, { useState } from "react";

const PostPreview = ({post, users}) => {
    const [ pictureIndex, setPictureIndex ] = useState(0);

    return (
        <div className="card bg-info mb-3">
            <img
                src={post.images[pictureIndex]} alt=""
                className="card-img-top" onClick={event => {
                    setPictureIndex((pictureIndex + 1) % post.images.length);
                }}
            />
            <div className="card-body">
                <h4 className="card-title">
                    {post.title}
                </h4>
                <h6>By {users[post.user.id] && users[post.user.id].displayName}</h6>
                <p className="mb-0">
                    Image {pictureIndex + 1}/{post.images.length}
                    <br/>
                    Description: {post.description}
                </p>
                <p><em>
                    {post.timeCreated && post.timeCreated.toDate().toLocaleString()}
                </em></p>
            </div>
        </div>
    );
};

export default PostPreview;