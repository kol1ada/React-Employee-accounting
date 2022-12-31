import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Gayc C.', salary: 800, increase: false, like: true, id: 1},
                {name: 'Gauston K.', salary: 3000, increase: false, like: false, id: 2},
                {name: 'Koliada O.', salary: 5000, increase: false, like: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    } 

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return ({
                data: newArr
            })
        })
    }

    onToggleProp = (id, prop) => {
    
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() { 
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>~
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;