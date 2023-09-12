import { Component } from 'react'
import './employers-list-item.css'

class EmployersListItem extends Component{
 constructor(props){
    super(props)

 }
 onSalaryChange = (e) => {

    const {onSalaryChange, name} = this.props;

 

    onSalaryChange(name, e.target.value)
}
    render(){
       
        const{name,salary,onDelete,onToggleIncrease,increase,rise,onToggleRice}=this.props
        let a=increase ? "list-group-item d-flex justify-content-between increase":'list-group-item d-flex justify-content-between'
        let b=rise?'like':''
        let arr=[]
        arr.push(a,b)
       
        return(
            <li className={arr.join(' ')}>
                <span onClick ={onToggleRice}className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" 
                onChange={this.onSalaryChange}
                defaultValue={salary+'$'}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleIncrease}type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }
        
   
   
}
export default EmployersListItem