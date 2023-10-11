import { getBlogsFromCategory, getBlogsFromTag } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import '@/assets/id-page.css'

export async function generateMetadata ({ params }) {
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} Archives - Roronoa Zoro`,
  }
}

export default async function Page ({ params }) {
    const blogs = await getBlogsFromTag(params.slug)
    return (
        <div className="flex w-full justify-center align-middle py-10">
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] sm:w-[80%] mt-10 justify-items-center gap-6">
            {blogs?.map(item => {
                return(
                    <div className="flex flex-col shadow justify-between" key={item.id}>
                    <Link href={`/blog/${item.id}`} className="flex flex-col w-full group">
                    <Image src={item.thumb_img} height={200} width={700} alt="" className="group-hover:brightness-50 duration-200" />
                    <div className="item absolute mt-[6vw] lg:mt-[9vw] md:mt-[9vw] sm:mt-[22vw] ml-[10vw] lg:ml-[16vw] md:ml-[15.5vw] sm:ml-[37vw] hover:ml-[8vw] lg:hover:ml-[14vw] md:hover:ml-[12vw] sm:hover:ml-[33vw] opacity-0 group-hover:opacity-100 border-white border-2 rounded-full p-4 hover:bg-[#2325bf] hover:border-[#2325bf] text-white w-6 h-6 hover:w-24 transition duration-200">
                    <p className="plus absolute text-2xl -mt-[55%] -ml-[23%] transition-opacity">+</p>
                    <p className="read_more absolute text-xs font-bold -mt-[8%] -ml-[4%] opacity-0 w-20">READ MORE</p>
                    </div>
                    <p className="p-4 text-xl text-black group-hover:text-blue-600">{item.blog_name}</p>
                    </Link>
                    <p className='p-4 font-semibold uppercase text-xs text-gray-400'> {dayjs(item.create_on).format('dddd, DD MMMM YYYY')} BY <span className='font-bold '>{item.written_by}</span></p>
                    <p className=" py-4 mx-4 leading-7">{item.blog_body.substring(0,item.blog_body.indexOf('\n')).length < 400 ? `${item.blog_body.substring(0,400)}.`: `${item.blog_body.substring(0,item.blog_body.indexOf('\n'))}` }</p>
                    <div className="flex w-full flex-col  border-t-2 border-gray-100 py-2">
                    <div className="flex items-center w-full px-4 gap-2 py-2">
                    <Image src='/folder.svg' alt="" height={15} width={15} />
                    <p className="uppercase text-gray-400 text-[10px]"><span className="font-semibold">PUBLISHED IN</span> <span><Link className=" text-black mx-1 px-2 py-1 bg-gray-200 hover:bg-slate-300 rounded-full text-[10px]" href={`/blog/category/${item.topic_tag}`}>{item.topic_tag}</Link></span> </p>
                    </div>
                    <div className="flex items-center w-full p-4 px-4 gap-2 py-2">
                    <Image src='/tag.svg' alt="" height={15} width={15} className=""/>
                    <p className=" uppercase text-[10px] text-gray-400 "><span className="font-semibold leading-loose">TAGGED UNDER:</span> 
                    {item.tag_one && <Link
                    href={`/blog/tag/${(item.tag_one).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-2 mx-1 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase text-[8px]'
                  >
                    {item.tag_one}
                  </Link>}
                  {item.tag_two && <Link
                    href={`/blog/tag/${(item.tag_two).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-2 mx-1 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase text-[8px]'
                  >
                    {item.tag_two}
                  </Link>}
                  {item.tag_three && <Link
                    href={`/blog/tag/${(item.tag_three).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-2 mx-1 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase text-[8px]'
                  >
                    {item.tag_three}
                  </Link>}
                    </p>
                    </div>
                    </div>
                    </div>
                );
            })}
        </div>
        </div>
    );
}