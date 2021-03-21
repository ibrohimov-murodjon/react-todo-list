import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <img src="/icons8-edit.gif" alt="edit" style={{height:'30px'}}/>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <img src="/waste.gif" alt="delete" style={{height:'30px'}}/>
          </span>
        </div>
      </li>
    )
  }
}
