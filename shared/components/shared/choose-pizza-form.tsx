import { cn } from '@/shared/lib/utils';
import react from 'react';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { pizzaSizes } from '@/shared/constants/pizza';

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({ 
    imageUrl,
    name,
    className,
    ingredients,
    items,
    onClickAdd
 }) => {
    const textDetails = '30 см, традиционное тесто'
    const totalPrice = 300;
    const size = 30;

    return (
        <div className={cn(className, 'flex flex-1')}>
           <PizzaImage imageUrl={imageUrl} size={30} />

            <div className="w-[490px] bg-[#F7F6F5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetails}</p>

                <GroupVariants items={pizzaSizes} />

                <Button 
                className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
                >
                    Добавить в корзину за {totalPrice} P
                </Button>
            </div>
        </div>
    )
}