import React from 'react';
import { dismiss, show } from 'lib/modal';
import styles from './index.css';
import ModalAddName from 'components/ModalAddName'

export default class ModalSelectName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['a', 'bb', 'ccc']
        }
    }

    select(name) {
        this.props.select(name);
        dismiss();
    }

    addNew() {
        show(<ModalAddName onAdded={name => this.setState({names: this.state.names.concat(name)})} />);
    }

    render() {
        return <div className={styles.outer}>
            <div className={styles.inner}>
            {
                this.state.names.map(name => <p key={name} onClick={this.select.bind(this, name)} className={styles.item}>{name} </p>)
            }
            <button onClick={this.addNew.bind(this)}>Add</button>
            <button onClick={dismiss}>close</button>
            </div>
        </div>
    }
}
