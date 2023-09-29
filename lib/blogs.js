import { endpoint } from "@/utils/endpoint";

export async function getAllBlogs () {
  const data = await fetch(`http://${endpoint}/api/blog`,{
    //next: { revalidate: 1 },
    cache: 'no-store',  
})
  if (!data.ok) {
    throw new Error('failed to fetch data')
  }
  
  return data.json()
}

export async function getBlogsFromTag(slug) {
  const data = await fetch(`http://${endpoint}/api/blog/tag/${slug}`,{
    //next: { revalidate: 60 },
    cache: 'no-store',  
})
  if (!data.ok){
    throw new Error('failed to fetch data')
  }
  return data.json()
}

export async function getBlogsFromCategory(slug) {
  const data = await fetch(`http://${endpoint}/api/blog/category/${slug}`,{
    //next: { revalidate: 60 },
    cache: 'no-store',  
})
  if (!data.ok){
    throw new Error('failed to fetch data')
  }
  return data.json()
}


