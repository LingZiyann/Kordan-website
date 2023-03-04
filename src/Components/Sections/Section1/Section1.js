import classes from "./Section1.module.css";
import { useEffect, useRef } from "react";

const Section1 = () => {

    const myRef = useRef();
    useEffect(() => {
        console.log(myRef.current)
    })


    return (
        <section className={classes.SectionContainer}>
            <article className={classes.IntroductionContainer}>
                    {/* <div className="about-me-info-container"> */}
                        <div ref={myRef} className={classes.imgContainer}>
                            <img src=".\Images\6034.png" alt=""/>
                        </div>
                        <div className={classes.TextContainer}>
                            <h1 className={classes.TextHeader}>
                                About Kordan
                            </h1>
                            <h2 className={classes.TextBody}>
                                Kordan has been casually playing dota 2 since he was 12 years old. Despite only picking up the game for a short while, he managed to climb to the rank 50 Immortal at 
                                the age of 14, and ever since, his name has become well known among high ranked dota players in the SEA server
                            </h2>
                            <br/>
                            <h2 className={classes.TextBody}>
                                After recently peaking rank 2 Immortal, he attracted the attention of top SEA teams wanting to recruit him. He is now a position 2 player for team Bleed eSports,
                                playing alongside the well-known local veteran IceIceIce
                            </h2>   
                        {/* </div> */}
                        </div>
            </article>
        </section>
    );
};

export default Section1;