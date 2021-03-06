import { BrowserRouter, Route, Switch } from 'react-router-dom';

// page components
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <NavBar />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route path="/create">
                  <Create />
               </Route>
               <Route path="/search">
                  <Search />
               </Route>
               <Route path="/recipe/:id">
                  <Recipe />
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
