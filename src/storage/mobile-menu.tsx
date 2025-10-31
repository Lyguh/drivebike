"use client"
import React, {useEffect} from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {NAVIGATION_ARRAY} from "@/arrays/navigation.array";

interface IMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: IMobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    return (
        <>
            <div onClick={onClose} className={cn("fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-200", isOpen ? "opacity-100 visible" : "opacity-0 invisible" )} />
            <aside className={cn("fixed top-0 right-0 bottom-0 p-5 max-w-xs w-full h-screen bg-[#000000]/50 border-l border-zinc-700 z-50 transform transition-transform", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="w-full space-y-4">
                    <menu className="w-full">
                        {NAVIGATION_ARRAY.map((item, index) => (
                            <li key={index} className="w-full">
                                <Link onClick={onClose} href={item.href} className="p-3 inline-block w-full text-lg bg-transparent rounded-md transition-colors text-[#FFF1EB] hover:bg-zinc-800 hover:text-white">{item.label}</Link>
                            </li>
                        ))}
                    </menu>
                </div>
            </aside>
        </>
    );
};

export default MobileMenu;
