import styles from './Sidebar.module.scss'

function Sidebar({isSidebarShow, setIsSidebarShow }) {
    const menu = ['Popular', 'TV Shows', 'Films', 'My list']

    return (
        <div className={styles.sidebar} style={{width: isSidebarShow ? 30 : 15 }}>
            <button onClick={() => setIsSidebarShow(true)}>
            <i className={`bx bx-${isSidebarShow ? 'X' : 'border-left'}`}></i>
            </button>
            <ul>
                {menu.map(title =>
                    <li>
                        <a href={title}>{title}</a>
                    </li>)}
            </ul>
        </div>
    );
}

export default Sidebar;
