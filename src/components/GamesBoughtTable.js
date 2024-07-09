import React from 'react'
import { useSelector } from 'react-redux'
import { formatDate } from '../utils/formatDate'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const GamesBoughtTable = () => {
    const { user } = useSelector((state) => state.profile)

    return (
        <div className='w-10/12 mx-auto pb-16'>
            <h1 className='text-white text-4xl mt-12 mb-4'>Purchased Games</h1>
            <Table className="rounded-xl border border-gray-600">
                <Thead>
                    <Tr className="flex justify-between rounded-t-md border-b border-b-gray-600 px-6 py-2">
                        <Th className="text-left text-md font-semibold uppercase text-gray-200 ml-4">GAMES</Th>
                        <div className='flex gap-32 mr-12'>
                            <Th className="text-left text-md font-semibold uppercase text-gray-200">PURCHASED ON</Th>
                            <Th className="text-md font-semibold uppercase text-gray-200">Price</Th>
                        </div>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        user.games.length === 0 ? (
                            <Tr>
                                <Td className="py-10 text-center text-2xl font-medium text-gray-200">No Games Found</Td>
                            </Tr>
                        ) : (
                            user.games.map((game) => (
                                <Tr key={game.id} className="flex gap-x-10 border-b border-gray-400 px-6 py-8">
                                    <Td className="flex w-8/12">
                                        <img src={game.img} width={220} height={190}
                                            className="rounded-lg object-cover" />
                                        <div className="flex flex-col justify-around ml-8">
                                            <p className="text-2xl font-semibold text-white">{game.title}</p>
                                            <p className="text-md text-gray-300 text-justify">{game.description.substr(0, 300) + "..."}</p>
                                        </div>
                                    </Td>

                                    <Td className="text-lg font-medium text-gray-200 mx-8 my-auto">
                                        {formatDate(game.purchaseOn)}
                                    </Td>
                                    <Td className="text-xl font-semibold text-green-400 my-auto">
                                        ₹{game.price}
                                    </Td>
                                </Tr>
                            ))
                        )
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default GamesBoughtTable