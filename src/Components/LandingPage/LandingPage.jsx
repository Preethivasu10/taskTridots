import React from 'react';
import './landingPage.css'; // Make sure to include your CSS file
import { AiOutlineSound } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { FaUser, FaCalendarAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



const LandingPage = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">MORPHIX</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <div className="demo-btn">Request for Demo</div>
        </nav>
      </header>
<div className='line'></div>
      {/* Main Section */}
      <main className="main-content">
        <h1 className='main-h1'>We're <span className="highlight">Morphix</span>, a digital agency unlike any other</h1>
        <p className='colorbg'>Meant balls it if up doubt small purse required his you put the outlived answered position a pleasure exertion.</p>
        <button className="get-started-btn">Get started</button>

        {/* Images Section */}
        <div className="images-section">
          <img src="https://s3-alpha-sig.figma.com/img/77e7/6905/6cc30e3500521d255a784a3ea695c770?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QHD~82GFJ96yuPo57VWI12WJ7xK-eUKC1XSXjs505yEmBLSsUfPCsI68G5WH7zaUpXUMkBRnQLbMYvYnXxcKUXidhncmEIK6VBGYWLzEBk3kTC5fraghYPP7vBctER-1RXakdFo7fp6EGqSuXNFsKoELt8XJbevJ-I9-1c1yyj6enDw6c9c8-FX1QNHs1vv44aviRJpxNNsJ1~0PjD6tmSc9HMnbiPRCp3RZ9XCH4Rny7TA4UknjFtxII463akxYa0Z1WNzIH0fTi426A3lT8AlHnnObhiX-SLRLu5kX5s4C9XRwroIYrW5ZrSqW6HgivHlNUxUs~FlupYJlnhTdrA__" alt="Image 1" />
          <img src="https://s3-alpha-sig.figma.com/img/2597/81b1/87f09800e1d829e7f790803fd4278644?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGhnCORS52vVWdov6G2wRiYzb2bXL-mV5zUKvyMpTygn9P0RC0ScBesnXTnUozbMA2hSzuery4RYuqXFNfpQkEsFbfytaK2Y4BnMyz8w98Mzag0Zg7d9FdPNPNySvZKgjaeHPOBVev6h7oAiKYeOPk9juJ0QI--DEajdOBH8EVFL~H2RLx-qDTQeC9mYR1WsKb~6uJWvpR52LZQJJaSOT2wjVtlxg3-xEF2FDE2SmnlefVccAFNHbuFNLz2VzYmDikV0idc3F~L7NzF4KmCmwRVwzkjyAD8hpOEnxPy-P2iP6yrREQVqXKPNQaDUS-d2gv4B2M0gF9kfQN29YKaIXA__" alt="Image 2" />
          <img src="https://s3-alpha-sig.figma.com/img/710e/6eaa/0756fc29583cd9b8a673f80d6a480bea?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cmsUE~x6Ljz~ruP2BYwoPuSpU5ZMaUva2T1-vjL7PH2fVFIAiiCXeb~LDm~ViYnpYF5GOO0Amx90bkg5tCJMyxasw4wlJTOyeKByYFYCzBo1HBYvBI8CZ8q--tUonvgsM2tl5hpNmQlKnAC5kI4n71-ZNvBQb19A89p4OEXuZWfcipbWgWZFnxg5N5GKEZhKDaHcAMXCM6FiMOkqvu175Rp2AHrG4yruHbaW0qnE1ZBHh9rPZwowKx1i0SCvoenjzHw6gDUdK6~-cegPwBj6SdrtP24Clp1qWdifpEGQL363D8lsRXqLqi-8w2nio8MiRMhftuT8vYQe7sqPGzDOxg__" alt="Image 3" />
          <img src="https://s3-alpha-sig.figma.com/img/928a/4874/b05ef08ea901e504d063c3437ad868dc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDa8xxvvOsTUbf0Hv3dtkbO2UzWBWKyVdqJ-NbhJ-L4HdvyNX8Dxq~Pu46yg5kqfd1aDC3~p9hESSvafHSquO-fnZC9kgFK6TriSRlWaaBGCw4WcGZkcMXBU4ZIr-84fjbMoYvexF4jBKVT7-JETgpEedOwsEle54umcXUYrnNQ1fAUamsxj6ybzqVsfz1PV1GkJ9cSayA32zxJNc5rnsMZuRxJNfSUp2zUxsk2c63-2CqJGB~6m4x-AA2CTZ0Qj00Njkaqpy4Y4vXtcQ2nw9vnzEgTFTTA~eDnx0-ifCKEPpLYaY844E26vCTjKeN9fr0xne3YxprnBYp-ZXYTL0A__" alt="Image 4" />
          <img src="https://s3-alpha-sig.figma.com/img/77e7/6905/6cc30e3500521d255a784a3ea695c770?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QHD~82GFJ96yuPo57VWI12WJ7xK-eUKC1XSXjs505yEmBLSsUfPCsI68G5WH7zaUpXUMkBRnQLbMYvYnXxcKUXidhncmEIK6VBGYWLzEBk3kTC5fraghYPP7vBctER-1RXakdFo7fp6EGqSuXNFsKoELt8XJbevJ-I9-1c1yyj6enDw6c9c8-FX1QNHs1vv44aviRJpxNNsJ1~0PjD6tmSc9HMnbiPRCp3RZ9XCH4Rny7TA4UknjFtxII463akxYa0Z1WNzIH0fTi426A3lT8AlHnnObhiX-SLRLu5kX5s4C9XRwroIYrW5ZrSqW6HgivHlNUxUs~FlupYJlnhTdrA__" alt="Image 4" />
        </div>

        {/* Services Section */}
        <section className="services">
          <h2 className='Our-services'>Our services</h2>
          <div className="service-cards">
            <div className="card">
            <AiOutlineSound  className='maxsixe' />

              <h3>Graphic design</h3>
              <p>Rooms oh fully taken by worse do. Points afraid but may.</p>
            </div>
            <div className="card">
            <AiOutlineSound  className='maxsixe'/>

              <h3>Online marketing</h3>
              <p>Rooms oh fully taken by worse do. Points afraid but may.</p>
            </div>
            <div className="card">
            <AiOutlineSound  className='maxsixe' />

              <h3>Mobile solutions</h3>
              <p>Rooms oh fully taken by worse do. Points afraid but may.</p>
            </div>
          </div>
        </section>
        
        <section  className="services" >
        <div className="text-section">
        <h1>Expect nothing less than perfect</h1>
        <p>
          Satisfied conveying a dependent contented he gentleman agreeable do be.
          Warrant private blushes removed an in equally totally it. Delivered
          dejection necessary objection.
        </p>
        <ul >
          <li><SiTicktick className="tick-icon" /> Growing project teams</li>
          <li><SiTicktick className="tick-icon" /> Agencies</li>
        
          
        </ul>
        <ul >
          <li><SiTicktick className="tick-icon" /> Growing project teams</li>
          <li><SiTicktick className="tick-icon" /> Agencies</li>
        
          
        </ul>
        <ul >
          <li><SiTicktick className="tick-icon" /> Growing project teams</li>
          
        
          
        </ul>
        <button className="contact-button">Contact us</button>
      </div>
      <div className="image-section">
        <img src="https://s3-alpha-sig.figma.com/img/928a/4874/b05ef08ea901e504d063c3437ad868dc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDa8xxvvOsTUbf0Hv3dtkbO2UzWBWKyVdqJ-NbhJ-L4HdvyNX8Dxq~Pu46yg5kqfd1aDC3~p9hESSvafHSquO-fnZC9kgFK6TriSRlWaaBGCw4WcGZkcMXBU4ZIr-84fjbMoYvexF4jBKVT7-JETgpEedOwsEle54umcXUYrnNQ1fAUamsxj6ybzqVsfz1PV1GkJ9cSayA32zxJNc5rnsMZuRxJNfSUp2zUxsk2c63-2CqJGB~6m4x-AA2CTZ0Qj00Njkaqpy4Y4vXtcQ2nw9vnzEgTFTTA~eDnx0-ifCKEPpLYaY844E26vCTjKeN9fr0xne3YxprnBYp-ZXYTL0A__" alt="Team working" />
      </div>
            </section>

        <section className="services">
          <h2 className='Our-services'>Our recent projects</h2>
          <div className="service-cards">
            <div className="cards">
            <img  src='https://s3-alpha-sig.figma.com/img/bab6/34c2/f4536a3ef6dd7e1a41c3b405153a1f0e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDEsVAHB7H9u-DCD4pQC0fSNvqLRjg1edgscfmA0Gydu7sq6tyer~Su9vMG3qa8pr4h6B5F21xSBu3RYYjmZV7qo7tFdiu4hTHJ0W~iISyJbr0iPWaaPqVgbLbTd6GFFdFbBT2WDYtdPqPKa70J79OuFzQ78pFZEEAgnvVt5GQ8Dkb2H2Tfu97PLwGRV58iKu4Ixlea8yixdZL3BaBIUEB41kA6E19fD91Q6C9LxEblT4UbtYIEVcNWUOB4fSipRWrDTVCyFsHp1vUGbi1M3enywou0U0yf58u20dZIYphOVVvCcqwkUO-0kghRLhu0jAVCTIywiFD8ASrk8tdspJg__' className='imagesixe' ></img>
            <p>Graphic design | YouTube</p>
              <h3>Magic Color</h3>
              
            </div>
            <div className="cards">
            <img  src='https://s3-alpha-sig.figma.com/img/cee5/0388/9587b61a808132ddbad6a5e97ad7b0af?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGo0nmj5FL4pvZzj6X~xNT8QoUqzDNEnBA2GVJG6~kCDsOQlMzWQ69HQwjYVB1xcSTrcE14drfJG-w93G8DgFctRAjUhCJQir6VPmcaY1MBmjL4gsiDFAlNREOTOC0bR6pkpAqV~eSo6dDOnTpGZURgN~xs1AMdj3CCWRH9C8kJlQkCbjRk8t39hrnxPIalVONwvTLbFfR3ih3Gwv1urCJcOyn0uiDJT80xkdruSotkFXdmcpQQTyvvSk2dKNzaX3EuvsZeqsXFJ63Jees7f4kAGzKyss7SZ57emZd0W3b860~mJLmgbLlCZpOoEh3EVD9-OUHcyL5cbPyPDeefMsQ__' className='imagesixe' ></img>
            <p>Branding | Webestica</p>
              <h3>Art of Feminism</h3>
              
            </div>
            <div className="cards">
            <img  src='https://s3-alpha-sig.figma.com/img/8417/358e/b40f2e12f300a74559e2e509a6374bee?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epev3wXiPD8PAI~5LqYTKqU5SxYupcEF7LWYzfwhrhLkvGFd~UurnpqyQGdF6jb7OuknTRSqNx-PuErIL3DxbkXImPIY3b85rNoY32K3nw0~rLj~krS6LFHqrBlIz~ueULr6Hq8p~kqXX1fffxQZ4R6t-0koAFtQPcHwgHbp5IcoCkiICrzMm~dKphiMujNdToZV2mpY4luc23Rxk-5BTf8KVb13ex1V0b~vuWVwjUzKdoocFO~vSrLxSw9B2C2mOwiRvchrv3oBD4IDLhKqg02P17SaClPW8lhxCWxXf6DsMmtAgd7gQo-WEkDGELUM4gMOJsLiGKPWTJaPjexnAw__' className='imagesixe' ></img>
            <p>Mobile solutions</p>

              <h3>3D Illustration</h3>
            </div>
          </div>
        </section>
        <section  className="services" >
        <div className="text-section">
        <h1>We help you build something amazing</h1>
        <p>
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.
        </p>
        
        <button className="contact-button">Get started</button>
      </div>
      <div className="image-sections">
        <img src="https://s3-alpha-sig.figma.com/img/873f/1231/ddcf2c36c8926a61137822ede969f35a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPGjxNNC1iWZMtoEDozrS7DaPQIrAK0GrIUMOBj9Tzi813UnbvsJ-GBaBgQ1um6GGBgkBm4jaAXyo3d4RxvD1xN-OVWiodjYwOD5rvzPdge6Ec0ndEhl~zO9pbxvi4fDUKD1QtOkNyDq2hK0OOkY4cJcrrhXAfJUpQ6YuTgv-QtRdIk4nr2p6vOY99uoohivB8yXHKKzqnP4ra85pZDAfZ2XgRs7RVMs7znywcf937JuOJoq5rsRg6ZqRxriz0BuCMzO614dHQ-rqLWexuyfRevGmv-5RKtG1pnKHGMFIu3bhybeEBo42TyaS3KVBHWAj06M3Cet7E1QJ6dNrRkEqQ__" alt="Team working" />
      </div>
            </section>
            <section className="services">
            <h2 className="Our-services">Frequently Asked Questions</h2>
<p className="paraFrequently" >My package is lost, what should I do?<span className='spacings'><FaPlus />
</span></p>
<p className="paraFrequently">My package is lost, what should  I do? <span className='spacings'> <FaPlus />
</span></p>

<p className="paraFrequently">My package is lost, what should  I do? <span className='spacings'>  <FaPlus /></span></p>

</section>

<section className="services">
    <h3>X MORPHIX</h3>
    <p>Lorem ipsum dolor sit amet, consectetur </p>
    <ul className="nav-linksx">
            <li><b>Home</b></li>
            <li><b>About</b></li>
            <li><b>Portfolio</b></li>
            <li><b>Contact</b></li>
          </ul>

          <div className="author-info-container">
      <div className="author-info-details">
        <p className='paracolorm'>
        hello@morphix.com
        </p>

        <p className='paracolorms'>
        +945 469 9654
        </p>
        <span className="info-text">Copyright © Tridots Tech | Designed by Tridots Tech - Powered by Tridots Tech</span>
        
        
      </div>
      <div className="author-social-icons">
        <FaFacebookF className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
    </div>
</section>

        
      </main>
    </div>
  );
}

export default LandingPage;
