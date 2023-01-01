import styles from "./Main.module.scss"
import Information from "./Information";
function Main() {
    return (
        <div className={styles.main}>
            <Sidebar />
       <div style={{}}>
           <Information />
       </div>
        </div>
    )
}
export default Main