import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import UniversoMarvelPage from './pages/UniversoMarvelPage';
import AmigosMarvelPage from './pages/AmigosMarvelPage';
import CadastrodePersonagemPage from './pages/CadastrodePersonagemPage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<DashboardPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/amigosmarvel' element={<AmigosMarvelPage/>} />
                <Route exact path='/universomarvel' element={<UniversoMarvelPage/>}/>
                <Route exact path='/cadastrodepersonagem' element={<CadastrodePersonagemPage/>}/>
            </Routes>  
        </Router>
    )
}

export default App;
