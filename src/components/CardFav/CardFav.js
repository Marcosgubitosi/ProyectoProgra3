import React, {Component} from 'react'


class CardFav extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    
    render() {
        
        return (
            <>
                <h4> {this.props.movie.title}</h4>

            </>
       
        );
      }
    }


export default CardFav