import React from 'react';
import Auth from '../Auth/Auth.js';
import './css/footer.css';


export default class Nav extends React.Component {

    constructor() {
        super()
    }

    login() {
        const auth = new Auth();
        auth.login();
        // this.props.auth.login();
    }

    logout() {
        const auth = new Auth();
        auth.logout();
    }

    render() {

        const navHeaderStyle = {paddingTop: "5px"};
        const logoStyle = {width: "35px"};
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="footer text-center" role="navigation">
                <a className="footer-logo" href="https://github.com/Daine-M27/calm-stats-client">
                        <span className="ptl">
                            See Client App on GitHub
                        </span>
                </a>
                <a className="footer-logo" href="https://github.com/Daine-M27/express-server">
                        <span className="ptl">
                            See Server App on GitHub
                        </span>
                </a>
            </div>

        )
    }
}