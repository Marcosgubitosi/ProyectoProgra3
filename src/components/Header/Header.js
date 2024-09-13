import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';


class Header extends Component{
    constructor (props) {
        super(props)
        this.state = ""
    }

    render(){
        return (
            <nav className='header'>
                <Navbar/>
                
            </nav>
        )
    }
}

export default Header