export const OrderForm = () => (
    <div className="bg-[#20252B] rounded p-4">
      <div className="text-center text-sm mb-2">Buy/Sell Orders</div>
      <form>
        <div className="mb-2">
          <label className="block text-sm">Price</label>
          <input type="text" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
        </div>
        <div className="mb-2">
          <label className="block text-sm">Amount</label>
          <input type="text" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
        </div>
        <div className="mb-2">
          <label className="block text-sm">Total</label>
          <input type="text" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
        </div>
        <button type="submit" className="bg-green-600 p-2 rounded w-full">Buy BTC</button>
      </form>
    </div>
);