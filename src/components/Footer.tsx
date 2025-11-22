import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gray-900">АйДом</span>
            </div>
            <p className="text-sm text-gray-600">
              Умный подбор недвижимости и ускорение процесса кредитования с использованием ИИ
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-gray-600 hover:text-primary">
                  Каталог недвижимости
                </Link>
              </li>
              <li>
                <Link to="/banks" className="text-sm text-gray-600 hover:text-primary">
                  Банки-партнеры
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Преимущества
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm text-gray-600">
                <Icon name="Phone" className="h-4 w-4 mr-2 mt-0.5" />
                <a href="tel:+74951234567" className="hover:text-primary">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <Icon name="Mail" className="h-4 w-4 mr-2 mt-0.5" />
                <a href="mailto:info@aidom.ru" className="hover:text-primary">
                  info@aidom.ru
                </a>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <Icon name="MapPin" className="h-4 w-4 mr-2 mt-0.5" />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 АйДом. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;