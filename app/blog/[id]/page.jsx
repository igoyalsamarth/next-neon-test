import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogs } from '@/lib/blogs'
import { remark } from 'remark'
import html from 'remark-html'
import '@/assets/id-page.css'
import TableOfContents from '@/components/tableOfContents'
import Recommend from '@/components/Recommend'
import Socials from '@/components/Socials'
import dayjs from 'dayjs'

export async function generateMetadata ({ params }) {
  const blogs = await getAllBlogs()
  const data = blogs.filter(item => item.id.toString() === params.id)
  return {
    title: data[0].blog_name,
  }
}

export async function convertHTML (blog_body) {
  const processedContent = await remark().use(html).process(blog_body)
  const contentHtml = processedContent.toString()
  return contentHtml
}

export default async function Page ({ params }) {
  const blogs = await getAllBlogs()
  const data = await blogs.filter(item => item.id.toString() === params.id)
  const contentHtml = await convertHTML(data[0].blog_body)
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='flex w-[1150px] pt-20 lg:w-[900px] md:w-[700px] lg:gap-10 md:gap-5 sm:w-[95vw]'>
        <div className='flex flex-col w-2/3 sm:w-full justify-center items-center'>
          <Image src={data[0].thumb_img} height={700} width={700} alt='' />
          <div className='absolute top-[570px] lg:top-[500px] md:top-[430px] -ml-[250px] lg:-ml-[200px] md:-ml-[100px]'>
            <Image src='/zoro.jpeg' alt='' height={40} width={40} className='rounded-full' />
            <p className='text-white -mt-[37px] ml-[55px] font-semibold text-sm'>{data[0].written_by}</p>
            <p className='uppercase text-[10px] text-white ml-[55px] -mt-[1px]'>{dayjs(data[0].create_on).format('dddd, DD MMMM YYYY')} / PUBLISHED IN <span className='font-bold '><Link className='text-white hover:font-medium' href={`/blog/category/${data[0].topic_tag}`}>{data[0].topic_tag}</Link></span></p>
            
          </div>
          <div className='flex flex-col px-16 lg:px-10 md:px-4 sm:px-2'>
            <p className='py-8 text-7xl font-bold lg:text-5xl md:text-3xl sm:text-3xl'>{data[0].blog_name}</p>
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className='leading-9 text-lg flex-col flex gap-5 w-full'
            />
            <div className='flex justify-between items-stretch border-y-2 border-gray-200 py-3 my-8 sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse sm:gap-4 md:gap-4 lg:gap-4'>
              <div className='flex flex-col sm:items-center md:items-center lg:items-center'>
                <p className='text-xs text-gray-400 font-semibold pb-3'>
                  SHARE:
                </p>
                <ul className='flex gap-5 justify-center items-center list-none p-0'>
                  <Link href=''><Image src='/twitter.svg' alt='' height={30} width={30} className='hover:bg-[#249ef0] p-1 rounded' /></Link>
                  <Link href=''><Image src='/facebook.svg' alt='' height={30} width={30} className='hover:bg-[#415e9b] p-1 rounded' /></Link>
                  <Link href=''><Image src='/gplus.svg' alt='' height={30} width={30} className='hover:bg-[#dd4d3f] p-1 rounded' /></Link>
                  <Link href=''><Image src='/pinterest.svg' alt='' height={30} width={30} className='hover:bg-[#be0216] p-1 rounded' /></Link>
                  <Link href=''><Image src='/mail.svg' alt='' height={30} width={30} className='hover:bg-amber-400 p-1 rounded' /></Link>
                </ul>
              </div>
              <div className='flex flex-col sm:items-center md:items-center lg:items-center'>
                <p className='text-xs text-gray-400 pb-3 self-end sm:self-auto md:self-auto lg:self-auto'>
                  TAGGED UNDER:
                </p>
                <div className='flex text-[10px] gap-3 items-center'>
                  {data[0].tag_one && <Link
                    href={`/blog/tag/${(data[0].tag_one).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-3 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase'
                  >
                    {data[0].tag_one}
                  </Link>}
                  {data[0].tag_two && <Link
                    href={`/blog/tag/${(data[0].tag_two).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-3 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase'
                  >
                    {data[0].tag_two}
                  </Link>}
                  {data[0].tag_three && <Link
                    href={`/blog/tag/${(data[0].tag_three).replace(/\s+/g, '-').toLowerCase()}`}
                    className='py-1 px-3 bg-gray-200 rounded-full text-black hover:bg-slate-300 uppercase'
                  >
                    {data[0].tag_three}
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-5 w-1/3 sm:hidden'>
          <div className='sticky top-[210px] w-full bg-white'>
            <TableOfContents data={contentHtml} />
          </div>
        </div>
      </div>
      <Recommend data={blogs} currentId={params.id} />
      <div className='flex gap-8 py-10 items-center justify-center'>
        <Socials />
      </div>
    </div>
  )
}
