import React, {Component} from 'react'
import UpcomingCard from '../UpcomingCard/UpcomingCard'
import "./Upcoming.css"


class Upcoming extends Component {
    constructor(){
        super()
        this.state = { datos: [] }
    }
    componentDidMount (){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGYxNjk2MDJhNDhmNDNlZmM5NWRlOTBmNWIzMjk5MSIsIm5iZiI6MTcyNjQxMzcyNy4xNzk5NTgsInN1YiI6IjY2ZTZmOTY1ZDdiY2NhNTI0ZGIwOWM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6Ow_K_PM0RM2Vt-KN6IdqY_PgrstVijF790b4o8L4c'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response => response.json())
            .then(data => this.setState({datos: data.results}))
            .catch(err => console.error(err));

    }
    render() {  
        const {limit} = this.props      
        return (
          <section className='container'>
            {this.state.datos.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.datos.map((pelicula, idx) => (
                idx < limit && <UpcomingCard key={idx} pelicula={pelicula} />
              ))
            )}
          </section>
        );
      }
      
}

export default Upcoming