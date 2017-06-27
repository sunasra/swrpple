import React from 'react'
import styles from './index.css'
import Item from './Item'

class RightSide extends React.PureComponent {

    render(){
        return <div className={styles.rightSide}>
                        <div className={styles.items}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                </div>
    }
}

export default RightSide;