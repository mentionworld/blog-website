import './Topbar.css';
import profile from '../images/avatar.jpg';

const Topbar = () => {
  return (
    <div className='top'>
        <div className='top-left'>
            <i className=" top-icon fa-brands fa-square-facebook"></i>
            <i className=" top-icon fa-brands fa-twitter"></i>
            <i className=" top-icon fa-brands fa-pinterest"></i>
            <i className=" top-icon fa-brands fa-instagram"></i>
        </div>
        <div className='top-center'>
            <ul className='toplist'>
                <li className='toplist-item'>HOME</li>
                <li className='toplist-item'>About</li>
                <li className='toplist-item'>Contact</li>
                <li className='toplist-item'>Write</li>
                <li className='toplist-item'>Logout</li>
            </ul>
        </div>
        <div className='top-right'>
            <img  className='top-image' src={profile} alt="profile image" />
            <i className="top-icon-search fa-solid fa-magnifying-glass"></i>        </div>
    </div>
  )
}

export default Topbar
