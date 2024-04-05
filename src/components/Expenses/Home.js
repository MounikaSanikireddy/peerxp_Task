import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../redux/action/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const user = useSelector((state) => state.item.formData);

  const deleteHandler = (item) => {
    const confirmDelete = window.confirm('Are you sure you want to delete the Expense?');
    if (confirmDelete) {
      dispatch(deleteUser(item));
    }
  };

  const filteredUsers = user.filter(
    (item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase()) &&
      (!startDate || new Date(item.dateofexpense) >= new Date(startDate))
  );

  return (
    <>
      <div className="flex justify-between mb-4 mt-3">
        <h1 className="text-2xl font-bold">MY EXPENSE MANAGER</h1>
        <div className="flex gap-5">
          <label className="px-1 py-1">Searchby Date</label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-1 py-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />

          <input
            type="text"
            placeholder="Filter By Name"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="px-1 py-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />

          <Link to="/create" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            + New Expenses
          </Link>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Expense
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created by
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y  divide-gray-200">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No expenses found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{item.dateofexpense}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{item.expenseamount}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{moment(item.updatedAt).fromNow()}</td>
                  <td className="px-6 py-3 whitespace-nowrap">me</td>
                  <td>
                    <button onClick={() => navigate(`/update/${item.id}`)} aria-label="Edit Expense">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button onClick={() => deleteHandler(item)} aria-label="Delete Expense" className="pl-2">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
