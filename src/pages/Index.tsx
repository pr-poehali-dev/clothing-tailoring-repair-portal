import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    { icon: 'Scissors', title: 'Пошив одежды', description: 'Индивидуальный пошив любой сложности по вашим меркам' },
    { icon: 'Sparkles', title: 'Ремонт и подгонка', description: 'Профессиональная подгонка по фигуре и ремонт любой сложности' },
    { icon: 'Ruler', title: 'Работа с тканью', description: 'Замена подкладки, молний, фурнитуры' },
    { icon: 'Star', title: 'Декор и вышивка', description: 'Украшение одежды декоративными элементами' },
  ];

  const prices = [
    { category: 'Брюки', items: ['Укоротить низ — от 400₽', 'Ушить по фигуре — от 600₽', 'Заменить молнию — от 500₽'] },
    { category: 'Платья и юбки', items: ['Укоротить подол — от 500₽', 'Ушить по фигуре — от 800₽', 'Вшить молнию — от 600₽'] },
    { category: 'Пиджаки и пальто', items: ['Укоротить рукава — от 700₽', 'Заменить подкладку — от 1500₽', 'Ушить по фигуре — от 1200₽'] },
    { category: 'Индивидуальный пошив', items: ['Платье — от 3500₽', 'Костюм — от 8000₽', 'Пальто — от 12000₽'] },
  ];

  const portfolio = [
    { image: 'https://cdn.poehali.dev/projects/373cb796-f9d2-4c16-8859-b995c7fdf6cb/files/b581d0a1-7739-4941-83b1-f3d18a5720a1.jpg', title: 'Деловой костюм' },
    { image: 'https://cdn.poehali.dev/projects/373cb796-f9d2-4c16-8859-b995c7fdf6cb/files/e5fe3024-a04b-4fae-a7bb-d43a2e7366c3.jpg', title: 'Ручная работа' },
    { image: 'https://cdn.poehali.dev/projects/373cb796-f9d2-4c16-8859-b995c7fdf6cb/files/a624fc65-2a63-4f22-8ba3-cf7291e48d68.jpg', title: 'Наша мастерская' },
  ];

  const masters = [
    { name: 'Анна Петрова', experience: '15 лет', specialty: 'Вечерние платья и костюмы' },
    { name: 'Елена Смирнова', experience: '12 лет', specialty: 'Верхняя одежда' },
    { name: 'Мария Иванова', experience: '8 лет', specialty: 'Повседневная одежда' },
  ];

  const reviews = [
    { name: 'Ольга К.', text: 'Отличное ателье! Подогнали платье идеально, очень довольна результатом.', rating: 5 },
    { name: 'Дмитрий С.', text: 'Сшили костюм на свадьбу. Качество на высоте, сел как влитой!', rating: 5 },
    { name: 'Анастасия М.', text: 'Быстро отремонтировали пальто, цена приемлемая. Рекомендую!', rating: 5 },
  ];

  const faqs = [
    { q: 'Сколько времени занимает пошив?', a: 'В среднем 1-2 недели в зависимости от сложности изделия. Срочные заказы обсуждаются индивидуально.' },
    { q: 'Нужно ли приносить свою ткань?', a: 'Вы можете принести свою ткань или выбрать из нашего каталога материалов.' },
    { q: 'Делаете ли примерки?', a: 'Да, для индивидуального пошива предусмотрены 1-2 примерки для идеальной посадки.' },
    { q: 'Есть ли гарантия на работу?', a: 'Мы предоставляем гарантию 1 месяц на все виды работ.' },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scissors" size={24} className="text-accent" />
              <span className="text-xl font-bold">Ателье Мастер</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Услуги', 'Цены', 'Портфолио', 'О нас', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm hover:text-accent transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">Записаться</Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональное<br />
                <span className="text-accent">ателье</span> для вас
              </h1>
              <p className="text-xl text-muted-foreground">
                Пошив и ремонт одежды любой сложности. Индивидуальный подход и безупречное качество.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/373cb796-f9d2-4c16-8859-b995c7fdf6cb/files/a624fc65-2a63-4f22-8ba3-cf7291e48d68.jpg"
                alt="Мастерская"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {prices.map((category, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио работ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши мастера</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {masters.map((master, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-accent" />
                  </div>
                  <CardTitle>{master.name}</CardTitle>
                  <CardDescription className="text-base">Опыт: {master.experience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{master.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Швейная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб: 10:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@atelier-master.ru</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Scissors" size={24} />
            <span className="text-xl font-bold">Ателье Мастер</span>
          </div>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
