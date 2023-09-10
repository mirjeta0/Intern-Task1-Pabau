import React, {Component} from 'react';

class Header extends Component {
    render() {
        const { step } = this.props;

        return (
            <header>
                <h3>Choose a Service</h3>
                <p>Current Step: {step}</p>
            </header>
        );
    }
}
export default Header;
