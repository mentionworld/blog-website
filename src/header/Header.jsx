import './Header.css';
import headerImg  from '../images/tree-736885_1280.jpg';
const Header = () => {
  return (
    <div className='header'>
        <div className='header-title'>
            <span className='header-title-sm'>React & Node</span>
            <span className='header-title-lg'>Blog</span>
        </div>
        <img className='header-img' src={headerImg} alt="header image" />
    </div>
  )
}

export default Header