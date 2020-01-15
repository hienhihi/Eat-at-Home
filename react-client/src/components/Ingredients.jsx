import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let string = event.target.value;
    this.setState({value: string});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.searchFunc(this.state.value)
  }
  render() {
    return (
      <div>
       <form style={FormStyle} onSubmit={this.handleSubmit}>
        <label>
          Ingredients: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <Button icon>
        <Icon name='search' />
        </Button>
      </form>
      </div>
    )
  }
}

const FormStyle = {
  textAlign: 'center'
}

export default Ingredients;