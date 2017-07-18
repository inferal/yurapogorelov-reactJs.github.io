import React, { Component } from 'react';

import Header from './views/Header';
import Footer from './views/Footer';

class App extends Component{

    render(){
        return(
            <div>
                <Header />
                <h1>Мой Проект</h1>
                <Footer />
            </div>
        )
    }
}


export default App;