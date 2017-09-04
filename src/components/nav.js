import Auth from '../Auth/Auth.js';
// console.log(Auth);
import React from 'react';

import './css/nav.css';


export default class Nav extends React.Component {

    constructor() {
        super()
    }

    login() {
        const auth = new Auth();
        auth.login();
        // this.props.auth.login();
    }

    render() {
        return (
            <div className="navigation-bar">
                <nav className="navbar-header">
                    <a className="nav-logo" href="/">Calm Stats</a>
                    <ul className="navbar-right">
                        <li>
                            <a className="nav-button" href="#" onClick={this.login}>Login</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

// I think i need to change this to be a class but im not sure.
// export default function Nav(props){
// export default class Auth {
//
//
//     constructor(){
//
//     }
//
//     login() {
//         this.props.auth.login();
//     }
//
//     // return (
//     //     <div className="navigation-bar">
//     //         <nav className="navbar-header">
//     //             <a className="nav-logo" href="/">Calm Stats</a>
//     //             <ul className="navbar-right">
//     //                 <li>
//     //                     <a className="nav-button" href="#" onClick={login}>Login</a>
//     //                 </li>
//     //             </ul>
//     //         </nav>
//     //     </div>
//     //
//     // )
// }


//
// import React from 'react';
//
// import './css/nav.css';
//
//
// // I think i need to change this to be a class but im not sure.
// export default function Nav(props){
//
//
//     // login() {
//     //     this.props.auth.login();
//     // }
//
//     return (
//         <div className="navigation-bar">
//             <nav className="navbar-header">
//                 <a className="nav-logo" href="/">Calm Stats</a>
//                 <ul className="navbar-right">
//                     <li>
//                         <a className="nav-button" href="#">Login</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//
//     )
// }