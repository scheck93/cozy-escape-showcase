
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ListingCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ListingCard = ({ id, title, description, image, delay = 0 }: ListingCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Link 
      to={`/listing/${id}`}
      className={`listing-card block opacity-0 transform translate-y-8 transition-all duration-700 ease-apple hover:shadow-sm ${
        visible ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden">
        <div className="h-60 md:h-72 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-1000 ease-apple ${
              imageLoaded 
                ? 'transform scale-100' 
                : 'transform scale-110 blur-sm'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-serif mb-3 text-hms-dark-green">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        <div 
          className="inline-flex items-center text-hms-medium-green font-medium transition-all duration-300 group"
        >
          View More 
          <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
