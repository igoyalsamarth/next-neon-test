import Image from "next/image"
import dayjs from "dayjs"
import Link from "next/link"
import { getAllBlogs } from '@/lib/blogs'
import { Suspense } from "react"

export const metadata = {
    title: 'Blog - Shubham Agarwal',
    description: 'Blog - Shubham Agarwal',
  }

export default async function Page(){
    const data = await getAllBlogs()
    return(
        <div className="w-full flex justify-center items-center py-20">
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[90%] gap-10 justify-items-center">
            {data?.map(item => {
                return(
                    <div className="flex flex-col" key={item.id}>
                <Link href={`/blog/${item.id}`} className="flex flex-col group" >
                <Image src={item.thumb_img} height={200} width={750} alt="" className="border-4 border-[#e98b42] group-hover:border-[#1923a9] group-hover:brightness-50" />
                <p className="absolute text-center  ml-[150px] lg:ml-[200px] sm:ml-[40vw] mt-[70px] lg:mt-[90px] sm:mt-[22vw] opacity-0 group-hover:opacity-100 text-white text-7xl font-light duration-200">+</p>
                <div className="absolute mt-[180px] lg:mt-[230px] md:mt-[170px] sm:mt-[47vw] -ml-[20px] bg-[#1923a9] px-3 py-2 text-white font-bold text-xs group-hover:ml-[15px] duration-200 group-hover:bg-white group-hover:text-[#1923a9]">Read More +</div>
                </Link>
                <p className="text-xs self-start my-3 text-gray-400 italic">{dayjs(item.create_on).format('DD MMMM YYYY').toString()} by {item.written_by} in <span className="text-black"><Link href={`/blog/category/${item.topic_tag}`}>{item.topic_tag}</Link></span></p>
                <Link href={`/blog/${item.id}`}>
                <p className=" italic text-black hover:text-[#1923a9]">{item.blog_name}</p>
                </Link>
                </div>
                )
            })}
        </div>
        </div>
    )
}