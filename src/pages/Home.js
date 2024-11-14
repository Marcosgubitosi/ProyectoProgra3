import NowPlaying from '../components/NowPlaying./NowPlaying';
import Upcoming from '../components/Upcoming/Upcoming';
import { Link } from 'react-router-dom'
import SearchForm from '../components/SearchForm/SearchForm';
import { Component } from 'react';


class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <SearchForm history={this.props.history}/>
                <h1>Home Page</h1>
                <h2>Now Playing (Top 5)</h2>
                <button><Link to="/nowplaying" className="link">Ver Todas</Link></button>
                <section>
                    <NowPlaying limit = {5}/>
                </section>
                <h2>Upcoming (Top 5)</h2>
                <button><Link to="/upcoming" className="link">Ver Todas</Link></button>
                <section>
                    <Upcoming limit = {5}/>
                </section>
                <Link to="/search" className="link"></Link>
            </>

        )
}}

export default Home;