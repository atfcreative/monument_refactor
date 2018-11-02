import React, { Component } from 'react';
import Hero from './Hero/Hero'
import Form from './Form/Form'
import Archive from './Archive/Archive'
import About from './About/About'


class Index extends Component {
    render() {
        return (
            <div>
               <Hero />
               <Archive />
               <About />
               <Form />
            </div>
        );
    }
}

export default Index;