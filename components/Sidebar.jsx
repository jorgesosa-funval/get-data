import Link from "next/link"

function Sidebar() {
    return (
      <aside className="w-72 bg-slate-900 h-full flex flex-col text-white flex-shrink-0">
        <div className="flex items-center gap-4 px-8 py-6 border-b">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
          <h2>Async-JS</h2>
        </div>
  
        <ul className="font-medium p-4">
          <li>
            <Link href="/" className="block w-full h-full p-2 rounded-md hover:bg-slate-800">Home</Link>
          </li>
          <li>
            <Link href="/users" className="block w-full h-full p-2 rounded-md hover:bg-slate-800">Usuarios</Link>
          </li>
        </ul>
      </aside>
    )
  }
  

  export default Sidebar