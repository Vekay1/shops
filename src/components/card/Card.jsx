import styles from './Card.module.css'
import arrowImg from './../../img/icons/arrow.svg'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <a href="/details" className={styles.card_link}> </a>
                <img className={styles.card_img} src={props.img} alt="Category"/>
                <div className={styles.card_body}>
                    <div className={styles.card_text}>
                        <div className={styles.card_title}>{props.title}</div>
                        <div className={styles.card_muted}>Explore Now!</div>
                    </div>
                    <div className={styles.card_icon}>
                        <img src={arrowImg} alt="Open"/>
                    </div>
                </div>

        </div>
);
}

export default Card;