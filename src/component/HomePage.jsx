import React from "react";
import Hizmetlerimiz from "./Hizmetlerimiz";
import Blog from "./Blog";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

// HomePage component to display the home page content
function HomePage() {
    // Function to redirect to Bozyazı location on Google Maps
    function locationBozyazi() {
        window.location.href = 'https://maps.app.goo.gl/atJ3rsPraB4xMebK6';
    }

    return (
        <div className="home-page">
            {/* Title section */}
            <div className="title-section">
                <div className="title-card">
                    <h1>Bozyazı Road Assistance</h1>
                    <p>
                        Our road assistance service is ready to help with any technical issues your vehicles may encounter throughout the day, under the supervision of our active field staff.
                    </p>
                    {/* Button to redirect to Bozyazı location on Google Maps */}
                    <button onClick={locationBozyazi} type="button">
                        Bozyazı Road Assistance
                    </button>
                </div>
            </div>
            {/* Display services */}
            <Hizmetlerimiz />
            {/* Features section */}
            <div className="hizmetler-features">
                <div className="features-section">
                    <div id="features-container">
                        {/* Individual features */}
                        <div className="features">
                            <h2>Bozyazı Road Assistance Services</h2>
                            <p>Our road assistance company provides all roadside assistance services with a sense of public service.</p>
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Car Recovery </h3>
                            <p>Our car recovery staff sets off to recover your vehicle from its location as soon as you request assistance.</p>
                        </div>
                        <div className="features">
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Road Assistance</h3>
                            <p>We strive to assist all stranded vehicles in Bozyazı and nearby areas according to a specific plan and schedule.</p>
                        </div>
                        <div className="features">
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Car Towing</h3>
                            <p>Before starting our car towing service, we identify the brand and model of the vehicle to be towed and prepare the most suitable vehicle for the service.</p>
                        </div>
                    </div>
                    {/* Image for features section */}
                    <img id="features-img" src="https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/hakkimizda.webp" alt="Bozyazı road assistance" />
                </div>
            </div>
            {/* Phone section */}
            <div className="phone-section">
                {/* Phone icon with link to call */}
                <a href="tel:+90532 177 85 86"><PhoneEnabledIcon color="primary" sx={{ fontSize: 85 }} /></a>
                <h2>0532 177 85 86</h2>
            </div>
            {/* Mid title section */}
            <div id="mid-title-section">
                <div id="mid-title-content-container">
                    <div id="mid-title-section-content">
                        <h2>Bozyazı Road Assistance Services</h2>
                        <p>We are committed to delivering our road assistance service to all needy vehicles. Improving our service quality every year is our main goal.</p>
                        {/* Button to redirect to Bozyazı location on Google Maps */}
                        <button onClick={locationBozyazi} type="button">
                            Bozyazı Road Assistance
                        </button>
                    </div>
                </div>
            </div>
            {/* Display blog content */}
            <Blog />
        </div>
    );
}

export default HomePage;
