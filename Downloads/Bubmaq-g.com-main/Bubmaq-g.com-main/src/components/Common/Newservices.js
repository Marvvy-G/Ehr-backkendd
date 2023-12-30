import React, {Component} from 'react';
import NewservicesItem from './NewservicesItem';
import img1 from '../assets/img/portfolio/cake.jpg';
import img2 from '../assets/img/portfolio/water.jpg';
import img3 from '../assets/img/portfolio/general-contractor.jpg';
import img4 from '../assets/img/portfolio/farming.jpg';
import img5 from '../assets/img/portfolio/livestock.jpg';
import img6 from '../assets/img/portfolio/events-mmgt.jpg';

const newservices = [
    {title:'Catering', subtitle:'Pasteries, healthy Food, beverages', img:img1},
    {title:'Water Production', subtitle:'Clean and healhty water in our community', img:img2},
    {title:'General Contractor', subtitle:'Trading, supply of goods and services, real-estate rental services', img:img3},
    {title:'Farming', subtitle:'Use of new farming techniques to produce healty fruits and vegetable', img:img4},
    {title:'Livestock', subtitle:'Our primary focus in the livestock industry is chicken (all breeds)', img:img5},
    {title:'Events Management', subtitle:'We handle planning, decor and management for your events', img:img6}
];
class Newservices extends Component {
    render(){
        return(
            <section className="page-section bg-dark" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{color:"white"}}>Services</h2>
                    <h3 className="section-subheading text-muted">We are committed to excellence.</h3>
                </div>
                <div className="row">
                    
                    {newservices.map((item, index) => {
                        return <NewservicesItem {...item} key={index} /> 
                    })}
                  
                </div>
            </div>
        </section>
        )
    }
}

export default Newservices; 