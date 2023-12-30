import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
class App extends Component {
  render () {
    return(
      <div>
        <Router>
          <PageWrapper>
            <Routes>
              <Route
                exact={true}
                path="/"
                element={<Home/>}
             />
             <Route
                path="/services"
                element={<Services/>}
             />
              <Route
                path="/about"
                element={<About/>}
             />
            
              <Route
                path="/contact"
                element={<Contact/>}
             />
             
      </Routes>
      </PageWrapper> 
      </Router> 

      </div>
    );
  }
  
}


export default App;
