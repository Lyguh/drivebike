import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import {IContactsCard} from "@/interfaces/contacts.card.interface";
import {cn} from "@/lib/utils";

export const Cards = ({className, children, text, sap, additional, description, information}:IContactsCard) => {
    return (
        <div className={cn(className ,"bg-[#832900]/30 rounded-[10px] p-[25px] text-[#FFF1EB]")}>
            <div className="grid grid-cols-2 md:grid-cols-[30%_60%] items-center  text-[25px] font-semibold text-[#FFF1EB] ">
                {children}
                <p className={cn(sap, "")}>
                    {additional}
                </p>
            </div>
            <div className="text-center md:text-left">
                <div className="text-center md:text-left pt-[14px]">
                    <h4 className={"text-[25px] font-semibold text-[#FFF1EB]"}>
                        {text}
                    </h4>
                    <p className={cn(sap, " font-medium text-[#C8C8C8]")}>
                        {description}
                    </p>
                </div>
                <h5 className=" pt-[35px] text-[20px] font-semibold text-[#FFF1EB]">
                    {information}
                </h5>
            </div>
        </div>
    );
};

export default Cards;