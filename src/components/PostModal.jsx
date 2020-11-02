import React, { useState } from "react";

const PostModal = ({ post }) => {
    const [ pictureIndex, setPictureIndex ] = useState(0);

    return (
        <section className="modal fade" id="postModal">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                {post &&
                <div className="modal-content">
                    <div className="modal-header mx-auto">
                        <h2>{post.title}</h2>
                    </div>
                    <div className="modal-body">
                        <img
                            src={post.images[pictureIndex]} alt=""
                            className="card-img-top rounded"
                            style={{ maxHeight: "75vh", width: "auto", height: "auto", maxWidth: "100%" }}
                        />
                        <p>
                            {post.description}
                        </p>
                    </div>
                </div>
                }
            </div>
        </section>
    );
};

export default PostModal;