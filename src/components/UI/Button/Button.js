import styles from './Button.module.scss'
import button from "bootstrap/js/src/button";

function Button({children, callBack}) {
    return (
        <button className={styles.button} onClick={callBack}>
            {children}
        </button>
    );
}

export default Button;
