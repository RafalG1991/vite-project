import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const users = [{
  id: 'a1',
  name: 'Marcin'
}, {
  id: 'a2',
  name: 'Marian'
}, {
  id: 'a3',
  name: 'Ewa'
}, {
  id: 'a4',
  name: 'Marianna'
}];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span>{user.id}</span>
        </li>
      ))}
    </ul>
  </React.StrictMode>
)
