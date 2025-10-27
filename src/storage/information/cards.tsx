import React from 'react';
import {cn} from "@/lib/utils";
import {InformationCardInterface} from "@/interfaces/information.card.interface";
import {INFORMATION_ARRAY} from "@/arrays/information.card.array";


export const Cards= ({classNameText, classNameSpan, classNameDescr, text, textSpan,description}: InformationCardInterface) => {
    return (
        <div className={'grid gap-y-[15px] mt-[15px] lg:mt-0'}>
            {INFORMATION_ARRAY.map((item, index ) =>
                <div key={index} className={cn("h-[200px] lg:h-[268px] bg-[#FB621C]/50 rounded-[10px] flex flex-col text-[#FFF1EB]")}>
                    <p className={cn(item.classNameText, "font-bold")}>
                        {item.text}<br/>
                        <span className={cn(item.classNameSpan, "")}>{item.textSpan}<br/></span>
                    </p>
                    <span className={cn(item.classNameDescr, "font-medium")}>{item.description}</span>
                </div>
            )}
        </div>
    );
};

export default Cards;