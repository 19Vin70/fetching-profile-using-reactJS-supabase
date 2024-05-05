import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './config/supabase';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*');

        if (error) {
          console.error('Error fetching users:', error);
          return;
        }

        if (data) {
          setUsers(data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='app'>
      <h1>Sample Profile Page</h1>
      <div className="container">
        {users && users.map(user => (
          <div className="profiles" key={ user.id }>
            <img src={user.avatar_url} alt="" />
            <h2>{user.full_name}</h2>
            <h4>{ user.username }</h4>
            <a href={ user.website } target='_blank'>{ user.website }</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
