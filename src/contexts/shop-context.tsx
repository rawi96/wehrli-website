"use client";

import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import swell, { Cart } from "swell-js";

export type ShopContextType = {
  shoppingCart: Cart | null;
  setShoppingCart: (cart: Cart) => void;
  isShowCart: boolean;
  setIsShowCart: (isShowCart: boolean) => void;
};

export const shopContextDefaultValues: ShopContextType = {
  shoppingCart: null,
  setShoppingCart: () => {},
  isShowCart: false,
  setIsShowCart: () => {},
};

export const ShopContext = createContext<ShopContextType>(
  shopContextDefaultValues,
);

async function getCartFromSwell() {
  swell.init(
    process.env.NEXT_PUBLIC_SWELL_STORE_ID || "",
    process.env.NEXT_PUBLIC_SWELL_API_KEY || "",
  );
  const shoppingCart = await swell.cart.get();
  return shoppingCart;
}

export const ShopContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [shoppingCart, setShoppingCart] = useState<Cart | null>(null);
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCart() {
      const cart = await getCartFromSwell();
      setShoppingCart(cart);
    }
    fetchCart();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        isShowCart,
        setIsShowCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = (): ShopContextType => useContext(ShopContext);
