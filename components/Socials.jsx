import Link from 'next/link'
import Image from 'next/image'
export default async function Socials () {
  return (
    <>
      <Link href=''>
        <Image src='/linkedin.svg' alt='' height={24} width={24} />
      </Link>
      <Link href=''>
        <Image src='/twitter.svg' alt='' height={24} width={24} />
      </Link>
      <Link href=''>
        <Image src='/facebook.svg' alt='' height={24} width={24} />
      </Link>
    </>
  )
}
