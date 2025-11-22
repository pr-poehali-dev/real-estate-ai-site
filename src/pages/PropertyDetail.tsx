import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { properties, banks } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(20);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Объект не найден</h2>
        <Link to="/catalog">
          <Button>Вернуться в каталог</Button>
        </Link>
      </div>
    );
  }

  const downPaymentAmount = (property.price * downPaymentPercent) / 100;
  const loanAmount = property.price - downPaymentAmount;

  const calculateMonthlyPayment = (rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment;
  };

  const availableBanksData = property.availableBanks
    .map((bankId) => banks.find((b) => b.id === bankId))
    .filter((bank): bank is typeof banks[0] => bank !== undefined)
    .filter((bank) => loanAmount <= bank.maxLoan && downPaymentPercent >= bank.minDownPayment)
    .sort((a, b) => a.rate - b.rate);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to="/catalog" className="inline-flex items-center text-primary hover:underline mb-6">
          <Icon name="ArrowLeft" className="h-4 w-4 mr-1" />
          Вернуться в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-96 object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{property.title}</CardTitle>
                <p className="text-3xl font-bold text-primary mt-2">
                  {property.price.toLocaleString('ru-RU')} ₽
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon name="MapPin" className="h-5 w-5 mr-2" />
                  {property.location}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    <Icon name="Maximize" className="h-4 w-4 mr-2" />
                    {property.area} м²
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    <Icon name="DoorOpen" className="h-4 w-4 mr-2" />
                    {property.rooms} комн.
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    <Icon name="Building" className="h-4 w-4 mr-2" />
                    {property.floor}/{property.totalFloors} эт.
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Описание</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Калькулятор ипотеки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block">
                    Первоначальный взнос: {downPaymentPercent}% ({downPaymentAmount.toLocaleString('ru-RU')} ₽)
                  </Label>
                  <Slider
                    value={[downPaymentPercent]}
                    onValueChange={(value) => setDownPaymentPercent(value[0])}
                    min={10}
                    max={80}
                    step={5}
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Срок кредита: {loanTerm} лет</Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={5}
                    max={30}
                    step={1}
                  />
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">Сумма кредита</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {loanAmount.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                {availableBanksData.length === 0 ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      С выбранными параметрами кредит недоступен. Увеличьте первоначальный взнос или измените срок.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold mb-3">Предложения банков:</h4>
                    <div className="space-y-3">
                      {availableBanksData.map((bank) => {
                        const monthlyPayment = calculateMonthlyPayment(bank.rate);
                        return (
                          <div
                            key={bank.id}
                            className="border rounded-lg p-4 hover:border-primary transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <p className="font-semibold">{bank.name}</p>
                              <Badge>{bank.rate}%</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              Ежемесячный платеж
                            </p>
                            <p className="text-xl font-bold text-primary">
                              {monthlyPayment.toLocaleString('ru-RU', {
                                maximumFractionDigits: 0,
                              })}{' '}
                              ₽/мес
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <Button className="w-full" size="lg">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
