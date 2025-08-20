import { getCurrentDate } from '../../utils/dateTimeUtils'; // adjust path as needed
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            Patch 4.3.5 - {getCurrentDate()}
        </footer>
    );
};

export default Footer;