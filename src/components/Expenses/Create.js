import { useState } from "react"
import { useDispatch} from 'react-redux';
import { setActiondata } from "../redux/action/action"
import { useNavigate } from 'react-router-dom';

 function Create() {
  const[data,setData]=useState('')
  let dispatch=useDispatch()
  const history = useNavigate()

   const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler=(e)=>{
    e.preventDefault()
    if(data.name.length <=140)  {
      if(!isNaN(data.expenseamount))
      {
        dispatch(setActiondata(data))
        history("/home")
      }
      else{
        alert("expense amount should be in number")
      }
    }
    else{
      alert( "length of name should be 140 characters")
    }
   }  
    return (
      <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Create New Expenses
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name the Expense"
                    onChange={(e)=>handleChange(e)}
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
                    placeholder="Describe the Expense"
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
                  <select name="category" onChange={(e)=>handleChange(e)}>
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
                    type="date"
                    placeholder="Date of Expense (date-picker)"
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
                    placeholder="Expense Amount in INR"
                    onChange={(e)=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="flex justify-between">
                <button
                  type="submit"
                  onClick={()=>history("/home")}
                  className="flex  rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cancel
                </button>
                
                <button
                 
                  className="flex  rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Expense
                </button>
              </div>
            </form>
  
            
          </div>
        </div>
      </>
    )
  }

  export default Create
  