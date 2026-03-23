import { useMemo, useState } from 'react'

export default function App() {
  const [q, setQ] = useState('')
  const [max, setMax] = useState('')
  const products = useMemo(() => [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Keyboard', price: 40 },
    { id: 4, name: 'Headphones', price: 70 }
  ], [])

  // Filter products by name query and optional max price.
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase()) && (max === '' || p.price <= Number(max))
  )

  return (
    <div className="container">
      <h1>Product Catalog with Search</h1>
      <div className="row">
        <input placeholder="Search name" value={q} onChange={(e) => setQ(e.target.value)} />
        <input placeholder="Max price" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
      <div className="grid">{filtered.map((p) => <div className="card" key={p.id}><h3>{p.name}</h3><p>${p.price}</p></div>)}</div>
    </div>
  )
}
