import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = +(params.id);
        const data = (await req.json()) as { quantity: number };
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Не удалось получить токен' }, { status: 500 })
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id,
            }
        });

        if (!cartItem) {
            return NextResponse.json({ error: 'Товар не найден' }, { status: 500 })
        }

        await prisma.cartItem.update({
            where: {
                id
            },
            data: {
                quantity: data.quantity
            }
        })

        const updatedUserCart = await updateCartTotalAmount(token);

        return NextResponse.json({ updatedUserCart }, { status: 200 })
    } catch (error) {
        console.log('[CART_PATCH] Error:', error);
        return NextResponse.json({ error: 'Не удалось обновить корзину' }, { status: 500 })
    }
}