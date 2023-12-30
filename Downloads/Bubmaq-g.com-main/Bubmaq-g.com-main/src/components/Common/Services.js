import React, {Component} from 'react';
import SingleService from './SingleService';

const services = [
    {title: 'Events Management', description:'Party, Brunch, Picnic, Weddings', icon:'fa fa-heart'},
    {title: 'Catering', description:'Cake, Food, Pasteries', icon:'fa-cake'},
    {title: 'Agriculture', description:'Livestock, Yam, Maize', icon:'fa-tree'}
];

class Services extends Component {
    render(){
        return(
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">We are committed to excellence.</h3>
                </div>
                <div className="row text-center">
                    {
                        services.map((service, index) => {
                            return <SingleService {...service} key={index}/>
                        })
                    }

                </div>
            </div>
        </section>
        )
    }
}

export default Services;