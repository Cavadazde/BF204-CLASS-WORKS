import PropTypes from "prop-types"
const SearchToDo = ({setSearchQuery}) => {
  function handleSearch(e){
    setSearchQuery(e.target.value)
  }
  
  return (
    <input onKeyUp={(e)=>handleSearch(e)} type="text"/>
  )
}
SearchToDo.propTypes = {
  setSearchQuery: PropTypes.func
}
export default SearchToDo