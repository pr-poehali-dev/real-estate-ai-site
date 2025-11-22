import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { properties } from '@/data/properties';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roomsFilter, setRoomsFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('default');

  let filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRooms = roomsFilter === 'all' || property.rooms.toString() === roomsFilter;

    return matchesSearch && matchesRooms;
  });

  if (priceSort === 'asc') {
    filteredProperties = [...filteredProperties].sort((a, b) => a.price - b.price);
  } else if (priceSort === 'desc') {
    filteredProperties = [...filteredProperties].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Каталог недвижимости
          </h1>
          <p className="text-gray-600">Найдено предложений: {filteredProperties.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск по названию или району..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={roomsFilter} onValueChange={setRoomsFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Количество комнат" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все варианты</SelectItem>
                <SelectItem value="1">1 комната</SelectItem>
                <SelectItem value="2">2 комнаты</SelectItem>
                <SelectItem value="3">3 комнаты</SelectItem>
                <SelectItem value="4">4 комнаты</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceSort} onValueChange={setPriceSort}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="asc">Сначала дешевые</SelectItem>
                <SelectItem value="desc">Сначала дорогие</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {(searchQuery || roomsFilter !== 'all' || priceSort !== 'default') && (
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setRoomsFilter('all');
                  setPriceSort('default');
                }}
              >
                <Icon name="X" className="h-4 w-4 mr-1" />
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="SearchX" className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600 mb-4">
              Попробуйте изменить параметры поиска
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setRoomsFilter('all');
                setPriceSort('default');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
