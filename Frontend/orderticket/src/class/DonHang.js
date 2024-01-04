import React from "react";
import { Component } from "react";

class DonHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: "",
      customerName: "",
      items: [],
      totalAmount: 0,
    };
  }

  updateOrderInfo = (orderId, customerName, items, totalAmount) => {
    this.setState({
      orderId,
      customerName,
      items,
      totalAmount,
    });
  };
}

export default DonHang;
