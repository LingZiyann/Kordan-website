import classes from "./Footer.module.css";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
    const popupRef = useRef();
    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, {threshold: 0.2})
        observer.observe(popupRef.current);
    }, []);


        return(
            <section className={classes.Section4Container}>
                <div className={classes.blur}></div>
                <footer>
                    <div className={classes.popupContainer}>
                        <h1 ref={popupRef} className={ isVisible ? classes.popupText : classes.popupFalse}>"Anyone can reach Immortal"</h1>
                        <h2>Kordan is currently offering private coaching for Dota 2, more enquires available through a private email </h2>
                    </div>
                    <section className={classes.contactInfoContainer}>
                        <div className={classes.emailContainer}><span>tengtjingyao@gmail.com</span></div>
                        <div className={classes.logoContainers}>
                            <a href="https://www.twitch.tv/kordandan"><img src=".\Images\twitch.png"></img></a>
                            <a href="https://twitter.com/kordan_dota"><img src=".\Images\twitter.png"></img></a>
                            <a href="https://www.instagram.com/kordan_dota/"><img src=".\Images\Instagram.png"></img></a>
                        </div>
                    </section>
                </footer>
           </section>
        )
};

export default Footer
