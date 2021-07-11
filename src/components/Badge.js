import React from 'react';

import './styles/Badge.css';
import Logo from '../images/Logo_0TD.jpg';
import Gravatar from './Gravatar.js'


class Badge extends React.Component {

    render() {

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={Logo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__Section-Name">
                    <Gravatar
                        className="Badge__avatar"
                        email={this.props.email}
                        alt="Avatar"
                    />
                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>

                <div className="Badge__Section-Info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__Footer">
                    #HashtagGenerico
                </div>
            </div>
        )
    }
}

export default Badge;