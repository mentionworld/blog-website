import './Post.css';
const Post = () => {
  return (
    <div className='post'>
       <img className='post-image' src="https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_640.jpg" alt="" />
        <div className='post-info'>
            <div className='post-cats'>
                <span className='post-cat'>Music</span>
                <span className='post-cat'>Life</span>
            </div>
            <span className='post-title'>Lorem ipsum dolor sit,</span>
            <hr />
            <span className='post-date'>1 hour ago</span>
        </div>
    </div>
  )
}

export default Post