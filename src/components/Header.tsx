import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Home" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">АйДом</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/catalog') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Каталог
            </Link>
            <Link
              to="/banks"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/banks') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Банки
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              О нас
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="hidden sm:flex items-center text-sm text-gray-600 hover:text-primary">
              <Icon name="Phone" className="h-4 w-4 mr-1" />
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;