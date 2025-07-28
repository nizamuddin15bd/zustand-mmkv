import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./interface";
import { zustandAsyncStorage } from "./storage";

export interface CartState {
  products: (Product & { quantity: number })[];
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  item: number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      item: 0,
      addProduct: (product: Product) => {
        const { products, item } = get();
        const hasProduct = products.find((p) => p.id === product.id);
        if (hasProduct) {
          set({
            item: item + 1,
            products: products.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          });
        } else {
          set({
            item: item + 1,
            products: [...products, { ...product, quantity: 1 }],
          });
        }
      },
      reduceProduct: (product: Product) => {
        const { products, item } = get();
        const updated = products
          .map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
          )
          .filter((p) => p.quantity > 0);
        set({
          item: Math.max(item - 1, 0),
          products: updated,
        });
      },
      clearCart: () => set({ item: 0, products: [] }),
    }),
    {
      name: "cart-storage",
      storage: zustandAsyncStorage,
    }
  )
);

export default useCartStore;
