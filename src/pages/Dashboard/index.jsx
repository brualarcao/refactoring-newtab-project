import React from 'react';
import Header from '../../components/Header';
import UserList from '../../components/UserList/ListaDeUsuarios';

import './styles.css';

const Dashboard = React.FC = () => {

    return (
        <div className="container">
        <Header />
        <UserList />
        </div>
    )
}

export default Dashboard;