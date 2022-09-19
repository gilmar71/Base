import { api } from "../api";

interface Shipping {
  id: number;
  code: string;
  name: string;
  price: number;
  days: number;
}

async function GetListShipping(
  cep: string,
  cartGuid: string
): Promise<Shipping[]> {
  try {
    const { data } = await api.get(
      `/shipping-price/list-brazil?ZipCode=${cep}&CartGuid=${cartGuid}`
    );

    return data;
  } catch (e) {
    throw e;
  }
}

export { GetListShipping };
