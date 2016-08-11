import React from 'react';
import Photo from './Photo';
import Comments from './comments';


export default class Single extends React.Component {
   render(){
     const { postId } = this.props.params;

     const i = this.props.posts.findIndex((post) => post.code === postId);

     const post = this.props.posts[i];


    //  const { postId } = this.props.params;
     //
    //      const i = this.props.posts.findIndex((post) => post.code === postId);
    //      const post = this.props.posts[i];



     const postComments = this.props.comments[postId] || [];

    return(
      <div className="single-photo">
        <Photo key={i} i={i} post={post} {...this.props}/>
          // <div className="photo-grid">
          //   {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
          // </div>
        <Comments postComments={postComments}/>
      </div>
    )
  }
}
