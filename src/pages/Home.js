import apiData from 'json/apiData.json';
import Card from 'parts/Card';
import Hero from 'parts/Hero';


const Home = () => {


    return (
       <>
        <Hero data={apiData.ratings} />
        <Card data={apiData.reviews} />
       </>
     );
}

export default Home;