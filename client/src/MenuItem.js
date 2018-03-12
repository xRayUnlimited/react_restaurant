import React from 'react';
import axios from 'axios';
import Form from './Form';

class MenuItem extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    axios.get(`/api/menu_items/${id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  submit = (menu) => {
    axios.put(`/api/menu_item/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data, edit: false }))
  }

  show = () => {
    const { menu: { name, description, price }} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }

  edit = () => {
    const { menuItem } = this.state
    return <Form submit={this.submit} {...menu} />
  }

  render() {
    const { edit } = this.state
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div>
    )
  }
}

export default MenuItem;