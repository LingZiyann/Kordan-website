import classes from "./Section2.module.css";
import { useEffect, useRef, useState } from "react";

const Section2 = () => {
    const popupRef = useRef();
    const [isVisible, setIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        })
        observer.observe(popupRef.current);
    }, [])

    return(
        <section className={classes.Section2Container}>
            <div className={classes.popupContainer}>
                <h1 ref={popupRef} className={ isVisible ? classes.popupText : classes.popupFalse}>"Mid Gap"</h1>
                <h2>Kordan is a world class Mid player who is able to win against the best Mid players in the game</h2>
                <img src=".\Images\Fl9KrteaAAAq57W.jpg"></img>
            </div>
            <div className={classes.lineBreak}>
                <hr></hr>
            </div>
        </section>
    );
};

export default Section2;