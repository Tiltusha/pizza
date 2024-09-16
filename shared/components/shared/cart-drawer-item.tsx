import React from "react";

interface Props {
    className?: string
}

export const CartDrawerItem: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={cn('flex items-center justify-between', className)}>
            {children}
        </div>
    )
}