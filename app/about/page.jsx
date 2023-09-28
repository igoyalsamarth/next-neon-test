import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import Image from 'next/image'

export const metadata = {
  title: 'About - Shubham Agarwal',
  description: 'About - Shubham Agarwal',
}
 

export default async function Page () {
  return (
    <div className='flex flex-col justify-center items-center py-5'>
      <section className='flex flex-col w-[900px] md:w-[700px] sm:w-[80%] py-10 items-center gap-10'>
      <p className='text-[85px] lg:text-[60px] font-bold self-start leading-[85px] lg:leading-[60px] md:text-[60px] md:leading-[60px] sm:text-[50px] sm:leading-[50px]'>
          About
          <br />
          Roronoa Zoro
        </p>
        <Image src='/zoro.jpeg' alt='' height={400} width={400} className='py-5'/>
      </section>
      <section className='flex w-[1150px] py-10 lg:w-[900px] md:w-[700px] sm:w-[95vw] sm:flex-col sm:gap-[15px]'>
        <div className='flex w-[47%] text-2xl font-black'>What I Do</div>
        <div className='flex flex-col w-full'>
          <div className='flex leading-9'>
            I specialize in link-building, competitor analysis, site audit,
            keyword research, and creating strategies for better ranking on
            SERP. My goal is to help my clients achieve higher productivity by
            boosting their website traffic, generating more leads, and enhancing
            their branding. <br /> <br />
            Over the years, I have worked with a diverse range of clients from
            various industries, including eCommerce, technology, healthcare, and
            finance. I have helped my clients achieve their business goals by
            implementing effective digital marketing strategies tailored to
            their specific needs.
          </div>
          <div className='flex py-10 px-6 text-gray-400 font-bold sm:flex-col gap-6'>
            <ul className='flex flex-col gap-6 w-1/2 list-disc sm:w-full'>
              <li>Search engine optimization</li>
              <li>Link Building</li>
              <li>Link Building Tools like Ahrefs, Moz etc.</li>
              <li>Web Design</li>
            </ul>
            <ul className='flex flex-col gap-6 list-disc sm:w-full'>
              <li>Outreach and Collaborations</li>
              <li>Effective Data Management</li>
              <li>Google Tools</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex w-full sm:flex-col-reverse'>
        <div className='flex flex-col justify-center items-center px-20 py-16 w-1/2 sm:w-full md:px-10 lg:px-10 sm:px-5'>
          <p className='self-start text-3xl font-black pb-4'>Education</p>
          <p className='leading-7'>
            I am skilled SEO specialist with a{' '}
            <span className='font-bold'>
              Bachelor's degree in Computer Applications(BCA)
            </span>{' '}
            and a{' '}
            <span className='font-bold'>
              Master's in Business Administration(MBA){' '}
            </span>
            with a major in Marketing and a minor in International Business.
            With years of experience in off- page SEO and providing sound output
            to Saas clients, I have gained extensive expertise in the field of
            digital marketing.
          </p>
          <p className='self-start text-3xl font-black mt-10 py-4'>Hobbies</p>
          <p className='leading-7'>
            In my free time, I enjoy a variety of hobbies that allow me to relax
            and unwind. One of my favorite pastimes is reading books and
            articles on a wide range of topics, from the latest trend in
            technology to finance. I also enjoy playing video games, which offer
            a fun and immersive way to escape reality and explore new worlds.
            When the weather is nice, I like to get outside and play football
            with friends. And on rainy days or lazy weekends, I love to kick
            back and watch a good movie, whether it's a classic favorite or the
            latest blockbuster. These hobbies bring me joy and help me recharge,
            and I look forward to them as a way to balance out the stresses of
            daily life.
          </p>
        </div>
        <Skills />
      </section>
      <section className='flex flex-col py-10 bg-gray-100 w-full justify-center items-center '>
        <div className='flex flex-col w-[1150px] lg:w-[900px] md:w-[700px] sm:w-[95vw]'>
          <p className='text-3xl font-black'>My Experiences</p>
          <hr className='w-[5%] bg-black opacity-20 h-1 my-3' />
          <section className='flex w-full my-12 sm:flex-col sm:gap-[35px]'>
            <div className='flex w-3/5 flex-col'>
              <span className='font-bold text-lg'>Freelance SEO Specialist</span> <br />  2021 - present
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-bold text-lg'>On-Page & Off-Page SEO</span> <br /> In my role, I worked as an
              SEO specialist where I was responsible for managing a range of
              tasks to help clients rank better and faster on SERP. I started by
              searching for potential clients and conducting in-depth analyses
              of their websites, competitor landscape, and keyword research to
              identify opportunities to improve their online presence. As part
              of the strategy, I also focused on building high-quality backlinks
              through link-building collaborations, guest posting, and many
              other strategies. I also analyze content gaps to create effective
              content marketing campaigns that resonated with the target
              audience. Through these efforts, I was able to help clients rank
              higher on SERP and increase their visibility online. Additionally,
              I maintained clients' websites for better on-page SEO, ensuring
              that they continued to perform well, and provided regular reports
              to clients to keep them informed about the progress. Overall, my
              experience as an SEO specialist involved a range of tasks that
              required a deep understanding of SEO strategies, analytics, and
              effective communication skills to deliver successful outcomes for
              clients.
            </div>
          </section>
          <section className='flex w-full my-12 sm:flex-col sm:gap-[35px]'>
            <div className='flex w-3/5 flex-col'>
              <span className='font-bold text-lg'>Cognizant</span> <br />  2021 - 2022
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-bold text-lg'>Senior Process Executive- Data</span> <br />
              In my role, I was responsible for managing social media campaigns for a variety of clients. As part of this role, I created and scheduled content on social media platforms, ensuring that the content was engaging, informative, and optimized for the specific platform. I also had extensive experience in image optimization, making sure that the images used in social media campaigns were of high quality, optimized for size and format, and able to drive engagement. Additionally, I developed and implemented an effective strategy for social media that involved analyzing data, identifying key performance indicators, and continuously optimizing campaigns for better results. Through these efforts, I was able to increase engagement, drive traffic, and build brand awareness for my clients across various social media platforms.
            </div>
          </section>
          <section className='flex w-full my-12 sm:flex-col sm:gap-[35px]'>
            <div className='flex w-3/5 flex-col'>
              <span className='font-bold text-lg'>Freelance SEO Specialist</span> <br />  2019 - 2021
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-bold text-lg'>Link Building and Outreach Specialist</span> <br />
              In my role, I was responsible for managing various aspects of SEO campaigns. One of my primary areas of focus was link building, where I was able to build high-quality backlinks through a range of techniques such as broken link building, outreach, and guest posting. Additionally, I conducted extensive competitor analysis to identify link building opportunities and implemented a content marketing strategy that involved creating high-quality content that was optimized for specific keywords. I also handled social media accounts, developing social media campaigns that helped increase brand awareness and engagement. As a result of these efforts, I was able to achieve higher rankings on SERP for the targeted keywords and contributed to the overall success of the company's online presence.
            </div>
          </section>
        </div>
      </section>
      <div className='flex gap-8 py-10'>
            <Socials />
          </div>
    </div>
  )
}
