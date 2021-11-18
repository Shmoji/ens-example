import { useENSAddress } from 'components/useENSAddress'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [inputAddress, setInputAddress] = useState('')
  const [isENSAddressValid, ethAddressFromENS] = useENSAddress(inputAddress)

  console.log('isENSAddressValid==', isENSAddressValid)
  console.log('ethAddressFromENS==', ethAddressFromENS)

  return (
    <div className="mt-20 text-center">
      <input
        className="w-60 h-10 px-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter address..."
        onChange={(event) => setInputAddress(event.target.value)}
      />
    </div>
  )
}

export default Home
