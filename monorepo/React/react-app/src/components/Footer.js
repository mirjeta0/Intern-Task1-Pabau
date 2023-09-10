import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p> Powered by <img src={`${process.env.PUBLIC_URL}/logoPabau.png`} alt="Logo" className="logo" /></p>
            </footer>
        );
    }
}

export default Footer;
