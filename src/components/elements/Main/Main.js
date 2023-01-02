import styles from "./Main.module.scss"
import Information from "./Information";
import Sidebar from "../../UI/Sidebar/Sidebar";
import {DATA} from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import {useState} from "react";
function Main() {
    const [isSidebarShow, setIsSidebarShow] = useState(false)
    return (
        <div className={styles.wrapper}>
            <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow}/>
       <div className={styles.main} style={{background: `url(${DATA[0].mainImage})`, width: isSidebarShow ? 70 : 85}}>
           <Information movie={DATA[0]} />
           <BottomNavigation   />
       </div>
        </div>
    )
}
export default Main