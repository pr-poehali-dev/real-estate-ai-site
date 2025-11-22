export interface Bank {
  id: string;
  name: string;
  rate: number;
  maxLoan: number;
  minDownPayment: number;
  logo?: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: number;
  rooms: number;
  floor: number;
  totalFloors: number;
  imageUrl: string;
  description: string;
  availableBanks: string[];
}

export const banks: Bank[] = [
  {
    id: 'sber',
    name: 'Сбербанк',
    rate: 8.5,
    maxLoan: 30000000,
    minDownPayment: 15,
  },
  {
    id: 'vtb',
    name: 'ВТБ',
    rate: 8.9,
    maxLoan: 25000000,
    minDownPayment: 20,
  },
  {
    id: 'alpha',
    name: 'Альфа-Банк',
    rate: 9.2,
    maxLoan: 20000000,
    minDownPayment: 15,
  },
  {
    id: 'tinkoff',
    name: 'Тинькофф',
    rate: 9.5,
    maxLoan: 15000000,
    minDownPayment: 20,
  },
  {
    id: 'gazprom',
    name: 'Газпромбанк',
    rate: 8.7,
    maxLoan: 28000000,
    minDownPayment: 15,
  },
  {
    id: 'rosselhozbank',
    name: 'Россельхозбанк',
    rate: 8.3,
    maxLoan: 22000000,
    minDownPayment: 10,
  },
];

export const properties: Property[] = [
  {
    id: '1',
    title: '2-комнатная квартира в ЖК "Солнечный"',
    price: 8500000,
    location: 'Москва, Солнцево',
    area: 65,
    rooms: 2,
    floor: 12,
    totalFloors: 25,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    description: 'Светлая квартира с отличной планировкой в современном ЖК. Развитая инфраструктура, метро в 10 минутах.',
    availableBanks: ['sber', 'vtb', 'alpha', 'gazprom'],
  },
  {
    id: '2',
    title: '1-комнатная квартира-студия',
    price: 5200000,
    location: 'Москва, Новокосино',
    area: 38,
    rooms: 1,
    floor: 5,
    totalFloors: 17,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    description: 'Уютная студия для молодой семьи. Свежий ремонт, рядом парк и торговый центр.',
    availableBanks: ['sber', 'tinkoff', 'rosselhozbank'],
  },
  {
    id: '3',
    title: '3-комнатная квартира с панорамными окнами',
    price: 12800000,
    location: 'Москва, Кутузовский проспект',
    area: 95,
    rooms: 3,
    floor: 18,
    totalFloors: 22,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    description: 'Премиальное жильё с видом на Москву-Сити. Высокие потолки, европейская планировка.',
    availableBanks: ['sber', 'vtb', 'alpha', 'gazprom', 'tinkoff'],
  },
  {
    id: '4',
    title: '2-комнатная квартира у метро',
    price: 7300000,
    location: 'Москва, Митино',
    area: 58,
    rooms: 2,
    floor: 8,
    totalFloors: 14,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    description: 'Отличное расположение в 5 минутах от метро. Тихий двор, детская площадка.',
    availableBanks: ['sber', 'vtb', 'rosselhozbank'],
  },
  {
    id: '5',
    title: '4-комнатная квартира для большой семьи',
    price: 15600000,
    location: 'Москва, Крылатское',
    area: 120,
    rooms: 4,
    floor: 3,
    totalFloors: 10,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    description: 'Просторная квартира с двумя санузлами. Рядом школа, детский сад, парк.',
    availableBanks: ['sber', 'vtb', 'gazprom', 'alpha'],
  },
  {
    id: '6',
    title: '1-комнатная квартира в новостройке',
    price: 6100000,
    location: 'Москва, Некрасовка',
    area: 42,
    rooms: 1,
    floor: 15,
    totalFloors: 25,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
    description: 'Новая квартира под чистовую отделку. Закрытая территория, консьерж.',
    availableBanks: ['sber', 'tinkoff', 'alpha', 'rosselhozbank'],
  },
];
