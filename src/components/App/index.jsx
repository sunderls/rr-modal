import React from 'react';
import Modals from 'lib/modal';
import InputName from 'components/Input';
import styles from './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render() {
        return <div className={styles.app}>
                <h1>rr-modal example</h1>
            <div className={styles.main}>
                <InputName value={this.state.name} onChange={(name) => {this.setState({name})}} placeholder="select name"/>
            </div>
            <div className={styles.modals}>
                <Modals />
            </div>
        </div>
    }
}

if (module.hot) {
    module.hot.accept()
}