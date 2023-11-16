import React from 'react'
import { useNavigate } from 'react-router-dom'

function PaymentSuccess() {
  
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-4 text-green-600">
        Payment Successful!
      </h1>
      <p className="text-gray-700 mb-4">
        Thank you for your payment. Your transaction was successful.
      </p>
      <div className="flex justify-between items-center border-t pt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={()=>navigate('/')}
        >
         Home
        </button>
      </div>
      <div className="mt-8">
        <p className="text-gray-700">
          Your order will be shipped soon. If you have any questions, please
          contact our customer support.
        </p>
      </div>
    </div>
  </div>
  )
}

export default PaymentSuccess