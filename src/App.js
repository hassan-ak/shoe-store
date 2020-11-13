// Imports
// React Imports
// Router Imports
import { Route, Routes } from 'react-router-dom';
// Component Imports
import { Home } from './components/home/Home';
import { Products } from './components/products/Products';
import { Gents } from './components/products/Gents';
import { Ladies } from './components/products/Ladies';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { ProductsCatagory } from './components/products/ProductsCategory';
import { SelectedProduct } from './components/products/SelectedProduct';
// Functional Component Imports
import { GlobalDataProvider } from './functionalComponents/DataProvider';
// Style Imports
import './App.css';

// App
function App() {
  return (
    <GlobalDataProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Products/>}/>
        <Route path="products/gents" element={<ProductsCatagory/>}>
          <Route path="/" element={<Gents/>}/>
          <Route path=":slug" element={<SelectedProduct/>}></Route>
        </Route>
        <Route path="products/ladies" element={<ProductsCatagory/>}>
          <Route path="products/ladies" element={<Ladies/>}/>
          <Route path=":slug" element={<SelectedProduct/>}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>     
    </GlobalDataProvider>
  );
}
export default App;
