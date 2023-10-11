import Socials from "@/components/Socials";
import Image from "next/image";

export const metadata = {
    title: 'Contact - Roronoa Zoro',
    description: 'Contact - Roronoa Zoro',
  }

export default function Page(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[900px] md:w-[700px] sm:w-[80vw] justify-center items-center py-10">
                <p className="text-[85px] lg:text-[60px] leading-[85px] lg:leading-[60px] md:text-[60px] md:leading-[60px] sm:text-[50px] sm:leading-[50px] font-bold text-center py-10">Hi. Let's work together.</p>
                <div className="flex flex-col p-10 justify-center items-center gap-5">
                    <p className="font-bold text-xl">Contact me:</p>
                    <div className="flex w-full justify-center gap-2 items-center">
                    <Image src='/mail.svg' height={24} width={24} className="" alt="" /><p>roronoazoro@3swords.com</p>
                    </div>
                    <div className="flex w-full justify-center gap-2 items-center">
                    <Image src='/linkedin.svg' height={18} width={18} className="" alt="" /><p>Roronoa Zoro</p>
                    </div>
                </div>
                <p className="font-bold text-sm py-5">OR</p>
                <div className="flex flex-col gap-5 justify-center items-center w-full">
                    <p>Send your inquiry</p>
                    <form className='flex flex-col justify-center items-center gap-5 w-full'>
                        <input type="email" placeholder="Email Address" className="border border-gray-400 w-full text-sm p-3 rounded text-gray-400 shadow-inner focus:border-gray-500 focus:outline-none"></input>
                        <input type="text" placeholder="Subject" className="border border-gray-400 w-full text-sm p-3 rounded text-gray-400 shadow-inner focus:border-gray-500 focus:outline-none"></input>
                        <textarea placeholder="Content" className="border border-gray-400 w-full text-sm p-3 rounded text-gray-400 shadow-inner h-52 focus:border-gray-500 focus:outline-none"></textarea>
                        <button className="py-3 px-5 self-start bg-[#2325bf] text-white text-xs font-bold rounded sm:self-auto">SEND</button>
                    </form>
                </div>
            </div>     
            <div className='flex gap-8 py-10'>
            <Socials />
          </div>      
        </div>
    );
}