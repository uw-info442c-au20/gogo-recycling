import React, { useState } from "react";

const PostPreview = ({post, users, setActivePost}) => {
    const [ pictureIndex, setPictureIndex ] = useState(0);

    return (
        <div className="card bg-success text-white mb-3 p-4" onClick={() => setActivePost(post)}>
            <img
                src={post.images[pictureIndex]} alt=""
                className="card-img-top rounded"
            />
            <div className="container">
                <div className="row">
                    {post.images && post.images.length > 1 &&
                    <div className="btn bg-transparent my-auto" onClick={event => {
                        setPictureIndex(
                            (post.images.length + pictureIndex - 1) % post.images.length
                        );
                    }}>
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                    }
                    <div className="card-body">
                        <h4 className="card-title mb-0">
                            {post.title}
                        </h4>
                        <h6>
                            By {
                                post.isAnonymous ? "Anonymous" : (
                                    users[post.user.id] ?
                                    users[post.user.id].displayName :
                                    <em>Unknown</em>
                                )
                            }
                        </h6>
                        {post.images && post.images.length > 1 &&
                        <p className="mb-0">
                            Image {pictureIndex + 1}/{post.images.length}
                        </p>}
                        <p className="mb-0">
                            Description: {post.description}
                        </p>
                        <p><em>
                            {post.timeCreated && post.timeCreated.toDate().toLocaleString()}
                        </em></p>
                    </div>
                    {post.images && post.images.length > 1 &&
                    <div className="btn bg-transparent my-auto" onClick={event => {
                        setPictureIndex((pictureIndex + 1) % post.images.length);
                    }}>
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PostPreview;