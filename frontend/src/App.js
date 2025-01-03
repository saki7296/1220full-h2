
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';
import ProductListComponent from './component/ProductListComponent.js/index.js';
import AddProductComponent from './component/AddProductComponent.js';
import UpdateProductComponent from './component/UpdateProductComponent.js/index.js';



function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ProductListComponent/>}/>
          <Route path="/products" element={<ProductListComponent/>}/>
          <Route path="/add-products" element={<AddProductComponent/>}/>
          <Route path="/update-products/:id" element={<UpdateProductComponent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
