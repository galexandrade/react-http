import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;