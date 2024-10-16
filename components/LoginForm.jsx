export default function LoginForm({ handlesubmit }) {
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
  