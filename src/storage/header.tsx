"use client"
import React from 'react';
import Container from "@/components/shared/container";
import Navigation from "@/storage/navigation";

const Header = () => {
    return (
        <header className={"w-full bg-[#000000]/20"} id="header">
            <Container className="w-full">
                <Navigation className=" flex justify-center"/>
            </Container>
        </header>
    );
};

export default Header;