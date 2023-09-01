import {useState,useEffect} from 'react'
import { useStateContext } from "../../context/StateProvider"
import Loading from '../Loading'
const Table = () => {
  const [table,setTable] = useState([]);
  const [columns,setColumns] = useState([]);
  const {result,isLoading,setIsLoading} = useStateContext();
  useEffect(() => {
    // console.log(result);
    setTable(result);
    if(result){
      const col = Object.keys(result[2]);
      setColumns(col);
    }
    setIsLoading(false);    
    // console.table(table);
    // console.table(columns);
  }, [result,table])
  
  const TableHead = (item) => {
    return(
      <>
        <th scope="col" className="col-data">
          {item?.item}
        </th>
      </>
    )
  }
  
  const TableContent = ({item}) => {
    // console.log(typeof(item));
    var res = "";
    if(typeof(item) !== "string"){
      res += JSON.stringify(item);
    }
    if(typeof(item) === "string"){
      res += item.substring(0,40);
    }
    return (
        <td className='p-2 border-[2px] truncate'>{res}</td>
    )
  }

  if(!table) return null;
  if(isLoading){
    return(
      <>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
      </>
    )
  }
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg  rounded-lg shadow-lg bg-slate-50">

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                  <thead className="bg-gray-200 dark:bg-gray-800">
                    <tr>
                      {columns.map( (item,index) => {
                        return(
                          <TableHead item={item} key={index}></TableHead>
                        )
                      })}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">              
                    {table.map((item,index)=> {
                      const rows = Object.values(item);
                      return(
                        <tr>
                          {/* {console.log(rows)} */}
                          {rows.map((val,index)=> {
                            return(
                              <TableContent item={val} key={index}></TableContent>
                            )
                          })}

                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Table;