import "./Trip.css"
import TripData from "./TripData";
import trip1 from "../img/h-1.jpg"
import trip2 from "../img/h-2.jpg"
import trip3 from "../img/h-3.jpg"
function Trip(){
    return(
        <div className="trip">
             <h1>Recent Trips</h1>
             <p>You Can Discover unique Destination using </p>

             <div className="tripcard">
                    <TripData
                        image={trip1}
                        heading = "Trip in Indonesia"
                        text = "Indonesia’s vegetation is similar to that of the Philippines, Malaysia, and Papua New Guinea. There are some 40,000 species of flowering plants, including 5,000 species of orchids, as well as the monster flower (Rafflesia arnoldii [see Rafflesiaceae]), which is the world’s largest flower. There are more than 3,000 tree species, including durian, which bears large, armoured, odorous yet edible fruit; sandalwood; Shorea macrophylla, which yields illipe nuts, a fruit that contains a fat substance similar to cocoa butter; and valuable timber varieties such as teak and ironwood."
                    />
                    <TripData
                        image={trip2}
                        heading = "Trip in Malaysia"
                        text = "Malaysia, country of Southeast Asia, lying just north of the Equator, that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat), which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo. The Malaysian capital, Kuala Lumpur, lies in the western part of the peninsula, about 25 miles (40 km) from the coast; the administrative centre, Putrajaya, is located about 16 miles (25 km) south of the capital."
                    />
                    <TripData
                        image={trip3}
                        heading = "Trip in Canada"
                        text = "As ostensibly the most acclaimed waterfalls on the planet, this one is needed to top the rundown. In spite of the fact that Niagara Falls doesn't have the best drop in Canada by far at 53m, it is by a wide margin the widest at over 671m. The bent state of Horseshoe Falls is notorious, and a stumble on the Hornblower watercraft up to the substance of the falls is an absolute necessity."
                    />
             </div>
        </div>
       
    )
}

export default Trip ;