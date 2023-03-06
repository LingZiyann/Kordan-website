import classes from "./Section3.module.css"

const Section3 = () => {
    return (
        <section className={classes.Section3Container}>
            <section className={classes.LeftArticleContainer}>
                <article>
                    HELLO
                    <img></img>
                </article>
            </section>
            <section className={classes.RightArticleContainer}>
                <article>
                    <img></img>
                </article>
                <article>
                    <img></img>
                </article>
            </section>
        </section>
    );
};

export default Section3;