import React from 'react';
import $ from 'jquery';
import List from './List.jsx';
import Ingredients from './Ingredients.jsx';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import { Header, Button, Icon } from 'semantic-ui-react'
// import styled from 'styled-components';
// import { Button, Icon } from 'semantic-ui-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
    this.searchRecipes = this.searchRecipes.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getRecipes() {
    $.ajax({
      url: '/recipes',
      success: (data) => {
        this.setState({
          recipes: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  searchRecipes(ingredients) {
    let obj = { "in": ingredients};
    $.ajax({
      url: '/search/recipes',
      method: 'POST',
      data: obj,
      success: (res) => {
        let data = JSON.parse(res);
        this.setState({
          recipes: data.results
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  saveRecipe(recipe) {
    axios.post('/add/recipe', recipe)
    .then(
      this.getRecipes()
    )
    .catch(function (error) {
      console.log(error);
    });
  }
  handleClick(e) {
    e.preventDefault();
    this.getRecipes();
  }
  render () {
    return (
      <div>
      
         <img style={StaticHeader} src='https://31at25pik4920sm701ldajta-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/25698-TSET-19-04-SYF-Website-Refresh_Header_5FoodGroups_F.jpg' />
         {/* <span syle={Text} > eat at home</span> */}
       
      <Header s='h3' textAlign='center'>What's in your fridge</Header>
          {/* <h4> What's in your fridge </h4> */}

         <Button onClick={this.handleClick} style={ButtonStyle} animated>
      <Button.Content visible>Saved Recipes</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>

        <Ingredients searchFunc = {this.searchRecipes} />
        <List save={this.saveRecipe}items={this.state.recipes}/>
        {/* <Button> Hi </Button> */}
      </div>
      )
  }
}
  const Text = {
    position: 'relative',
    top: '20%',
    left: '50%',
    // transform: 'translate(-50%, -50%)'
  }
  const StaticHeader = {
    overflow: 'auto',
    position: 'relative',
    width:'100%',
    height: '120px',
    objectFit: 'cover',
  }
  const ButtonStyle = {
    marginLeft: '200px'
  }

export default App;