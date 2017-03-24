import React from 'react';
import { dismiss} from 'lib/modal';
import styles from './index.css';

export default class ModalAddName extends React.Component {
    confirm() {
        this.props.onAdded(this.refs.input.value);
        dismiss();
    }

    render() {
        return <div className={styles.outer}>
            <div className={styles.inner}>
            <h2>add new Name</h2>
            <input ref="input"/>
            <p><button onClick={this.confirm.bind(this)}>Confirm</button>
                <button onClick={dismiss}>cancel</button>
            </p>
            </div>
        </div>
    }
}
