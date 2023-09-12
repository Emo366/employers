import './app-info.css'

const AppInfo=(props)=>{
    const {countinfo,countInfoEmployers}=props
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников:{countinfo()}</h2>
            <h2>Премию получат:{countInfoEmployers()}</h2>
        </div>
    )
}
export default AppInfo