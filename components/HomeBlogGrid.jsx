'use client'
import React, { useEffect } from "react"
import Image from "next/image"
import dayjs from "dayjs"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function HomeBlogGrid(props){
    const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
      })
    return(
        <div className={`grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full justify-items-center gap-10 duration-[1500ms] ${inView? 'mt-0 opacity-100':'-mt-40 opacity-0'}`} ref={ref}>
            {props.data?.slice(0,6).map(item => {
                return(
                <div className="flex flex-col pb-2" key={item.id}>
                <Link href={`/blog/${item.id}`} className={`flex flex-col mb-5 group`} >
                <Image src={item.thumb_img} alt="" height={100} width={750} className="border-4 border-[#e98b42] group-hover:border-[#1923a9] group-hover:brightness-50 duration-200" />
                <p className="absolute text-center ml-[150px] lg:ml-[200px] sm:ml-[40vw] mt-[70px] lg:mt-[90px] sm:mt-[22vw] opacity-0 group-hover:opacity-100 text-white text-7xl font-light duration-200">+</p>
                <div className="absolute mt-[180px] lg:mt-[230px] md:mt-[170px] sm:mt-[47vw] -ml-[20px] bg-[#1923a9] px-3 py-2 text-white font-bold text-xs group-hover:ml-[15px] duration-200 group-hover:bg-white group-hover:text-[#1923a9]">Read More +</div>
                </Link>
                <p className="text-xs self-start my-3 text-gray-400 italic">{dayjs(item.create_on).format('DD MMMM YYYY').toString()} by {item.written_by} in <Link href={`/blog/category/${item.topic_tag}`} className="text-black">{item.topic_tag}</Link></p>
                <Link href={`/blog/${item.id}`} className="self-start">
                <p className=" italic text-black hover:text-[#1923a9]">{item.blog_name}</p>
                </Link>
                </div>
                )
            })}
        </div>
    )
}