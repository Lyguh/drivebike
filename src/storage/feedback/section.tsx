import React from 'react';
import Container from "@/components/shared/container";
import {FeedbackCards} from "@/storage/feedback/index";
import avatarOne from "../../../public/static/avatarOne.png";
import avatarTwo from "../../../public/static/avatarTwo.png";
import avatarThree from "../../../public/static/avatarThree.png";

export const Section = () => {
    return (
        <div id={"Feedback"}>
            <Container className="w-full pt-[80px] lg:pt-[100px]">
                <h3 className="font-bold text-[#FFF1EB] text-[57px]">
                    Отзывы
                </h3>
                <div className=" pt-[40px] w-full flex flex-col lg:flex-row justify-between items-center gap-x-[25px]">
                    <FeedbackCards  image={avatarOne} name="Дмитрий Воронов" text="Решил обновить своего железного коня и обратился в этот магазин. Менеджер подробно проконсультировал и помог разобрать.."/>
                    <FeedbackCards  image={avatarTwo} name="Александр Князев" text="После покупки остался полностью доволен. Мотоцикл работает как часы, никаких нареканий. Отдельное спасибо..."/>
                    <FeedbackCards  image={avatarThree} name="Анна Соколова" text="Мотоцикл превзошел все ожидания. Динамика отличная, все механизмы работают безупречно. Персонал магазина — нас..."/>
                </div>
            </Container>
        </div>
    );
};

export default Section;