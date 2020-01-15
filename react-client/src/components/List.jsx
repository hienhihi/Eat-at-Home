import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (
  <div style={TextStyle}>
  <span>
    We found you { props.items.length } recipes.
  </span>
    { props.items.map((item,i) => <ListItem item={item} key={i} save={props.save}/>)}
  </div>
)
const TextStyle={
  textAlign:'center'
}

export default List;