import Upcoming from '../components/Upcoming/Upcoming';

const UpcomingGeneral = ()=>{
    return(
        <>
            <h1>Upcoming</h1>
            <section>
                <Upcoming limit = {20}/>
            </section>
        </>

    )
}
export default UpcomingGeneral;