import Room from "./Room";

//simular BD habitaciones
let roomsData = [
    {   "id": 1,
        "name": "Single Room",
        "price": 70,
        "bed": "Queen bed",
        "size": 20,
        "image": "https://tse4.mm.bing.net/th/id/OIP.g5Ey0gTyp5yYpAi5WVKF-QHaFP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {   "id": 2,
        "name": "Double Room",
        "price": 90,
        "bed": "King bed",
        "size": 30,
        "image": "https://tse4.mm.bing.net/th/id/OIP.ABuRoAD4OsgRmljAvaHhvwHaE8?r=0&w=550&h=367&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {   "id": 3,
        "name": "Family Room",
        "price": 150,
        "bed": "2 Queen bed",
        "size": 40,
        "image": "https://tse1.mm.bing.net/th/id/OIP.EIEAn34ii5N0xYkV-JXrJQHaE8?r=0&w=5184&h=3456&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {   "id": 4,
        "name": "Suit Room",
        "price": 200,
        "bed": "Omega bed",
        "size": 30,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0c/64/7f/riosol-tarapoto-hotel.jpg?w=700&h=-1&s=1"
    },
    {   "id": 5,
        "name": "Single Room",
        "price": 50,
        "bed": "Queen bed",
        "size": 15,
        "image": "https://tse2.mm.bing.net/th/id/OIP.z6xGfYrfpXrPj55tJkwQ0AHaFj?r=0&w=800&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {   "id": 6,
        "name": "President Room",
        "price": 250,
        "bed": "ultra Omega bed",
        "size": 50,
        "image": "https://tse2.mm.bing.net/th/id/OIP.7a6k3sHqNy5t24LAAdS3ZQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];


export default function Rooms() {
  return (
    <>
        <div className="w3-container w3-margin-top" id="rooms">
            <h3>Rooms</h3>
            <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
        </div>
  
        <div className="w3-row-padding">
            <div className="w3-col m3">
            <label><i className="fa fa-calendar-o"></i> Check In</label>
            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" />
            </div>
            <div className="w3-col m3">
            <label><i className="fa fa-calendar-o"></i> Check Out</label>
            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-male"></i> Adults</label>
            <input className="w3-input w3-border" type="number" placeholder="1" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-child"></i> Kids</label>
            <input className="w3-input w3-border" type="number" placeholder="0" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-search"></i> Search</label>
            <button className="w3-button w3-block w3-black">Search</button>
            </div>
        </div>

        <div className="w3-row-padding w3-padding-16">
           { roomsData.map((r)=>( <Room data={ r } /> ))   }
        </div>

    </>
  )
}
