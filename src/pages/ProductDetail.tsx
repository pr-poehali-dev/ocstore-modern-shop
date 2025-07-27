import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useCart, Product } from "@/contexts/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Электродвигатель АИР 80А2",
      price: "12 500 ₽",
      oldPrice: "14 000 ₽",
      image: "/placeholder.svg",
      inStock: true,
      category: "Электродвигатели",
      description: "Высокоэффективный асинхронный электродвигатель мощностью 1.1 кВт. Предназначен для привода различных механизмов в промышленности и быту. Отличается надежностью, долговечностью и низким уровнем шума. Соответствует всем требованиям безопасности и энергоэффективности.",
      specifications: {
        "Мощность": "1.1 кВт",
        "Напряжение": "380 В",
        "Частота вращения": "3000 об/мин",
        "КПД": "85%",
        "Класс изоляции": "F",
        "Способ монтажа": "IM1081",
        "Степень защиты": "IP55",
        "Вес": "12 кг"
      }
    },
    {
      id: 2,
      name: "Кабель ВВГнг 3х2.5",
      price: "89 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Кабели",
      description: "Силовой кабель с медными жилами в двойной изоляции. Не распространяет горение, что делает его безопасным для использования в жилых и общественных зданиях. Подходит для прокладки в помещениях, кабельных каналах и на открытом воздухе.",
      specifications: {
        "Сечение": "2.5 мм²",
        "Количество жил": "3",
        "Материал жил": "Медь",
        "Оболочка": "ПВХ пластикат",
        "Рабочее напряжение": "660 В",
        "Температура эксплуатации": "-50...+50°C",
        "Радиус изгиба": "7.5d",
        "Срок службы": "30 лет"
      }
    },
    {
      id: 3,
      name: "Автоматический выключатель C16",
      price: "450 ₽",
      oldPrice: "520 ₽",
      image: "/placeholder.svg",
      inStock: false,
      category: "Автоматика",
      description: "Однополюсный автоматический выключатель на 16А с характеристикой срабатывания C. Предназначен для защиты электрических цепей от перегрузок и коротких замыканий. Соответствует требованиям ГОСТ и имеет высокую надежность срабатывания.",
      specifications: {
        "Номинальный ток": "16 А",
        "Количество полюсов": "1",
        "Характеристика": "C",
        "Отключающая способность": "6 кА",
        "Рабочее напряжение": "230/400 В",
        "Частота": "50/60 Гц",
        "Механическая износостойкость": "20000 циклов",
        "Электрическая износостойкость": "10000 циклов"
      }
    },
    {
      id: 4,
      name: "Светильник LED 36W",
      price: "1 200 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Освещение",
      description: "Энергосберегающий LED светильник с высокой светоотдачей. Идеально подходит для освещения офисов, складов, торговых помещений. Обеспечивает равномерное распределение света и долгий срок службы до 50000 часов.",
      specifications: {
        "Мощность": "36 Вт",
        "Световой поток": "3600 лм",
        "Цветовая температура": "4000К",
        "Степень защиты": "IP40",
        "Угол рассеивания": "120°",
        "Коэффициент цветопередачи": "Ra>80",
        "Срок службы": "50000 часов",
        "Рабочая температура": "-20...+40°C"
      }
    },
    {
      id: 5,
      name: "Розетка с заземлением",
      price: "125 ₽",
      oldPrice: "150 ₽",
      image: "/placeholder.svg",
      inStock: true,
      category: "Установочные изделия",
      description: "Электрическая розетка с защитным заземлением для безопасного подключения электроприборов. Изготовлена из высококачественного поликарбоната, устойчивого к механическим повреждениям и температурным воздействиям.",
      specifications: {
        "Номинальный ток": "16 А",
        "Напряжение": "250 В",
        "Степень защиты": "IP20",
        "Материал": "Поликарбонат",
        "Тип контактов": "Plug in",
        "Способ монтажа": "Скрытый",
        "Количество гнезд": "1",
        "Цвет": "Белый"
      }
    },
    {
      id: 6,
      name: "Щиток распределительный",
      price: "2 800 ₽",
      oldPrice: null,
      image: "/placeholder.svg",
      inStock: true,
      category: "Щитовое оборудование",
      description: "Металлический распределительный щиток для квартиры. Предназначен для размещения автоматических выключателей, УЗО и других модульных устройств. Обеспечивает надежную защиту и удобное обслуживание электрических цепей.",
      specifications: {
        "Количество модулей": "12",
        "Материал": "Сталь",
        "Степень защиты": "IP31",
        "Размеры": "250x300x120 мм",
        "Толщина металла": "0.8 мм",
        "Способ монтажа": "Встраиваемый",
        "Замок": "Есть",
        "Цвет": "RAL 7035"
      }
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-white font-open-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>Назад к каталогу</span>
              </Button>
              <h1 className="text-2xl font-bold font-roboto text-gray-900">ETM Store</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {!product.inStock && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  Под заказ
                </Badge>
              )}
              {product.inStock && (
                <Badge className="absolute top-4 right-4 bg-green-500">
                  В наличии
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold font-roboto text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-blue-600">{product.price}</span>
              {product.oldPrice && (
                <span className="text-xl text-gray-500 line-through">{product.oldPrice}</span>
              )}
            </div>

            {product.inStock && (
              <div className="flex items-center space-x-4">
                <span className="font-medium">Количество:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <Button 
                size="lg" 
                className="flex-1"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                {product.inStock ? 'Добавить в корзину' : 'Под заказ'}
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Heart" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="font-roboto">Технические характеристики</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold font-roboto mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {!relatedProduct.inStock && (
                        <Badge variant="destructive" className="absolute top-2 right-2">
                          Под заказ
                        </Badge>
                      )}
                      {relatedProduct.inStock && (
                        <Badge className="absolute top-2 right-2 bg-green-500">
                          В наличии
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {relatedProduct.category}
                    </Badge>
                    <CardTitle className="text-lg mb-2 font-roboto">{relatedProduct.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">{relatedProduct.price}</span>
                      {relatedProduct.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">{relatedProduct.oldPrice}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}