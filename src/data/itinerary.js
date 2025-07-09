export const itineraryData = [
  {
    id: 1,
    day: "Day 1",
    date: "August 10",
    title: "Kutaisi Cave Whispers",
    subtitle: "Caves & Cathedrals",
    timeRange: "9:00 AM - 6:00 PM",
    description: "Begin your Georgian adventure with underground wonders and ancient cathedrals",
    image: "https://images.pexels.com/photos/4498221/pexels-photo-4498221.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "kutaisi-arrival",
        time: "9:00 AM",
        name: "Arrival at Kutaisi Airport",
        description: "Land in Georgia and start your family adventure",
        coordinates: "42.1762,42.4823",
        type: "arrival"
      },
      {
        id: "prometheus-cave",
        time: "10:00 AM",
        name: "Prometheus Cave",
        description: "1.4km underground walkway through magnificent limestone formations",
        coordinates: "42.3733,42.6014",
        type: "attraction",
        duration: "1.5 hours"
      },
      {
        id: "sataplia-reserve",
        time: "12:00 PM",
        name: "Sataplia Nature Reserve",
        description: "Discover real dinosaur footprints and beautiful cave formations",
        coordinates: "42.3342,42.5833",
        type: "nature",
        duration: "2 hours"
      },
      {
        id: "bagrati-cathedral",
        time: "2:00 PM",
        name: "Bagrati Cathedral",
        description: "UNESCO World Heritage site with stunning architecture",
        coordinates: "42.2778,42.7011",
        type: "cultural",
        duration: "1 hour"
      },
      {
        id: "gelati-monastery",
        time: "3:30 PM",
        name: "Gelati Monastery",
        description: "Medieval monastery complex with beautiful frescoes",
        coordinates: "42.2956,42.7706",
        type: "cultural",
        duration: "1.5 hours"
      },
      {
        id: "kutaisi-stroll",
        time: "6:00 PM",
        name: "Evening Stroll",
        description: "Check-in and explore Kutaisi city center",
        coordinates: "42.2679,42.7011",
        type: "leisure",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Hotel Terrace Kutaisi",
      location: "City Center",
      rating: 4.2,
      price: "$80-120/night"
    }
  },
  {
    id: 2,
    day: "Day 2",
    date: "August 11",
    title: "Road to Tbilisi",
    subtitle: "Ancient Wonders & Capital Discovery",
    timeRange: "8:00 AM - 9:00 PM",
    description: "Journey through history on the road to Georgia's vibrant capital",
    image: "https://images.pexels.com/photos/9064678/pexels-photo-9064678.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "kutaisi-departure",
        time: "8:00 AM",
        name: "Depart Kutaisi",
        description: "Begin 3.5-4 hour scenic drive to Tbilisi",
        coordinates: "42.2679,42.7011",
        type: "travel"
      },
      {
        id: "uplistsikhe-cave",
        time: "10:00 AM",
        name: "Uplistsikhe Cave Town",
        description: "Ancient rock-hewn city dating back to 6th century BC",
        coordinates: "41.9667,44.2167",
        type: "historical",
        duration: "2 hours"
      },
      {
        id: "mtskheta-cathedral",
        time: "1:00 PM",
        name: "Svetitskhoveli Cathedral",
        description: "UNESCO World Heritage site in ancient capital Mtskheta",
        coordinates: "41.8431,44.7208",
        type: "cultural",
        duration: "1.5 hours"
      },
      {
        id: "tbilisi-arrival",
        time: "3:00 PM",
        name: "Arrive Tbilisi",
        description: "Check into accommodation in Georgia's capital",
        coordinates: "41.7151,44.8271",
        type: "arrival"
      },
      {
        id: "narikala-cable",
        time: "5:00 PM",
        name: "Cable Car to Narikala",
        description: "Scenic cable car ride to ancient fortress",
        coordinates: "41.6868,44.8090",
        type: "sightseeing",
        duration: "1 hour"
      },
      {
        id: "old-town-walk",
        time: "7:00 PM",
        name: "Old Town Exploration",
        description: "Wander through charming cobblestone streets",
        coordinates: "41.6934,44.8015",
        type: "leisure",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Rooms Hotel Tbilisi",
      location: "Central Tbilisi",
      rating: 4.5,
      price: "$120-180/night"
    }
  },
  {
    id: 3,
    day: "Day 3",
    date: "August 12",
    title: "Tbilisi City Discovery",
    subtitle: "Urban Adventures & Cultural Immersion",
    timeRange: "9:00 AM - 9:00 PM",
    description: "Immerse yourself in the heart of Georgian culture and history",
    image: "https://images.pexels.com/photos/6102357/pexels-photo-6102357.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "sameba-cathedral",
        time: "9:00 AM",
        name: "Sameba Cathedral",
        description: "Holy Trinity Cathedral - symbol of Georgian Orthodox Church",
        coordinates: "41.7286,44.8107",
        type: "cultural",
        duration: "1 hour"
      },
      {
        id: "narikala-fortress",
        time: "11:00 AM",
        name: "Narikala Fortress",
        description: "Ancient fortress with panoramic city views",
        coordinates: "41.6868,44.8090",
        type: "historical",
        duration: "1.5 hours"
      },
      {
        id: "old-town-lunch",
        time: "1:00 PM",
        name: "Old Town Lunch",
        description: "Traditional Georgian cuisine in historic setting",
        coordinates: "41.6934,44.8015",
        type: "dining",
        duration: "1 hour"
      },
      {
        id: "sulfur-baths",
        time: "2:30 PM",
        name: "Sulfur Baths District",
        description: "Relaxing thermal baths in historic Abanotubani",
        coordinates: "41.6886,44.8093",
        type: "wellness",
        duration: "1.5 hours"
      },
      {
        id: "peace-bridge",
        time: "4:00 PM",
        name: "Bridge of Peace",
        description: "Modern architectural marvel over Mtkvari River",
        coordinates: "41.6934,44.8015",
        type: "modern",
        duration: "30 minutes"
      },
      {
        id: "mtatsminda-park",
        time: "5:30 PM",
        name: "Mtatsminda Park",
        description: "Hilltop amusement park with city views",
        coordinates: "41.6955,44.7828",
        type: "entertainment",
        duration: "2 hours"
      },
      {
        id: "rustaveli-walk",
        time: "7:00 PM",
        name: "Rustaveli Avenue",
        description: "Stroll down Tbilisi's main thoroughfare",
        coordinates: "41.7010,44.7937",
        type: "leisure",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Rooms Hotel Tbilisi",
      location: "Central Tbilisi",
      rating: 4.5,
      price: "$120-180/night"
    }
  },
  {
    id: 4,
    day: "Day 4",
    date: "August 13",
    title: "Journey to Batumi",
    subtitle: "Coastal Adventure Begins",
    timeRange: "8:00 AM - 8:00 PM",
    description: "Travel to the beautiful Black Sea coast and discover Batumi's charm",
    image: "https://images.pexels.com/photos/2884842/pexels-photo-2884842.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "tbilisi-departure",
        time: "8:00 AM",
        name: "Depart Tbilisi",
        description: "Begin scenic 6-hour drive to Black Sea coast",
        coordinates: "41.7151,44.8271",
        type: "travel"
      },
      {
        id: "batumi-arrival",
        time: "2:00 PM",
        name: "Arrive in Batumi",
        description: "Check into seaside accommodation",
        coordinates: "41.6168,41.6367",
        type: "arrival"
      },
      {
        id: "batumi-boulevard",
        time: "4:00 PM",
        name: "Batumi Boulevard",
        description: "Leisurely walk along the beautiful seaside promenade",
        coordinates: "41.6459,41.6394",
        type: "leisure",
        duration: "1.5 hours"
      },
      {
        id: "boulevard-bike",
        time: "5:30 PM",
        name: "Boulevard Bike Ride",
        description: "Explore the coast on two wheels",
        coordinates: "41.6459,41.6394",
        type: "activity",
        duration: "1 hour"
      },
      {
        id: "seaside-dinner",
        time: "7:00 PM",
        name: "Seaside Dinner",
        description: "Fresh seafood with ocean views",
        coordinates: "41.6459,41.6394",
        type: "dining",
        duration: "1.5 hours"
      }
    ],
    accommodation: {
      name: "Radisson Blu Batumi",
      location: "Seaside Boulevard",
      rating: 4.4,
      price: "$150-250/night"
    }
  },
  {
    id: 5,
    day: "Day 5",
    date: "August 14",
    title: "Batumi Seaside Bliss",
    subtitle: "Beach, Parks & Marine Life",
    timeRange: "9:00 AM - 8:00 PM",
    description: "Enjoy family-friendly coastal activities and natural beauty",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "beach-time",
        time: "9:00 AM",
        name: "Beach Time",
        description: "Relax on Batumi's pebble beaches",
        coordinates: "41.6459,41.6394",
        type: "leisure",
        duration: "2 hours"
      },
      {
        id: "may-park",
        time: "11:00 AM",
        name: "6 May Park",
        description: "Beautiful park with lake and pedal boats",
        coordinates: "41.6451,41.6360",
        type: "nature",
        duration: "1 hour"
      },
      {
        id: "dolphinarium",
        time: "12:00 PM",
        name: "Batumi Dolphinarium",
        description: "Marine mammal show perfect for families",
        coordinates: "41.6406,41.6394",
        type: "entertainment",
        duration: "1.5 hours"
      },
      {
        id: "park-lunch",
        time: "1:30 PM",
        name: "Lunch in the Park",
        description: "Family picnic or restaurant meal",
        coordinates: "41.6451,41.6360",
        type: "dining",
        duration: "1 hour"
      },
      {
        id: "alphabet-tower",
        time: "3:00 PM",
        name: "Alphabet Tower",
        description: "Unique tower celebrating Georgian script",
        coordinates: "41.6500,41.6400",
        type: "cultural",
        duration: "1 hour"
      },
      {
        id: "botanical-garden",
        time: "4:30 PM",
        name: "Batumi Botanical Garden",
        description: "Stunning coastal botanical gardens",
        coordinates: "41.6956,41.6167",
        type: "nature",
        duration: "2 hours"
      },
      {
        id: "dancing-fountains",
        time: "6:00 PM",
        name: "Dancing Fountains",
        description: "Musical fountain show in the evening",
        coordinates: "41.6459,41.6394",
        type: "entertainment",
        duration: "1 hour"
      }
    ],
    accommodation: {
      name: "Radisson Blu Batumi",
      location: "Seaside Boulevard",
      rating: 4.4,
      price: "$150-250/night"
    }
  },
  {
    id: 6,
    day: "Day 6",
    date: "August 15",
    title: "Batumi Culture & Views",
    subtitle: "History, Art & Panoramic Vistas",
    timeRange: "9:00 AM - 9:00 PM",
    description: "Explore Batumi's rich cultural heritage and stunning viewpoints",
    image: "https://images.pexels.com/photos/7249763/pexels-photo-7249763.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "gonio-fortress",
        time: "9:00 AM",
        name: "Gonio Fortress",
        description: "Ancient Roman fortress ruins",
        coordinates: "41.5736,41.5828",
        type: "historical",
        duration: "2 hours"
      },
      {
        id: "sarpi-border",
        time: "11:00 AM",
        name: "Sarpi Border",
        description: "Optional visit to Turkey border",
        coordinates: "41.5433,41.5433",
        type: "sightseeing",
        duration: "1 hour"
      },
      {
        id: "sea-view-lunch",
        time: "1:00 PM",
        name: "Sea View Lunch",
        description: "Dining with panoramic ocean views",
        coordinates: "41.6459,41.6394",
        type: "dining",
        duration: "1 hour"
      },
      {
        id: "adjara-museum",
        time: "2:30 PM",
        name: "Adjara Museum",
        description: "Regional history and culture exhibition",
        coordinates: "41.6520,41.6411",
        type: "cultural",
        duration: "1.5 hours"
      },
      {
        id: "piazza-square",
        time: "4:00 PM",
        name: "Piazza Square",
        description: "Italian-style square in Batumi's heart",
        coordinates: "41.6459,41.6394",
        type: "leisure",
        duration: "1 hour"
      },
      {
        id: "cable-car-ferris",
        time: "5:30 PM",
        name: "Cable Car & Ferris Wheel",
        description: "Aerial views of the city and coastline",
        coordinates: "41.6459,41.6394",
        type: "sightseeing",
        duration: "1.5 hours"
      },
      {
        id: "waterfront-dinner",
        time: "7:00 PM",
        name: "Waterfront Dinner",
        description: "Evening meal with coastal ambiance",
        coordinates: "41.6459,41.6394",
        type: "dining",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Radisson Blu Batumi",
      location: "Seaside Boulevard",
      rating: 4.4,
      price: "$150-250/night"
    }
  },
  {
    id: 7,
    day: "Day 7",
    date: "August 16",
    title: "Batumi Nature Escape",
    subtitle: "Waterfalls, Bridges & Wine",
    timeRange: "9:00 AM - 8:00 PM",
    description: "Discover Adjara's natural beauty and taste local wines",
    image: "https://images.pexels.com/photos/5737524/pexels-photo-5737524.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "makhuntseti-waterfall",
        time: "9:00 AM",
        name: "Makhuntseti Waterfall",
        description: "Spectacular 20-meter waterfall in lush forest",
        coordinates: "41.6086,41.7031",
        type: "nature",
        duration: "1.5 hours"
      },
      {
        id: "queen-tamara-bridge",
        time: "10:30 AM",
        name: "Queen Tamara's Bridge",
        description: "12th-century arched stone bridge",
        coordinates: "41.6083,41.7033",
        type: "historical",
        duration: "1 hour"
      },
      {
        id: "wine-house",
        time: "12:00 PM",
        name: "Adjarian Wine House",
        description: "Local wine tasting and vineyard tour",
        coordinates: "41.6200,41.7000",
        type: "cultural",
        duration: "2 hours"
      },
      {
        id: "mountain-lunch",
        time: "2:00 PM",
        name: "Mountain View Lunch",
        description: "Traditional meal with scenic mountain backdrop",
        coordinates: "41.6200,41.7000",
        type: "dining",
        duration: "1 hour"
      },
      {
        id: "return-batumi",
        time: "4:00 PM",
        name: "Return to Batumi",
        description: "Scenic drive back to the coast",
        coordinates: "41.6168,41.6367",
        type: "travel",
        duration: "1 hour"
      },
      {
        id: "boulevard-sunset",
        time: "6:00 PM",
        name: "Boulevard Sunset",
        description: "Watch the sunset over the Black Sea",
        coordinates: "41.6459,41.6394",
        type: "leisure",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Radisson Blu Batumi",
      location: "Seaside Boulevard",
      rating: 4.4,
      price: "$150-250/night"
    }
  },
  {
    id: 8,
    day: "Day 8",
    date: "August 17",
    title: "Return to Kutaisi",
    subtitle: "Final Adventures & Farewell",
    timeRange: "9:00 AM - 9:00 PM",
    description: "Journey back with one last natural wonder stop",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: [
      {
        id: "batumi-departure",
        time: "9:00 AM",
        name: "Depart Batumi",
        description: "Begin journey back to Kutaisi",
        coordinates: "41.6168,41.6367",
        type: "travel"
      },
      {
        id: "martvili-canyon",
        time: "12:00 PM",
        name: "Martvili Canyon",
        description: "Stunning limestone canyon with boat tours",
        coordinates: "42.3861,42.3775",
        type: "nature",
        duration: "2 hours"
      },
      {
        id: "nature-lunch",
        time: "2:00 PM",
        name: "Lunch in Nature",
        description: "Meal surrounded by natural beauty",
        coordinates: "42.3861,42.3775",
        type: "dining",
        duration: "1 hour"
      },
      {
        id: "kutaisi-arrival",
        time: "4:00 PM",
        name: "Arrive Kutaisi",
        description: "Final accommodation near airport",
        coordinates: "42.2679,42.7011",
        type: "arrival"
      },
      {
        id: "farewell-dinner",
        time: "7:00 PM",
        name: "Farewell Dinner",
        description: "Celebrate the end of your Georgian adventure",
        coordinates: "42.2679,42.7011",
        type: "dining",
        duration: "2 hours"
      }
    ],
    accommodation: {
      name: "Best Western Kutaisi",
      location: "Near Airport",
      rating: 4.0,
      price: "$90-140/night"
    }
  }
];

export const tripStats = {
  totalDays: 8,
  totalDistance: "1000+ km",
  budget: "$250-350/night",
  startDate: "August 10",
  endDate: "August 18",
  cities: ["Kutaisi", "Tbilisi", "Batumi"],
  highlights: ["Caves", "Cathedrals", "Black Sea", "Wine Tasting", "Cultural Sites"]
};