import './app-filter.css'
import { Component } from 'react'

class AppFilter extends Component{
    constructor(props){
        super(props)
    }
   
    // btnName=(e)=>{
    //     let a=e.target.name
    //     this.props.change(a)
    //     let active=''
    //     if(a=='name'){
    //        active='btn-outline-light'
    //     }
    // }

    render(){
        const buttonsData=[
            {name:'all',label:'Все сотрудники'},
            {name:'rise',label:'На повышение'},
            {name:'moreThen1000',label:'З/П больше 1000$'}
        ]
        const buttons=buttonsData.map(({name,label})=>{
            const active=this.props.filter===name
            const clazz=active ? 'btn-light':'btn-outline-light'
            return(
                <button type='button'
                className={`btn ${clazz}`}
                onClick={()=>this.props.onFilterSelect(name)}
                key={name}>
                {label}

            </button>
            )
        })
        return(
            <div className="btn-group">
          {buttons}
        </div>
        )
   

   
}
}
export default AppFilter