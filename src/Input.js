import React from 'react';

export class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleEnterPress(e) {
        if(e.key === 'Enter' && e.target.value!=='') {
            this.props.onKeyPress(e.target.value);
        }
    }

    render() {
        let value = this.props.value;
        return (
            <input type="text" value={value} onChange={this.props.onChange} onKeyPress={this.handleEnterPress}></input>
        );
    }
}