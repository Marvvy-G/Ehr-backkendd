import React, {Component} from 'react';


class SingleClient extends Component {
    render(){
        return(
            <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src={this.props.img} alt="..." aria-label="Microsoft Logo" /></a>
            </div>
        )
    }
}

export default SingleClient;