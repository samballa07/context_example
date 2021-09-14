import React, { useContext } from "react"
import { DataContext } from "./Contexts/dataContext"

function AnotherContainer() {
  const { data } = useContext(DataContext)
  return (
    <>
      <h1>Another Component</h1>
      <ul>
        {data === "LOADING"
          ? "Loading.."
          : data.map((ele) => <li key={ele.id}>{ele.brand}</li>)}
      </ul>
    </>
  )
}

export default AnotherContainer
