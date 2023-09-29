import { getAllBlogs } from '@/lib/blogs'
import HomeBlogGrid from '@/components/HomeBlogGrid'
import Socials from '@/components/Socials'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = {
  title: 'Link Building & SEO With Shubham Agarwal',
  description: 'Link Building & SEO With Shubham Agarwal',
}

export default async function Page () {
  const data = await getAllBlogs()
  return (
    <Suspense callback = {<></>} >
    <div className='flex flex-col pt-[70px] items-center'>
      <div className='flex flex-col w-[900px] justify-center gap-5 md:w-[700px] sm:w-[95vw] items-center'>
        <p className='text-[85px] lg:text-[60px] font-bold text-center leading-[85px] lg:leading-[60px] md:text-[60px] md:leading-[60px] sm:text-[50px] sm:leading-[50px]'>
          Hi, I'm <br />
          Roronoa Zoro
        </p>
        <div className='flex gap-12 mt-[10px] sm:flex-col sm:items-center'>
          <div className='flex w-1/2 items-start sm:w-[70%]'>
            <Image
              src='/zoro.jpeg'
              className='border-[10px] border-white shadow-2xl'
              width={500} height={300}
              alt=''
            />
          </div>
          <section className='w-1/2 text-center leading-9 sm:w-[80%]'>
            <p>
              Welcome to my portfolio website! I am a dynamic digital marketing
              strategist with a passion for driving impactful results. With
              expertise in SEO and a fervent curiosity for growth hacking, I am
              committed to helping businesses thrive in the competitive online
              landscape. <br /> <br />
              With over 3 years of experience in off-page SEO, I have
              successfully provided valuable insights and sustainable solutions
              to diverse clients. My proficiency in link-building, competitor
              analysis, site audits, keyword research, and affiliate marketing
              has driven remarkable improvements in website traffic, lead
              generation, and brand recognition.
            </p>
          </section>
        </div>
      </div>
      <div className='flex flex-col py-20 gap-14 w-[1150px] lg:w-[900px] md:w-[700px] sm:w-[90%]'>
        <section>
          <p className='text-center leading-8'>
            <span className='font-bold'>Passion for Strategic Growth:</span>
            <br />
            <br />
            What fuels my dedication to this dynamic field is the thrill of
            crafting data-driven strategies that yield tangible results. My
            growth-oriented mindset and creative approach enable me to adapt
            quickly to evolving trends and stay ahead of the curve in the
            ever-changing digital landscape.
          </p>
        </section>
        <section>
          <p className='text-center leading-8'>
            <span className='font-bold'>Client-Centric Approach:</span>
            <br />
            <br />
            Building strong and lasting relationships with my clients is a top
            priority for me. I take the time to understand their unique needs
            and tailor my strategies to align with their specific business
            goals. By putting the client at the core of every decision, I ensure
            that my work delivers real value and measurable impact.
          </p>
        </section>
        <section>
          <p className='text-center leading-8'>
            <span className='font-bold'>Continuous Learning & Innovation:</span>
            <br />
            <br />
            In the fast-paced world of digital marketing, I am a firm believer
            in the power of continuous learning. I remain up-to-date with the
            latest industry developments, attend workshops, and engage in
            professional forums to stay at the forefront of innovation. This
            dedication empowers me to consistently implement cutting-edge
            tactics for my clients.
          </p>
        </section>
        <section>
          <p className='text-center leading-8'>
            <span className='font-bold'>Let's Make a Mark Together:</span>
            <br />
            <br />I am always eager to explore new opportunities, collaborate
            with like-minded professionals, and contribute to projects that
            drive meaningful growth. Whether you are seeking to optimize your
            website's performance, enhance your SEO strategy, or embark on a
            digital transformation journey, I am here to help you navigate the
            digital realm with confidence.
          </p>
        </section>
        <section>
          <p className='text-center leading-8'>
            <span className='font-bold'>Connect with Me:</span>
            <br />
            <br />I invite you to explore my portfolio and discover the results
            I have achieved for my clients. If you are looking to elevate your
            business's digital presence and embark on a journey of sustainable
            growth, let's connect and create a winning strategy together.
          </p>
        </section>
        <Link href='/contact' className='text-3xl bg-[#e47623] hover:bg-amber-700 w-fit self-center text-center rounded-full px-[90px] py-[20px] font-bold text-white transition-colors duration-500'>
          Hire Me
        </Link>
        <div className='flex flex-col justify-center items-center mt-[100px] gap-10'>
          <p className='text-[85px] lg:text-[60px] font-bold text-center leading-[85px] lg:leading-[60px] md:text-[60px] md:leading-[60px] sm:text-[50px] sm:leading-[50px]'>
            Growth hacking tips?
            <br />
            Check the blog
          </p>
          <HomeBlogGrid data={data}/>
          <div className='flex gap-8'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  )
}
