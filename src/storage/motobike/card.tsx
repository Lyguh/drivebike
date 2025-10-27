import React from 'react';
import {IMotobikeCard} from "@/interfaces/motobike.card.interface";
import {cn} from "@/lib/utils";
import {MOTOBIKE_ARRAY} from "@/arrays/motobike.card.array";
import motobikeIMG from "../../../public/static/motobike.png";
import Image from "next/image";

export const Card = ({className, image, name, brand, model, location, volume, broadcast, classif, kpp, }: IMotobikeCard) => {
    return (
        <div>
            {MOTOBIKE_ARRAY.map((item, index) =>
                <div key={index} className={cn(className, "w-full pt-[20px] ")}>
                    <h3 className="font-bold text-[35px] md:text-[57px] text-[#FFF1EB]">
                        {item.name}
                    </h3>
                    <div className="sm:pt-[10px] md:pt-[25px] grid grid-cols-1 lg:grid-cols-[70%_30%]">
                        <div className="lg:border-r-[3px]  border-black">
                            <Image className={"rounded-t-[20px] lg:rounded-t-[0px] w-full"} height={100} width={100} src={item.image} alt="motobike-image" />
                        </div>
                        <div className="pl-[15px] bg-[#832900]/60 border-none md:rounded-b-[20px] lg:rounded-b-[0px] lg:rounded-r-[20px] xl:rounded-r-[20px]">
                            <h4 className="font-semibold text-[35px] md:text-[30px] lg:text-[35px] xl:text-[45px] text-[#FFF1EB]">
                                Информация
                            </h4>
                            <div className=" text-[#FFF1EB] grid sm:grid-cols-1 md:gap-x-   [15px] md:grid-cols-2 lg:grid-cols-1">
                                <div className=" grid grid-cols-1 gap-y-[10px] sm:border-none md:border-r-[3px] md:border-black/20 lg:border-none">
                                    <p className="pt-[5px] xl:pt-[20px] font-medium md:text-[25px] lg:text-[24px] xl:text-[29px]">
                                        {item.brand}
                                    </p>
                                    <p className="md:text-[19px] lg:text-[13px] xl:text-[15px]">
                                        {item.model}
                                    </p>
                                    <p className="md:text-[22px]  lg:text-[18px] xl:text-[20px]">
                                        {item.location}
                                    </p>
                                    <p className="md:text-[25px]  lg:text-[20px] xl:text-[25px]">
                                        {item.classif}
                                    </p>
                                </div>
                                <div className="md:border-l-[3px] lg:border-none border-black/20 md:pl-[10px] lg:pl-[0px]  mt-[10px] md:mt-[51px] lg:mt-[15px] grid grid-cols-1 gap-y-[15px]">
                                    <p className=" md:text-[20px] lg:text-[18px] xl:text-[20px]">
                                        {item.volume}
                                    </p>
                                    <p className=" md:text-[19px]  lg:text-[19px] xl:text-[25px]">
                                        {item.broadcast}
                                    </p>
                                    <p className=" md:text-[19px]  lg:text-[20px] xl:text-[25px]">
                                        {item.kpp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;