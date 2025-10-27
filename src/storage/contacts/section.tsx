import React from 'react';
import {ContactCard} from "@/storage/contacts/index";
import Container from "@/components/shared/container";
import {FaLocationDot} from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export const Section = () => {
    return (
        <div className={"mt-[142px]"} id={"Contact"}>
            <Container className={"w-full"}>
                <div className="">
                    <h3 className="text-[#FFF1EB] font-bold text-[57px]">
                        Контакты
                    </h3>
                    <div className="w-full">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[25px] pt-[40px]">
                            <ContactCard
                                children={<FaLocationDot  size={60}/>}
                                text={"Наш адрес"}
                                description={"Хотите ознакомится с каталогом лично? Ждем вас в гости!"}
                                information={"г. Волжский, Тракторозаводский р-н, ул. Цветочная"}
                            />
                            <ContactCard
                                children={<IoTimer size={60}/>}
                                text={"Режим работы"}
                                description={"Всегда с вами в рабочее время!"}
                                information={"пн-вс, с 10:00 до 21:00"}
                            />
                            <ContactCard
                                children={<FaRegMessage size={60}/>}
                                text={"Напишите нам"}
                                description={"Идеи? Предложения? Пожелания? Напишите и мы рассмотрим!"}
                                information={"motor.soul@yahoo.com"}
                            />
                            <ContactCard
                                children={<FaPhone size={40}/>}
                                text={"Позвоните"}
                                description={"Остались вопросы? Мы вам поможем!"}
                                information={"8 (967) 876-54-32"}
                            />
                        </div>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-[25px] pt-[25px]">
                            <ContactCard
                                children={<FaWhatsapp size={40}/>}
                                sap={"text-[16px] lg:text-[20px]"}
                                additional={"Whatsapp"}
                                text={"Пишите нам"}
                                description={"Разберёмся с вашими вопросами быстро!"}
                            />
                            <ContactCard
                                children={<FaTelegram size={40}/>}
                                sap={"text-[16px] lg:text-[20px]"}
                                additional={"Telegram"}
                                text={"Читайте нас"}
                                description={"Получайте информацию об акциях и новинках раньше всех!"}
                            />
                            <ContactCard className={"hidden md:block"}
                                children={<FaVk size={40}/>}
                                sap={"text-[16px] lg:text-[20px]"}
                                additional={"VK"}
                                text={"Смотрите"}
                                description={"Подробные обзоры техники и промокоды ждут вас!"}
                            />
                        </div>
                        <ContactCard className={"grid grid-cols-2 md:hidden mt-[25px]"}
                            children={<FaVk size={60}/>}
                            additional={"VK"}
                            text={"Смотрите"}
                            description={"Подробные обзоры техники и промокоды ждут вас!"}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Section;