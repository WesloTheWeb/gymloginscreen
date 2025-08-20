import { getCurrentDate } from '../../utils/dateTimeUtils';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            Patch 4.3.5 - {getCurrentDate()}
        </footer>
    );
};

export default Footer;