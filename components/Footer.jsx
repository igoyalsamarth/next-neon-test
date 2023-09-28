import Link from "next/link";
export default function Footer () {
    return(
        <footer className="flex flex-col bg-[#2e2f2e] items-center justify-center pt-16">
            <div className="flex w-[1150px] lg:w-[900px] md:w-[700px] sm:w-[95vw] border-t-4 py-8 border-[#494948]">
            <hr/>
            <div className="flex w-full justify-between sm:flex-col sm:gap-5">
        <p className="text-sm text-[#494948] font-bold">© 2022. All rights reserved.</p>
        <p className="text-sm text-[#494948] font-bold">Made by <Link href='https://igoyalsamarth.github.io' className='font-black text-[#494948]'>Samarth Goyal</Link>.</p>
        </div>
        </div>
        </footer>
    );
}