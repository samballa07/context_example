import React, { useContext } from "react"
import AnotherContainer from "./anotherContainer"
import { DataContext } from "./Contexts/dataContext"
import { fetchData } from "./utils/fetchData"

function DataContainer() {
  const { data, setData } = useContext(DataContext)
  return (
    <>
      <div style={{ border: "solid 1px black" }}>
        <button onClick={() => fetchData(setData)}>Fetch Data</button>
        <h1>Data</h1>
        <ul>
          {data === "LOADING"
            ? "Loading.."
            : data.map((ele) => <li key={ele.id}>{ele.brand}</li>)}
        </ul>
      </div>
      <AnotherContainer />
    </>
  )
}

export default DataContainer
