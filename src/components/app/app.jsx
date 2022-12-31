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
                {name: 'Gayc C.', salary: 800, increase: false, id: 1},
                {name: 'Gauston K.', salary: 3000, increase: false, id: 2},
                {name: 'Koliada O.', salary: 5000, increase: false, id: 3},
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

    addItem = (salary, name) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return ({
                data: newArr
            })
        })
    }
    

    render() { 
        return (
            <div className="app">
                <AppInfo/>~
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;