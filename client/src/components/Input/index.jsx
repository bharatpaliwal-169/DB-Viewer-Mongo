import { useState,useEffect } from 'react'
import { useStateContext } from '../../context/StateProvider';

const Input = () => {
  const [value,setValue] = useState('');
  const [tables,setTables] = useState(['Select a Collection']);
  const {getTables,getData,fetchTables} = useStateContext()
  
  const handleSubmit = () => {
    if(value === ""){
      alert('Please Select a valid collection')
      window.location.reload();
    }
    console.log("[input.jsx Entered value is: ] "+ value);
    getData(value);
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  useEffect(() => {
    // console.log("hit");
    getTables();
  }, [])

  useEffect(()=>{
    setTables(fetchTables);
  },[fetchTables])
  return (
    <div className="text-center rounded-lg shadow-lg p-4 m-2 bg-slate-100 min-w-full ">
      <h3 className="font-bold text-2xl mb-3">Choose a Table/Collection</h3>
      <select name="table" id="table" value={value} onChange={handleChange} 
        className="px-10 py-2 mr-2 bg-slate-300 border-2">
          <option value="Select a collection">Select a collection</option>
          {tables.map(item=>{
            return(
              <option value={item} key={item} >{item}</option>
            )
          })}
        {/* <option value="">Select a DB Collection</option>
        <option value="authmessages">authmessages</option>
        <option value="postmessages">postmessages</option> */}
      </select>

      <button onClick={handleSubmit} className="btn-primary">Show</button>
    </div>
  )
}

export default Input;