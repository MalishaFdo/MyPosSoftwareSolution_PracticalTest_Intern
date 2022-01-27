import React, { Component} from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Product_id: "",
          Product_name: "",
          Product_price: "",
          Product_qty: ""
      }
  }

 handleInputChange = (e) => {
     const{name,value} = e.target;

     this.setState({
         ...this.state,
         [name]:value
        })
 }

 onSubmit = (e) => {
     e.preventDefault();

     const {Product_id, Product_name, Product_price, Product_qty} = this.state;

     const data = {
         Product_id: Product_id,
         Product_name: Product_name,
         Product_price: Product_price,
         Product_qty: Product_qty
     }

     console.log(data)

     axios.post("/product/save", data).then((res) => {
         if(res.data.success){
             this.setState({
                Product_id: "",
                Product_name: "",
                Product_price: "",
                Product_qty: ""
             }
             )
         }
     })
 }

    

  render(){
    return(
     <div className = "col-md-8 mt-4 mx-auto">
         <h1 className = "h3 mb-3 font-weight-normal">Product</h1>
         <form className = "needs-validation" noValidate>
             {/* Product ID */}
             <div className = "form-group" style = {{marginBottom: '15px'}}>
                 <label style = {{marginBottom:'5px'}}> Product ID </label>
                 <input type = "text"
                 className = "form-control"
                 name = "Product_id"
                 placeholder = "Enter Product ID"
                 value = {this.state.Product_id}
                 onChange = {this.handleInputChange}/>
             </div>

             {/* Product Name */}
             <div className = "form-group" style = {{marginBottom: '15px'}}>
                 <label style = {{marginBottom:'5px'}}> Product Name </label>
                 <input type = "text"
                 className = "form-control"
                 name = "Product_name"
                 placeholder = "Enter Product Name"
                 value = {this.state.Product_name}
                 onChange = {this.handleInputChange}/>
             </div>

             {/* Product Price */}
             <div className = "form-group" style = {{marginBottom: '15px'}}>
                 <label style = {{marginBottom:'5px'}}> Product Price </label>
                 <input type = "number"
                 className = "form-control"
                 name = "Product_price"
                 placeholder = "Rs. "
                 value = {this.state.Product_price}
                 onChange = {this.handleInputChange}/>
             </div>

             {/* Product Quantity */}
               <div className = "form-group" style = {{marginBottom: '15px'}}>
                 <label style = {{marginBottom:'5px'}}> Product Qty </label>
                 <input type = "text"
                 className = "form-control"
                 name = "Product_qty"
                 placeholder = "Add Quantity "
                 value = {this.state.Product_qty}
                 onChange = {this.handleInputChange}/>
             </div>
            
             <button className = "btn btn-outline-success" type = "submit" style = {{marginTop: '20px'}} onClick={this.onSubmit}>
                 <i className = "far fa-check-square"></i>
                 &nbsp; Save
             </button>
             &nbsp;
             &nbsp;
             &nbsp;
             &nbsp;
             <button className = "btn btn-outline-warning" type = "submit" style = {{marginTop: '20px'}} onClick={this.onClick}>
                 <i className = "fas fa-edit"></i>
                 &nbsp;  Update
             </button>
             &nbsp;
             &nbsp;
             &nbsp;
             &nbsp;
             <button className = "btn btn-outline-secondary" type = "reset" style = {{marginTop: '20px'}} onClick={this.onClick}>
             <i class="fa fa-eraser" aria-hidden="true"></i>
                 &nbsp;  Clear
             </button>
         </form>

     </div>
      
    )
  }
}