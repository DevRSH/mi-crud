import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [items, setItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || []
    setItems(storedItems)
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item,
        ),
      )
      setItemToEdit(null)
    } else {
      setItems([...items, { id: Date.now(), value }])
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const editItem = (item) => {
    setItemToEdit(item)
  }

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <section>
        <h2>Buscar elemento</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Escribe un nombre para buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2>Resultados</h2>
        {items.length === 0 ? (
          <p>No hay elementos guardados todavía. Agrega uno con el formulario.</p>
        ) : filteredItems.length === 0 ? (
          <p>No se encontraron elementos con ese nombre.</p>
        ) : (
          <List items={filteredItems} deleteItem={deleteItem} editItem={editItem} />
        )}
      </section>
    </div>
  )
}

export default App
