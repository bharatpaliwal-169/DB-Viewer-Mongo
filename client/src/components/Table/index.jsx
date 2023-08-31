import {useState,useEffect} from 'react'
import { useStateContext } from "../../context/StateProvider"
const Table = () => {
  const [table,setTable] = useState([]);
  const [columns,setColumns] = useState([]);
  const {result} = useStateContext();
  useEffect(() => {
    // console.log(result);
    setTable(result);
    if(result){
      const col = Object.keys(result[2]);
      setColumns(col);
    }
  }, [result])
  
  if(!table) return null;
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      {console.log(columns)}
                      {columns.map( (item,index) => {
                        return(
                          <TableHead item={item} key={index}></TableHead>
                        )
                      })}
                    </tr>
                  </thead>

                  {/* <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">              
                    {table.map((item,index)=> {
                      return(
                        <TableContent item={item} key={index}></TableContent>
                      )
                    })}
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const TableHead = (item) => {
  return(
    <>
      <th scope="col" className="col-data">
        {item?.item}
      </th>
    </>
  )
}

const TableContent = (item) => {
  return (
    <>
      <tr>
        <td className="row-data ps-4">
          {item?.item?._id}
        </td>
        <td className="px-12 py-4 text-md whitespace-nowrap">
          {item?.item?.name}
        </td>
        <td className="row-data">
          {item?.item?.email}
        </td>
        
        <td className="row-data">
          {item?.item?.verified?"VERIFIED" : "UN-VERIFIED"}
        </td>    
      </tr>
    </>
  )
}

export default Table;