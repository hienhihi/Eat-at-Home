import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.save(this.props.item);
  }
  render() {
    return (
      <div style={wholeDiv}>
        <img style={imageStyle} src={ this.props.item.thumbnail }/>
        <ul style={ulStyle}>
        <li><b>Dish: { this.props.item.title }</b></li>
        <li>Ingredients: { this.props.item.ingredients }</li>
        <li><a href={this.props.item.href}>Make this now</a></li>
        </ul>
        <button onClick={this.handleSubmit} icon>
        <Icon name='heart outline' />
        </button>
      </div>
    )
  }
}

const imageStyle = {
  float: 'left',
  height:'70px',
  width:'70px'
}
const wholeDiv = {
  height: 'auto',
  padding: '1%',
  margin: '30px'
}
const ulStyle = {
  marginLeft: '60px'
}

export default ListItem;