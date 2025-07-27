import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-roboto">Корзина покупок</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-96">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <Badge variant="outline" className="text-xs mt-1">
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="font-bold text-blue-600">{item.price}</span>
                      {item.oldPrice && (
                        <span className="text-xs text-gray-500 line-through">{item.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        {state.items.length > 0 && (
          <CardFooter className="border-t bg-gray-50">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(state.total)}
                </span>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" onClick={clearCart} className="flex-1">
                  Очистить корзину
                </Button>
                <Button className="flex-1">
                  Оформить заказ
                </Button>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}