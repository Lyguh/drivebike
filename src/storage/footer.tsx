import React from 'react';
import Image from "next/image";
import logoIMG from "../../public/static/logo.png";
import Link from "next/link";
import Navigation from "@/storage/navigation";
import NavigationFooter from "@/storage/navigationFooter";

const Footer = () => {
    return (
        <div >
            <NavigationFooter />
        </div>
    );
};

export default Footer;