'use client'

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading } = useFilterIngredients();

    const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));

    return (
        <div>
            <Title text="Фильтрация" className="mb-5 font-bold" size="sm" />
            {/* Верхние чекбоксы */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='2' />
            </div>

            {/* Цена */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={0} max={1000} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={ items } 
                loading={loading}
            />
        </div>
    )
}