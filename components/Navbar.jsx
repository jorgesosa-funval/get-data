import { cookies } from "next/headers"
import { redirect } from "next/navigation"

function Navbar() {

    const handlelogout = async () => {
        'use server'
        cookies().delete('token')
        redirect('/auth/login')
    }

    return (
      <nav className="flex h-16 items-center justify-end px-8 bg-slate-800 text-white">
        <form action={handlelogout}>
          <button className="hover:underline">
            Logout
          </button>
        </form>
      </nav>
    )
  }

  export default Navbar