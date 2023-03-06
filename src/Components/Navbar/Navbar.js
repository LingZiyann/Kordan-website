import classes from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
    return(
        <nav className={classes.Navbar}>
            <ul className={classes.NavList}>
                <li><a>About Me</a></li>
                <li><a href="">Acheivements</a></li>
                <li><a href="">Coaching</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;