import React from 'react';
import Image from "next/image";
import logoIMG from "../../public/static/logo.png";
import NavigationLinks from "@/storage/navigation/navigation.links";
import {cn} from "@/lib/utils";
import Link from "next/link";
import NavigationFooterLinks from "@/storage/navigation/navigationFooter.links";

interface INavigationProps {
    className?: string;
}

const NavigationFooter = ({className}: INavigationProps) => {
    return (
        <div className={"w-full py-[50px] flex items-center flex-col lg:flex-row md:justify-between lg:justify-center md:gap-x-[10px] lg:gap-x-[60px]"}>
            <a href={"/"} className="flex items-center">
                <Image width={94} height={100}  src={logoIMG} alt={"logo-brand"} />
                <p className="text-[#FFF1EB] font-bold text-[31px]">
                    drive <span className="relative right-[8px] text-[#FB621C]">bike</span>
                </p>
            </a>
            <NavigationFooterLinks className={''} />
        </div>
    );
};

export default NavigationFooter;