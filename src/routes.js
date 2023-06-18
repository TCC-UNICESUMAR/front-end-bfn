import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create_donate from './pages/Create_donate/Index';
import Feed from './pages/Feed/Index';
import Login from './pages/Login/Index';
import User_donates from './pages/User_donates/Index';
import User_edit from './pages/User_edit/Index';
import User_register from './pages/User_register/Index';
import Donate_edit from './pages/Donate_edit/Index';

export default function ExactRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={Login} />
                <Route path='/registerUser' Component={User_register} />
                <Route path='/registerProduct' Component={Create_donate} />
                <Route path='/userEdit' Component={User_edit} />
                <Route path='/feed' Component={Feed} />
                <Route path='/myDonates' Component={User_donates} />
                <Route path='/myDonate/:productId' Component={Donate_edit} />
            </Routes>
        </Router>
    );
}