import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost" >
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt=""
             className="singlePostImg" />
            <h1 className="singlePostTitle">
                This is a single post title!
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor" >Author: <b>Minh Tuan</b></span>
                <span className="singlePostDate" >1 hour ago</span>
            </div>
            <p className="singlePostDesc">This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
                This is a post description!
            </p>
        </div>
    </div>
  )
}
