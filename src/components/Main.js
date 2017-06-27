import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import styles from './Main.css'
import Header from './Header'

class Main extends React.PureComponent {
    render() {
        return <div>
            <Header />
            <div className={styles.container}>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    }
}

export default Main;