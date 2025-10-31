"use client"
import React, {useState} from 'react';
import Container from "@/components/shared/container";
import Navigation from "@/storage/navigation";
import MobileMenu from "@/storage/mobile-menu";

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className={"w-full bg-[#000000]/20"} id="header">
            <Container className="w-full">
                <Navigation onOpenMenu={() => setMenuOpen(true)} className=" flex justify-between lg:justify-center"/>
                <MobileMenu isOpen={menuOpen} onClose={ () => setMenuOpen(false)} />
            </Container>
        </header>
    );
};

export default Header;
