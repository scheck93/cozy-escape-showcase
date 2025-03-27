
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tabs from '../components/TabSection';
import ImageGallery from '../components/ImageGallery';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const Listing = () => {
  const { id } = useParams<{ id: string }>();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const listingData = {
    'mountain-retreat': {
      title: '3 min walk to West Point-Free WiFi & pvt parking',
      subtitle: 'Perfect location for family and friends visiting their cadets',
      mainImage: 'https://i.imgur.com/RKSric0.jpeg',
      description: 'About this space\nCharming 2 bedroom apartment with beautiful Mountain Views\' overlooking Main Street in the center of downtown Highland Falls. Just a 2 minute walk to West Point Military Academy. Perfect location for family and friends visiting their cadets! Drive 10 mins to the best hiking, swimming, fishing and golf the Hudson Valley has to offer. Enjoy Bear Mountain State Park and ZOO, West Point Golf course￼, hike Anthony\'s Nose, shop Woodbury Commons, Storm King Art Center & Eisenhower Theater and LEGOLAND\n\nThe space\nEnjoy EVERYTHING West Point from this ideally located Main Street home-base in Highland Falls with just a 2 minute walk to the Academy! This quiet clean and comfy apartment offers the best of both worlds! Perfect to kick back and relax after a day of exploration and fun. When you\'re ready for more excitement simply walk downstairs where everything is at your fingertips. Dunkin Donuts right across the street, Andy\'s Diner just 2 doors down is amazing for breakfast and lunch; Benny Havens\' Pub & Restaurant next door is a local academy favorite for dinner and drinks. Bear Mt. Bakery, Ice cream, Mexican restaurant and Sushi all a stones throw:-) Police Station and Library on same block.\n\nMaster Bedroom has a new Queen Serta Mattress\nSecond bedroom with bunk beds and Serta Mattresses\nLiving Room can sleep 2 adults on the Ikea fold down couch\n*New VERIZON cell tower for great cell phone service\n\nEASY CHECKOUT NO CHORES:\nUpon checkout please turn off lights, heat and lock doors behind you. Please do not strip the beds, you can straighten up if you\'d like but I will do the rest!\n\n**Home Made Suites has always been 100% sanitized and sparkling clean using safe approved cleaning products between each guest**\nCleaning guidelines include:\n1) Wearing protective gear during clean\n2) Ventilating rooms BEFORE before clean\n3) Clean first then Disinfect\n4) Always to include: sofas, rugs, drapes, and other soft, porous surfaces.\n5) Wash all linens at the highest heat setting recommended by the manufacturer.\n6) Empty the vacuum cleaner after every cleaning\n7) Line trash cans\n8) Safely dispose of or wash cleaning supplies\n9) To help guests maintain a higher standard of cleanliness and hygiene, the space is well-stocked with the essential amenities.\nThings like:\nHand soap\nDish soap/sponge\nAmple paper towels & Toilet Paper (more than enough for your stay)\nTissues\nShampoo and conditioner\nBody wash\n\nNO PETS NO PARTIES NO SMOKING/VAPING. THANKS IN ADVANCE FOR RESPECTING THE HOUSE RULES\n\nWHERE YOU\'LL BE:\n\nUnited States Military Academy - 2 min walk\nWest Point Museum - 3 min walk\nBear Mountain State Park - 4 min drive\nChristl Arena - 4 min drive\nMichie Stadium - 4 min drive\n--------------------------------------------------------\nPeekskill - 18 min drive\nStewart Intl. Airport (SWF) - 31 min drive\nEisenhower Hall Theatre - 4 min drive\nWest Point Club - 5 min drive\nCold Spring Depot - 23 min drive\nFirstie Club - 7 min drive\nMoo Moo\'s Creamery - 24 min drive\n\nGroceries\n- Quick Pick up: My Town Marketplace (3 min) and Walgreens (3 min)\n- Inexpensive groceries: Aldi\'s in Woodbury (15 min, Walmart and Target nearby)\n- Organic groceries: Adam\'s FairAcre Farms in Newburgh (20 min, Walmart and Target nearby)\n\nRestaurants\nHighland Falls\n- Dessert & Coffee: Bear Mountain Bakery (walk)\n- Breakfast: Andy\'s Restaurant (2 doors down)\n- Lunch/Dinner: Benny Haven\'s Pub & Restaurant walk (next door)\n- Bar/Food: South Gate Tavern (walk)\n- Korean & Japanese: Sushi King (walk)\n- Ice Cream: The Ice Cream Shoppe (walk)\n- Pizza: West Point Pizza (walk)\n- Other: Schade\'s Restaurant (4 min)\nCornwall\n- Favorite pizza: Bear Mountain Pizza (10 min)\n- Prima\'s Pizza (12 min)\n- Authentic Mexican: Cielito Lindo (12 min)\n- Thai: Kanda House (11 min)\n- Coffee shops: Cornwall Coffee Co. (12 min) and 2 Alices (13 min)\n- Breakfast or lunch: Fiddlestix Café (11 min) and Jones Farm (14 min)\n\nAmazing Trails and Parks\n- Best hike views: Popolopen Torne (8 min) or Anthony\'s Nose (9 min)\n- Hike along the Hudson River: Arden Point and Glenclyffe (15 min)\n- Great for the kids: Roe Park (2 min) & Brooks Lake Park (8 min)\n- Picnic on the water: Donahue Memorial Park (13 min) take Hwy 218\n- Can\'t miss: Bear Mountain State Park with free zoo (10 min)\n\nShopping\n- Woodbury Common Premium Outlets (12 miles)\n\nTee Time:\n- West Point Golf Course (2 min)\n- Hollow Brook Golf Club (12 min)\n- Falkirk Golf Club (17 min)\n-The Golf Club at Mansion Ridge (20 min)\n\nAIRPORTS:\n- Westchester County Airport (44.1 miles)\n- LaGuardia Airport (52.4 miles)\n- JFK International Airport (61.7 miles)\n- Newark Liberty International Airport (62.7 miles)\n\nThe Hudson Valley is a beautiful region in New York State, known for its stunning natural scenery, rich history, and cultural attractions\n\n1. Bannerman Castle: A picturesque ruin on an island in the Hudson River, perfect for hiking and exploration.\n2. Mohonk Preserve: A nature reserve with stunning rock formations, hiking trails, and scenic views.\n3. The Hudson River: A majestic river with beautiful sunsets, boat tours, and waterfront towns like Cold Spring and Beacon.\n4. The Catskill Mountains: A mountain range with breathtaking vistas, hiking trails, and charming towns like Woodstock and Phoenicia.\n5. Franklin D. Roosevelt Presidential Library and Museum: A historic site with beautiful gardens and a museum showcasing FDR\'s legacy.\n6. The Vanderbilt Mansion: A stunning Gilded Age mansion with beautiful gardens and a scenic view of the Hudson River.\n7. Walkway Over the Hudson: A pedestrian bridge with spectacular views of the Hudson River and the Mid-Hudson Bridge.\n8. The Dutchess County Fairgrounds: A popular spot for festivals, concerts, and events, surrounded by beautiful countryside.\n9. The Hudson Valley Rail Trail: A scenic trail for hiking and biking, following the former Hudson Valley railroad line.\n10. The charming towns and villages: Like Rhinebeck, Red Hook, and Sleepy Hollow, with their historic architecture, antique shops, and farm-to-table restaurants.\n\nGuest access\nThis is a private building with empty office space on the bottom floor.\nYou will be given a unique door code for your stay. Please note* you will go up 2 sets of indoor carpeted stairs with handrails to get to this apartment which offers a quiet sanctuary for your stay. If you have mobility issues you can book the second floor Airbnb apt. in the same building.\nThe listing headline reads\n"Walk 2mins to campus FREE WiFi and private parking"\n\nOther things to note\nNo parties, events, smoking or vaping...please go downstairs if you smoke. No more than 8 people (visitors/guests/children/infants) allowed on the property by fire code/ occupancy limits. No unregistered visitors after 11:00 PM or before 6:00 AM. When you book you\'ve agreed to the House Rules, thanks!!',
      rooms: [
        {
          name: 'Master Bedroom',
          description: 'Master Bedroom has a new Queen Serta Mattress for a comfortable night\'s sleep.'
        },
        {
          name: 'Second Bedroom',
          description: 'Second bedroom with bunk beds and Serta Mattresses, perfect for kids or additional guests.'
        },
        {
          name: 'Living Area',
          description: 'Living Room can sleep 2 adults on the Ikea fold down couch. Comfortable seating area for relaxing after a day of activities.'
        },
        {
          name: 'Kitchen & Dining',
          description: 'Fully equipped kitchen with all the essentials for preparing meals during your stay.'
        },
        {
          name: 'The Space',
          description: 'Enjoy EVERYTHING West Point from this ideally located Main Street home-base in Highland Falls with just a 2 minute walk to the Academy! This quiet clean and comfy apartment offers the best of both worlds! Perfect to kick back and relax after a day of exploration and fun. When you\'re ready for more excitement simply walk downstairs where everything is at your fingertips. Dunkin Donuts right across the street, Andy\'s Diner just 2 doors down is amazing for breakfast and lunch; Benny Havens\' Pub & Restaurant next door is a local academy favorite for dinner and drinks. Bear Mt. Bakery, Ice cream, Mexican restaurant and Sushi all a stones throw:-) Police Station and Library on same block.'
        }
      ],
      amenities: [
        // Views
        'Scenic views',
        'Mountain view',
        
        // Bathroom
        'Bathtub',
        'Hair dryer',
        'Cleaning products',
        'Shampoo',
        'Conditioner',
        'Body soap',
        'Hot water',
        'Shower gel',
        
        // Bedroom and laundry
        'Essentials',
        'Towels, bed sheets, soap, and toilet paper',
        'Hangers',
        'Bed linens',
        'Cotton linens',
        'Extra pillows and blankets',
        'Room-darkening shades',
        'Iron',
        'Clothing storage: closet',
        
        // Entertainment
        'HDTV with Amazon Prime Video',
        
        // Family
        'Pack \'n play/Travel crib',
        'Folding or convertible high chair',
        
        // Heating and cooling
        'Portable air conditioning',
        'Window AC unit',
        'Ceiling fan',
        'Heating',
        
        // Home safety
        'Exterior security cameras on property',
        'Hallway camera for guest safety',
        'Smoke alarm',
        'Carbon monoxide alarm',
        'Fire extinguisher',
        'First aid kit',
        
        // Internet and office
        'Wifi',
        'Dedicated workspace',
        'In a common space',
        
        // Kitchen and dining
        'Kitchen',
        'Space where guests can cook their own meals',
        'Refrigerator',
        'Microwave',
        'Cooking basics',
        'Pots and pans, oil, salt and pepper',
        'Dishes and silverware',
        'Bowls, chopsticks, plates, cups, etc.',
        'Freezer',
        'Stove',
        'Oven',
        'Coffee maker: drip coffee maker',
        'Wine glasses',
        'Toaster',
        'Baking sheet',
        'Blender',
        'Dining table',
        'Coffee',
        
        // Location features
        'Private entrance',
        'Separate street or building entrance',
        'Laundromat nearby',
        
        // Outdoor
        'Outdoor furniture',
        
        // Parking and facilities
        'Free parking on premises – 2 spaces',
        'Free street parking',
        'Paid street parking off premises',
        
        // Services
        'Luggage dropoff allowed',
        'For guests\' convenience when they have early arrival or late departure',
        'Self check-in',
        'Keypad',
        'Check yourself into the home with a door code',
        
        // Not included
        'Unavailable: WasherWasher',
        'Unavailable: DryerDryer'
      ],
      galleryImages: [
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parking1.avif',
          alt: 'Property exterior view'
        },
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parkingbedroom1.avif',
          alt: 'Master bedroom with Queen Serta Mattress'
        },
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parkingdiningroom.avif',
          alt: 'Dining room area'
        },
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parkingkitchen1.jpg',
          alt: 'Fully equipped kitchen'
        },
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parkinglivingroom2.avif',
          alt: 'Living room with fold down couch'
        },
        {
          src: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parkinglivingroom3.avif',
          alt: 'Another view of the living room'
        }
      ],
      location: {
        address: 'Highland Falls, NY',
        description: 'Ideally located in downtown Highland Falls, just a 2 minute walk to West Point Military Academy. Perfect location for family and friends visiting their cadets! Drive 10 mins to the best hiking, swimming, fishing and golf the Hudson Valley has to offer. Enjoy Bear Mountain State Park and ZOO, West Point Golf course￼, hike Anthony\'s Nose, shop Woodbury Commons, Storm King Art Center & Eisenhower Theater and LEGOLAND.',
        coordinates: { lat: 41.3709, lng: -73.9654 }
      }
    },
    'urban-loft': {
      title: 'Walk 2mins to campus FREE WiFi and private parking',
      subtitle: 'Perfect location for family and friends visiting their cadets',
      mainImage: '/public/photos_listing_2/listing2livingroom.avif',
      description: 'About this space\nEnjoy this huge private 2 bedroom apartment on Main Street in the heartbeat of Highland Falls and walk just 3 mins to the Military Academy! Unbeatable location for family and friends visiting their cadets! Perfect place to kick back and relax after an Army football game or day of exploration. Centrally located to the best hiking, boating, golf and fishing with an easy drive to Bear Mountain State Park and ZOO, Woodbury Commons Outlet, Storm King Art Center, Eisenhower Theater and LEGOLAND!!\n\nThe space\nThis recently updated private 2 bedroom 1100 sq ft apartment provides a peaceful quiet atmosphere and gives you the privacy you need to relax on your own. When you\'re ready to hit the town, just walk down the indoor private carpeted stairs to Main St. It is the perfect place to experience the best of West Point with just a 2 minute walk to the Academy entrance and Museum. New Serta Sleeper beds in each bedroom for an amazing night\'s sleep and top quality linens to cradle you while you snooze.\n*New VERIZON tower for great cell phone service\n\nFree safe private off street parking on premises right behind this private building.\n\nIf you\'d like to book for just one night or if you don\'t see your dates available please send a message! I take requests for West Point events in advance!\n\nEASY CHECKOUT:\nUpon checkout please turn off lights, air conditioner/heat and lock doors behind you. Please do not strip the beds, THANKS!\n\n1. NO PETS NO PARTIES\n2. NO VAPING OR SMOKING INSIDE, PLEASE GO DOWNSTAIRS.\nTHANKS IN ADVANCE FOR RESPECTING THE HOUSE RULES\n\n**Home Made Suites has always been 100% sanitized and sparkling clean using safe approved cleaning products between each guest**\nCleaning guidelines include:\n1) Wearing protective gear during clean\n2) Ventilating rooms BEFORE then clean\n3) Clean first then Disinfect\n4) Always to include: sofas, rugs, drapes, and other soft, porous surfaces.\n5) Wash all linens at the highest heat setting recommended by the manufacturer.\n6) Empty the vacuum cleaner after every cleaning\n7) Line trash cans\n8) Safely dispose of or wash cleaning supplies\n9) To help guests maintain a higher standard of cleanliness and hygiene, my space is well-stocked with the essential amenities.\nThings like:\nHand soap and hand sanitizer\nAmple paper towels & Toilet Paper (more than enough for your stay)\nDish soap/sponge\nShampoo and conditioner\nBody wash\n\nWHERE YOU\'LL BE:\n\nUnited States Military Academy - 2 min walk\nWest Point Museum - 3 min walk\nBear Mountain State Park - 4 min drive\nChristl Arena - 4 min drive\nMichie Stadium - 4 min drive\n--------------------------------------------------------\nPeekskill - 18 min drive\nStewart Intl. Airport (SWF) - 31 min drive\nEisenhower Hall Theatre - 4 min drive\nWest Point Club - 5 min drive\nCold Spring Depot - 23 min drive\nFirstie Club - 7 min drive\nMoo Moo\'s Creamery - 24 min drive\n\nGroceries\n- Quick Pick up: My Town Marketplace (2 min) and Walgreens (3 min)\n- Inexpensive groceries: Aldi\'s in Woodbury (14 min, Walmart and Target nearby)\n- Organic groceries: Adam\'s FairAcre Farms in Newburgh (20 min, Walmart and Target nearby)\n\nRestaurants\nHighland Falls\n- Dessert & Coffee: Bear Mountain Bakery (walk)\n- Breakfast: Andy\'s Restaurant (2 doors down)\n- Lunch/Dinner: Benny Haven\'s Pub & Restaurant walk (next door)\n- Bar/Food: South Gate Tavern (walk)\n- Korean & Japanese: Sushi King (walk)\n- Ice Cream: The Ice Cream Shoppe (walk)\n- Pizza: West Point Pizza (walk)\n- Other: Schade\'s Restaurant (4 min)\nCornwall\n- Favorite pizza: Bear Mountain Pizza (8 min)\n- Prima\'s Pizza (10 min)\n- Authentic Mexican: Cielito Lindo (11 min)\n- Thai: Kanda House (11 min)\n- Coffee shops: Cornwall Coffee Co. (12 min) and 2 Alices (13 min)\n- Breakfast or lunch: Fiddlestix Café (11 min) and Jones Farm (14 min)\n\nAmazing Trails and Parks\n- Best hike views: Popolopen Torne (8 min) or Anthony\'s Nose (9 min)\n- Hike along the Hudson River: Arden Point and Glenclyffe (15 min)\n- Great for the kids: Roe Park (2 min) & Brooks Lake Park (8 min)\n- Picnic on the water: Donahue Memorial Park (13 min) take Hwy 218\n- Can\'t miss: Bear Mountain State Park with free zoo (10 min)\n\nShopping\n- Woodbury Common Premium Outlets (12 miles)\n\nTee Time:\n- West Point Golf Course (3 min)\n- Hollow Brook Golf Club (10 min)\n- Falkirk Golf Club (15 min)\n-The Golf Club at Mansion Ridge (18 min)\n\nAIRPORTS:\n- Westchester County Airport (44.1 miles)\n- LaGuardia Airport (52.4 miles)\n- JFK International Airport (61.7 miles)\n- Newark Liberty International Airport (62.7 miles)\n\nThe Hudson Valley is a beautiful region in New York State, known for its stunning natural scenery, rich history, and cultural attractions\n\n1. Bannerman Castle: A picturesque ruin on an island in the Hudson River, perfect for hiking and exploration.\n2. Mohonk Preserve: A nature reserve with stunning rock formations, hiking trails, and scenic views.\n3. The Hudson River: A majestic river with beautiful sunsets, boat tours, and waterfront towns like Cold Spring and Beacon.\n4. The Catskill Mountains: A mountain range with breathtaking vistas, hiking trails, and charming towns like Woodstock and Phoenicia.\n5. Franklin D. Roosevelt Presidential Library and Museum: A historic site with beautiful gardens and a museum showcasing FDR\'s legacy.\n6. The Vanderbilt Mansion: A stunning Gilded Age mansion with beautiful gardens and a scenic view of the Hudson River.\n7. Walkway Over the Hudson: A pedestrian bridge with spectacular views of the Hudson River and the Mid-Hudson Bridge.\n8. The Dutchess County Fairgrounds: A popular spot for festivals, concerts, and events, surrounded by beautiful countryside.\n9. The Hudson Valley Rail Trail: A scenic trail for hiking and biking, following the former Hudson Valley railroad line.\n10. The charming towns and villages: Like Rhinebeck, Red Hook, and Sleepy Hollow, with their historic architecture, antique shops, and farm-to-table restaurants.\n\nGuest access\nThis is a private building with an empty storefront on the bottom floor.\nYou will be given a unique door code for your stay.\nLarge Private 2 Bedroom Apartment 1200 sq. ft. all to yourself!\nPlease note all items are meticulously cleaned and disinfected between stays. Free private parking on premises!\n\nOther things to note\nNo more spotty Internet! 2024 New Wi-Fi tower on top of police station in Highland Falls!\n\nWeekend bookings 2 night minimum, Monday through Thursdays you may book single days if requested in advance.',
      rooms: [
        {
          name: 'Master Bedroom',
          description: 'Master bedroom with a new Serta Sleeper bed for an amazing night\'s sleep and top quality linens to cradle you while you snooze.'
        },
        {
          name: 'Second Bedroom',
          description: 'Second bedroom with a comfortable Serta Sleeper bed and quality linens, perfect for additional guests or family members.'
        },
        {
          name: 'Living Area',
          description: 'Spacious living area with comfortable seating, perfect for relaxing after a day of exploration or an Army football game.'
        },
        {
          name: 'Kitchen & Dining',
          description: 'Fully equipped kitchen with all the essentials for preparing meals during your stay.'
        },
        {
          name: 'The Space',
          description: 'This recently updated private 2 bedroom 1100 sq ft apartment provides a peaceful quiet atmosphere and gives you the privacy you need to relax on your own. When you\'re ready to hit the town, just walk down the indoor private carpeted stairs to Main St. It is the perfect place to experience the best of West Point with just a 2 minute walk to the Academy entrance and Museum.'
        }
      ],
      amenities: [
        // Bathroom
        'Bathtub',
        'Hair dryer',
        'Cleaning products',
        'Shampoo',
        'Conditioner',
        'McKesson-Fresh Summer Rain body soap',
        'Hot water',
        'Shower gel',
        
        // Bedroom and laundry
        'Essentials',
        'Towels, bed sheets, soap, and toilet paper',
        'Hangers',
        'Bed linens',
        'Extra pillows and blankets',
        'Room-darkening shades',
        'Clothing storage: closet',
        
        // Entertainment
        'Ethernet connection',
        '50 inch HDTV with Fire TV',
        'Books and reading material',
        
        // Family
        'Crib - always at the listing',
        'Room-darkening shades in room',
        'Pack \'n play/Travel crib - available upon request',
        'Room-darkening shades',
        'Children\'s books and toys for ages 2-5 years old and 5-10 years old',
        
        // Heating and cooling
        'Portable air conditioning',
        'Window AC unit',
        'Ceiling fan',
        'Central heating',
        
        // Home safety
        'Noise decibel monitors on property',
        'Exterior security cameras on property',
        'One security camera in the hallway.',
        'Smoke alarm',
        'Smoke alarms',
        'Carbon monoxide alarm',
        'There are 2 cm alarms',
        'Fire extinguisher',
        'First aid kit',
        
        // Internet and office
        'Wifi',
        'Dedicated workspace',
        'In a common space',
        
        // Kitchen and dining
        'Kitchen',
        'Space where guests can cook their own meals',
        'Refrigerator',
        'Microwave',
        'Cooking basics',
        'Pots and pans, oil, salt and pepper',
        'Dishes and silverware',
        'Bowls, chopsticks, plates, cups, etc.',
        'Freezer',
        'Dishwasher',
        'Stove',
        'Single oven',
        'Coffee maker',
        'Wine glasses',
        'Toaster',
        'Baking sheet',
        'Blender',
        'Dining table',
        'Coffee',
        
        // Location features
        'Private entrance',
        'Separate street or building entrance',
        'Laundromat nearby',
        
        // Outdoor
        'Outdoor furniture',
        
        // Parking and facilities
        'Free parking on premises',
        'Free street parking',
        'Paid parking off premises',
        
        // Services
        'Luggage dropoff allowed',
        'For guests\' convenience when they have early arrival or late departure',
        'Long term stays allowed',
        'Allow stay for 28 days or more',
        'Self check-in',
        'Smart lock',
        'Cleaning available during stay',
        
        // Not included
        'Unavailable: WasherWasher',
        'Unavailable: DryerDryer'
      ],
      galleryImages: [
        {
          src: '/public/photos_listing_2/listing2livingroom.avif',
          alt: 'Living room area'
        },
        {
          src: '/public/photos_listing_2/listing2livingroom2.avif',
          alt: 'Another view of the living room'
        },
        {
          src: '/public/photos_listing_2/listing2livingroom3.avif',
          alt: 'Living room with comfortable seating'
        },
        {
          src: '/public/photos_listing_2/listing2bedroom1.jpg',
          alt: 'Master bedroom with queen bed'
        },
        {
          src: '/public/photos_listing_2/listing2bedroom2.avif',
          alt: 'Second bedroom'
        },
        {
          src: '/public/photos_listing_2/listing2kitchen.jpg',
          alt: 'Fully equipped kitchen'
        },
        {
          src: '/public/photos_listing_2/listing2bathroom.jpg',
          alt: 'Modern bathroom'
        },
        {
          src: '/public/photos_listing_2/listing2view.jpeg',
          alt: 'View from the property'
        }
      ],
      location: {
        address: 'Highland Falls, NY',
        description: 'Ideally located in downtown Highland Falls, just a 2 minute walk to West Point Military Academy. Perfect location for family and friends visiting their cadets! Drive 10 mins to the best hiking, swimming, fishing and golf the Hudson Valley has to offer. Enjoy Bear Mountain State Park and ZOO, West Point Golf course￼, hike Anthony\'s Nose, shop Woodbury Commons, Storm King Art Center & Eisenhower Theater and LEGOLAND.',
        coordinates: { lat: 41.3709, lng: -73.9654 }
      }
    }
  };

  const listing = id && listingData[id as keyof typeof listingData];

  if (!listing) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl font-medium text-gray-900 mb-4">Listing Not Found</h1>
            <p className="text-gray-600 mb-6">The listing you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="btn-primary"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="animate-fade-in space-y-6">
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">About this space</h3>
            <p className="text-gray-700">
              Charming 2 bedroom apartment with beautiful Mountain Views' overlooking Main Street in the center of downtown Highland Falls. Just a 2 minute walk to West Point Military Academy. Perfect location for family and friends visiting their cadets! Drive 10 mins to the best hiking, swimming, fishing and golf the Hudson Valley has to offer. Enjoy Bear Mountain State Park and ZOO, West Point Golf course￼, hike Anthony's Nose, shop Woodbury Commons, Storm King Art Center & Eisenhower Theater and LEGOLAND
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">The space</h3>
            <p className="text-gray-700">
              Enjoy EVERYTHING West Point from this ideally located Main Street home-base in Highland Falls with just a 2 minute walk to the Academy! This quiet clean and comfy apartment offers the best of both worlds! Perfect to kick back and relax after a day of exploration and fun. When you're ready for more excitement simply walk downstairs where everything is at your fingertips. Dunkin Donuts right across the street, Andy's Diner just 2 doors down is amazing for breakfast and lunch; Benny Havens' Pub & Restaurant next door is a local academy favorite for dinner and drinks. Bear Mt. Bakery, Ice cream, Mexican restaurant and Sushi all a stones throw:-) Police Station and Library on same block.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
              <li>Master Bedroom has a new Queen Serta Mattress</li>
              <li>Second bedroom with bunk beds and Serta Mattresses</li>
              <li>Living Room can sleep 2 adults on the Ikea fold down couch</li>
              <li>*New VERIZON cell tower for great cell phone service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">EASY CHECKOUT NO CHORES</h3>
            <p className="text-gray-700">
              Upon checkout please turn off lights, heat and lock doors behind you. Please do not strip the beds, you can straighten up if you'd like but I will do the rest!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Cleaning</h3>
            <p className="text-gray-700 mb-3">
              **Home Made Suites has always been 100% sanitized and sparkling clean using safe approved cleaning products between each guest**
            </p>
            <p className="text-gray-700 mb-2">Cleaning guidelines include:</p>
            <ol className="list-decimal pl-5 space-y-1 text-gray-700">
              <li>Wearing protective gear during clean</li>
              <li>Ventilating rooms BEFORE before clean</li>
              <li>Clean first then Disinfect</li>
              <li>Always to include: sofas, rugs, drapes, and other soft, porous surfaces.</li>
              <li>Wash all linens at the highest heat setting recommended by the manufacturer.</li>
              <li>Empty the vacuum cleaner after every cleaning</li>
              <li>Line trash cans</li>
              <li>Safely dispose of or wash cleaning supplies</li>
              <li>To help guests maintain a higher standard of cleanliness and hygiene, the space is well-stocked with the essential amenities.</li>
            </ol>
            <p className="text-gray-700 mt-3">
              Things like: Hand soap, Dish soap/sponge, Ample paper towels & Toilet Paper (more than enough for your stay), Tissues, Shampoo and conditioner, Body wash
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">House Rules</h3>
            <p className="text-gray-700 font-medium">
              NO PETS NO PARTIES NO SMOKING/VAPING. THANKS IN ADVANCE FOR RESPECTING THE HOUSE RULES
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">WHERE YOU'LL BE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Nearby Attractions</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>United States Military Academy - 2 min walk</li>
                  <li>West Point Museum - 3 min walk</li>
                  <li>Bear Mountain State Park - 4 min drive</li>
                  <li>Christl Arena - 4 min drive</li>
                  <li>Michie Stadium - 4 min drive</li>
                  <li>Peekskill - 18 min drive</li>
                  <li>Stewart Intl. Airport (SWF) - 31 min drive</li>
                  <li>Eisenhower Hall Theatre - 4 min drive</li>
                  <li>West Point Club - 5 min drive</li>
                  <li>Cold Spring Depot - 23 min drive</li>
                  <li>Firstie Club - 7 min drive</li>
                  <li>Moo Moo's Creamery - 24 min drive</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Groceries</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Quick Pick up: My Town Marketplace (3 min) and Walgreens (3 min)</li>
                  <li>Inexpensive groceries: Aldi's in Woodbury (15 min, Walmart and Target nearby)</li>
                  <li>Organic groceries: Adam's FairAcre Farms in Newburgh (20 min, Walmart and Target nearby)</li>
                </ul>
                
                <h4 className="font-medium text-gray-800 mt-4 mb-2">Restaurants in Highland Falls</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Dessert & Coffee: Bear Mountain Bakery (walk)</li>
                  <li>Breakfast: Andy's Restaurant (2 doors down)</li>
                  <li>Lunch/Dinner: Benny Haven's Pub & Restaurant (next door)</li>
                  <li>Bar/Food: South Gate Tavern (walk)</li>
                  <li>Korean & Japanese: Sushi King (walk)</li>
                  <li>Ice Cream: The Ice Cream Shoppe (walk)</li>
                  <li>Pizza: West Point Pizza (walk)</li>
                  <li>Other: Schade's Restaurant (4 min)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Restaurants in Cornwall</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Favorite pizza: Bear Mountain Pizza (10 min)</li>
                <li>Prima's Pizza (12 min)</li>
                <li>Authentic Mexican: Cielito Lindo (12 min)</li>
                <li>Thai: Kanda House (11 min)</li>
                <li>Coffee shops: Cornwall Coffee Co. (12 min) and 2 Alices (13 min)</li>
                <li>Breakfast or lunch: Fiddlestix Café (11 min) and Jones Farm (14 min)</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Amazing Trails and Parks</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Best hike views: Popolopen Torne (8 min) or Anthony's Nose (9 min)</li>
                <li>Hike along the Hudson River: Arden Point and Glenclyffe (15 min)</li>
                <li>Great for the kids: Roe Park (2 min) & Brooks Lake Park (8 min)</li>
                <li>Picnic on the water: Donahue Memorial Park (13 min) take Hwy 218</li>
                <li>Can't miss: Bear Mountain State Park with free zoo (10 min)</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Shopping</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Woodbury Common Premium Outlets (12 miles)</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Tee Time</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>West Point Golf Course (2 min)</li>
                <li>Hollow Brook Golf Club (12 min)</li>
                <li>Falkirk Golf Club (17 min)</li>
                <li>The Golf Club at Mansion Ridge (20 min)</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">AIRPORTS</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Westchester County Airport (44.1 miles)</li>
                <li>LaGuardia Airport (52.4 miles)</li>
                <li>JFK International Airport (61.7 miles)</li>
                <li>Newark Liberty International Airport (62.7 miles)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">The Hudson Valley</h3>
            <p className="text-gray-700 mb-3">
              The Hudson Valley is a beautiful region in New York State, known for its stunning natural scenery, rich history, and cultural attractions
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-gray-700">
              <li>Bannerman Castle: A picturesque ruin on an island in the Hudson River, perfect for hiking and exploration.</li>
              <li>Mohonk Preserve: A nature reserve with stunning rock formations, hiking trails, and scenic views.</li>
              <li>The Hudson River: A majestic river with beautiful sunsets, boat tours, and waterfront towns like Cold Spring and Beacon.</li>
              <li>The Catskill Mountains: A mountain range with breathtaking vistas, hiking trails, and charming towns like Woodstock and Phoenicia.</li>
              <li>Franklin D. Roosevelt Presidential Library and Museum: A historic site with beautiful gardens and a museum showcasing FDR's legacy.</li>
              <li>The Vanderbilt Mansion: A stunning Gilded Age mansion with beautiful gardens and a scenic view of the Hudson River.</li>
              <li>Walkway Over the Hudson: A pedestrian bridge with spectacular views of the Hudson River and the Mid-Hudson Bridge.</li>
              <li>The Dutchess County Fairgrounds: A popular spot for festivals, concerts, and events, surrounded by beautiful countryside.</li>
              <li>The Hudson Valley Rail Trail: A scenic trail for hiking and biking, following the former Hudson Valley railroad line.</li>
              <li>The charming towns and villages: Like Rhinebeck, Red Hook, and Sleepy Hollow, with their historic architecture, antique shops, and farm-to-table restaurants.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Guest access</h3>
            <p className="text-gray-700">
              This is a private building with empty office space on the bottom floor.
              You will be given a unique door code for your stay. Please note* you will go up 2 sets of indoor carpeted stairs with handrails to get to this apartment which offers a quiet sanctuary for your stay. If you have mobility issues you can book the second floor Airbnb apt. in the same building.
              The listing headline reads "Walk 2mins to campus FREE WiFi and private parking"
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Other things to note</h3>
            <p className="text-gray-700">
              No parties, events, smoking or vaping...please go downstairs if you smoke. No more than 8 people (visitors/guests/children/infants) allowed on the property by fire code/ occupancy limits. No unregistered visitors after 11:00 PM or before 6:00 AM. When you book you've agreed to the House Rules, thanks!!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'photos',
      label: 'Photos',
      content: (
        <div className="animate-fade-in">
          <ImageGallery images={listing.galleryImages} />
        </div>
      )
    },
    {
      id: 'rooms',
      label: 'Rooms',
      content: (
        <div className="space-y-8">
          {listing.rooms.map((room, index) => (
            <div key={index} className="animate-stagger opacity-0 animate-fade-in">
              <h3 className="text-xl font-medium text-hms-dark-green mb-2">{room.name}</h3>
              <p className="text-gray-700">{room.description}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'amenities',
      label: 'Amenities',
      content: (
        <div className="animate-fade-in space-y-8">
          {/* Views */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Views</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(0, 2).map((amenity, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bathroom */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Bathroom</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(2, 10).map((amenity, index) => (
                <li key={index + 2} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bedroom and laundry */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Bedroom and laundry</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(10, 18).map((amenity, index) => (
                <li key={index + 10} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Entertainment */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Entertainment</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(18, 19).map((amenity, index) => (
                <li key={index + 18} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Family */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Family</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(19, 21).map((amenity, index) => (
                <li key={index + 19} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Heating and cooling */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Heating and cooling</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(21, 25).map((amenity, index) => (
                <li key={index + 21} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Home safety */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Home safety</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(25, 31).map((amenity, index) => (
                <li key={index + 25} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Internet and office */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Internet and office</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(31, 33).map((amenity, index) => (
                <li key={index + 31} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kitchen and dining */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Kitchen and dining</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(33, 48).map((amenity, index) => (
                <li key={index + 33} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Location features */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Location features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(48, 51).map((amenity, index) => (
                <li key={index + 48} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Outdoor */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Outdoor</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(51, 52).map((amenity, index) => (
                <li key={index + 51} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Parking and facilities */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Parking and facilities</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(52, 55).map((amenity, index) => (
                <li key={index + 52} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(55, 57).map((amenity, index) => (
                <li key={index + 55} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not included */}
          <div>
            <h3 className="text-xl font-medium text-hms-dark-green mb-3">Not included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {listing.amenities.slice(57, 59).map((amenity, index) => (
                <li key={index + 57} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'location',
      label: 'Location',
      content: (
        <div className="animate-fade-in">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-hms-dark-green mb-2">Address</h3>
            <p className="text-gray-700">{listing.location.address}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-hms-dark-green mb-2">About the Area</h3>
            <p className="text-gray-700">{listing.location.description}</p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mt-6">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed Placeholder</p>
              {/* In a real implementation, you would use:
              <iframe 
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${listing.location.coordinates.lat},${listing.location.coordinates.lng}`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${listing.title}`}
                className="rounded-lg"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 md:pt-40 md:pb-24 relative"
        style={{
          backgroundImage: `url(${listing.mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 transition-colors duration-300 hover:text-white mb-6"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl animate-fade-in">
            <p className="text-white mb-2 font-medium">{listing.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">{listing.title}</h1>
            <p className="text-white/80 text-lg md:text-xl">
              {listing.location.address}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-serif text-hms-dark-green mb-3">Details & Information</h2>
              <p className="text-gray-600">Everything you need to know about this property</p>
            </div>
            
            <div>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Direct Book Now
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 md:p-8">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hms-cream">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl text-hms-dark-green mb-6">Ready to experience {listing.title}?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Book your stay now to enjoy the perfect blend of comfort and style at this unique property.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Direct Book Now
              <ExternalLink size={16} className="ml-2" />
            </Link>
            
            <Link 
              to="/contact" 
              className="btn-secondary"
            >
              Contact Host
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Listing;
