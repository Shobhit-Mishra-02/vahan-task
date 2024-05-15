function TableDisplay() {
  return (
    <div className="py-6">
      <div className="text-5xl py-8">Table Name</div>

      <div className="flex justify-end pb-4">
        <button className="px-6 py-3 rounded-md bg-black text-white font-semibold">
          Add
        </button>
      </div>

      <div className="pt-6">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-blue-500 underline font-semibold cursor-pointer hover:to-blue-600">
                  Edit
                </td>
                <td className="px-6 py-4 text-red-500 underline font-semibold cursor-pointer hover:to-red-600">
                  Remove
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-blue-500 underline font-semibold cursor-pointer hover:to-blue-600">
                  Edit
                </td>
                <td className="px-6 py-4 text-red-500 underline font-semibold cursor-pointer hover:to-red-600">
                  Remove
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-blue-500 underline font-semibold cursor-pointer hover:to-blue-600">
                  Edit
                </td>
                <td className="px-6 py-4 text-red-500 underline font-semibold cursor-pointer hover:to-red-600">
                  Remove
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-blue-500 underline font-semibold cursor-pointer hover:to-blue-600">
                  Edit
                </td>
                <td className="px-6 py-4 text-red-500 underline font-semibold cursor-pointer hover:to-red-600">
                  Remove
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableDisplay;
