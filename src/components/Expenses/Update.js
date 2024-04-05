import React, { useState, useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../redux/action/action';


function Update() {
  const { id } = useParams();
  let navigate=useNavigate()
  let dispatch=useDispatch()
  const  item = useSelector(state => state.item.formData.find(item => item.id === id))


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    dateofexpense: '',
    expenseamount: ''
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || '',
        description: item.description || '',
        category: item.category || '',
        dateofexpense: item.dateofexpense || '',
        expenseamount: item.expenseamount || ''
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name.length <=140)  {
      if(!isNaN(formData.expenseamount))
      {
        dispatch(editUser({ id, updatedData: formData }));
        navigate('/home');
      }
      else{
        alert("expense amount should be in number")
      }
    }
   
    else{
      alert("length of name should be 140 characters")
    }
 
  };

  if (!item) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Expenses
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                 
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                   Description
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={(e)=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                   Category
                  </label>
                </div>
                <div className="mt-2">  
                  <select name="category" onChange={(e)=>handleChange(e)}  value={formData.category}>
                    <option value="Health">Health</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Travel">Travel</option>
                    <option value="Education">Education</option>
                    <option value="Books">Books</option>
                    <option value="Others">Others</option>
                  </select>
                  
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="dateofexpense" className="block text-sm font-medium leading-6 text-gray-900">
                  Date of Expense
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="dateofexpense"
                    name="dateofexpense"
                    type="text"
                    value={formData.dateofexpense}
                 
                    onChange={(e)=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="expenseamount" className="block text-sm font-medium leading-6 text-gray-900">
                   Expense Amount
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="expenseamount"
                    name="expenseamount"
                    type="text"
                    value={formData.expenseamount}
                    onChange={(e)=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate('/home')}
                className="flex rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
