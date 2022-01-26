import { useCallback } from 'react';
import { useUser } from '../../contexts/user/user-context';

export default function UserEdit() {
  const [user, setUser] = useUser();

  console.log("UserEdit render");

  const handleUpdateName = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser: any) => ({ ...prevUser, name: evt.target.value}))
  }, [setUser]);


  return (
    <div className="user-edit-box">
      <label>
        Name 
        <input type="text" value={user?.name} onChange={handleUpdateName}></input>
      </label>
    </div>
  )    
}