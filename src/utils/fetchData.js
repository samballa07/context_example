export const fetchData = async (setData) => {
  setData("LOADING")
  fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=20")
    .then((response) => response.json())
    .then((responseJson) => {
      setData(responseJson)
    })
}
