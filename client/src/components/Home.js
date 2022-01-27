import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      product:[]
    };
  }
     
  componentDidMount(){
    this.retriveProduct();
  }


  retriveProduct(){
    axios.get("/product").then(res => {
      if(res.data.success) {
        this.setState ({
          product:res.data.existingProduct
        });

        console.log(this.state.product)
      }

    });
  }

  
  render() {
    return (
      <div>
        <p>All Products</p>
        <table className = "table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Qty</th>
            </tr>
          </thead>
          <tbody>
            {this.state.product.map((product,index) => (
              <tr key={index}>
                <th scope = "row">{index+1}</th>
                <td>{product.Product_id}</td>
                <td>{product.Product_name}</td>
                <td>{product.Product_price}</td>
                <td>{product.Product_qty}</td>
                <td>
                  <a className="btn btn warning" href= {`/edit/${product._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update  
                  </a>
                  &nbsp;
                  <a className="btn btn danger" href="#">
                  <i className="fas fa-trash"></i>&nbsp;Clear  
                  </a>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
        
        <button className = "btn btn-outline-info"><a href = "/add" style={{textDecoration:"none"}}>Create New Product</a></button>
      </div>
    )
  }
}  