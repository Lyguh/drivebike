import Image, {StaticImageData} from "next/image";

export interface IMotobikeCard {
    className?: string;
    image?: StaticImageData;
    name?: string;
    brand?: string;
    model?: string;
    location?: string;
    classif?: string;
    volume?: string;
    broadcast?: string;
    kpp?: string;
}
