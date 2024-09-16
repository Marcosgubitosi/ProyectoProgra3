import NowPlaying from '../components/NowPlaying./NowPlaying';
import Upcoming from '../components/Upcoming/Upcoming';
import { Link } from 'react-router-dom'


const Home = ()=>{
    return(
        <>
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
        </>

    )
}
export default Home;