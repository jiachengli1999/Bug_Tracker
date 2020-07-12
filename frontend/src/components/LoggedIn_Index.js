import React, { Component } from 'react'
import Header from './Header.js'
import Menu from './Menu.js'
import Content from './Content.js'
import Footer from './Footer.js'

class LoggedIn_Index extends Component{
    render(){
        return(
            <div>
                <Header />
                <Menu />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default LoggedIn_Index