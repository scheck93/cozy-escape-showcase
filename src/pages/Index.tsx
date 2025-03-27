
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listings = [
    {
      id: 'mountain-retreat',
      title: '3 min walk to West Point-Free WiFi & pvt parking',
      description: 'Charming 2 bedroom apartment with beautiful Mountain Views\' overlooking Main Street in the center of downtown Highland Falls. Just a 2 minute walk to West Point Military Academy. Perfect location for family and friends visiting their cadets!',
      image: '/photos_listing_1/3 min walk to West Point-Free WiFi & pvt parking1.avif'
    },
    {
      id: 'urban-loft',
      title: 'Walk 2mins to campus FREE WiFi and private parking',
      description: "Enjoy this huge private 2 bedroom apartment on Main Street in the heartbeat of Highland Falls and walk just 3 mins to the Military Academy! Unbeatable location for family and friends visiting their cadets! Perfect place to kick back and relax after an Army football game or day of exploration.",
      image: '/photos_listing_2/listing2livingroom.avif'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-hms-dark-green/20 to-hms-light-green/10 z-0" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-hms-dark-green font-bold mb-6">
              West Point Apartments by Home Made Suites
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the comfort of home with the unbeatable locations of our apartments near West Point
            </p>
            <a 
              href="#listings" 
              className="btn-primary inline-block"
            >
              Explore Our Listings
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-hms-cream">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-hms-dark-green mb-6">About Home Made Suites</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mb-14">
              <div className="md:w-1/3 bg-gradient-to-b from-white to-hms-cream rounded-lg shadow-md p-6 border-t-4 border-hms-medium-green">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src="/images/KristinaProfile.jpg" 
                      alt="Kristina - Home Made Suites Host" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-1">Kristina</h3>
                  <p className="text-sm text-gray-600 text-center mb-2">Owner of Home Made Suites</p>
                  <p className="text-gray-600 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Superhost
                  </p>
                  
                  {/* No stats in card as requested */}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hms-medium-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Total Years Hosting:</p>
                      <p className="text-gray-700 text-2xl font-bold">7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hms-medium-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Total Listing Reviews:</p>
                      <p className="text-gray-700 text-2xl font-bold">740+</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-4">
                  Welcome to Home Made Suites, I'm Kristina! As your host, I am committed to providing you with a remarkable home-away-from-home experience where you can fully immerse yourself in your surroundings and live like a local in this charming military town. Whether you're here to visit your cadet, enjoy a football game, hike the glorious Hudson Valley, I'm devoted to making your visit enjoyable and unforgettable!
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-stagger">
              <div className="text-center opacity-0 animate-fade-in">
                <div className="w-16 h-16 bg-hms-light-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-hms-dark-green mb-2">Comfortable Spaces</h3>
                <p className="text-gray-600">Thoughtfully designed interiors that feel like home</p>
                <p className="text-gray-700 italic mt-2">"I make sure every corner of my space is made comfortable, so you feel just like you're at home."</p>
              </div>
              
              <div className="text-center opacity-0 animate-fade-in">
                <div className="w-16 h-16 bg-hms-medium-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-hms-dark-green mb-2">Exceptional Quality</h3>
                <p className="text-gray-600">Premium amenities and attention to detail</p>
                <p className="text-gray-700 italic mt-2">"I'm meticulous on keeping things clean, tidy and of the highest quality for my guests."</p>
              </div>
              
              <div className="text-center opacity-0 animate-fade-in">
                <div className="w-16 h-16 bg-hms-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-hms-dark-green mb-2">Prime Locations</h3>
                <p className="text-gray-600">Properties in ideal settings for your perfect stay</p>
                <p className="text-gray-700 italic mt-2">"Location is everything! You'll be just minutes from West Point and all its surroundings."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-hms-dark-green mb-5">Our Properties</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our unique properties and find the perfect accommodation for your next getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {listings.map((listing, index) => (
              <ListingCard 
                key={listing.id}
                id={listing.id}
                title={listing.title}
                description={listing.description}
                image={listing.image}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hms-medium-green text-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to book your stay?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-100">
            Our properties book quickly. Reserve your dates now to ensure availability for your preferred travel dates.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-hms-dark-green font-medium rounded-md shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1"
          >
            Direct Book Now
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
