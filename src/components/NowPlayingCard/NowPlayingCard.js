import './NowPlayingCard.css'

import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NowPlayingCard extends Component {
    constructor(props){
        super(props)
        // console.log(this.props);
        
        this.state = {verDesc: false}
    }
    handleverDesc(){
        this.setState({
            verDesc: !this.state.verDesc
          })
    }
    handlefav(){
        this.setState({
            fav: !this.state.fav
        })
    }
    render(){
        // console.log(this.props);
            
        const { poster_path, title, overview, id } = this.props.pelicula;
        return(
            <article  className='card'>
                <img src= {`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                <h4> {title} </h4> 
                <br></br>
                <button className = "more" onClick={()=> this.handlefav()}>{this.state.fav ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                <p className = "more"><Link to= {`/pelicula/id/${id}`} className="link">Ir a detalle</Link></p>
                <article className={ this.state.verDesc ? "show" : "hide" }>
                    <p>{overview}</p> 
                </article>
                <p className = "more" onClick={()=> this.handleverDesc()}>{this.state.verDesc ? "Ocultar Descripcion" : "Ver Descripcion"}</p>
            
            </article>
         
        );
    }

}

export default NowPlayingCard