import { IProduct } from "@/types";
import { createContext } from "react";

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
  deleteProduct: (id: string) => void;
  getTotalValue: () => string;
  getTotalProducts: () => string;
  getShippingValue: () => string;
}

export const ShoppingCartContext = createContext<ShoppingCart>(
  {} as ShoppingCart
);

const ShoppingCartProvider = ({ children }: any) => {
  const isBrowser = typeof window !== "undefined";
  const SESSION_STORAGE = "products";
  const ShippingValue = 100;


  const addProduct = (product: IProduct) => {
    const products = getProducts();
    const findProduct = products.find(prod => prod._id === product._id);
    if (findProduct) return;
    products.push(product);

    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  };

  const getProducts = (): IProduct[] => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }
    return [];
  };

  const deleteProduct = (id: string): void => {
    const products = getProducts();
    const newProducts = products.filter(product => product._id !== id);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(newProducts));
    }
  }

  const getTotalProducts = (): string => {
    const products = getProducts();
    const total = products.reduce((sum, cur) => sum + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total);
  }

  const getTotalValue = (): string => {
    const products = getProducts();
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total + ShippingValue);
  }
  const getShippingValue = (): string => {
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(ShippingValue);
  }

  return (
    <ShoppingCartContext.Provider value={{
      addProduct,
      getProducts,
      deleteProduct,
      getTotalProducts,
      getTotalValue,
      getShippingValue
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
