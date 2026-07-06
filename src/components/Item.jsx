import { memo } from 'react'

function Item({ item, deleteItem, editItem }) {
  const handleDelete = () => {
    const ok = window.confirm('¿Estás seguro que quieres eliminar este elemento?')
    if (ok) deleteItem(item.id)
  }

  return (
    <li className="item">
      <span className="item-value">{item.value}</span>
      <div className="item-actions">
        <button className="item-button item-button--edit" onClick={() => editItem(item)}>
          Editar
        </button>
        <button className="item-button item-button--delete" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default memo(Item)
