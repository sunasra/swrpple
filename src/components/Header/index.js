import React from 'react'
import styles from './index.css'

class Header extends React.PureComponent {
    changeView() {
        
    }
    render () {
        return <div className={styles.header}>
            <button onClick={this.changeView}>Grid View</button>
            <button onClick={this.changeView}>List View</button>
        </div>
    }
}

export default Header;