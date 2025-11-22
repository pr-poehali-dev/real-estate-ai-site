import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Property, banks } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const availableBankNames = property.availableBanks
    .map((bankId) => banks.find((b) => b.id === bankId)?.name)
    .filter(Boolean)
    .join(', ');

  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-1">
              {property.title}
            </h3>
            <p className="text-2xl font-bold text-primary">
              {property.price.toLocaleString('ru-RU')} ₽
            </p>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Icon name="MapPin" className="h-4 w-4 mr-1" />
            {property.location}
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              <Icon name="Maximize" className="h-3 w-3 mr-1" />
              {property.area} м²
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Icon name="DoorOpen" className="h-3 w-3 mr-1" />
              {property.rooms} комн.
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Icon name="Building" className="h-3 w-3 mr-1" />
              {property.floor}/{property.totalFloors} эт.
            </Badge>
          </div>

          <div className="pt-3 border-t">
            <p className="text-xs text-gray-500 mb-1">Доступны банки:</p>
            <p className="text-xs text-gray-700 line-clamp-1">{availableBankNames}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
