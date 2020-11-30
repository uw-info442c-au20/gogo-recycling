import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import levelIcons from "./LevelIcons";
import  scoreHelper from  "../helpers/defineLevel";

const PostModal = ({ post, users, sendComment, loggedIn, toggleLike, isLiked, toggleModal }) => {
    const [ comment, setComment ] = useState("");
    const [ commenters, setCommenters ] = useState({});
    const [ pictureIndex, setPictureIndex ] = useState(0);

    useEffect(() => {
        const getCommenters = async postID => {
            const newCommenters = {};
            for (let comment of post.comments) {
                const userData = (await comment.user.get()).data();
                newCommenters[comment.user.id] = userData;
            }
            setCommenters(newCommenters);
        };

        post && getCommenters(post.id);
    }, [ post ]);

    return (
        <section className="modal fade" id="postModal">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                {post &&
                <div className="modal-content">
                    <div className="modal-header mx-auto">
                        <h1>
                            {post.title} 
                        </h1>
                        <i
                            className="fas fa-times-circle fa-lg text-danger"
                            style={{
                                position: "absolute", cursor: "pointer",
                                right: "15px", top: "15px"
                            }} onClick={toggleModal}
                        />
                    </div>
                    <div className="modal-body">
                        {post.images && post.images.length > 1 &&
                        // TODO: Make the image navigation not jank
                        <>
                            <i
                                className="fas fa-arrow-alt-circle-left text-white shadow
                                    position-absolute my-auto rounded-circle"
                                style={{
                                    fontSize: "3vh", top: "45%", left: "6%",
                                    backgroundImage: "radial-gradient(at center, black 40%, transparent 40%)"
                                }}
                                onClick={() => {
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
                                    fontSize: "3vh", top: "45%", right: "6%",
                                    backgroundImage: "radial-gradient(at center, black 40%, transparent 40%)"
                                }}
                                onClick={() => {
                                    setPictureIndex((pictureIndex + 1) % post.images.length);
                                }}
                            >
                            </i>
                        </>
                        }
                        <img
                            src={post.images[pictureIndex]} alt=""
                            className="card-img-top rounded"
                            style={{
                                maxHeight: "75vh", maxWidth: "100%",
                                width: "auto", height: "auto"
                            }}
                        />
                        <p className="mb-2">
                            <em>
                                By {post.isAnonymous ? "Anonymous" :
                                (users[post.user.id] ?
                                    <div>
                                        {users[post.user.id].displayName}
                                        <img src={levelIcons[scoreHelper(users[post.user.id].points)]} 
                                        alt="Icon represents lvevl of user"  className="icon-in-full-post" />
                                    </div> :
                                    <em>Unknown</em>
                                )}
                            </em>
                            <br/>
                            <strong>Description:</strong> {post.description}
                            <br/>
                        </p>
                        <div
                            className={`btn ${isLiked ? "btn-danger" : "btn-outline-danger"}`}
                            onClick={() => loggedIn && toggleLike(isLiked ? "unlike" : "like", post)}
                        >
                            {post.likes.length} {post.likes.length === 1 ? "like" : "likes"}
                        </div>
                        <hr/>
                        <h3>Comments</h3>
                        <div className="comments mb-2">
                            {post.comments.map((comment, index) => {
                                return (
                                    <div className="comment" key={index}>
                                        <Link
                                            onClick={toggleModal}
                                            to={`/profile/${comment.user.id}`}
                                        >
                                            <strong>
                                                {commenters[comment.user.id] ?
                                                    commenters[comment.user.id].displayName :
                                                    "Unknown"}
                                            </strong>
                                        </Link>: {comment.comment}
                                    </div>
                                );
                            })}
                        </div>
                        {loggedIn &&
                        <form
                            className="input-group mx-auto" style={{ maxWidth: "500px" }}
                            onClick={event => event.preventDefault()}
                        >
                            <input
                                type="text" placeholder="Comment" className="form-control"
                                style={{ borderRadius: "20px 0 0 20px" }}
                                value={comment} onChange={event => setComment(event.target.value)}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary" type="submit"
                                    onClick={() => {
                                        if (comment.length > 0) {
                                            sendComment(post, comment);
                                            setComment("");
                                        }
                                    }}
                                >
                                    <i className="mr-1 fas fa-paper-plane"/>
                                </button>
                            </div>
                        </form>}
                    </div>
                </div>}
            </div>
        </section>
    );
};

export default PostModal;