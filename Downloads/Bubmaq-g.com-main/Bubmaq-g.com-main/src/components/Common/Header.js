import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render () {
        return(
            <header className="masthead" style={{backgroundImage: `url(${this.props.img})`}}>
            <div className="container">
                <div className="masthead-subheading">{this.props.title}</div>
                <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                 {this.props.showButton &&
                     <Link className="btn btn-primary btn-xl text-uppercase" to={this.props.link}>{this.props.buttonText}</Link>
                 }
            </div>
        </header>
        )
    }
}

export default Header;