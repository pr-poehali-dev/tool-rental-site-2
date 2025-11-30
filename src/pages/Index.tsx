import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const tools = [
    {
      id: 1,
      name: 'Перфоратор BOSCH',
      category: 'Электроинструмент',
      priceDay: 800,
      priceWeek: 4500,
      image: 'https://cdn.poehali.dev/projects/5bfe8323-bc15-4889-84d5-d82e0236d116/files/0a7541d4-bc23-440f-b7de-b24a1e271777.jpg',
      description: 'Мощный перфоратор для профессиональных работ'
    },
    {
      id: 2,
      name: 'Бетономешалка 180л',
      category: 'Бетонное оборудование',
      priceDay: 1200,
      priceWeek: 7000,
      image: 'https://cdn.poehali.dev/projects/5bfe8323-bc15-4889-84d5-d82e0236d116/files/7c49f506-7de2-443e-a982-b755497798d8.jpg',
      description: 'Надежная бетономешалка для средних объемов'
    },
    {
      id: 3,
      name: 'Шлифмашина угловая',
      category: 'Электроинструмент',
      priceDay: 600,
      priceWeek: 3500,
      image: 'https://cdn.poehali.dev/projects/5bfe8323-bc15-4889-84d5-d82e0236d116/files/90b7bf2e-3d72-4cf3-9505-04e660e57498.jpg',
      description: 'Болгарка для резки и шлифовки материалов'
    },
    {
      id: 4,
      name: 'Лестница алюминиевая 6м',
      category: 'Вышки и леса',
      priceDay: 500,
      priceWeek: 2800,
      image: '/placeholder.svg',
      description: 'Трансформер 4х6 с рабочей высотой 6 метров'
    },
    {
      id: 5,
      name: 'Генератор 5кВт',
      category: 'Электрогенераторы',
      priceDay: 1800,
      priceWeek: 10000,
      image: '/placeholder.svg',
      description: 'Бензиновый генератор для автономного питания'
    },
    {
      id: 6,
      name: 'Виброплита 100кг',
      category: 'Уплотнительное оборудование',
      priceDay: 900,
      priceWeek: 5000,
      image: '/placeholder.svg',
      description: 'Для уплотнения грунта и асфальта'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">СтройАренда</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-accent transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-accent transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('terms')} className="text-sm font-medium hover:text-accent transition-colors">
              Условия
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </button>
          </nav>
          <Button className="hidden md:inline-flex" onClick={() => scrollToSection('contacts')}>
            Заказать звонок
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Аренда строительного инструмента
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное оборудование для строительства и ремонта. Выгодные условия и быстрая доставка по городу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('catalog')}>
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('prices')}>
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Clock" className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-2xl">24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Круглосуточная выдача и возврат инструмента</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Truck" className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-2xl">Доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Бесплатная доставка от 3000₽</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Shield" className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-2xl">Гарантия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Все оборудование застраховано</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Wrench" className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-2xl">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Единиц техники в наличии</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground">Популярные позиции строительного оборудования</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="electric">Электроинструмент</TabsTrigger>
              <TabsTrigger value="concrete">Бетонное оборудование</TabsTrigger>
              <TabsTrigger value="other">Прочее</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Сутки:</span>
                          <span className="text-lg font-bold">{tool.priceDay}₽</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Неделя:</span>
                          <span className="text-lg font-bold text-accent">{tool.priceWeek}₽</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="electric">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(t => t.category === 'Электроинструмент').map((tool) => (
                  <Card key={tool.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Сутки:</span>
                          <span className="text-lg font-bold">{tool.priceDay}₽</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Неделя:</span>
                          <span className="text-lg font-bold text-accent">{tool.priceWeek}₽</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="concrete">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(t => t.category === 'Бетонное оборудование').map((tool) => (
                  <Card key={tool.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Сутки:</span>
                          <span className="text-lg font-bold">{tool.priceDay}₽</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Неделя:</span>
                          <span className="text-lg font-bold text-accent">{tool.priceWeek}₽</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(t => t.category !== 'Электроинструмент' && t.category !== 'Бетонное оборудование').map((tool) => (
                  <Card key={tool.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Сутки:</span>
                          <span className="text-lg font-bold">{tool.priceDay}₽</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Неделя:</span>
                          <span className="text-lg font-bold text-accent">{tool.priceWeek}₽</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Цены и условия</h2>
            <p className="text-xl text-muted-foreground">Выгодные тарифы для любых сроков аренды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Calendar" className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Краткосрочная аренда</CardTitle>
                <CardDescription>От 1 до 6 дней</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-3xl font-bold">Полная цена</p>
                <p className="text-muted-foreground">Базовая стоимость за сутки</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Минимальный срок - сутки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Залог 30% от стоимости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all border-accent border-2">
              <CardHeader>
                <Icon name="TrendingDown" className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Недельная аренда</CardTitle>
                <CardDescription>От 7 до 13 дней</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-3xl font-bold text-accent">-15%</p>
                <p className="text-muted-foreground">Скидка от базовой цены</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Выгодно для ремонта</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Залог 25% от стоимости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Sparkles" className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Долгосрочная аренда</CardTitle>
                <CardDescription>От 14 дней</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-3xl font-bold text-accent">-25%</p>
                <p className="text-muted-foreground">Максимальная выгода</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Для стройки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-accent" />
                    <span className="text-sm">Залог 20% от стоимости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="terms" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Условия аренды</h2>
            <p className="text-xl text-muted-foreground">Простые и прозрачные правила работы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="FileText" className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Необходимые документы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Паспорт гражданина РФ</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Договор аренды (заполняется на месте)</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Залог (наличными или картой)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Truck" className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Доставка и возврат</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Бесплатная доставка от 3000₽</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Доставка в день обращения</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Самовывоз круглосуточно</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Shield" className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Гарантии и страховка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Исправное оборудование</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Бесплатная замена при поломке</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Страхование от повреждений</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Clock" className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Выдача: круглосуточно</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Возврат: 24/7</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Консультации: 8:00 - 20:00</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              СтройАренда работает на рынке аренды строительного оборудования с 2015 года. За это время мы помогли реализовать более 5000 проектов - от небольших ремонтов до крупных строительных объектов.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-5xl font-bold text-accent mb-2">9</p>
                <p className="text-muted-foreground">лет на рынке</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-accent mb-2">500+</p>
                <p className="text-muted-foreground">единиц техники</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-accent mb-2">5000+</p>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-5 w-5 text-accent" />
                    Адрес пункта выдачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">г. Москва, ул. Строительная, д. 15к2</p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Icon name="Map" className="h-20 w-20 text-muted-foreground/30 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Интерактивная карта</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Navigation" className="mr-2 h-4 w-4" />
                    Построить маршрут
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" className="h-5 w-5 text-accent" />
                    Зона доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-accent" />
                      <span>Москва в пределах МКАД - бесплатно от 3000₽</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-accent" />
                      <span>За МКАД - 50₽/км</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-accent" />
                      <span>Московская область - по договорённости</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="h-5 w-5 text-accent" />
                    Телефоны
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:+74951234567" className="block text-lg font-semibold hover:text-accent transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <a href="tel:+79161234567" className="block text-lg font-semibold hover:text-accent transition-colors">
                    +7 (916) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">Круглосуточно, без выходных</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" type="tel" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Какой инструмент интересует?</label>
                    <Input placeholder="Например: перфоратор" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Опишите детали вашего запроса..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" className="h-6 w-6" />
                <span className="text-xl font-bold">СтройАренда</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная аренда строительного инструмента с 2015 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Электроинструмент</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Бетонное оборудование</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Генераторы</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Леса и вышки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О компании</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Условия аренды</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>+7 (916) 123-45-67</li>
                <li>info@stroiarenda.ru</li>
                <li>Москва, ул. Строительная, 15к2</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 СтройАренда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;