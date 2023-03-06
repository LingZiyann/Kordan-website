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

    const hoverTrue2 = () => {
        SetIsHover2(true);
    };

    const hoverTrue3 = () => {
        SetIsHover3(true);
    };


    return(
        <section className={classes.Section2Container}>
            <div className={classes.popupContainer}>
                <h1 ref={popupRef} className={ isVisible ? classes.popupText : classes.popupFalse}>"Mid Gap"</h1>
                <h2>Kordan is a world class Mid player who is able to win against the best Mid professionals</h2>               
            </div>
            <section className={classes.AchievementsContainer}>
                <div className={classes.CabinetColumn} onMouseOver={hoverTrue1}  >
                    <div  className={ isHover1 ? classes.GlassPaneHover1 : classes.GlassPane1}></div>
                    <div className={ isHover1 ? classes.overlay: classes.InitialOverlay}>
                        <ul>
                            <li style={{backgroundColor: "gold"}}>1st place - 2023 M88 Invitational</li>
                        </ul>
                    </div>
                    <article><img style={{borderRadius: "30%"}} src=".\Images\m88.png"></img></article>
                </div>
                <div onMouseOver={hoverTrue2} className={classes.MiddleCabinetColumn}>
                    <div className={ isHover2 ? classes.GlassPaneHover2 : classes.GlassPane2}></div>
                    <article><img src=".\Images\dpc2.jpg"></img></article>
                    <div className={ isHover2 ? classes.overlay: classes.InitialOverlay}>
                        <ul>
                            <li style={{backgroundColor: "gold"}}>1st place - 2023 DPC Div 1 Tour 2</li>
                            <li style={{backgroundColor: "#007f99"}}>6th place - 2023 DPC Div 1 Tour 1</li>                            
                        </ul>
                    </div>
                </div>               
                <div onMouseOver={hoverTrue3} className={classes.CabinetColumn}>
                    <div className={ isHover3 ? classes.GlassPaneHover3 : classes.GlassPane3}></div>
                    <article><img src=".\Images\Aegis2022.png"></img></article>
                    <div className={ isHover3 ? classes.overlay: classes.InitialOverlay}>
                        <ul>
                            <li style={{backgroundColor: "#007f99"}}>16th place - 2022 TI11</li>
                        </ul>
                    </div>
                </div>                
            </section>
        </section>
    );
};

export default Section2;