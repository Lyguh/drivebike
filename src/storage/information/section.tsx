import React from 'react';
import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";
import {InformationCards} from "@/storage/information/index";

interface Props {
    className?: string;
}

export const Section: React.FC<Props> = ({className}) => {
    return (
        <div className="pt-[36px]" id={"Info"}>
            <Container className={"w-full flex-col lg:grid lg:grid-cols-[60%_40%] lg:gap-x-[25px]  justify-center text-center"}>
                <div className="w-full">
                    <div className="h-[286px] flex justify-center items-center">
                        <h1 className="font-bold text-[15vw] sm:text-[100px] text-[#FFF1EB]">
                            drive<span className="text-[#FB621C]">bike</span>
                        </h1>
                    </div>
                    <div className="h-[268px] bg-[#FB621C]/50 rounded-[10px] flex text-center justify-center items-center">
                        <p className="font-bold text-[62px] text-[#FFF1EB] relative top-[45px]">скорость!<br/>
                            <span className="text-[67px] relative bottom-[40px]">свобода!<br/></span>
                            <span className="text-[100px] relative bottom-[100px]">стиль!</span>
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <InformationCards/>
                </div>
            </Container>
        </div>
    );
};

export default Section;