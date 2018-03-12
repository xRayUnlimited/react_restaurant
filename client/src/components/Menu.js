import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Menu extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }) )
  }

  render() {
      return (
        <h1>Menu</h1>
      )
  }
}

export default Menu;
