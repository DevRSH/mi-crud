import { memo } from 'react'

function Item({ item, deleteItem, editItem }) {
  return (
    <li className="item">
      <span className="item-value">{item.value}</span>
      <div className="item-actions">
        <button className="item-button item-button--edit" onClick={() => editItem(item)}>
          Editar
        </button>
        <button className="item-button item-button--delete" onClick={() => deleteItem(item.id)}>
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default memo(Item)
