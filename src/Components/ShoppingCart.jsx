// import React from 'react'
// import "./ShoppingCart.css"
// import { Link } from "react-router-dom"
// import { RiCloseLine } from "react-icons/ri";
// import dabur from "./../assets/dabur.png"
// import { RiCloseCircleFill } from "react-icons/ri";

// const ShoppingCart = ({ items, onClose }) => {
//   const getTotal = () => {
//     return items.reduce((total, item) => total + item.price, 0);
//   };
//   return (
//     <section className="shoppingcart-main">
//       <div className="shoppingcart-container">
//         <div className="shoppingcart-header">
//           <h2>Shopping Cart</h2>
//           <RiCloseLine style={{ fontSize: '2.5rem' }} />
//         </div>
//         <div className="cart-glance">
//           <div className="cart-summary">
//             <div className="summary-img">
//               <img src={dabur} alt="" />
//             </div>
//             <div className="summary-content">
//               <div className="content-heading">
//                 <h4>Pudin Hara</h4>
//               </div>
//               <div className="content-details">
//                 <p>1</p>
//                 <p>X</p>
//                 <p>Rs. 250.00</p>
//               </div>
//             </div>
//             <div className="summary-close">
//               <RiCloseCircleFill style={{ fontSize: '1.5rem' }} />
//             </div>
//           </div>
//           <div className="cart-summary">
//           <div className="summary-img">
//             <img src={dabur} alt="" />
//           </div>
//           <div className="summary-content">
//             <div className="content-heading">
//               <h4>Pudin Hara</h4>
//             </div>
//             <div className="content-details">
//               <p>1</p>
//               <p>X</p>
//               <p>Rs. 250.00</p>
//             </div>
//           </div>
//           <div className="summary-close">
//             <RiCloseCircleFill style={{ fontSize: '1.5rem' }}/>
//           </div>
//         </div>
//           <div className="cart-subtotal">
//             <p>Subtotal</p>
//             <h4>Rs. 520.00</h4>
//           </div>
//         </div>
//         <hr />
//         <div className="cart-buttons">
//           <Link to="/Cart"><button>Cart</button></Link>
//           <Link to="/Checkout"><button>Checkout</button></Link>
//           <Link to="/ProductComparison"><button>Comparison</button></Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ShoppingCart