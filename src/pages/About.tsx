import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нас</h1>
            <p className="text-lg text-gray-600">
              АйДом — современная платформа для подбора недвижимости с использованием искусственного интеллекта
            </p>
          </div>

          <Card className="mb-8 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="Target" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Наша миссия</h2>
                  <p className="text-gray-600">
                    Сделать процесс покупки недвижимости и получения ипотеки простым, прозрачным и быстрым для каждого россиянина.
                    Мы используем технологии искусственного интеллекта, чтобы вы могли найти идеальную квартиру и лучшие условия кредитования.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="Lightbulb" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Как это работает</h2>
                  <p className="text-gray-600">
                    Наш ИИ-алгоритм анализирует тысячи предложений от банков и застройщиков, учитывая ваши параметры и финансовые возможности.
                    Вы получаете персональные рекомендации и можете мгновенно рассчитать ипотеку с лучшими условиями.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Наши преимущества</h2>
                  <p className="text-gray-600 mb-3">
                    Мы сотрудничаем с ведущими банками России и проверенными застройщиками. 
                    Все предложения на платформе актуальны и соответствуют реальным условиям.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-gray-600">Объектов недвижимости</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-gray-600">Банков-партнеров</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Готовы начать поиск?</h2>
              <p className="text-blue-100 mb-6">
                Присоединяйтесь к тысячам людей, которые уже нашли свою квартиру через АйДом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/catalog">
                  <Button size="lg" variant="secondary">
                    <Icon name="Search" className="h-5 w-5 mr-2" />
                    Смотреть каталог
                  </Button>
                </Link>
                <a href="tel:+74951234567">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                    <Icon name="Phone" className="h-5 w-5 mr-2" />
                    Связаться с нами
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
