
import './About.css';

export default function About() {

  return (
    <div>
      <h2>About</h2>

      <div className="about-container" style={{display: "flex", justifyContent: "space-between" }}>
        <div className="about-select-list" style={{backgroundColor: "magenta"}}>
          An about select list
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          Another about selectlist
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          A third selectlist
        </div>
      </div>

    </div>

  );
}
