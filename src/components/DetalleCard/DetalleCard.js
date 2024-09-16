import './DetalleCard.css'

import React, {Component} from 'react'

class DetalleCard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            fav: false
        }
    }
    handlefav(){
        this.setState({
            fav: !this.state.fav
        })
    }
    render(){            
        const { poster_path, title, vote_average, genres, release_date, runtime, overview, } = this.props.pelicula;
        return(
            <article  className='card-detalle'>
                <section className = 'detalle'>
                    <img src= {`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                </section>
                <section className = 'detalle'>
                    <h4> {title} </h4> 
                    <ul>
                        <li>Rating: {vote_average}</li>
                        <li>Fecha de estreno: {release_date}</li>
                        <li>Duracion: {runtime}</li>
                        <li>Genero/s:</li>
                        <ul> 
                            {genres && genres.length > 0 ? (genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)):(<li>No hay generos disponibles</li>)}
                        </ul>                        
                    </ul>
                    <p>{overview}</p> 
                    <button className = "more" onClick={()=> this.handlefav()}>{this.state.fav ? "Quitar de favoritos" : "Agregar a favoritos"}</button>    
                </section>
                
            </article>
         
        );
    }

}

export default DetalleCard