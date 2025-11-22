import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { banks } from '@/data/properties';

const Banks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Банки-партнеры
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими банками России, чтобы предложить вам лучшие условия ипотечного кредитования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {banks.map((bank, index) => (
            <Card
              key={bank.id}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{bank.name}</span>
                  <Badge variant="secondary" className="text-lg">
                    от {bank.rate}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Максимальная сумма кредита</p>
                    <p className="text-lg font-semibold">
                      {bank.maxLoan.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Минимальный первоначальный взнос</p>
                    <p className="text-lg font-semibold">{bank.minDownPayment}%</p>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-start text-sm text-gray-600 mb-2">
                      <Icon name="Check" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Быстрое рассмотрение заявки</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600 mb-2">
                      <Icon name="Check" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Возможность досрочного погашения</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Icon name="Check" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Онлайн-оформление документов</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                    Подать заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
          <CardContent className="py-12 text-center">
            <Icon name="Sparkles" className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Не знаете, какой банк выбрать?
            </h2>
            <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
              Наш ИИ-ассистент поможет подобрать оптимальные условия кредитования с учетом вашей ситуации
            </p>
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Banks;
