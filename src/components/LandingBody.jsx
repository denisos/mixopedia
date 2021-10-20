import Footer from './Footer';
import './LandingBody.css';

function LandingBody() {
  return (
    <div className="landing-body">
      <main>
        <h1>Main Content</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>

        {/* three cards layout */}
        <div className="call-outs-container">
          <div className="call-out">
            <h1>Feature 1</h1>
            <p>
              Some lorem ipsum text Some lorem ipsum textSome lorem ipsum textSome
              lorem ipsum textSome lorem ipsum textSome lorem ipsum text Some
              lorem ipsum text Some lorem ipsum textSome lorem ipsum textSome
              lorem ipsum textSome lorem ipsum textSome lorem ipsum text
            </p>
          </div>
          <div className="call-out">
            <h1>Feature 2</h1>
            <p>
              Some lorem ipsum text Some lorem ipsum textSome lorem ipsum textSome
              lorem ipsum textSome lorem ipsum textSome lorem ipsum text
            </p>
          </div>
          <div className="call-out">
            <h1>Feature 3</h1>
            <p>Some lorem ipsum text </p>
          </div>
        </div>

        {/* simple container to center text */}
        <div className="center-me-container ">
          <div className="center-me">
            <p>This shows centered text on a product callout</p>
          </div>
        </div>

        {/* left side right side split */}
        <div className="equal-height-container">
          <div className="first">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi similique amet voluptatem molestiae nostrum ab nesciunt blanditiis repellendus quos, sequi sunt, dolorem quis facilis mollitia nemo modi doloribus quo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quisquam, veritatis ducimus, vero magnam hic quia pariatur asperiores laudantium quod nobis perspiciatis, expedita quo reprehenderit quasi iusto ullam error reiciendis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi similique amet voluptatem molestiae nostrum ab nesciunt blanditiis repellendus quos, sequi sunt, dolorem quis facilis mollitia nemo modi doloribus quo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quisquam, veritatis ducimus, vero magnam hic quia pariatur asperiores laudantium quod nobis perspiciatis, expedita quo reprehenderit quasi iusto ullam error reiciendis.</p>
          </div>

          <div className="second">
            <div className="second-a">A</div>
            <div className="second-b">B</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default LandingBody;