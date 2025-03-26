
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
      title: 'Mountain Retreat',
      description: 'Escape to this serene mountain hideaway nestled among towering pines with breathtaking views. This tastefully decorated cabin offers modern amenities while maintaining its rustic charm.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 'urban-loft',
      title: 'Urban Loft',
      description: "Experience downtown living in this stylish loft apartment featuring exposed brick walls, high ceilings, and industrial-inspired décor. Steps away from the city's best restaurants, shops, and entertainment.",
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
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
              Discover Our Cozy Retreats
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the comfort of home with the luxury of a getaway at our thoughtfully designed properties
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
              <h2 className="text-3xl md:text-4xl text-hms-dark-green mb-6">Welcome to Home Made Suites</h2>
              <p className="text-gray-700">
                We provide thoughtfully designed accommodations that combine the comfort of home with the excitement of travel. Each of our properties is unique, offering a distinct experience while maintaining our commitment to quality, comfort, and exceptional hospitality.
              </p>
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
              </div>
              
              <div className="text-center opacity-0 animate-fade-in">
                <div className="w-16 h-16 bg-hms-medium-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-hms-dark-green mb-2">Exceptional Quality</h3>
                <p className="text-gray-600">Premium amenities and attention to detail</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-20 md:py-32">
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
            href="https://www.airbnb.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-hms-dark-green font-medium rounded-md shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1"
          >
            Book on Airbnb
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
