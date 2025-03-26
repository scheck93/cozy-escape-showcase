
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
      title: 'Mountain Retreat',
      subtitle: 'A peaceful escape in nature',
      mainImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Nestled among the towering pines with breathtaking mountain views, this serene retreat offers the perfect escape from the hustle and bustle of everyday life. The cabin features rustic-chic décor, blending traditional mountain charm with modern amenities to create a cozy and comfortable space for relaxation and rejuvenation.',
      rooms: [
        {
          name: 'Master Bedroom',
          description: 'Spacious bedroom with a king-size bed, luxury linens, and a stunning view of the mountains. Includes an en-suite bathroom with a walk-in shower and soaking tub.'
        },
        {
          name: 'Guest Bedroom',
          description: 'Cozy room with a queen-size bed and rustic pine furnishings. Large windows provide excellent natural light and forest views.'
        },
        {
          name: 'Living Area',
          description: 'Open concept space with a stone fireplace, comfortable seating, and floor-to-ceiling windows offering panoramic mountain views.'
        },
        {
          name: 'Kitchen & Dining',
          description: 'Fully equipped kitchen with modern appliances and a dining area that seats six people comfortably.'
        },
        {
          name: 'Outdoor Spaces',
          description: 'Expansive deck with outdoor furniture, BBQ grill, and a hot tub perfect for stargazing. Private hiking trails accessible directly from the property.'
        }
      ],
      amenities: [
        'High-speed WiFi', 
        'Smart TV with streaming services', 
        'Fully equipped kitchen', 
        'Outdoor hot tub', 
        'Fireplace with complimentary firewood', 
        'Washer and dryer', 
        'Private hiking trails', 
        'Panoramic mountain views', 
        'Outdoor BBQ grill',
        'Air conditioning and heating'
      ],
      galleryImages: [
        {
          src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
          alt: 'Mountain cabin exterior'
        },
        {
          src: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59',
          alt: 'Mountain view from property'
        },
        {
          src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c',
          alt: 'Cozy living room with fireplace'
        },
        {
          src: 'https://images.unsplash.com/photo-1507038772120-7fff76f79d79',
          alt: 'Master bedroom with mountain views'
        },
        {
          src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6',
          alt: 'Deck with outdoor seating area'
        },
        {
          src: 'https://images.unsplash.com/photo-1505826759037-406b40feb4cd',
          alt: 'Modern kitchen with wood details'
        }
      ],
      location: {
        address: 'Blue Ridge Mountains, NC',
        description: 'Located in the scenic Blue Ridge Mountains, our property is just a 15-minute drive from the charming town of Asheville with its renowned restaurants, breweries, and arts scene. Enjoy easy access to numerous hiking trails, waterfalls, and outdoor activities.',
        coordinates: { lat: 35.5951, lng: -82.5515 }
      }
    },
    'urban-loft': {
      title: 'Urban Loft',
      subtitle: 'Modern living in the heart of the city',
      mainImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Experience the pulse of downtown living in this stylish loft apartment. The space showcases exposed brick walls, high ceilings, and industrial-inspired décor, creating a sophisticated urban retreat. Located in the vibrant arts district, you\'ll be steps away from the city\'s best restaurants, galleries, shops, and entertainment venues.',
      rooms: [
        {
          name: 'Open Concept Living',
          description: 'Spacious loft layout with contemporary furniture, floor-to-ceiling windows, and polished concrete floors. The living area features a comfortable sectional sofa and smart entertainment system.'
        },
        {
          name: 'Bedroom Area',
          description: 'Semi-private bedroom space with a premium queen-size bed, luxury linens, and blackout curtains. Custom lighting creates the perfect ambiance.'
        },
        {
          name: 'Gourmet Kitchen',
          description: 'Chef-inspired kitchen with stainless steel appliances, quartz countertops, and a breakfast bar that seats four people.'
        },
        {
          name: 'Bathroom',
          description: 'Modern bathroom with a walk-in rainfall shower, heated floors, and high-end fixtures.'
        },
        {
          name: 'Workspace',
          description: 'Dedicated office nook with an ergonomic chair, desk, and high-speed internet - perfect for remote work.'
        }
      ],
      amenities: [
        'High-speed WiFi', 
        '55" Smart TV with streaming services', 
        'Fully equipped kitchen with espresso machine', 
        'Washer and dryer', 
        'Air conditioning and heating',
        'Bluetooth sound system',
        'Dedicated workspace',
        'Elevator in building',
        'Secure entry system',
        'Rooftop access with city views'
      ],
      galleryImages: [
        {
          src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
          alt: 'Urban loft interior'
        },
        {
          src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
          alt: 'Living area with city views'
        },
        {
          src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
          alt: 'Modern kitchen with breakfast bar'
        },
        {
          src: 'https://images.unsplash.com/photo-1617104678098-de229db51175',
          alt: 'Comfortable bedroom area'
        },
        {
          src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115',
          alt: 'Stylish bathroom'
        },
        {
          src: 'https://images.unsplash.com/photo-1592247350590-4d37c73632c6',
          alt: 'Workspace with city view'
        }
      ],
      location: {
        address: 'Arts District, Downtown, CA',
        description: 'Located in the vibrant Arts District of downtown Los Angeles, our loft puts you at the center of the city\'s cultural scene. Walk to trendy cafes, art galleries, boutique shops, and award-winning restaurants. Public transportation is readily available, and parking can be arranged.',
        coordinates: { lat: 34.0407, lng: -118.2468 }
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
      id: 'description',
      label: 'Description',
      content: (
        <div className="animate-fade-in">
          <p className="text-gray-700 mb-6">{listing.description}</p>
          
          <h3 className="text-xl font-medium text-hms-dark-green mb-3">Amenities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {listing.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hms-medium-green mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 transition-colors duration-300 hover:text-white mb-6"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl animate-fade-in">
            <p className="text-hms-light-green mb-2 font-medium">{listing.subtitle}</p>
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
              <a 
                href="https://www.airbnb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Book Now on Airbnb
                <ExternalLink size={16} className="ml-2" />
              </a>
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
            <a 
              href="https://www.airbnb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Book on Airbnb
              <ExternalLink size={16} className="ml-2" />
            </a>
            
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
