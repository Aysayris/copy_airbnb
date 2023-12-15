import global from './assets/global.svg';
import Logo from "./Logo.tsx";
import RightMenu from "./RightMenu.tsx";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <a href="#" className="appartment_string"><b>Жилье</b></a>
            <a href="#" className="impression_sting">Впечатления</a>
            <a href="#" className="impression_sting">Онлайн-Впечатления</a>
           
            <nav className='header__right'>
            <a href="#" className="appartment_string"><b>Сдать жилье на Staynest</b></a>
            <a href="#"><img src={global} alt="global" /></a>
            <RightMenu />
            </nav>
           
        </div>
    );
};

export default Header;