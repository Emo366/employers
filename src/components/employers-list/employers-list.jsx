import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EmployersList=({data,onDelete,onToggleIncrease,onToggleRice,onSalaryChange})=>{

let elem=data.map((item)=>{
    const {id,...itemPorps}=item
    return  <EmployersListItem 

    {...itemPorps}
    key={id}
    onDelete={()=>onDelete(id)}
    onToggleIncrease={()=>onToggleIncrease(id)}
    onToggleRice={()=>onToggleRice(id)}
    onSalaryChange={onSalaryChange}
    />
})

    return(
        <ul className="app-list list-group">
          {elem}
        </ul>
    )
}
export default EmployersList