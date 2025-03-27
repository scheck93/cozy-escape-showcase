
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, Download } from 'lucide-react';

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-hms-cream to-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl text-hms-dark-green font-bold mb-6">
              Contact Home Made Suites
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Have questions or special requests? We're here to help make your stay perfect.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Card */}
              <div className="glass-card p-8 animate-fade-in">
                <h3 className="text-2xl font-serif text-hms-dark-green mb-6">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hms-light-green/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone size={20} className="text-hms-dark-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-hms-dark-green mb-1">Phone</h4>
                      <p className="text-gray-700">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Available 9am-7pm EST, 7 days a week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hms-light-green/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail size={20} className="text-hms-dark-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-hms-dark-green mb-1">Email</h4>
                      <a 
                        href="mailto:info@homemadesuites.com" 
                        className="text-gray-700 hover:text-hms-medium-green transition-colors duration-300"
                      >
                        info@homemadesuites.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Card */}
              <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-serif text-hms-dark-green mb-6">Direct Payment</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-hms-dark-green mb-2">Venmo Payment</h4>
                    <p className="text-gray-700 mb-4">
                      For direct bookings, we accept payments through Venmo.
                    </p>
                    <div className="mb-4">
                      <img 
                        src="/images/venmo.jpg" 
                        alt="Venmo QR Code" 
                        className="max-w-[200px] rounded-md shadow-sm"
                      />
                    </div>
                    <div className="bg-[#008CFF] text-white px-4 py-3 rounded-md inline-flex items-center">
                      <span className="font-bold">@HomeMadeSuites</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">
                      Please include your name and stay dates in the payment note
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-hms-dark-green mb-2">Rental Agreement</h4>
                    <p className="text-gray-700 mb-4">
                      For direct bookings, please review and sign our standard rental agreement.
                    </p>
                    <a 
                      href="https://www.jotform.com/sign/250840610128044/invite/01jq8b5p2xa53bd78007b597f9?signEmbed=1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-hms-medium-green hover:text-hms-dark-green transition-colors duration-300"
                    >
                      <Download size={18} className="mr-2" />
                      Sign Rental Agreement
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Policy */}
            <div className="glass-card p-8 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-serif text-hms-dark-green mb-6">Booking Policies</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Check-in:</strong> 4:00 PM - 8:00 PM (later check-ins available by arrangement)
                </p>
                <p>
                  <strong>Check-out:</strong> 11:00 AM
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> Full refund if canceled at least 30 days before check-in. 50% refund if canceled at least 14 days before check-in. No refunds for cancellations made within 14 days of check-in.
                </p>
                <p>
                  <strong>House Rules:</strong> No smoking. No parties or events. Pets considered upon request with additional fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hms-medium-green text-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to book your stay?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-100">
            Book directly through Airbnb for secure payments and verified reviews.
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

export default Contact;
