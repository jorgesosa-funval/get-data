'use client'

import axios from "axios";
import { useEffect, useState } from "react";

async function getData(token) {

    try {
        const { data } = await axios.get('https://auth-api-cgtt.onrender.com/api/v1/users', {
            headers: {
                Authorization: token
            }
        });

        return data
    } catch (error) {
        console.log(error.message);
    }

}

export default function UserTable({ token }) {
    const [users, setUsers] = useState()

    useEffect(() => {
        getData(token)
            .then(rs => setUsers(rs))
            .catch((error) => console.error(error))
    }, [])


    return (
        <table className="w-full text-left table-auto min-w-max">
            <thead className='bg-slate-600 text-white font-semibold'>
                <tr>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            ID
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            NOMBRE
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            TELEFONO
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            ROLE
                        </p>
                    </th>

                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>

                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {user.id}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {user.name}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {user.phone}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {user.role}
                                </p>
                            </td>

                        </tr>
                    )
                }




            </tbody>
        </table>
    )
}