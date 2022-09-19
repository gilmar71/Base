
export interface ICartItem {
    id: number
    titulo: string
    preco: string
    precoPromo?: string
    isPromotion: boolean
    imagem: string
    quantity: number
    isVariation?: boolean
    url: string
    sku: string
    guid?: string
}

export interface ICart {
    items: ICartItem[]
}

export interface ICartAction {
    type: 'GeItems' | 'NewItem' | 'DeleteItem' | 'UpdateItem',
    payload:  ICartItem[] | number | ICartItem
} 