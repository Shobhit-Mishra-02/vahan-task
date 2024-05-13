function RelationCreation() {
  return (
    <div>
      <div className="py-6">
        <input
          className="w-full p-2 text-2xl rounded-sm focus:outline-none"
          type="text"
          placeholder="Relation name"
        />
      </div>

      <div className="flex justify-between align-middle pt-6">
        <span className="text-2xl text-gray-700">Fields</span>
        <button className="px-6 py-3 rounded-md bg-black text-white font-semibold">
          Add
        </button>
      </div>

      <div className="pt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Constraint
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">email</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">varchar</td>
              <td className="px-6 py-4">Primary key</td>
              <td className="px-6 py-4 text-blue-500 underline font-semibold cursor-pointer hover:to-blue-600">
                Edit
              </td>
              <td className="px-6 py-4 text-red-500 underline font-semibold cursor-pointer hover:to-red-600">
                Remove
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">email</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">varchar</td>
              <td className="px-6 py-4"></td>
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

      <div className="pt-8">
        <button className="px-6 py-3 rounded-md bg-black text-white font-semibold">
          Create
        </button>
      </div>
    </div>
  );
}

export default RelationCreation;
