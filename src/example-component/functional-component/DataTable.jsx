import React, { Component } from 'react';

const initialData = [
  { id: 1, name: 'Red Shirt', price: 20 },
  { id: 2, name: 'Blue Shirt', price: 25 },
  { id: 3, name: 'Green Pants', price: 30 },
  { id: 4, name: 'Black Shirt', price: 22 },
  // Add more product data here
];

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: initialData,
      search: '',
      editItemId: null,
    };
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleEdit = (itemId) => {
    this.setState({ editItemId: itemId });
  };

  handleSave = (itemId, editedName, editedPrice) => {
    const { data } = this.state;
    const newData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: editedName, price: editedPrice };
      }
      return item;
    });

    this.setState({ data: newData, editItemId: null });
  };

  handleDelete = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const { data } = this.state;
      const newData = data.filter((item) => item.id !== itemId);
      this.setState({ data: newData });
    }
  };

  render() {
    const { data, search, editItemId } = this.state;
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.name.includes('Shirt')
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search for Shirts"
          value={search}
          onChange={this.handleSearchChange}
        />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {editItemId === item.id ? (
                    <input type="text" defaultValue={item.name} />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editItemId === item.id ? (
                    <input type="text" defaultValue={item.price} />
                  ) : (
                    `$${item.price}`
                  )}
                </td>
                <td>
                  {editItemId === item.id ? (
                    <button onClick={() => this.handleSave(item.id)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => this.handleEdit(item.id)}>Edit</button>
                      <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
