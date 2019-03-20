import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'
import { DefaultForm } from './DefaultForm'

emailjs.init('user_l5AOOMIuYYo5CHrqiNZXn')
class Contact extends Component {
   constructor() {
      super()
      this.state = {
         message: '',
         email: '',
         subject: '',
         name: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(evt) {
      evt.preventDefault();
      this.setState({
         [evt.target.name]: evt.target.value
      })
   }
   handleSubmit(evt) {
      evt.preventDefault()
      console.log('submit button clicked', this.state)

   }
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <DefaultForm
                     handleSubmit={this.handleSubmit}
                     handleChange={this.handleChange}
                     props={this.state}
                  />

                  <div id="message-warning"> Error</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
