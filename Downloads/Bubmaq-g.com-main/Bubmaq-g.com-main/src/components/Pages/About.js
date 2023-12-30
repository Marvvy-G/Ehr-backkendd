import React, {Component} from 'react';
import Header from '../Common/Header';
import img from '../assets/img/aboutus.jpg';
import Footer from '../Common/Footer';


 class About extends Component {
        render(){
          return(
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's really a great story" 
                    showButton={false }
                    img= {img}
                /> 
            

                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Journey</h2>
                            <h3 className="section-subheading text-muted">
                                    A family-run business called Bubmaq-G was founded in Northern Nigeria. 
                                    It was created in order to meet the community members' growing demands and Nationwide as necessary based on the company's capacity per time inline with the current technological trends. 
                                    One of the goals Bubmaq-G has to this day has been to facilitate General Contract delivery with maximum satisfactory Consulting Services Covering diverse fields, provide healthy food and clean water to it's customers as necessary. 
                                    In addition to Real Estate, Catering, Event Management, General Contracting, Travel and Tours Consulting with Visa Processing, Buying of Flight Tickets and various training programs focused on empowering individuals and families,
                                    we have now expanded our services to Coporate Custom Made Software.
                                    <br/><strong>To us its all about giving to our community!</strong></h3>
                        </div>
                        <ul className="timeline">
                        <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Travel and Tour Consulting</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">Our catering industry is intended to be flavorful and inventive. African specialties are produced as part of our catering services. We make an effort to maintain taste quality.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Visa Processing</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">In 2017 our Water production sector was developed. Our community now has access to clean water thanks to the development of our water production sector.</p></div>
                                </div>
                            </li>
                           
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>General Contracting</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">Our catering industry is intended to be flavorful and inventive. African specialties are produced as part of our catering services. We make an effort to maintain taste quality.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Custom on Demand Software Development</h4>
                                        
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">In 2017 our Water production sector was developed. Our community now has access to clean water thanks to the development of our water production sector.</p></div>
                                </div>
                            </li>
                            
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Food Sector</h4>
                                        <h4 className="subheading">Our Catering Sector</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">Our catering industry is intended to be flavorful and inventive. African specialties are produced as part of our catering services. We make an effort to maintain taste quality.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Drinkable Water</h4>
                                        <h4 className="subheading">Water Production</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">In 2017 our Water production sector was developed. Our community now has access to clean water thanks to the development of our water production sector.</p></div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Agriculture</h4>
                                        <h4 className="subheading">Fresh crops and Livestock</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">Fresh organic farm products are quickly expanding in our lucrative agriculture sector, serving our community.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Events Management</h4>
                                        <h4 className="subheading">Weddings, Parties, Lunching ceremonies</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">We handle and arrange events, provide culinary and bakery services, hospitality services, interior and exterior decoration, and function as promoters of entertainment.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <Footer />
                </div>
          )   
        }
 }

 export default About;