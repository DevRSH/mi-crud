import { useEffect, useState } from 'react'
import './App.css'
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
    <main className="app-shell">
      <section className="app-card">
        <header className="app-header">
          <p className="app-eyebrow">Proyecto CRUD con React</p>
          <h1 className="app-title">CRUD con LocalStorage</h1>
          <p className="app-count">Total: {items.length}</p>
          <p className="app-description">
            Agrega, edita y elimina elementos con persistencia en el navegador.
          </p>
        </header>

        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />

        <section className="app-section app-search">
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
            <p className="empty-state">
              No hay elementos guardados todavía. Agrega uno con el formulario.
            </p>
          ) : filteredItems.length === 0 ? (
            <p className="empty-state">No se encontraron elementos con ese nombre.</p>
          ) : (
            <List items={filteredItems} deleteItem={deleteItem} editItem={editItem} />
          )}
        </section>
      </section>
    </main>
  )
}

export default App
