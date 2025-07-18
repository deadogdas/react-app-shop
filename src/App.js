import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items: [
        {
          id:1,
          title:'Стул',
          img:'chair.jpg',
          desc:'Описание',
          category:'chairs',
          price:'77.99'
        },
        {
          id:2,
          title:'Cтол',
          img:'table.jpg',
          desc:'Описание',
          category:'tables',
          price:'230.99'
        },
        {
          id:3,
          title:'Стул',
          img:'chair2.jpg',
          desc:'Описание',
          category:'chairs',
          price:'99.99'
        },
           {
          id:4,
          title:'Стул',
          img:'chair3.jpg',
          desc:'Описание',
          category:'chairs',
          price:'239.99'
        },
        {
          id:5,
          title:'Стул',
          img:'chairOverPrice.jpg',
          desc:'Описание',
          category:'chairs',
          price:'732.99'
        },
         {
          id:6,
          title:'Лампа',
          img:'light1.jpg',
          desc:'Описание',
          category:'light',
          price:'200.00'
        },
        {
          id:7,
          title:'Лампа',
          img:'light2.jpg',
          desc:'Описание',
          category:'light',
          price:'1200.00'
        },
        {
          id:8,
          title:'Лампа',
          img:'light3.jpg',
          desc:'Описание',
          category:'light',
          price:'120.80'
        },
        {
          id:9,
          title:'Диван',
          img:'sofa.jpg',
          desc:'Описание',
          category:'sofa',
          price:'1200.80'
        },
        {
          id:10,
          title:'Диван',
          img:'sofa2.jpg',
          desc:'Описание',
          category:'sofa',
          price:'700.99'
        },
        {
          id:11,
          title:'Cтол',
          img:'table2.jpg',
          desc:'Описание',
          category:'tables',
          price:'322.99'
        },
        {
          id:12,
          title:'Cтол',
          img:'table3.jpg',
          desc:'Описание',
          category:'tables',
          price:'149.99'
        },
      ],
      showFullItem: false,
      fullItem:{},
    }
    this.state.currentItems =this.state.items
    this.AddToOrder =this.AddToOrder.bind(this)
    this.DeleteOrder =this.DeleteOrder.bind(this)
    this.ChooseCategory =this.ChooseCategory.bind(this)
    this.OnShowItem =this.OnShowItem.bind(this)
  }

  render(){
    return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete ={this.DeleteOrder} />
        <Categories ChooseCategory={this.ChooseCategory} />
        <Items OnShowItem={this.OnShowItem} items={this.state.currentItems} onAdd ={this.AddToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd ={this.AddToOrder} OnShowItem={this.OnShowItem} item ={this.state.fullItem}/>}
        <Footer/>
    </div>
    );
  }


  OnShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  ChooseCategory(category){
    if(category ==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  DeleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  AddToOrder(item){
    let isInArray =false
    this.state.orders.forEach(el=>{
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
