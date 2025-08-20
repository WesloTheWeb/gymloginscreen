import classes from './Header.module.scss';
import logo from '../../assets/logo.png';

const {logoContainer} = classes

const Header = ({ }) => {
    return (
        <header>
            <section className={logoContainer}>
                <img src={logo} alt="city backdrop with gym name" />
            </section>
        </header>
    );
};

export default Header;