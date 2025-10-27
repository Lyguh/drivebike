import React from 'react';
import {NAVIGATION_ARRAY} from "@/arrays/navigation.array";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface INavigationLinksProps {
    className?: string;
}

const NavigationFooterLinks = ({className}: INavigationLinksProps) => {
    return (
        <div className={cn(className)}>
            <nav className={"w-full flex items-center justify-between"}>
                <menu className="grid grid-cols-3 lg:flex md:gap-x-[40px] xl:gap-x-[60px]">
                    {NAVIGATION_ARRAY.map((item, index) =>(
                        <li key = {index} className={""}>
                            <a href={item.href} className="text-[#FFF1EB] text-[16px] duration-200 hover:text-[#FFF1EB]/70">
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <p className="text-[13px] lg:text-[16px] text-[#FFF1EB]">8 (967) 876-54-32</p>
                </menu>
            </nav>
        </div>
    );
};

export default NavigationFooterLinks;