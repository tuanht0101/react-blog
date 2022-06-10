import "./post.css"

export default function Post() {
  return (
    <div className="post" >
        <img 
        className="postImg"
        src="https://i.pinimg.com/564x/4a/9a/c1/4a9ac10e0376bc4d86033bcd64c9a003.jpg" 
        alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                This is a post title, please don't skip it!
            </span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc" >
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
            This is a description of a picture or a post!
        </p>
    </div>
  )
}
