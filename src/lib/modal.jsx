import React from 'react';
import { connect } from 'react-redux';

let store = null;

export const show = (modal) => {
    store.dispatch({
        type: 'SHOW_MODAL',
        modal
    });
}

export const dismiss = () => {
    store.dispatch({
        type: 'DISMISS_MODAL',
    })
}

export const use = (s) => {
    store = s;
}

export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
        return state.concat(React.cloneElement(action.modal, {
            key: state.length - 1,
            dismiss
        }));
    case 'DISMISS_MODAL':
        return state.slice(0, state.length - 1);
    default:
        return state;
  }
};

class Modals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.modals}</div>;
    }
}

export default connect(state => ({
    modals: state.modals
}))(Modals);
