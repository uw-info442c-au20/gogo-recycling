import React, { useState } from "react";
import { Link } from "react-router-dom";

import levelIcons from "./LevelIcons";
import computeLevel from  "../helpers/levelHelper";

const PostPreview = ({post, users, setActivePost, toggleLike, loggedIn, isLiked, toggleModal}) => {
    const [ pictureIndex, setPictureIndex ] = useState(0);
    return (
        <div
            className="card mb-4 pb-4"
            onClick={() => {
                setActivePost(post);
                toggleModal();
            }}
        >
            <div>
                {post.images && post.images.length > 1 &&
                // TODO: Make the image navigation not jank
                <>
                    <i
                        className="fas fa-arrow-alt-circle-left text-white shadow
                            position-absolute my-auto rounded-circle"
                        style={{
                            fontSize: "3vh", top: "50%", left: "3%", cursor: "pointer",
                            backgroundImage: "radial-gradient(at center, black 40%, transparent 40%)"
                        }}
                        onClick={event => {
                            event.stopPropagation();
                            setPictureIndex(
                                (post.images.length + pictureIndex - 1) % post.images.length
                            );
                        }}
                    >
                    </i>
                    <i
                        className="fas fa-arrow-alt-circle-right text-white shadow
                            position-absolute rounded-circle"
                        style={{
                            fontSize: "3vh", top: "50%", right: "3%", cursor: "pointer",
                            backgroundImage: "radial-gradient(at center, black 40%, transparent 40%)"
                        }}
                        onClick={event => {
                            event.stopPropagation();
                            setPictureIndex((pictureIndex + 1) % post.images.length);
                        }}
                    >
                    </i>
                </>
                }
                <img
                    src={post.images[pictureIndex]} alt=""
                    className="card-img-top rounded"
                />
            </div>
            <div className="container">
                <div
                    className="row" onClick={toggleModal}
                >
                    <div
                        className="card-body pb-2"
                    >
                        <h4 className="card-title mb-0">
                            {post.title}
                        </h4>
                        <h6>
                            {!post.isAnonymous ?
                                <Link
                                    className="no-modal highlight" to={`/profile/${post.user.id}`}
                                    onClick={event => event.stopPropagation()}
                                >
                                By {users[post.user.id] ?
                                    (<span>
                                        {users[post.user.id].displayName}
                                        <img src={levelIcons[computeLevel(users[post.user.id].points)]}
                                        alt="Icon represents level of user"  className="icon" />
                                    </span>) :
                                    <em>Unknown</em>}
                                </Link>
                            :
                            "By Anonymous"
                            }
                        </h6>
                        {post.images && post.images.length > 1 &&
                            <p className="mb-0">
                                Image {pictureIndex + 1}/{post.images.length}
                            </p>}
                        <p className="mb-0">
                            Description: {post.description}
                        </p>
                        <p className="mb-0">{post.likes.length} like(s)</p>
                    </div>
                </div>
                {loggedIn && <div className="row">
                    <i
                        className={`${isLiked ? "fas" : "far"} fa-heart mx-auto text-danger`}
                        style={{ fontSize: "3vh" }}
                        onClick={event => {
                            event.stopPropagation();
                            toggleLike(isLiked ? "unlike" : "like", post);
                        }}
                    />
                </div>}
            </div>
        </div>
    );
};

export default PostPreview;