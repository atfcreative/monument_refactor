import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div>
               <form class="contact">
                    <input type="text" placeholder="Full Name" class="col-third" />
                    <input type="email" placeholder="Email" class="col-third" />
                    <input type="text" placeholder="Subject" class="col-third" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;