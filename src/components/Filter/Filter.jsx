import PropTypes from 'prop-types';
// =============================
export const Filter = ({onChangeFilter})=>{
  return(
    <>
    <label>
      Find contacts by name
      <input onChange={(e)=>onChangeFilter(e)} type="text" name="filter"/>
    </label>
    </>
  )
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired
}