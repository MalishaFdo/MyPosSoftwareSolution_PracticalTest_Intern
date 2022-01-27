import React, { Component } from "react";
import axios from "axios";

export default class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Invoice_Hed_id: "",
      Invoice_Hed_date: "",
      Invoice_Hed_customer: "",
      Invoice_Details_id: "",
      Invoice_Details_qty: "",
      Invoice_Details_amount: "",
      Invoice_Hed_Amount: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      Invoice_Hed_id,
      Invoice_Hed_date,
      Invoice_Hed_customer,
      Invoice_Details_id,
      Invoice_Details_qty,
      Invoice_Details_amount,
      Invoice_Hed_Amount,
    } = this.state;

    const data = {
      Invoice_Hed_id: Invoice_Hed_id,
      Invoice_Hed_date: Invoice_Hed_date,
      Invoice_Hed_customer: Invoice_Hed_customer,
      Invoice_Details_id: Invoice_Details_id,
      Invoice_Details_qty: Invoice_Details_qty,
      Invoice_Details_amount: Invoice_Details_amount,
      Invoice_Hed_Amount: Invoice_Hed_Amount,
    };

    console.log(data);

    axios.post("/invoice/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          Invoice_Hed_id: "",
          Invoice_Hed_date: "",
          Invoice_Hed_customer: "",
          Invoice_Details_id: "",
          Invoice_Details_qty: "",
          Invoice_Details_amount: "",
          Invoice_Hed_Amount: "",
        });
      }
    });
  };
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Invoice</h1>
        <form className="needs-validation" noValidate>
          {/* Invoice ID */}
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Invoice ID </label>
            <input
              type="text"
              className="form-control"
              name="Invoice_Hed_id"
              placeholder=""
              value={this.state.Invoice_Hed_id}
              onChange={this.handleInputChange}
            />
          </div>

          {/* Invoice Date */}
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Invoice Date </label>
            <input
              type="date"
              className="form-control"
              name="Invoice_Hed_date"
              placeholder=""
              value={this.state.Invoice_Hed_date}
              onChange={this.handleInputChange}
            />
          </div>

          {/* Customer Name */}
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Customer </label>
            <input
              type="text"
              className="form-control"
              name="Invoice_Hed_customer"
              placeholder=""
              value={this.state.Invoice_Hed_customer}
              onChange={this.handleInputChange}
            />
          </div>
          {/* Item Details */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
