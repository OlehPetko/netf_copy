import styles from './BottomNavigation.module.scss'
import button from "../Button/Button";

function BottomNavigation({activeTab, setActiveTab}) {
    const tabs = [
        {_id: 1, name: 'Overview'},
        {_id: 2, name: 'Episodes'},
        {_id: 3, name: 'Details'},
    ]

    return (
        <nav className={styles.nav}>
            {tabs.map(tab => <button className={activeTab === tab._id ? styles.active : ''}
                                     key={tab._id}
                                     onClick={() => setActiveTab(tab._id)}>
                {tab.name}
            </button>)}
        </nav>
    )
}
export default BottomNavigation