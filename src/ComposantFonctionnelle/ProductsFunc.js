import { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import products from "../products.json";
import ProductFunc from "./ProductFunc";
import Alert from 'react-bootstrap/Alert';
import { getallProducts,deleteProduct } from "../service/api";
function ProductsFunc(props) {


  //props parent yb3th donne fis y5dhha ml props
  //useState initialiser a false
  //hooks : useState(taaml accée 3al variable),useEffect(t3wdh les methode de cycle de vie ta3 fct de classe), useContext(thb tab3th donnee ml parent el e5er fis bch direct ykoun 3ndou accee 3lih)
  
  
  const [showAlert,setshowAlert]=useState(false);
    const [showWelcome,setshowWelcome]=useState(true);
    const [products,setProducts]=useState([]);

    
    const buy = (product,updateQuantity) => {
        product.quantity--;
        updateQuantity(product.quantity);
        console.log( product.quantity--)
        showAlert1();
        
       };
    
       
       const showAlert1 = () => {
        setshowAlert(true);
        setTimeout(()=>{
            setshowAlert(false)
        },2000);
      
      };
      const deleteProd = async (id) => {
          const result = window.confirm("Are you sure you want to delete?");
        if (result) {
          await deleteProduct(id);
          getallProducts(); 
        window.location.replace('/products')
      }
        }
        
     
      useEffect(() => {
        setTimeout(()=>{
          setshowWelcome(false)
      },3000);
        getallProducts().then(products => setProducts(products));
      },[]);
    return (
       <>
     {showWelcome && (
          <Alert variant="success">Welcome to our store!</Alert>
        )}
        <CardGroup>
          {products.map((p, i) => (
            <ProductFunc key={i} product={p} buyFunction={buy} deleteProd={deleteProd}/>))}             
         </CardGroup>
         {showAlert && (
          <Alert variant="success">You bought an Item</Alert>
        )}
        
    </> );
}

export default ProductsFunc;