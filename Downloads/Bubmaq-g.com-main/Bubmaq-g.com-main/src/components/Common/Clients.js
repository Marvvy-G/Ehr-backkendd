import React, {Component} from 'react';
import SingleClient from './SingleClient';

import img1 from '../assets/img/logos/microsoft.svg';
import img3 from '../assets/img/logos/facebook.svg';
import img2 from '../assets/img/logos/google.svg';
import img4 from '../assets/img/logos/ibm.svg';



const logo = [
    { img:img1},
    { img:img2},
    { img:img3},
    { img:img4}
]
    
class Clients extends Component{
    render(){
        return(
            <div class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    {logo.map((item, index) => {
                        return <SingleClient {...item} key={index} />
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Clients;