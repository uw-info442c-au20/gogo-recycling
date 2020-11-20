import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostPreview = ({post, users, setActivePost, toggleLike, loggedIn, isLiked}) => {
    const [ pictureIndex, setPictureIndex ] = useState(0);

    return (
        <div
            className="card mb-4 pb-4"
            onClick={() => setActivePost(post)}
        >
            <div>
                {post.images && post.images.length > 1 &&
                // TODO: Find out why top: 50% doesn't vertically center
                // TODO: Make the image navigation not jank
                <i
                    className="fas fa-arrow-alt-circle-left text-white shadow
                        position-absolute my-auto rounded-circle"
                    style={{ fontSize: "3vh", top: "50%", left: "50px" }}
                    onClick={() => {
                        setPictureIndex(
                            (post.images.length + pictureIndex - 1) % post.images.length
                        );
                    }}
                >
                </i>
                }
                <img
                    src={post.images[pictureIndex]} alt=""
                    className="card-img-top rounded"
                    data-toggle="modal" data-target="#postModal"
                />
                {post.images && post.images.length > 1 &&
                // TODO: Find out why top: 50% doesn't vertically center
                <i
                    className="fas fa-arrow-alt-circle-right text-white shadow
                        position-absolute rounded-circle"
                    style={{ fontSize: "3vh", top: "50%", right: "50px" }}
                    onClick={() => {
                        setPictureIndex((pictureIndex + 1) % post.images.length);
                    }}
                >
                </i>
                }
            </div>
            <div className="container">
                <div
                    className="row" data-toggle="modal" data-target="#postModal"
                >
                    <div
                        className="card-body"
                    >
                        <h4 className="card-title mb-0">
                            {post.title}
                        </h4>
                        <h6>
                            <Link className="highlight" to="/profile-ex">
                                By {
                                    post.isAnonymous ? "Anonymous" : (
                                        users[post.user.id] ?
                                            users[post.user.id].displayName :
                                            <em>Unknown</em>
                                    )
                                }
                            </Link>
                        </h6>

                        {post.images && post.images.length > 1 &&
                            <p className="mb-0">
                                Image {pictureIndex + 1}/{post.images.length}
                            </p>}
                        <p className="mb-0">
                            Description: {post.description}
                        </p>
                        <p className="mb-0"><em>
                            {post.timeCreated && post.timeCreated.toDate().toLocaleString()}
                        </em></p>
                        <p className="mb-0">{post.likes.length} like(s)</p>
                    </div>
                </div>
                {loggedIn && <div className="row">
                    <i
                        className={`${isLiked ? "fas" : "far"} fa-heart mx-auto`}
                        style={{ fontSize: "3vh" }}
                        onClick={event => toggleLike(isLiked ? "unlike" : "like", post)}
                    />
                </div>}
            </div>
        </div>
    );
};

export default PostPreview;