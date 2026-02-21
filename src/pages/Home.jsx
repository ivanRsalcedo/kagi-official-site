import { Link } from "react-router"

export default function Home() {
    return (
        <div>
            <nav className="home-nav">
                <a href="https://www.patreon.com/c/kagimusic" target="_blank" rel="noopener noreferrer">Free MIDI/WAV</a>
                <Link to='/faq'>FAQ</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}