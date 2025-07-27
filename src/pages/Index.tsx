import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Электродвигатель АИР 80А2",
      price: "12 500 ₽",
      oldPrice: "14 000 ₽",
      image: "/placeholder.svg",
      inStock: true,
      category: "Электродвигатели"
    },
    {
      id: 2,
      name: "Кабель ВВГнг 3х2.5",
      price: "89 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Кабели"
    },
    {
      id: 3,
      name: "Автоматический выключатель C16",
      price: "450 ₽",
      oldPrice: "520 ₽",
      image: "/placeholder.svg",
      inStock: false,
      category: "Автоматика"
    },
    {
      id: 4,
      name: "Светильник LED 36W",
      price: "1 200 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Освещение"
    },
    {
      id: 5,
      name: "Розетка с заземлением",
      price: "125 ₽",
      oldPrice: "150 ₽",
      image: "/placeholder.svg",
      inStock: true,
      category: "Установочные изделия"
    },
    {
      id: 6,
      name: "Щиток распределительный",
      price: "2 800 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Щитовое оборудование"
    }
  ];

  const categories = [
    { name: "Электродвигатели", icon: "Zap", count: 245 },
    { name: "Кабели и провода", icon: "Cable", count: 1834 },
    { name: "Автоматика", icon: "Settings", count: 567 },
    { name: "Освещение", icon: "Lightbulb", count: 892 },
    { name: "Установочные изделия", icon: "Plug", count: 456 },
    { name: "Щитовое оборудование", icon: "Grid3x3", count: 234 }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <span className="flex items-center"><Icon name="Phone" size={16} className="mr-1" /> +7 (495) 123-45-67</span>
              <span className="flex items-center"><Icon name="Mail" size={16} className="mr-1" /> info@etmstore.ru</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Доставка по Москве</span>
              <span>•</span>
              <span>Работаем с 9:00 до 18:00</span>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-roboto text-gray-900 mr-8">ETM Store</h1>
              <nav className="flex space-x-6">
                <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition">Каталог</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition">О компании</a>
                <a href="#delivery" className="text-gray-700 hover:text-blue-600 transition">Доставка</a>
                <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition">Контакты</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input 
                  placeholder="Поиск товаров..." 
                  className="w-64 pr-10"
                />
                <Icon name="Search" size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <Icon name="User" size={18} />
                <span>Вход</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <Icon name="ShoppingCart" size={18} />
                <span>Корзина</span>
                <Badge variant="secondary" className="ml-1">3</Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold font-roboto text-gray-900 mb-4">
                Электротехническое оборудование
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Широкий ассортимент качественного электрооборудования от ведущих производителей
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="px-8">
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Электрооборудование" 
                className="w-96 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-roboto text-center mb-12">Каталог товаров</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={category.icon} size={32} className="mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
                  <p className="text-xs text-gray-500">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {!product.inStock && (
                      <Badge variant="destructive" className="absolute top-2 right-2">
                        Под заказ
                      </Badge>
                    )}
                    {product.inStock && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        В наличии
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg mb-2 font-roboto">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1" disabled={!product.inStock}>
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-roboto mb-6">О компании ETM Store</h3>
              <p className="text-gray-600 mb-4">
                Мы являемся надежным поставщиком электротехнического оборудования с более чем 15-летним опытом работы на рынке.
              </p>
              <p className="text-gray-600 mb-6">
                Наша компания предлагает широкий ассортимент качественной продукции от ведущих мировых и российских производителей.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50 000+</div>
                  <div className="text-sm text-gray-600">товаров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10 000+</div>
                  <div className="text-sm text-gray-600">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="О компании" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-roboto text-center mb-12">Доставка и оплата</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Truck" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Быстрая доставка</h4>
                <p className="text-sm text-gray-600">Доставка по Москве в день заказа</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Удобная оплата</h4>
                <p className="text-sm text-gray-600">Наличные, карта, безналичный расчет</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Гарантия качества</h4>
                <p className="text-sm text-gray-600">Официальная гарантия производителя</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Техподдержка</h4>
                <p className="text-sm text-gray-600">Консультации по выбору оборудования</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-roboto text-center mb-12">Контакты</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Электродная, д. 12, стр. 1</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@etmstore.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Обратная связь</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Сообщение" />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Отправить заявку</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold font-roboto text-xl mb-4">ETM Store</h4>
              <p className="text-gray-400 text-sm">
                Надежный поставщик электротехнического оборудования
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Электродвигатели</a></li>
                <li><a href="#" className="hover:text-white transition">Кабели и провода</a></li>
                <li><a href="#" className="hover:text-white transition">Автоматика</a></li>
                <li><a href="#" className="hover:text-white transition">Освещение</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">О компании</a></li>
                <li><a href="#" className="hover:text-white transition">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition">Гарантии</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@etmstore.ru</p>
                <p>г. Москва, ул. Электродная, 12</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ETM Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}