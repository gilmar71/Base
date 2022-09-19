import {
  useReducer,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  useContext,
  useCallback,
  useState,
} from "react";

import { ICart, ICartAction, ICartItem } from "./intefaces/cart";
import {  AddCart, CreateCart, MinusCart, PlusCart, ReducerCart, RemoveCart, storageName, descount} from "src/services/cart"

interface ProvidersProps {
  children: ReactNode;
}

const initialState: ICart = {
  items: [],
};

const CartContext = createContext<
  | {
      state: ICart;
      dispatch: Dispatch<ICartAction>;
      total: () => {
        total: string;
        totalWidthDescount: string;
        descountAply: number;
      };
      CreateCart: (item: ICartItem) => Promise<ICartItem | undefined>;
      AddCart: (
        guid: string,
        item: ICartItem
      ) => Promise<ICartItem | undefined>;
      cartLoading: boolean;
      setCartLoading: Dispatch<boolean>;
      PlusCart: (guid: string) => Promise<void>;
      MinusCart: (guid: string) => Promise<void>;
      RemoveCart: (guid: string) => Promise<void>;
    }
  | undefined
>(undefined);

function CartProvider({ children }: ProvidersProps) {
  const [cartLoading, setCartLoading] = useState(false);
  const [state, dispatch] = useReducer(ReducerCart, initialState);

  const total = useCallback(() => {
    const totalItens = parseFloat(
      String(state.items.reduce((value, item) => (value += item.quantity), 0))
    );

    if (totalItens === 0) {
      return {
        total: "0",
        totalWidthDescount: "0",
        descountAply: 0,
      };
    }

    const totalBruto = Number(
      parseFloat(
        String(
          state.items.reduce(
            (value, item) => (value += Number(item.preco) * item.quantity),
            0
          )
        )
      ).toFixed(2)
    );

    const findDescount = descount.find((descountIten) => {
      return descountIten.itens.find((iten) => iten === totalItens);
    });

    if (findDescount !== undefined) {
      return {
        total: String(totalBruto),
        totalWidthDescount: String(
          (totalBruto - totalBruto * findDescount.descount).toFixed(2)
        ),
        descountAply: findDescount.descount * 100,
      };
    }

    return {
      total: String(totalBruto),
      totalWidthDescount: String(
        (
          totalBruto -
          totalBruto * descount[descount.length - 1].descount
        ).toFixed(2)
      ),
      descountAply: descount[descount.length - 1].descount * 100,
    };
  }, [state.items]);


  useEffect(() => {
    const jsonValue = localStorage.getItem(storageName);

    const items: ICartItem[] =
      jsonValue && jsonValue.length > 0 ? JSON.parse(jsonValue) : [];

    dispatch({
      type: "GeItems",
      payload: items,
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        state,
        total,
        dispatch,
        AddCart,
        CreateCart,
        cartLoading,
        setCartLoading,
        PlusCart,
        MinusCart,
        RemoveCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useUCart() must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
