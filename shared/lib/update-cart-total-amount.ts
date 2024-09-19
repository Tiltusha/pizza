import { prisma } from "@/prisma/prisma-client"
import { calcCartItemsTotalPrice } from "./calc-cart-items-total-price";

export const updateCartTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token
        },
        include: {
            items: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    productItem: {
                        include: {
                            product: true
                        }
                    },
                    ingredients: true
                }
            }
        }
    });

    if (!userCart) {
        return;
    }

    const totalAmount = userCart?.items.reduce((acc, item) => {
        return acc + calcCartItemsTotalPrice(item);
    }, 0)

    return await prisma.cart.update({
        where: {
            id: userCart.id
        },
        data: {
            totalAmount
        },
        include: {
            items: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    productItem: {
                        include: {
                            product: true
                        }
                    },
                    ingredients: true
                }
            }
        }
    })
}