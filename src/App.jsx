import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ListPage from './Pages/ListPage';
import RecipeDetail from './Pages/RecipeDetail';
import SearchResults from './Pages/SearchResult';
import ListPageCategory from './Pages/ListPageCategory';
import ListPageRecipe from './Pages/ListPageRecipe';
import AllRecipeList from './Pages/AllRecipeList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ListPage />} />
        <Route path="/categoryRecipe/:category" element={<ListPageRecipe />} />
        <Route path="/categoryFood/:category" element={<ListPageCategory />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/recipes" element={<AllRecipeList />} />
      </Routes>
    </Router>
  )
}

export default App