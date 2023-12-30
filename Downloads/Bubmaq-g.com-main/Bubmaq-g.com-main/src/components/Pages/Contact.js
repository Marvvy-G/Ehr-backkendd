// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnbdge");
  if (state.succeeded) {
      alert("form submitted. Thank you very much");
    }
  return (
 <section className="page-section" id="contact">
 <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase" id='contactus'>Contact Us</h2>
                            <h3 className="section-subheading">Bubmaq-G is committed to excellent customer service!</h3>
                        </div>

                
      <form onSubmit={handleSubmit}>
        <div className="row align-items-stretch mb-5">
             <div className="form-group"> 
                  <label htmlFor="name">
                      Full Name
                 </label>
                 <input 
                 className="form-control" 
                 id="name"
                 type="name" 
                 name="name"
                 placeholder="Full Name"
                  />
                 <ValidationError 
                 prefix="name" 
                 field="name"
                 errors={state.errors}
                 />

                   <label htmlFor="email">
                        Email Address
                   </label>
                  <input 
                   className="form-control" 
                   id="email"
                   type="email" 
                   name="email"
                   placeholder="peterpan@xyz.com"
                    />
                   <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />

          <div className="form-group form-group-textarea mb-md-0"> 
                    <label>
                    Message
                    </label>
                    <textarea 
                        className="form-control" 
                        id="message"
                        name="message"
                        placeholder="Type your message"
                        data-sb-validations="required"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>                        

            </div>
      
</div>

                <div className="text-center">
                    <button 
                        className="btn btn-primary btn-xl text-uppercase text-centre"
                        id="submitButton" 
                        type="submit"
                        disabled={state.submitting}
                    >
                            Send Message
                    </button>
                </div>
    </form> 
    
    </div>
</section>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;
