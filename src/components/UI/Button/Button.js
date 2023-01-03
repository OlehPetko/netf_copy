import styles from './Button.module.scss'
import button from "bootstrap/js/src/button";

function Button({children, cb}) {
    return (
        <button className={styles.button} onClick={cb}>
            {children}
        </button>
    );
}

export default Button;
