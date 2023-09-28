import Image from "next/image"
import Link from "next/link"
export default async function Recommend (props) {
  const randoms = []
  while (randoms.length <= 3) {
    const x = Math.floor(Math.random() * props.data.length) + 1
    if (!(randoms.includes(x) || x.toString()===props.currentId)) {
      randoms.push(x)
    }
  }
  return (
    <div className='flex flex-col w-[900px] justify-center items-center my-3 md:w-[700px] sm:w-[95vw]'>
      <p className='text-lg font-bold py-5'>What you can read next</p>
      <div className='flex gap-5 justify-center md:flex-wrap sm:flex-wrap'>
        {props.data.filter(item => randoms.includes(item.id)).map(item => {
            return(
                <Link href={`/blog/${item.id}`} className="flex flex-col w-1/4 md:w-[45%] overflow-hidden group sm:w-[80%]" key={item.id}>
                <Image src={item.thumb_img} alt="" height={200} width={700}/>
                <div className="absolute h-[2%] bg-[#1923a9] duration-200 w-[210px] md:w-[315px] sm:w-[76vw] mt-[140px] md:mt-[220px] sm:mt-[55vw] opacity-0 group-hover:opacity-100 group-hover:mt-[125px] md:group-hover:mt-[197px] sm:group-hover:mt-[49vw]"></div>
                <p className="text-xs my-2 text-black group-hover:text-[#1923a9] sm:text-base">{item.blog_name}</p>
                </Link>
            );
        })}
      </div>
    </div>
  )
}
