import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [{ task: 'Organize Garage', id: 1528817077286, completed: false }]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo,
    }
  }

  addItem = (e, item) => {
    e.preventDefault()
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todo: [...this.state.todo, newItem],
    })
  }

  toggleItem = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      }),
    })
  }

  todoDone = e => {
    e.preventDefault()
    this.setState({
      todo: this.state.todo.filter(item => !item.completed),
    })
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addItem={this.addItem} todo={this.state} />
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          todoDone={this.todoDone}
        />
      </div>
    )
  }
}

export default App
