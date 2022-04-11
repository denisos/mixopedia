import './TaskList.css'

const taskData = [
  {
    id: 'ab1788998zz',
    title: 'wake up',
    state: 'to-do',
    created: '01012022'
  },
  {
    id: 'p11788998rr',
    title: 'cook breakfast',
    state: 'to-do',
    created: '01012022'
  },
  {
    id: 'uu11788998rr',
    title: 'serve & eat breakfast',
    state: 'to-do',
    created: '01012022'
  },
  {
    id: 'ff11788998rr',
    title: 'set alarm',
    state: 'doing',
    created: '01012022',
    started: '01012022'
  },
  {
    id: 'mku11788998rr',
    title: 'buy food',
    state: 'done',
    created: '01012022',
    started: '01012022',
    completed: '01012022'
  },
  {
    id: 'miuyhh11788998rr',
    title: 'go to grocery store',
    state: 'done',
    created: '01012022',
    started: '01012022',
    completed: '01012022'
  }
];

const isToDo = (task: any) => task.state === 'to-do';
const isInProgress = (task: any) => task.state === 'doing';
const isDone = (task: any) => task.state === 'done';

export default function TaskList() {
  return (
    <div className="notion-frame">
      <div className="notion-box">

        <div className="notion-scroller">

          <div className="notion-header-container">

            <div className="notion-header-container-title">
              <div className="notion-record-icon notion-focusable" role="button" aria-disabled="false" tabIndex={0}>
                <div className="icon-image-container">
                  <span className="icon-image" role="image" aria-label="✔️">✔️</span>
                </div>
              </div>

              <div className="title-container">
                <div className="title">Task List</div>
              </div>
            </div>

            <div className="header-body-text">
              <div>
              Use this template to track your personal tasks. 
              Click <span className="text-action-link">New</span>
              </div>
              to create a new task directly on this board.
              Click an existing task to add additional context or subtasks.

            </div>
          </div>

          <div className="menu-bar">
            <div className="view-choices">
              <div className="view-choice">
                <span className="icon"></span>
                <div className="view-text">Board View</div>
              </div>
              <div className="view-choice">
                <span className="icon"></span>
                <div className="view-text">Table View</div>
              </div>
            </div>

            <div className="data-choices">
              <div className="data-choice">
                <button className="view-text">Filter</button>
                <button className="view-text">Sort</button>

                <button className="view-text">Search</button>
                <button className="view-text">...</button>
              </div>
            </div>
          </div>


          <div className="notion-main-tasks-container">
            <div className="notion-main-tasks-column-list">
              <div className="task-title">
                To-dos
              </div>

              {taskData.filter(isToDo).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}

              <a className="task-add" href="/#">
                + New
              </a>
            </div>

            <div className="notion-main-tasks-column-list">
              <div className="task-title">
                In Progress
              </div>

              {taskData.filter(isInProgress).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}

              <a className="task-add" href="/#">
                + New
              </a>
            </div>

            <div className="notion-main-tasks-column-list">
              <div className="task-title">
                Done
              </div>

              {taskData.filter(isDone).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}
            </div>

          </div>
        </div>


        
        <div className="flex-example-lists-container">
          <h4>Next, same column layout using flexbox</h4>

          <div className="lists-container">
            <div className="list-list">
              <div className="task-title">
                To-dos
              </div>

              {taskData.filter(isToDo).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}

              <a className="task-add" href="/#">
                + New
              </a>
            </div>

            <div className="list-list">
              <div className="task-title">
                In Progress
              </div>

              {taskData.filter(isInProgress).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}

              <a className="task-add" href="/#">
                + New
              </a>
            </div>

            <div className="list-list">
              <div className="task-title">
                Done
              </div>

              {taskData.filter(isDone).map((task) => (
                <a className="task-card" key={task.id} href="/#">
                {task.title}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}