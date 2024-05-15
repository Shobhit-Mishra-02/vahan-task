import { useState } from "react";
import PopupContainer from "./PopupContainer";

function RelationCreation() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <PopupContainer isOpen={isOpen} toggle={toggle}>
        <div className="text-2xl pb-4">Add Field</div>
        <form>
          <label className="text-sm font-semibold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2"
            name="name"
            type="text"
          />

          <label
            className="text-sm font-semibold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2"
            name="title"
            type="text"
          />

          <label className="text-sm font-semibold text-gray-700" htmlFor="type">
            Type
          </label>
          <select
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2 bg-white"
            name="type"
            id="type"
          >
            <option value="varchar">varchar</option>
            <option value="numeric">numeric</option>
            <option value="timestamp">timestamp</option>
            <option value="date">date</option>
            <option value="time">time</option>
            <option value="text">text</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2 bg-white"
            name="description"
            id="description"
            rows={3}
          ></textarea>

          <label htmlFor="timestamp">Timestamp</label>
          <input
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2 bg-white"
            type="datetime-local"
          />

          <label htmlFor="time">Time</label>
          <input
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2 bg-white"
            type="time"
          />

          <label htmlFor="date">Date</label>
          <input
            className="w-full p-1 text-xl text-gray-800 border rounded-sm focus:outline-black mb-2 bg-white"
            type="date"
          />

          <div className="pt-4">
            <button className="primaryBtn">Submit</button>
          </div>
        </form>
      </PopupContainer>

      <div className="py-6">
        <input
          className="w-full py-2 text-3xl rounded-sm focus:outline-none"
          type="text"
          placeholder="Relation name"
        />
      </div>

      <div className="flex justify-between align-middle pt-6">
        <span className="text-2xl text-gray-700">Fields</span>
        <button
          onClick={toggle}
          className="px-6 py-3 rounded-md bg-black text-white font-semibold"
        >
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
