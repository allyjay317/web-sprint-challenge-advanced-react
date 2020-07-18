import React, { Component } from "react";
import axios from "axios";
import Filter from "./Filter";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(){
    super()
    this.state = {
      plants: [],
      filter: {
        difficulty: ''
      },
      search: () => true
    }
  }

  handleFilter = e =>{
    this.setState({filter: {...this.state.filter, [e.target.name]: e.target.name === 'watering' ? parseInt(e.target.value) : e.target.value}})
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  componentDidMount(){
    axios.get('http://localhost:3333/plants')
      .then(res =>{
        this.setState({plants: res.data.plantsData})
        console.log(res.data)
      })
  }

  componentDidUpdate(prevProps, prevState){
    
    if(prevState.filter !== this.state.filter){
      this.setState({search: this.isFiltered()})
    }
  }

  isFiltered = () =>{
    
    let callbacks = []
    for(const property in this.state.filter){
      if(this.state.filter[property] !== '' && this.state.filter[property] !== 0){
        callbacks.push(item =>{
          
          if(typeof item[property] === 'string' || typeof item[property] == 'number'){
            debugger
            return item[property] === this.state.filter[property]
          }
          else{
            return item[property].includes(this.state.filter[property])
          }
        })
      }
    }
    return item =>{
      
      let bool = true
      callbacks.forEach(cb =>{
        bool = bool && cb(item)
      })
      return bool
    }
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        <Filter filter={this.state.filter} change={this.handleFilter}/>
        <main className="plant-list">
          {this.state?.plants?.filter(this.state.search).map((plant) => (
            <div className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  }
}
