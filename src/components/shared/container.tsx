import React from 'react';
import {cn} from "@/lib/utils";

interface IContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = ({className, children}: IContainerProps) => {
    return (
        <div className={cn(className, "max-w-[1416px] mx-auto  px-5 md:px-[70px]")}>
            {children}
        </div>
    );
};

export default Container;