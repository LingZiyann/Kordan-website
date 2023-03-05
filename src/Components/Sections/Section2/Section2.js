import classes from "./Section2.module.css";
import { useEffect, useRef, useState } from "react";

const Section2 = () => {
    const popupRef = useRef();
    const [isVisible, setIsVisible] = useState();
    const [isHover1,SetIsHover1] = useState(false);
    const [isHover2,SetIsHover2] = useState(false);
    const [isHover3,SetIsHover3] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, {threshold: 0.2})
        observer.observe(popupRef.current);
    }, []);

    const hoverTrue1 = () => {
        SetIsHover1(true);
    };

    const hoverFalse1 = () => {
        SetIsHover1(false);
    };

    const hoverTrue2 = () => {
        SetIsHover2(true);
    };

    const hoverFalse2 = () => {
        SetIsHover2(false);
    };

    const hoverTrue3 = () => {
        SetIsHover3(true);
    };

    const hoverFalse3 = () => {
        SetIsHover3(false);
    };

    return(
        <section className={classes.Section2Container}>
            <div className={classes.popupContainer}>
                <h1 ref={popupRef} className={ isVisible ? classes.popupText : classes.popupFalse}>"Mid Gap"</h1>
                <h2>Kordan is a world class Mid player who is able to win against the best Mid players in the game</h2>               
            </div>
            {/* <div className={classes.lineBreak}>
                <hr></hr>
            </div> */}
                {/* <img src=".\Images\Fl9KrteaAAAq57W.jpg"></img> */}
            <section className={classes.AchievementsContainer}>
                <div onMouseOver={hoverTrue1} onMouseLeave={hoverFalse1} className={classes.CabinetColumn} >
                    <img src=".\Images\ItemSprites.png" className={ isHover1 ? classes.GlassPaneHover1 : classes.GlassPane1}></img>
                    <article><img style={{borderRadius: "30%"}} src=".\Images\m88.png"></img></article>
                </div>
                <div onMouseOver={hoverTrue2} onMouseLeave={hoverFalse2} className={classes.CabinetColumn} style={{borderLeft: "10px solid #63462D", borderRight: "10px solid #63462D"}}>
                    <img src=".\Images\ItemSprites.png" className={ isHover2 ? classes.GlassPaneHover2 : classes.GlassPane2}></img>
                    <article><img src=".\Images\dpc2.jpg"></img></article>
                </div>               
                <div onMouseOver={hoverTrue3} onMouseLeave={hoverFalse3} className={classes.CabinetColumn}>
                    <img src=".\Images\ItemSprites.png" className={ isHover3 ? classes.GlassPaneHover3 : classes.GlassPane3}></img>
                    <article><img src=".\Images\Aegis2022.png"></img></article>
                </div>
                
            </section>
        </section>
    );
};

export default Section2;