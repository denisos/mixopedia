import { useUser } from '../../contexts/user/user-context';

export default function UserDisplay() {
  const [user] = useUser();

  console.log("UserDisplay render");

  return (
    <div className="user-edit-box">
      <p>User Name: {user?.name}</p>
    </div>
  )    
}