"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CardItemProps {
  id: number;
  image: string;
  name: string;
  count?: number;
  price: number;
  description: string;
  type: string;
}

interface CartContextType {
  cartItems: CardItemProps[];
  addToCart: (item: CardItemProps) => void;
  removeFromCard: (item: CardItemProps) => void;
}

const StoreContext = createContext<CartContextType | undefined>(undefined);

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  // const itemsJson = localStorage.getItem("cartList");
  //   const prevItems: CardItemProps[] =
  //   itemsJson != null ? JSON.parse(itemsJson) : [];
  //   const [cartItems, setCartItems] = useState<CardItemProps[]>(prevItems);
  const [cartItems, setCartItems] = useState<CardItemProps[]>([]);


  // We need `useEffect` to prevent `localStorage is not define`
  // But this code is not working correctly
  // When we launch the web at first time or open another new tab, cartList is empty :(
  // To fix that, we should use it outside the `useEffect` like the above commented code
  useEffect(() => {
    const itemsJson = localStorage.getItem("cartList");
    const prevItems: CardItemProps[] =
      itemsJson != null ? JSON.parse(itemsJson) : [];
    setCartItems(prevItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CardItemProps) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: (i.count || 1) + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  const removeFromCard = (item: CardItemProps) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        if (existingItem.count === 1) {
          return prevItems.filter((i) => i.id !== item.id);
        } else {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, count: (i.count || 1) - 1 } : i
          );
        }
      }
      return prevItems;
    });
  };

  return (
    <StoreContext.Provider value={{ cartItems, addToCart, removeFromCard }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export { StoreContextProvider, useStore };
