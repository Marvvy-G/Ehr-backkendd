import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <section className="page-section bg-light" id="team">
            <div className="container">

                <div className='row'>
                <div className="col-lg-4">
               
                <h4> <Link className="nav-link" to="/services">Services</Link> </h4>
                <div style={{listStyle:'none'}} className="large text-muted">
                <li>General Contractor</li>
                <li>Events Management</li>
                <li>Catering and Food Delivery</li>
                <li>Water Production</li>
                <li>Farming</li>
                <li>Livestock Delivery</li> 
                </div>
                </div>
                
                    <div className="col-lg-4">       
                    <h4> <Link className="nav-link" to="/contact">Contact Us</Link> </h4>
                        <p className="large text-muted"><strong>Our Office:</strong> Porsche Terraces Estate, Phase 4, Nigeria.</p>
                        <p className="large text-muted"> <strong>Send an Email:</strong> contact@bubmaqg.com</p>
                        <p className="large text-muted"><strong>Telephone:</strong> +234-816-972-1908 </p>
                    </div>

                    <div className="col-lg-4">
                    <h4> <Link className="nav-link" to="/about">Our Mission</Link> </h4>
                    <p className="large text-muted">Excellence and Community Development. </p>
                    </div>
                </div>
            </div>

        </section>
        )
    }
}
export default Footer;