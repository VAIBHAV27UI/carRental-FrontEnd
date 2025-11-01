export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "GreatStack",
  email: "admin@example.com",
  role: "owner",
  image: "",
};

export const dummyCarData = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "X5",
    image:
      "https://images.unsplash.com/photo-1724332093168-d1c2d9c6827b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2006,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvaliable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Toyota",
    model: "Corolla",
    image:
      "https://images.unsplash.com/photo-1680530943234-5a228d5feacd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2021,
    category: "Sedan",
    seating_capacity: 4,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: false,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Jeep ",
    model: "Wrangler",
    image:
      "https://images.unsplash.com/photo-1699325929994-b94ae0c8f552?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2023,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Audi",
    model: "Q9",
    image:
      "https://images.unsplash.com/photo-1696315072523-1bd90867944b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e35",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "A5",
    image:
      "https://images.unsplash.com/photo-1661914132349-095cd34f37aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e36",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Audi",
    model: "Q7",
    image:
      "https://images.unsplash.com/photo-1661914132349-095cd34f37aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

// export const dummyDashboardData = {
//     "totalCars": 4,
//     "totalBookings": 2,
//     "pendingBookings": 0,
//     "completedBookings": 2,
//     "recentBookings": [
//         dummyMyBookingsData[0],
//         dummyMyBookingsData[1]
//     ],
//     "monthlyRevenue": 840
// }
