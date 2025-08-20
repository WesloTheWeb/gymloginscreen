import classes from './Header.module.scss';

const {logoContainer} = classes

const Header = ({ }) => {
    return (
        <header>
            <section className={logoContainer}>
                <img src="./assets/logo.png" alt="city backdrop with gym name" />
            </section>
        </header>
    );
};

export default Header;