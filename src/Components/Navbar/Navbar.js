import classes from "./Navbar.module.css";

const Navbar = () => {
    return(
        <nav className={classes.Navbar}>
            <ul className={classes.NavList}>
                <li><a href="">About me</a></li>
                <li><a href="">Acheivements</a></li>
                <li><a href="">Coaching</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;