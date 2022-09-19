import { api } from "src/services/api";
import {
  ICart,
  ICartAction,
  ICartItem,
} from "src/contexts/CartContext/intefaces/cart";

const storageName = "storage_cart";

const descount = [
  {
    itens: [1, 2],
    descount: 0,
  },
  {
    itens: [3, 4],
    descount: 0.05,
  },
  {
    itens: [5, 6],
    descount: 0.1,
  },
  {
    itens: [7],
    descount: 0.15,
  },
];

async function AddCart(guid: string, item: ICartItem) {
  try {
    const { data } = await api.post("/cart/add", {
      guid,
      id: item.id,
      isVariation: item.isVariation,
    });

    const cartLocalStorage = localStorage.getItem(storageName);

    if (cartLocalStorage) {
      const parsedCartLocalStorage: ICartItem[] = JSON.parse(cartLocalStorage);

      const itemExist = parsedCartLocalStorage.find(
        (itemParsed) => itemParsed.id === item.id
      );

      if (itemExist) {
        return;
      }

      const newItem = {
        ...item,
        guid: data.guid,
      };

      return newItem;
    }else {
      const newItem = {
        ...item,
        guid: data.guid,
      };

      return newItem;
    }
  } catch (e) {
    console.log(e);
  }
}

async function CreateCart(item: ICartItem) {
  try {
    const guidAlredyExist = localStorage.getItem("guid");

    if (guidAlredyExist) {
      const guidParsed = JSON.parse(guidAlredyExist);

      return await AddCart(guidParsed, item);
    }
    const { data } = await api.post("cart/create");

    localStorage.setItem("guid", JSON.stringify(data.guid));

    return await AddCart(data.guid, item);
  } catch (e) {
    console.log(e);
  }
}
async function RemoveCart(guid: string) {
  try {
    await api.post("cart/remove", { guid });
  } catch (e) {
    console.log(e);
  }
}

async function PlusCart(guid: string) {
  try {
    await api.post("cart/plus", { guid });
  } catch (e) {
    console.log(e);
  }
}

async function MinusCart(guid: string) {
  try {
    await api.post("/cart/minus", { guid });
  } catch (e) {
    console.log(e);
  }
}

function ReducerCart(state: ICart, action: ICartAction): ICart {
  const payload = action.payload;

  function storeData(value: ICartItem[]) {
    localStorage.setItem(storageName, JSON.stringify(value));
  }

  switch (action.type) {
    case "NewItem":
      const newItem = action.payload as ICartItem;

      const findExistingItemInCart = state.items.find(
        (item) => item.id === newItem.id
      );

      if (findExistingItemInCart) {
        return state;
      }

      const newListCart: ICartItem[] = [payload as ICartItem, ...state.items];

      storeData(newListCart);

      return {
        items: newListCart,
      };
    case "UpdateItem":
      const newListUpdate: ICartItem[] = state.items.map((item) => {
        if (item.id === (payload as ICartItem).id) {
          return payload as ICartItem;
        }

        return item;
      });

      storeData(newListUpdate);

      return {
        items: newListUpdate,
      };
    case "DeleteItem":
      const newCartList = state.items.filter(
        (user: ICartItem) => user.id !== payload
      );

      storeData(newCartList);

      return {
        items: newCartList,
      };
    case "GeItems":
      return {
        items: payload as ICartItem[],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export {
  AddCart,
  CreateCart,
  RemoveCart,
  PlusCart,
  MinusCart,
  ReducerCart,
  storageName,
  descount,
};
