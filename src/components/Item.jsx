import { memo } from 'react'

function Item({ item, deleteItem, editItem, toggleComplete }) {
  const handleDelete = () => {
    const ok = window.confirm('¿Estás seguro que quieres eliminar este elemento?')
    if (ok) deleteItem(item.id)
  }

  return (
    <li className={`item ${item.completed ? 'completed' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input
          type="checkbox"
          checked={!!item.completed}
          onChange={() => toggleComplete(item.id)}
          aria-label={item.completed ? 'Marcar como no completado' : 'Marcar como completado'}
        />
        <span className="item-value">{item.value}</span>
      </div>
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
