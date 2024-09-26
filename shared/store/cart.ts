import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";
import { CreateCartItemValue } from "../services/dto/cart.dto";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    /* получение товаров из корзины */
    fetchCartItems: () => Promise<void>;

    /* обновление количества в корзине */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /* добавление в корзину */
    // TODO: добавить типизацию
    addCartItem: (values: any) => Promise<void>;

    /* удаление из корзины */
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false, })
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data));
        } catch (error) {
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id: number) => {
        try {
            set({ loading: true, error: false, })
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (error) {
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    updateItemQuantity: async (id: number, quantity: number) => {
        try {
            set({ loading: true, error: false, })
            const data = await Api.cart.updateItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (error) {
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
    addCartItem: async (values: CreateCartItemValue) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    }
    }
));

