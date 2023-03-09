// import logo from './logo.svg';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import Personne from './Components/Personne';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import Products from './Components/Products';
import PersonList from './Components/PersonList';

import ProductFunc from './ComposantFonctionnelle/ProductFunc';
const ProductsFunc = React.lazy(()=> import('./ComposantFonctionnelle/ProductsFunc'))
const ProductDetails = React.lazy(()=> import('./ComposantFonctionnelle/ProductDetails'))
const NavbarComponent = React.lazy(()=> import('./ComposantFonctionnelle/NavigationBar'))
const NotFound = React.lazy(()=> import('./ComposantFonctionnelle/NotFound'))
const AddProduct = React.lazy(()=> import('./ComposantFonctionnelle/AddProduct'))
const UpdateProduct = React.lazy(()=> import('./ComposantFonctionnelle/UpdateProduct'))

const option=(
  <ol>
    <li>TWIN</li>
    <li>BI</li>
    <li>SAE</li>
  </ol>
)
let x="Bonjour" 
var y="tout"
const z="le monde"
const  expression  =  <p>  1  +  1  =  {  1  +  1  }  </p>
var nom="Ghada"
var prenom="BK"
var photo=<img src="logo192.png"></img>
const user={
  username: "test",
  lastname: "test"
}

function formatName(user){
  return user.lastname+ "--- "+ user.lastname
}
var myStyle={
  fontsize: 100,
  color: 'red'
}
function App() {
  return (
    <div className="App">
    
    <Suspense fallback={<p>Chargement ...</p>}>
    <NavbarComponent/>
    <Routes>

    <Route path="/products"   >
            <Route index element={<ProductsFunc />}/>
            {/* <Route path=':name' element={<ProductDetail />}/> */}
            <Route path=':id' element={<ProductDetails />} />
      </Route>
      <Route path='/PersonList' element={<PersonList />} ></Route>
      <Route path='/AddProduct' element={<AddProduct />} ></Route>
      <Route path='/products/update/:id' element={<UpdateProduct />}/>

      {/* <Route index element={<ProductsFunc />}/> */}

      {/* ProductDetails est un composant fonctionnel ProductDetails qui permet d'afficher un produit selon le nom */}

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </Suspense>
      
    </div>
  );
}

export default App;
