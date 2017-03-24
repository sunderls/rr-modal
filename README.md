# rr-modal

react redux modal example.  Here is a demo of how I think react modals can be implemented.

`react-modal` is good but not easy to use I think, it retricts the display of modals to state, which is not easy for modal stacking and animation. 

Here is the demo of managing modals together with a stack.

## code

demo here: https://sunderls.github.io/rr-modal/dist/


### `/lib./modal.jsx`

`modal.jsx` exports following things

1. `show()` `dismiss()` , which enables displaying & stacking modals
2. `<Modals />` , display modal stacks
3. `use()` to bind to store
4. `reducer()` to create redux store


## usage

1. import reducer to create a store
```js
import * as Modal from './lib/modal';
const store = createStore(combineReducers({
	modals: Modal.reducer
}));

Modal.use(store);
```

2. put `<Modals />` in your component

```js
<div className={styles.modals}>
    <Modals />
</div>
```

3. use `show()` and `dismiss()` in your code

following is a component which shows a modal with callback when clicked.
```js
import { show } from 'lib/modal';
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

```