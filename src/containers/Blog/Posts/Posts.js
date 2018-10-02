import React, { Component } from 'react';
import axios from '../../../axios';
import './Posts.css';

import Post from '../../../components/Post/Post';

class Posts extends Component{ 
    state = {
        posts: []
    }
    
    componentDidMount(){
        axios.get('/posts')
            .then((response) => {
                const posts = response.data;
                const updatedPosts = posts.slice(0, 4);

                updatedPosts.map(post => {
                    return {
                        ...post,
                        author: 'Alex'
                    }
                })

                this.setState({posts: updatedPosts});
            })
            .catch((error) => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }
    
    render(){
        let posts = <p>Something went wrong</p>;

        if(!this.state.error){
            posts = this.state.posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            ));
        }
        
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;