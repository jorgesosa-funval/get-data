import AuthLayout from '@/components/Layouts/AuthLayout'
import UserTable from '@/components/UserTable';

import { cookies } from 'next/headers';


export default function page() {
   const token = cookies().get('token').value
   return (
      <AuthLayout>
         <header className='py-4 px-2 border-b'>
            <h2 className='text-lg font-medium'>/users</h2>
         </header>
         <div
            className="relative flex flex-col w-full overflow-y-auto text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-2 min-h-80">
            
            <UserTable token={token} />

         </div>
      </AuthLayout>
   )
}


