import shell from "./PageShell.module.css"
import styles from "./FAQ.module.css"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { faqItems } from "./FAQ/FAQItems"

export default function FAQ() {

    const [openId, setOpenId] = useState(null)

    // on page load, open from url hash
    useEffect(() => {
        // window.location.hash returns #faq-item-name, rid the #
        const hash = window.location.hash.replace("#", "")
        // check if one of the items ids matches the user inputed hash substring
        const matchExists = faqItems.some(item => item.id === hash)

        if (matchExists) {
            setOpenId(hash)
        }
    }, [])

    // control which FAQ accordian item is open and what appears in browser URL
    function handleToggle(id) {
        // if clicked item is already open
        if (openId === id) {
            setOpenId(null) // close accordian
            window.history.replaceState(null, "", "/faq") // remove the hash from URL
        } else { // a different FAQ item was clicked
            setOpenId(id)
            const hashURL = `/faq#${id}`
            window.history.replaceState(null, "", hashURL)
        }
    }

    return (

        <div className={shell.container}>
            <div className={shell.whiteBlock}>
                <div className={styles.faqList}>
                    <h1 className={styles.faqTitle}>
                        <span className={styles.fullTitle}>Frequently Asked Questions</span>
                        <span className={styles.shortTitle}>FAQ</span>
                    </h1>
                    {faqItems.map((item) => {
                        const Answer = item.answer
                        const isOpen = openId === item.id

                        return (
                            <div key={item.id} className={styles.faqItem}>
                                <button
                                    type="button"
                                    className={styles.questionButton}
                                    onClick={() => handleToggle(item.id)}
                                >
                                    {isOpen ? "▼ " : "▶ "}
                                    {item.question}
                                </button>

                                {isOpen && (
                                    <div className={styles.answer}>
                                        <Answer />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                    <Link className={`${styles.backLink} ${shell.backLink}`} to="/">◄ Home</Link>
                </div>

            </div>
        </div>
    )
}