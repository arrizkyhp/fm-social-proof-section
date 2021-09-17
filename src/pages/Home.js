import apiData from 'json/apiData.json';
import Attribution from 'parts/Attribution';
import Card from 'parts/Card';
import Hero from 'parts/Hero';


const Home = () => {


    return (
       <>
        <Hero data={apiData.ratings} />
        <Card data={apiData.reviews} />
        <Attribution />
       </>
     );
}

export default Home;