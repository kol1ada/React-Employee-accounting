import EmloyersListItem from '../employers-list-item/employers-list-item';

import './employeers-list.css';

const EmployeersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <EmloyersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group" >
                {elements}
        </ul>
    )
}

export default EmployeersList;