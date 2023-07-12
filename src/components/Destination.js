import "./DestinationStyle.css"
import mountain1 from "../img/d3.jpg";
import mountain2 from "../img/d-1.jpg";
import mountain3 from "../img/d-2.jpg";
import mountain4 from "../img/d-4.jpg";
import DestinationData from "./DestinationData";


const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give You The Opportunity to see a lot,within a time frame.</p>

            <DestinationData
            className = "first-des"
            heding = "Taal Volcano , Batangas"
            text = "Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake Taal Volcano is a large caldera filled by Taal Lake in the Philippines !"
            image1 = {mountain1}
            image2 = {mountain2}
            />

            <DestinationData
            className = "first-des-reverse"
            heding = "Mt. Daguldul,Batangas"
            text = "A good thing about Mt. Daguldul is that the guides are organized under the Hugom Environmental Guides Association (HEGA). This means that fees are fixed and they are reasonsable – guides for P400/day and a climbing fee of P30 (as of 2006; update needed). After meeting with the guides or registering, you can start trekking. The trail starts off at the beach – here is where you can see the good rock formations. Afterwards, you will enter the forest. After around 1.5-2 hrs, halfway through the trail, you will see Mang Lizardo’s place."
            image1 = {mountain3}
            image2 = {mountain4}
            />

        </div>
    )
}

export default Destination;