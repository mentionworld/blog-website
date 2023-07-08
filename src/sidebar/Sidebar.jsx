import './Sidebar.css';
import profile from '../images/avatar.jpg';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT ME</span>
            <img src={profile} alt="profile image" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nesciunt vel officia placeat, commodi optio, corporis maiores illum cum suscipit hic maxime distinctio quos ipsum ducimus rem nihil laborum quo?
            </p>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>Categories</span>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>Life</li>
                <li className='sidebar-list-item'>Music</li>
                <li className='sidebar-list-item'>Style</li>
                <li className='sidebar-list-item'>Sport</li>
                <li className='sidebar-list-item'>Tech</li>
                <li className='sidebar-list-item'>Cinema</li>
            </ul>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>Follow us</span>
            <ul className='sidebar-social'>
                <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                <i className="sidebar-icon fa-brands fa-twitter"></i>
                <i className="sidebar-icon fa-brands fa-pinterest"></i>
                <i className="sidebar-icon fa-brands fa-instagram"></i>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar