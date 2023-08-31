import { createContext,useContext,useState} from 'react'

// create a context
const StateContext = createContext();

const API = "http://localhost:8000";

// service layer functions
// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children}) => {
  const [result,setResult] = useState();
  const [isLoading,setIsLoading] = useState(false);

  const getData = async(tableName) => {
    setIsLoading(true)
    const response = await fetch(`${API}/table/?tableName=${tableName}`,{
      method: 'GET',
      headers: {
        'x-user-agent' : 'desktop'
      }
    });
    const data = await response.json();
    console.log(data);
    setResult(data);
    setIsLoading(false)
  }

  const getTableNames = async() => {
    setIsLoading(true);
    const res = await fetch(`${API}/alltables`,{
      method: 'GET'
    })
    const data = await res.json();
    console.log(data);
    setIsLoading(false);
  }

  return(
    <StateContext.Provider value={{getData,isLoading,setIsLoading,result,getTableNames}}>
      {children}
    </StateContext.Provider>
  )
}

//export it to components
export const useStateContext = () => useContext(StateContext);