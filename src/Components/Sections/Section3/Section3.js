import classes from "./Section3.module.css"

const Section3 = () => {
    return (
        <section className={classes.Section3Container}>
            <section className={classes.LeftArticleContainer}>
                <article className={classes.article1}>
                    <h1>M88 invitational Champion</h1>
                    <img src=".\Images\Fl9KrteaAAAq57W.jpg"></img>
                    <p>
                    Kordan played his first ever professional match in the invitational held by M88.
                    Top SEA teams were invited for this event and Kordan managed to come out as champion, defeating
                    well-known teams like Boom and Talon.
                    </p>
                </article>
                <div className={classes.vl}></div>
            </section>
            
            <section className={classes.RightArticleContainer}>
                <article className={classes.article2}>
                    <h1>DPC Season</h1>
                    <img src=".\Images\dpcStandings.jpg"></img>
                    <p>
                    Going into his first dpc season, Kordan's team started out strong, earning 
                    themselves the top 1 spot by taking 3 win and 1 losses,. Unfortunately, several losses resulted in a finishing spot of 6th. Nevertheless,
                    the newly formed Bleed team were commended by several veterans like KuKu and Yopaj as "a team to look out for". As of now, Bleed is doing
                    very well in their 2nd DPC tour and might just be taking the first spot this time.                   
                    </p>
                </article>
                <hr></hr>
                <article className={classes.article3}>
                    <h1>Upcoming schedules</h1>
                    <img src=".\Images\kordanInterview.jpg"></img>
                    <p>Kordan will be slated to play in the upcoming ESL One Berlin Major 2023, and also represent Team Singapore
                        in future international tournaments. He hopes to be able to participate in the prestigious upcoming 
                        ti12
                    </p>
                    <p></p>
                </article>
            </section>
        </section>
    );
};

export default Section3;