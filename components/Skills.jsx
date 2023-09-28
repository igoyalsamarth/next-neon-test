'use client'
import { useInView } from "react-intersection-observer";

export default function Skills(){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold:1          })
    return(
        <div className='flex flex-col w-1/2 bg-[#2325bf] p-20 gap-14 justify-center sm:w-full' ref={ref}>
          <p className='self-start text-2xl font-black text-white'>Skill`s</p>
          <ul className='flex flex-col gap-5 text-sm font-extrabold text-[#7877d7] list-none p-0'>
            <li>
              <p>Technical SEO</p>
              <hr className={`${inView?'w-[75%]':'w-[2%]'} my-2 bg-white duration-500 delay-0`} />
            </li>
            <li>
              <p>Link Building</p>
              <hr className={`${inView?'w-[94%]':'w-[2%]'}  my-2 bg-white duration-500 delay-[100ms]`} />
            </li>
            <li>
              <p>On-Page Optimization</p>
              <hr className={`${inView?'w-[73%]':'w-[2%]'}  my-2 bg-white duration-500 delay-[200ms]`} />
            </li>
            <li>
              <p>Keyword Search</p>
              <hr className={`${inView?'w-[77%]':'w-[2%]'} my-2 bg-white duration-500 delay-[300ms]`} />
            </li>
            <li>
              <p>SEO Tools</p>
              <hr className={`${inView?'w-[84%]':'w-[2%]'}  my-2 bg-white duration-500 delay-[400ms]`} />
            </li>
            <li>
              <p>Content Creation</p>
              <hr className={`${inView?'w-[42%]':'w-[2%]'}  my-2 bg-white duration-500 delay-[500ms]`} />
            </li>
          </ul>
        </div>
    );
}