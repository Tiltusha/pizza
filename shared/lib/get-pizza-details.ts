import { ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { getAvailablePizzaSizes } from "./get-available-pizza-sizes";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { Ingredient } from "@prisma/client";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
 ) => {
    const textDetails = `${size} см, ${mapPizzaType[type]} тесто`
    const totalPrice = calcTotalPizzaPrice(
        type,
        size,
        items,
        ingredients,
        selectedIngredients
    );

    return { textDetails, totalPrice }
 }