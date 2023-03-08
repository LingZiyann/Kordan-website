import classes from "./Section1.module.css";
const Section1 = () => {

    return (
        <section className={classes.SectionContainer} id="AboutMe">
            <article className={classes.IntroductionContainer}>
                        <div className={classes.imgContainer}>
                            <img src=".\Images\6034.png" alt=""/>
                        </div>
                        <div className={classes.TextContainer}>
                            <h1 className={classes.TextHeader}>
                                    About Kordan
                            </h1>
                            <p className={classes.TextBody}>
                                Kordan is a 21 year old that is currently playing dota 2 professionally. He has been playing the game casually since he was 12 year old.
                                Despite only picking up the game for a short while, he managed to climb to the rank 50 Immortal at 
                                the age of 14. However, school and national service prevented
                                him from dedicating time to become a better player.
                            </p>
                            
                            <p className={classes.TextBody}>
                                After finishing his obligations, he took dota more seriously and peaked rank 2 Immortal, while also winning several local tournaments against top singaporean players. His skills
                                attracted the attention of top SEA teams wanting to recruit him. He is now a position 2 player for team Bleed eSports, playing alongside the well-known local veteran IceIceIce.
                            </p>   
                        </div>
            </article>
            <div className={classes.rankContainer}>
                <a href="https://www.dotabuff.com/players/262838756" style={{textDecoration: "none"}}>
                    <div className={classes.column1}> 
                        <div className={classes.rankLogoContainer}>
                            <img src=".\Images\rank2.png"></img>
                            <span className={classes.number}> 2 </span>
                        </div>
                        <h1>Kordan</h1>
                    </div>
                </a>
                <a href="https://www.dotabuff.com/players/101924555" style={{textDecoration: "none"}}>
                    <div className={classes.column2}>
                        <div className={classes.rankLogoContainer}>
                            <img src=".\Images\rank2.png"></img>
                            <span className={classes.number}> 4 </span>                            
                        </div>
                        <h1>Afterlike</h1>
                    </div>
                </a>
                <h1></h1>
                
            </div>
            
        </section>
    );
};

export default Section1;