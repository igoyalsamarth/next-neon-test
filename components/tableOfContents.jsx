export default function TableOfContents (props) {
  const list = props.data
    .split(/\r?\n/)
    .filter(e => e.startsWith('<h1>'))
    .map(item => {
      return item.substring(
        item.indexOf('<h1>') + '<h1>'.length,
        item.indexOf('</h1>')
      )
    })
  return (
    <div className='flex flex-col w-full shadow-lg px-3'>
      <p className='py-5'>TABLE OF CONTENTS</p>
      <ol className='flex flex-col border-t-2 border-black py-8 px-5 list-decimal gap-6'>
        {list.map(item => {
          return <li key={item}>{item} </li>
        })}
      </ol>
    </div>
  )
}
