'use client'

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

    const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 1000 });

    const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    }

    React.useEffect(() => {
        console.log({ prices, selectedIngredients, sizes, pizzaTypes })
    }, [prices, selectedIngredients, sizes, pizzaTypes])

    return (
        <div>
            <Title text="Фильтрация" className="mb-5 font-bold" size="sm" />
            {/* Верхние чекбоксы */}
            <CheckboxFiltersGroup
                name="pizzaTypes"
                className="mb-5"
                title='Тип теста'
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    { text:'Тонкое', value: '1' },
                    { text: "Традиционное", value: "2" },
                ]}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                selected={sizes}
                items={[
                    { text: "20 см", value: "20" },
                    { text: "30 см", value: "30" },
                    { text: "40 см", value: "40" },
                ]} 
                onClickCheckbox={toggleSizes}
            />

            {/* Цена */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                    type="number" 
                    placeholder="0" 
                    min={0} 
                    max={1000} 
                    value={String(prices.priceFrom)} 
                    onChange={(e) => updatePrice("priceFrom", Number(e.target.value))} />

                    <Input 
                    type="number" 
                    placeholder="1000" 
                    min={0} 
                    max={1000} 
                    value={String(prices.priceTo)}
                    onChange={(e) => updatePrice("priceTo", Number(e.target.value))} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[prices.priceFrom, prices.priceTo]} 
                onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={ items } 
                loading={loading}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
            />
        </div>
    )
}