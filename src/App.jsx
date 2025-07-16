import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ListPage from './Pages/ListPage';
import RecipeDetail from './Pages/RecipeDetail';
import SearchResults from './Pages/SearchResult';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ListPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App