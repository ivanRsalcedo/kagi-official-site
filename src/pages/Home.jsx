import { Link } from "react-router"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div id="home" className={styles.container}>
            <div>
                <img src="/images/logo-with-text.png" className={styles.homeLogo} alt="KagiMusic Logo" />
            </div>
            <nav className={styles.socialLinks}>
                <a href="https://open.spotify.com/artist/7mvgcTvoWy2S1IPZTO2oSL" target="_blank" rel="noopener noreferrer">
                    <img src="/images/spotify.png" alt="Spotify" />
                </a>
                <a href="https://twitter.com/KagiMusic" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter.png" alt="Twitter" />
                </a>
                <a href="https://soundcloud.com/kagimusic" target="_blank" rel="noopener noreferrer">
                    <img src="/images/soundcloud.png" alt="SoundCloud" />
                </a>
                <a href="https://www.youtube.com/channel/UCvfSrJPlMl1KxYQI_ZETdtw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                    <img src="/images/youtube.png" alt="YouTube" />
                </a>
                <a href="https://kagimusic.gumroad.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/gumroad.png" alt="Gumroad" />
                </a>
                <a href="mailto:music.kagi@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/mail.png" alt="Email Kagi" />
                </a>
            </nav>
            <nav className={styles.textLinks}>
                <a href="https://www.patreon.com/c/kagimusic" target="_blank" rel="noopener noreferrer">Free MIDI/WAV</a>
                <Link to='/faq'>FAQ</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}