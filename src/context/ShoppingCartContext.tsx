import { createContext, ReactNode, useContext } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
