import React from 'react';
import Container from "@/components/shared/container";
import {MotobikeCard} from "@/storage/motobike/index";

export const Section = () => {
    return (
        <div className={"pt-[80px]"} id = "Motobike">
            <Container className="w-full">
                <MotobikeCard />
            </Container>
        </div>
    );
};

export default Section;