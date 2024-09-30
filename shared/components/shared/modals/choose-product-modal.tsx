'use client';

import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store/cart';
import toast from 'react-hot-toast';

interface Props {
    className?: string
    product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);
    const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

    const onAddProduct = () => {
        addCartItem({
            productItemId: firstItem.id,
        })
    }
    
    const onAddPizza = async (productItemId: number, ingredients: number[]) => {
        try {
            await addCartItem({
                productItemId,
                ingredients
            })
            toast.success('Пицца добавлена в корзину');
            router.refresh();
            } catch (error) {
            toast.error('Не удалось добавить пиццу в корзину');
            console.log(error);
        }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden")}>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm onSubmit={onAddPizza} imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} loading={loading} />
                    ) : (
                        <ChooseProductForm onSubmit={onAddProduct} imageUrl={product.imageUrl} name={product.name} price={firstItem.price} loading={loading} />
                    )
                }
            </DialogContent>
        </Dialog>
    )
}
