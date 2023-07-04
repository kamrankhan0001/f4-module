import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import "./postDetail.css"
const PostDetails = ({ data }) => {

    const { id } = useParams();
    const post = data.find((item) => item.id == id )

    console.log("post details" ,post);

    if (!data || data.length === 0) {
        return <div>No posts available</div>;
      }

    if(!post){
        return(
            <div>Post not found!</div>
        )
    }

    return(
        <div className="cardPage">
        <h1 className="posth1">Details page For Posts with ID {id}</h1>
        <Card post={post}/>
        </div>
    )
}

export default PostDetails;