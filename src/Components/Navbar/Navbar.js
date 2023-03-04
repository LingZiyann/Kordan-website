import classes from "./Navbar.module.css";

const Navbar = () => {
    return(
        <nav className={classes.Navbar}>
            <ul className={classes.NavList}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Acheivements</a></li>
                <li><a href="">Coaching</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;