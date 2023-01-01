import styles from './Search.module.scss'

function Search() {
    return (
        <div className={styles.search}>
            <div>
                <i className='bx bx-search-alt'></i>
                <input placeholder='I`m searching for...'/>
            </div>
            <i className='bx bx-customize'></i>
        </div>
    );
}

export default Search;
