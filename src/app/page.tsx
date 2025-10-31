import Image from "next/image";
import {MotobikeSection} from "@/storage/motobike";
import {FeedbackSection} from "@/storage/feedback";
import {ContactSection} from "@/storage/contacts";
import {HelpSection} from "@/storage/help";

export default function Home() {
  return (
    <div className={"bg-[#9B4A08]"}>
        <div className="bg-gradient-to-b from-[#000000] to-[#9B4A08] relative bottom-5">
            <MotobikeSection />
        </div>
        <div className={"bg-[url(''@/../public/static/feedbackLayer.png')] bg-no-repeat bg-center bg-contain lg:bg-cover"}>
        {
            <FeedbackSection />
        }
        </div>
        <div className="bg-[url(''@/../public/static/contactsLayer.png')] bg-no-repeat bg-left md:bg-cover">
            <ContactSection />
        </div>
        <div className="bg-gradient-to-b from-[#9B4A08]  via-[#9B4A08] to-[#000000]   relative top-1">
            <div className="bg-[url(''@/../public/static/sapportLayer.png')] bg-no-repeat bg-left md:bg-contain">
                <HelpSection />
            </div>
        </div>
    </div>
  );
}
