// =============================
export const Filter = ({onChangeFilter})=>{
  return(
    <>
    <label>
      <input onChange={(e)=>onChangeFilter(e)} type="text" name="filter"/>
    </label>
    </>
  )
}