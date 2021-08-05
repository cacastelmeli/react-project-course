// @ts-check
import React from 'react'

import './TodoItem.scss'

/**
 * @typedef {Object} TodoItem
 * @property {number} id
 * @property {string} text
 * @property {boolean} done
 */

/**
 * @typedef {Object} TodoItemProps
 * @property {TodoItem} item
 * @property {(
 *  item: TodoItem,
 *  checked: boolean
 * ) => void} onItemChecked
 * @property {(item: TodoItem) => void} onItemRemove
 */

/**
 * @type React.FC<TodoItemProps>
 */
const TodoItem = ({
  item,
  onItemChecked,
  onItemRemove
}) => {
  /**
   * @type {React.InputHTMLAttributes<HTMLInputElement>['onChange']}
   */
  const onCheck = ({ target }) => {
    onItemChecked(item, target.checked)
  }

  return (
    <li className="c-todo-item">
      <button
        className="C-todo-item__remove-btn"
        onClick={() => onItemRemove(item)}>
        &times;
      </button>

      <input
        className="c-todo-item__done-check"
        type="checkbox"
        onChange={onCheck}
        checked={item.done} />

      <span className={`c-todo-item__text ${item.done ? 'c-todo-item__text--done' : ''}`}>
        {item.text}
      </span>
    </li>
  )
}

export default TodoItem
