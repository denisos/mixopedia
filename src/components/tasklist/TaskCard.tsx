
import { Task } from './types';
interface TaskCardProps {
  task: Task;
  handleMoveForward?: (id: string) => void;
  handleMoveBack?: (id: string) => void;
}

export default function TaskCard(props: TaskCardProps) {
  const { task, handleMoveForward, handleMoveBack } = props;

  return (
    <div className="task-card" >
      {task.title}

      <div>
        {handleMoveForward && <button onClick={() => handleMoveForward(task.id)}>forward</button>}
        {handleMoveBack && <button onClick={() => handleMoveBack(task.id)}>back</button>}
      </div>
    </div>
  );
}
