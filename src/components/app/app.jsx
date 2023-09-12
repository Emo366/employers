import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import "./app.css";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S", salary: 1000, increase: true, rise: true, id: 1 },
        { name: "David B", salary: 2000, increase: false, rise: false, id: 2 },
        { name: "Victor B", salary: 3000, increase: false, rise: false, id: 3 },
      ],
      temp:'',
      filter:'all'
    };
    this.maxId = 4;
  }
  deletBtn = (id) => {
    this.setState(({ data }) => {
      let index = data.findIndex((item) => {
        return item.id === id;
      });
      let obj = [...data];
      obj.splice(index, 1);
      return {
        data: obj,
      };
    });
  };
  add = (name, salary) => {
    let newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      let newArr = [newItem, ...data];
      return {
        data: newArr,
      };
    });
  };
  count = () => {
    let a = this.state.data.length;
    return a;
  };
  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      return{
       
        data:data.map(item=>{
            if(item.id===id){
                return {...item,increase:!item.increase}
            }
            return item
        })
      }
    });
    
  };
  onToggleRice=(id)=>{
    this.setState(({data})=>{
      return{ data:data.map(item=>{
        if(item.id===id){
          return {...item,rise:!item.rise}
        }
        return item
      })
    }
    })
  }
  countPrime=()=>{
    let IncreaseEmployers=this.state.data.filter((item)=>{
        return item.increase
    })
    return IncreaseEmployers.length
  }

finde=(items,temp)=>{
  if(temp.length===0){
    return items
  }
  return items.filter(item=>{
    return item.name.indexOf(temp)>-1
  })
}
change=(e)=>{
  let newTemp=e.target.value
  this.setState(({temp})=>{
    return{
      temp:newTemp
    }
  })
}

filterPost=(items,filter)=>{
  switch(filter){
    case "rise":
      return items.filter(item=>item.rise)
      case 'moreThen1000':
        return items.filter(item=>item.salary>1000)
        default:
          return items
  }
}
onFilterSelect=(filter)=>{
  this.setState({filter})
}
onSalaryChange = (name, salary) => {
  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.name === name) {
        return {...item, salary}
      }
      return item;
    })
  }))
}
  render() {
    const{data,temp,filter}=this.state

    const visibledata=this.filterPost(this.finde(data,temp),filter)

    return (
      <div className="app">
        <AppInfo countinfo={this.count}
        countInfoEmployers={this.countPrime} />
        <div className="search-panel">
          <SearchPanel con={this.change} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployersList
          data={visibledata}
          onDelete={this.deletBtn}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRice={this.onToggleRice}
          getS={this.getS}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployersAddForm data={this.add} />
      </div>
    );
  }
}

export default App;
