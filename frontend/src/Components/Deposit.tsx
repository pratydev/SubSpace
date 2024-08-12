import React from 'react';

const Deposit = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Deposit Money</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Bank Transfer</option>
              <option>Credit/Debit Card</option>
              <option>E-Wallet</option>
            </select>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
            Confirm Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
