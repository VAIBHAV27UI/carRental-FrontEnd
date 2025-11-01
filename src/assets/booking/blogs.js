const carBlogs = [
  {
    id: 1,
    title: "Top 10 Cars for Long Road Trips in 2025",
    content:
      "Long road trips demand comfort, reliability, and fuel efficiency. In 2025, cars like the Toyota Fortuner, Hyundai Alcazar, and Skoda Superb stand out as great options. These vehicles provide spacious interiors, strong mileage, and advanced safety features, making them perfect companions for highways and mountain roads alike.",
    avtar:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-01-20",
  },
  {
    id: 2,
    title: "Electric Cars vs Petrol Cars: Which One Should You Buy?",
    content:
      "With EV charging infrastructure improving across India, more people are considering electric cars. EVs offer lower running costs and zero emissions, while petrol cars still score high in affordability and refueling convenience. Choosing between them depends on your driving habits, budget, and access to charging stations.",
    avtar:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-02-25",
  },
  {
    id: 3,
    title: "How to Maintain Your Car Like a Pro",
    content:
      "Proper car maintenance is the key to long-lasting performance. Simple practices like checking tire pressure, changing engine oil on time, keeping the air filter clean, and regular servicing can extend the life of your vehicle. A well-maintained car not only saves money but also ensures safety on the road.",
    avtar:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    date: "2025-03-20",
  },
  {
    id: 4,
    title: "The Future of Self-Driving Cars",
    content:
      "Self-driving cars are no longer just concepts. Companies like Tesla, Waymo, and even Indian startups are working on autonomous driving systems. These cars use AI, cameras, and sensors to navigate traffic, reduce accidents, and make driving easier. However, infrastructure and regulations still need to catch up in India.",
    avtar:
      "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-15",
  },
  {
    id: 5,
    title: "Best Budget Cars Under ₹10 Lakh in India",
    content:
      "For first-time buyers or those seeking value, budget cars under ₹10 lakh are the most popular choice. Models like Maruti Suzuki Baleno, Tata Altroz, and Hyundai i20 offer a balance of style, safety, and features. With improved build quality and mileage, these cars are redefining the budget segment.",
    avtar:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-05-5",
  },
  {
    id: 6,
    title: "Tips for First-Time Car Buyers",
    content:
      "Buying your first car can be exciting but overwhelming. Before making a decision, define your budget, research popular models, compare fuel types, and consider future resale value. Don’t forget to account for insurance, maintenance, and accessories. A well-planned purchase ensures long-term satisfaction.",
    avtar:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-06-21",
  },
  {
    id: 7,
    title: "SUV vs Sedan: Which One Should You Pick?",
    content:
      "SUVs dominate the Indian market due to their high ground clearance, commanding presence, and spacious interiors. Sedans, on the other hand, provide superior ride comfort, better aerodynamics, and fuel efficiency. The choice between the two depends on whether you prioritize road presence and versatility or refinement and efficiency.",
    avtar:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-07-28",
  },
  {
    id: 8,
    title: "Must-Have Car Accessories in 2025",
    content:
      "Car accessories not only improve comfort but also enhance safety. In 2025, essential accessories include a portable tire inflator, dash camera, wireless phone charger, seat organizers, and GPS trackers. These add-ons make everyday driving smoother while providing extra security and convenience.",
    avtar:
      "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-08-20",
  },
  {
    id: 9,
    title: "How to Save Fuel with Smart Driving",
    content:
      "Rising fuel costs make efficient driving more important than ever. Simple techniques like maintaining steady speeds, avoiding unnecessary idling, timely gear shifts, and keeping tires properly inflated can save a lot of fuel. Over time, smart driving not only saves money but also reduces your carbon footprint.",
    avtar:
      "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-09-8",
  },
  {
    id: 10,
    title: "Top 5 Luxury Cars That Turn Heads",
    content:
      "Luxury cars in 2025 are all about advanced technology and premium comfort. Models like Mercedes-Benz S-Class, BMW 7 Series, Audi A8, Jaguar XF, and Lexus LS offer unmatched interiors, cutting-edge safety, and world-class performance. These cars are not just vehicles but statements of success and elegance.",
    avtar:
      "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-10-16",
  },
];

export default carBlogs;
