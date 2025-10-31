import React from 'react';
import Image from "next/image";
import logoIMG from "../../public/static/logo.png";
import NavigationLinks from "@/storage/navigation/navigation.links";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";

interface INavigationProps {
    className?: string;
    onOpenMenu?: () => void;
}

const Navigation = ({className, onOpenMenu}: INavigationProps) => {
    return (
        <div className={"w-full flex items-center  justify-between lg:justify-center md:gap-x-[10px] lg:gap-x-[60px]"}>
            <a href={"/"} className="flex items-center">
                <Image className={"w-[64px] h-[70px] md:w-[94px] md:h-[100px]"} width={94} height={100}  src={logoIMG} alt={"logo-brand"} />
                <p className="text-[#FFF1EB] font-bold text-[20px] md:text-[31px]">
                    drive <span className="relative right-[3px] md:right-[8px] text-[#FB621C]">bike</span>
                </p>
            </a>
            <NavigationLinks className={'hidden lg:flex'} />
            <li className="block lg:hidden">
                <Button onClick={onOpenMenu} variant={"outline"} size={"icon"} className="size-10 text-white bg-transparent">
                    <MdOutlineMenu className={"text-[#FFF1EB]"}/>
                </Button>
            </li>
        </div>
    );
};

export default Navigation;
