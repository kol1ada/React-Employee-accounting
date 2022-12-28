import EmloyersListItem from '../employers-list-item/employers-list-item';
import './employeers-list.css';

const EmployeersList = () => {
    return (
        <ul className="app-list list-group">
            <EmloyersListItem/>
            <EmloyersListItem/>
            <EmloyersListItem/>
        </ul>
    )
}

export default EmployeersList;