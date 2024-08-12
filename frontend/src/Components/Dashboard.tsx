import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">Account Balance</p>
            <h3 className="text-3xl font-bold">$1,200.00</h3>
          </div>
          <div className="space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Deposit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Withdraw</button>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Recent Transactions</h4>
          <ul>
            <li className="border-b py-2">Transaction 1</li>
            <li className="border-b py-2">Transaction 2</li>
            <li className="border-b py-2">Transaction 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
