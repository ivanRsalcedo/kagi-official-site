import { Link } from "react-router"
import shell from "./PageShell.module.css"
import styles from "./NotFound.module.css"

export default function NotFound() {
    return (
        <div className={shell.container}>
            <div className={shell.whiteBlock}>
                <div className={styles.content}>
                    <img
                        src="/images/404.png"
                        alt="Lost duck"
                        className={styles.image}
                    />

                    <h1>404 — Page Not Found</h1>

                    <p>The page you’re looking for doesn’t exist.</p>

                    <Link to="/" className={shell.backLink}>
                        ◄ Home
                    </Link>
                </div>
            </div>
        </div>
    )
}