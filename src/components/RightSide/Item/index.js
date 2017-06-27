import React from 'react'
import styles from './index.css'

class Item extends React.PureComponent {
    render(){
        return <div className={styles.eachItem}>Cell</div>
    }
}

export default Item;