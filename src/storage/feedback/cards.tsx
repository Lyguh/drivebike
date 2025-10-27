import React from 'react';
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface ICard {
    className?: string;
    image: string;
    name: string;
    text: string;
    sap?: string;
}

export const Cards = ({className, image, name, text, sap}: ICard) => {
    return (
        <div className={cn(className, "mt-[20px] w-full  md:w-[441px] h-auto bg-[#832900]/50 rounded-[10px] text-[#FFF1EB] p-[18px]")}>
            <div className=" flex items-center gap-x-[15px]">
                <Image className={"rounded-full"} height={43} width={43} src={image} alt={"avatar"} />
                <p className="lg:text-[22px] xl:text-[25px] font-semibold text-[25px]">{name}</p>
            </div>
            <div className="font-mono pt-[21px] text-[16px]">
                <p className="">{text}</p>
            </div>
            <div className=" mt-[21px]  max-w-[267px] w-full flex items-center justify-between bg-[#FFFFFF]/10 rounded-[5px] px-[4px] py-[8px]   ">
                <FaStar size={36} color="#F9AE00" />
                <FaStar size={36} color="#F9AE00" />
                <FaStar size={36} color="#F9AE00" />
                <FaStar size={36} color="#F9AE00" />
                <FaStar size={36} color="#F9AE00" />
            </div>
        </div>
    );
};

export default Cards;