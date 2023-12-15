import './App.css'
import Header from "./Header.tsx";
import Search from "./Search.tsx";
import AppartmentTypeBar from "./AppartmentTypeBar.tsx";
import AppartmentList from "./AppartmentList.tsx";
import Login from './Login.tsx';
import { Link } from 'react-router-dom';

// function App() {

//     return (
//         <>
//         <Login/>
//             <Header />
//             <Search />
//             <Link to="/add-apartment">
//                 <button>Добавить объект недвижимости</button>
//             </Link>
//             <AppartmentTypeBar />
//             <AppartmentList />
//         </>
//     )
// }

// export default App


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import AppartmentAddPage from './AppartmentAddPage';
import AppartmentIndexPage from './AppartmentIndexPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Login/>
                        <Header />
                        <Link to="/add-apartment">
                            <button>Add Apartment</button>
                        </Link>
                        <Search />
                        <AppartmentTypeBar />
                        <AppartmentList />
                    </>
                }>
                </Route>
                <Route path="/add-apartment" element={<AppartmentAddPage />} />
                <Route path="/apartment/:id" element={<AppartmentIndexPage />} />
            </Routes>
        </Router>
    );
};

export default App;
