import React from 'react';
import { show } from 'lib/modal';
import ModalSelectName from 'components/ModalSelectName';
import styles from './index.css';

export default class Input extends React.Component {
    showSelecter() {
        show(<ModalSelectName select={val => this.props.onChange(val)}/>);
    }
    render() {
        return <div onClick={this.showSelecter.bind(this)} className={styles.outer}>
            {this.props.value || this.props.placeholder}
        </div>
    }
}
