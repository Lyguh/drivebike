import React from 'react';
import Container from "@/components/shared/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { RiRefund2Line } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";

export const Section = () => {
    return (
        <div className="pt-[80px]" id={"Help"}>
            <Container className={""}>
                <h3 className="font-bold text-[57px] text-[#FFF1EB]">
                    Помощь
                </h3>
                <div className="pt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    <div className="">
                        <div className="flex flex-col bg-[#832900]/40 text-[#FFF1EB] rounded-[10px] p-[25px]">
                            <h4 className="font-bold text-[25px]">
                                Оплата
                            </h4>
                            <div className="flex items-center justify-between ">
                                <Accordion  type="single" collapsible>
                                    <AccordionItem value="item-1" >
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Как оформить заказ?</AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            1. Добавьте товары в корзину <br/><br/>
                                            2. Выберите нужные позиции<br/><br/>
                                            3. Укажите количество<br/><br/>
                                            4. Перейдите в корзину<br/><br/>
                                            5. Проверьте выбранные товары<br/><br/>
                                            6. Укажите данные ФИО, телефон, email<br/><br/>
                                            7. Способ доставки<br/><br/>
                                            8. Адрес получения<br/><br/>
                                            9. Оформите оплату<br/><br/>
                                            10. Выберите способ (карта/наличные)<br/><br/>
                                            11. Подтвердите заказ<br/><br/>
                                            12. Сохраните номер заказа для отслеживания..
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Как оплатить заказ?</AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            1. Укажите данные для оформления <br/><br/>
                                            2. Выберите способ оплаты<br/><br/>
                                            3. Подтвердите заказ<br/><br/>
                                            4. Завершите оплату<br/><br/>
                                            5. Получите подтверждение<br/><br/>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Что делать, если платёж не прошёл?</AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            1. Проверьте уведомление об ошибке <br/><br/>
                                            2. Убедитесь в наличии средств<br/><br/>
                                            3. Проверьте данные карты<br/><br/>
                                            4. Проверьте интернет-соединение<br/><br/>
                                            5. Повторите попытку через 5-10 минут<br/><br/>
                                            3. Обратитесь в поддржку магазина<br/><br/>
                                            4. Рассмотритк альтернативные способы оплаты<br/><br/>
                                            5. Дождитесь подтверждения оплаты
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <MdPayments size={80} className={"pl-[10px]"}/>
                            </div>
                        </div>
                        <div className="flex flex-col  mt-[25px] bg-[#832900]/40 text-[#FFF1EB] rounded-[10px]  p-[25px]">
                            <h4 className="font-bold text-[25px]">
                                Доставка
                            </h4>
                            <div className="flex  items-center justify-between">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Сколько будет стоить доставка?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            Основные параметры расчёта:<br/><br/>
                                            1. Регион доставки — цена варьируется в зависимости от удалённости пункта назначения.<br/><br/>
                                            2. Вес и габариты заказа — чем крупнее и тяжелее посылка, тем выше стоимость.<br/><br/>
                                            3. Выбранный способ доставки (курьер до двери, пункт выдачи, постамат и т. п.).<br/><br/>
                                            4. Сумма заказа — при превышении определённой суммы доставка может быть бесплатной.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Как вернуть / обменять товар?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            Условия:<br/><br/>
                                            Сохранён товарный вид, упаковка, ярлыки и пломбы.<br/><br/>
                                            Товар не был в использовании и не утратил потребительские свойства.<br/><br/>
                                            Наличие чека или другого документа, подтверждающего покупку (например, выписки из личного кабинета).
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Как забрать товар самому?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            1. При оформлении заказа выберите «Самовывоз» и укажите удобный пункт выдачи.<br/><br/>
                                            2. Проверьте его график работы.<br/><br/>
                                            3. Дождитесь уведомления (SMS/email) о готовности заказа.<br/><br/>
                                            4. В нём будут: номер заказа; адрес пункта; срок хранения (3–14 дней); код для получения (если нужен).<br/><br/>
                                            5. Придите в пункт и сообщите: номер заказа; код из уведомления; или покажите штрихкод из личного кабинета.<br/><br/>
                                            6. Проверьте товар: комплектность; целостность упаковки; сроки годности (если важно).<br/><br/>
                                            7. Завершите получение: подпишите акт (если требуется); возьмите чек (при оплате на месте).
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <TbTruckDelivery size={80} className={"pl-[10px]"}/>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" bg-[#832900]/40 text-[#FFF1EB] rounded-[10px] p-[25px]">
                            <h4 className="font-bold text-[25px]">
                                Возврат
                            </h4>
                            <div className="flex items-center justify-between">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Какие нужно собрать документы?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            1. Чек или электронный документ, подтверждающий покупку.<br/><br/>
                                            2. Если чек утерян, можно использовать другие доказательства покупки.<br/><br/>
                                            3. Заявление на возврат.<br/><br/>
                                            4. В нём следует указать: ФИО и контактные данные покупателя; номер заказа и дату покупки; причину возврата; требования (возврат денег, замена товара, ремонт);<br/><br/>
                                            5. способ связи для уточнения деталей.<br/><br/>
                                            6. Документы на товар (гарантийный талон, инструкция, ярлыки и пломбы, если они сохранились).<br/><br/>
                                            7. Важно, чтобы товар сохранил товарный вид и упаковку.<br/><br/>
                                            8. Доказательства брака: фото, видео дефектов.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Как быстро вернут деньги?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            Если товар признан неисправным, деньги должны быть возвращены в течение 10 дней после признания брака.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Доставка при возврате платная?
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            Расходы на доставку при возврате некачественного товара несёт продавец.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <RiRefund2Line size={80} className={"pl-[10px]"}/>
                            </div>
                        </div>
                        <div className=" mt-[25px] bg-[#832900]/40 text-[#FFF1EB] rounded-[10px] p-[25px]">
                            <h4 className="font-bold text-[25px]">
                                Остались вопросы?
                            </h4>
                            <div className=" flex items-center justify-between">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Позвоните нам!
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            8 (967) 876-54-32 <br/><br/>
                                            8 (495) 123‑45‑67 <br/><br/>
                                            8 (812) 567‑89‑01 <br/><br/>
                                            8 (916) 234‑56‑78
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Позвоните нам!
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            8 (967) 876-54-32 <br/><br/>
                                            8 (495) 123‑45‑67 <br/><br/>
                                            8 (812) 567‑89‑01 <br/><br/>
                                            8 (916) 234‑56‑78
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className={"flex items-center text-[20px]"}>Позвоните нам!
                                        </AccordionTrigger>
                                        <AccordionContent className={"text-[20px] text-[#E2D9D5]"}>
                                            8 (967) 876-54-32 <br/><br/>
                                            8 (495) 123‑45‑67 <br/><br/>
                                            8 (812) 567‑89‑01 <br/><br/>
                                            8 (916) 234‑56‑78
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <FaPhone size={80} className={"pl-[10px]"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Section;