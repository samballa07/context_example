import { useState } from "react"
import { DataContext } from "./Contexts/dataContext"
import DataContainer from "./dataContainer"

function App() {
  const [data, setData] = useState([])
  console.log(typeof data, typeof setData)
  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <DataContainer />
      </DataContext.Provider>
    </>
  )
}

export default App
