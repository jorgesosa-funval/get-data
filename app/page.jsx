import Link from "next/link";


export default function Home() {
  return (
    <AuthLayout>
      <h1>Welcome Home</h1>
      <h2>Jose</h2>
      <h3>Daniel</h3>
    </AuthLayout>
  );
}


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

function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-end px-8 bg-slate-800 text-white">
      <form action="">
        <button className="hover:underline">
          Logout
        </button>
      </form>
    </nav>
  )
}

function LoginForm({ handlesubmit }) {
  return (
    <form action={handlesubmit} className="w-[420px] h-[480px] border shadow rounded-md bg-white flex flex-col p-6">
      <h2 className="font-bold text-2xl text-center">LOGIN</h2>

      <label htmlFor="username" className="mt-14">
        Nombre de usuario:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="ej:augusto24"
          className="w-full h-9 outline-none border shadow-md rounded-md px-2 bg-slate-50"
        />
      </label>

      <label htmlFor="password" className="mt-10">
        Contraseña:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          className="w-full h-9 outline-none border shadow-md rounded-md px-2 bg-slate-50"
        />
      </label>

      <button className="mt-10 w-36 bg-slate-800 py-1 mx-auto text-white font-medium rounded-md">
        Login
      </button>

    </form>
  )
}

function AuthLayout({children}) {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  )
} 