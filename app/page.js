import Image from "next/image";

export const metadata = {
  title: "Likhith Dev Portfolio",
  description: "Hello, this is Likhith Dev Portfolio"
}

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Likhth Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>
              Hello, My Name is <span className="purple">Likhith</span>
            </div>
            <div>And I am a passinate</div>
            <span id="element"></span>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit Github</button>
            </div>
          </div>
          <div className="rightSection">
            <img src="bg.png" alt="" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-grey">What I have done so far</span>
          <h1>Internships</h1>

          <div className="box">
            <div className="vertical">
              <img className="image-top" src="/redhat.png" alt="" />
              <div className="vertical-title">
                Linux by redhat (Mar 2022 - May 2022)
              </div>
              <div className="vertical-desc">
                Learned the Linux Commands and know how to use them.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/celonis.png" alt="" />
              <div className="vertical-title">
                Process Mining by Celonis (Aug 2022 - Oct 2022)
              </div>
              <div className="vertical-desc">
                Learned the process of creating the chart and document for the
                business
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/salesforce.png" alt="" />
              <div className="vertical-title">
                SalesforceDeveloper By Smart Interz (Aug 2023 - Oct 2023)
              </div>
              <div className="vertical-desc">
                Learned the usage of various tools available in the salesforce
                platform which will help to become a salesforce developer
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/juniper.png" alt="" />
              <div className="vertical-title">
                Networking by Juniper (Sep 2023 - Nov 2023)
              </div>
              <div className="vertical-desc">
                Learned the Networking Devices and Configurations
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Likhith Developer Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-third">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-fourth">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-rights">
          Copyright &#169;likhithportfolio.com | All rights reserved
        </div>
      </footer>
    </>
  );
}
