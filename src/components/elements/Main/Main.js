import styles from "./Main.module.scss"
import Information from "./Information";
import Sidebar from "../../UI/Sidebar/Sidebar";
import {DATA} from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import {useState} from "react";
import Episodes from "../Episodes/Episodes";
function Main() {
    const [isSidebarShow, setIsSidebarShow] = useState(false)
    const [activeTab, setActiveTab] = useState(false)
    return (
        <div className={styles.wrapper}>
            <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow}/>
       <div className={styles.main} style={{background: `url(${DATA[0].mainImage})`, width: isSidebarShow ? '85%' : '90%'}}>
           {activeTab === 1 ? <Information movie={DATA[0]} /> : activeTab === 2 && <Episodes />}
           <BottomNavigation  activeTab={activeTab} setActiveTab={setActiveTab} />
       </div>
        </div>
    )
}
export default Main