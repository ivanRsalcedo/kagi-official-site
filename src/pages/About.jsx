import styles from "./About.module.css"
import { Link } from "react-router"

export default function About() {
    return (

        <div className={styles.container}>
            <div className={styles.whiteBlock}>
                <div>
                    <img className={styles.duckyGif} src="/images/ducky-walking.gif" alt="Kagi Duckling Walking Animation" />
                    <p className={styles.gifCredit}>
                        gif by <a href="https://x.com/DB_DuckBird" target="_blank" rel="noopener noreferrer">@NokPed</a>
                    </p>
                </div>
                <div className={styles.infoText}>
                    <h1>Hi, I'm Kagi.</h1>
                    <p>
                        I've made original music since 2014. It all started with <a href="https://youtu.be/pwU7wZb7K20?si=3WfoNokgvxzfJneC" target="_blank" rel="noopener noreferrer">a little chiptune BGM</a> made for my brother's school project.
                    </p>
                    <p>
                        Nowadays, my focus is on making cool and cute electronic bangers. :)
                    </p>
                    <p>
                        The sound of Nintendo, early 2010's Monstercat, and Japanese as well as Korean popular music are some of many inspirations!
                    </p>
                    <Link className={styles.backLink} to="/">← Home</Link>
                </div>
            </div>
        </div>
    )
}