import './search-panel.css'

const SearchPanel=(props)=>{
    const {con}=props
    return (
        <input
        onChange={con}
         type="text"
         className="form-control search-input"
         placeholder="Найти сотрудника" />
    )
}
export default SearchPanel