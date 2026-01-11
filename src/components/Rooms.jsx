import room1 from "../assets/room1.jpg"
import room2 from "../assets/room2.jpg"
import room3 from "../assets/room3.jpg"
import "../styles/rooms.css";
const rooms=[
    {
        id:1,
        title:"Luxurt Room",
        price:"$250",
        image:room1,
        features:[
            "Elegant and comfortable",
            "Plush furnishings",
            "Premium amenities."
        ]
    },

    {
        id:2,
        title:"Guest Rooms",
        price:"$200",
        image:room2,
        features:[
            "Stylish and cozy.",
           "modern features.",
           "Tasteful decor."
        ]
    },

    {
        id:3,
        title:"Sea View Suite",
        price:"$300",
        image:room3,
        features:[
            "Stunning ocean views.",
            "Private balcony.",
            "Exclusive perks"
        ]
    }
];


const Rooms=() =>
{
    return (
        <section className="rooms">
        <h2 className="rooms-title">ROOMS & SUITS</h2>
        <p className="rooms-subtitle">
            Discover Inspiring Stories and Exclusive Insights
        </p>


        <div className="rooms-grid">
            {
                rooms.map((room) =>
                (
                    <div className="room-card" key={room.id}>
                        <div className="room-image">
                            <img src={room.image} alt={room.title} />
                            <span className="room-price"></span>
                            
                        </div>

                        <div className="room-content">
                            <h3>{room.title}</h3>
                            <ul>
                                {room.features.map((features,index) =>
                                (
                                    <li key={index}>{features}</li>
                                ))}
                            </ul>

                                <button className="room-btn">More Details →</button>
                        </div>
                    </div>

                ))
            }
        </div>

        <div className="rooms-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
        </div>
        </section>
    )
}


export default Rooms;