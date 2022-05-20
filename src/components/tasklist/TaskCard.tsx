
import { Task } from './Task';
interface TaskCardProps {
  task: Task;
}

export default function TaskCard(props: TaskCardProps) {
  const { task } = props;
  return (
    <a className="task-card" key={task.id} href="/#" >
      {task.title}
    </a>
  );
}
