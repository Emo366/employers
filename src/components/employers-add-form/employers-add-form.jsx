import './employers-add-form.css'
import { Component } from 'react'

class EmployersAddForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            salary:0,
        }
    }
    onValuechange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.name!=='' && this.state.salary!==0){
            this.props.data(this.state.name,this.state.salary)
        }
        
    }
    render(){
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        onChange={this.onValuechange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        onChange={this.onValuechange} />
    
                    <button type="submit"
                            className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
    }
}



export default EmployersAddForm