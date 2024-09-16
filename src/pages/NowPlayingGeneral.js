import NowPlaying from '../components/NowPlaying./NowPlaying';

const NowPlayingGeneral = ()=>{
    return(
        <>
            <h1>Now Playing</h1>
            <section>
                <NowPlaying limit = {20}/>
            </section>
        </>

    )
}
export default NowPlayingGeneral;