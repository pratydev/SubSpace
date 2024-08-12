import React from 'react';

const Withdraw = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Withdraw Money</h2>
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
            <label className="block text-gray-700">Withdrawal Method</label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Bank Transfer</option>
              <option>E-Wallet</option>
            </select>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full">
            Confirm Withdrawal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
