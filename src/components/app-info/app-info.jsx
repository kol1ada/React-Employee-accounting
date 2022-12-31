import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in the company </h1>
            <h2>Total Employees: {employees}</h2>
            <h3>The award will go to: {increased}</h3>
        </div>
    )
}

export default AppInfo;