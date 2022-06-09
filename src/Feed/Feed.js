import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import db from "../firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map(post => (
                <Post 
                key= {post.data.id}
                profilePic ={post.data.profilePic}
                image ={post.data.image}
                message={post.data.message}
                username={post.data.username}
                timestamp={post.data.timestamp}
              />
            ))}
            
        </div>
    )
}

export default Feed
