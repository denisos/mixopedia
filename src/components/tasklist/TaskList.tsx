import './TaskList.css'

export default function TaskList() {
  return (
    <div className="notion-frame">
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

          <div className="header-body-text" contentEditable="true">
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
              <div className="view-text">Table</div>
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

      </div>
    </div>
  );
}