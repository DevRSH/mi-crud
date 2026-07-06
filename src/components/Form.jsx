import { useState, useEffect } from 'react'

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value)
    } else {
      setInputValue('')
    }
  }, [itemToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue)
      setInputValue('')
      setError('')
    } else {
      setError('El campo no puede estar vacío')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Escribe un elemento"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {error && <p className="form-error">{error}</p>}
      <button className="todo-button" type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  )
}

export default Form
