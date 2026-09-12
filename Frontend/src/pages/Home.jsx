import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps.jsx";
import BgSlider from "../components/BgSlider.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TryNow from '../components/TryNow';

const Home =() => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit]">
            {/* Hero Section*/}
            <Header/>
            {/* Background Removal Steps Section*/}
            <BgRemovalSteps/>
            {/* Background Removal Slider Section*/}
            <BgSlider/>
            {/* Buy Credit Card Section*/}
            <Pricing/>
            {/* User Testimonial Section*/}
            <Testimonials/>
            {/* Try now Section*/}
            <TryNow/>

        </div>
    )
}
export default Home;
