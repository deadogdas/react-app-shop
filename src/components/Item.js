import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+ this.props.item.img} onClick={() => this.props.OnShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.desc}</b>
        <p>{this.props.item.price}$</p>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
      </div>
    )
  }
}

export default Item