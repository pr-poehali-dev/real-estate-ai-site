import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import Icon from '@/components/ui/icon';
import { properties } from '@/data/properties';

const Home = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-accent via-background to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Найдите квартиру мечты
              <span className="block text-primary mt-2">с умным подбором кредита</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Искусственный интеллект поможет подобрать лучшие условия ипотеки от ведущих банков России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/banks">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Icon name="Building2" className="mr-2 h-5 w-5" />
                  Банки-партнеры
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Icon name="Search" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Умный поиск</h3>
              <p className="text-gray-600">
                ИИ анализирует ваши требования и подбирает лучшие варианты недвижимости
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Icon name="Calculator" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Расчет ипотеки</h3>
              <p className="text-gray-600">
                Мгновенный расчет платежей и сравнение условий от разных банков
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Icon name="Zap" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
              <p className="text-gray-600">
                Ускорение процесса кредитования с помощью технологий ИИ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные предложения
            </h2>
            <p className="text-gray-600">Лучшая недвижимость с выгодными условиями ипотеки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalog">
              <Button size="lg" variant="outline">
                Смотреть все предложения
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы найти свою квартиру?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Начните поиск прямо сейчас и получите лучшие предложения от банков
          </p>
          <Link to="/catalog">
            <Button size="lg" variant="secondary">
              <Icon name="Home" className="mr-2 h-5 w-5" />
              Начать поиск
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;