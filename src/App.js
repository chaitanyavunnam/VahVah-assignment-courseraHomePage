import './App.css';

function App() {
  return (
    // <div className="App">
    <>
      <header className="App-header">
        <div className="menu"><img className="menubar" src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="menubar" /></div>
       <div className="title">coursera</div>
       <div className="explore">Explore v</div>
      <div><input className="search" type="text" placeholder="what do you want ot learn?" /></div>
      <div className="search-btn"><img className="searchimg" style={{opacity: 0.3}} height="38px" width="35px" src="https://th.bing.com/th/id/OIP.RbWmUWzRZz6xxOoKNNNDkAAAAA?w=155&h=180&c=7&o=5&pid=1.7" alt="logo" /></div>
      <div className="enterprise">For Enterprise </div>
      <div><a  className="login" href="" >Log In</a> </div>
      <div><button className="join-btn" >Join for Free</button></div>
      </header>
     <div className="yourcourse">
       <div className="m1">Your Course to Success</div>
       <div className="m2">Build skills with courses, certificates, and degrees online from world-class universities and companies.</div>
       <div><button className="joinforfree">Join for Free</button></div>
       <div><img className="img2" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/hero/hero-b.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=35" alt="img2" /></div>
     </div>
     <div className="collabrate">
       <div className="m3">We collaborate with <span style={{color: "blue"}}>200+ leading universities and companies</span></div>
     <div className="companies">
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/illinois.svg?auto=format%2Ccompress&dpr=1&w=&h=32" alt="comp1"/>
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/partners/duke_updated_2020.png?auto=format%2Ccompress&dpr=1&w=&h=32" alt="comp2" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/google.png?auto=format%2Ccompress&dpr=1&w=&h=37" alt="comp3" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55" alt="comp4" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/ibm.png?auto=format%2Ccompress&dpr=1&w=&h=32" alt="comp5" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/imperial.png?auto=format%2Ccompress&dpr=1&w=&h=35" alt="comp6" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/stanford.svg?auto=format%2Ccompress&dpr=1&w=&h=27" alt="comp7" />
       <img className="comp-img" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/penn.svg?auto=format%2Ccompress&dpr=1&w=&h=37" alt="comp8" />
     </div>
     </div>
     <div className="goals" >
       <div className="goal-head">Achieve your goals with Coursera</div>
       <div className="allgoals">
         <div className="goal" >
         <div><img className="res-img1" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Learn.svg?auto=format%2Ccompress&dpr=1&w=55&h=55&q=40" alt="g1" /></div>
         <div><h3 className="resp-head">Learn the latest skills</h3></div>
         <div className="matter">like business analytics, graphic design, Python, and more</div>
         </div >
         <div className="goal" >
         <div><img className="res-img1" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Get-Ready.svg?auto=format%2Ccompress&dpr=1&w=55&h=55&q=40" alt="g1" /></div>
         <div><h3 className="resp-head"> Get ready for a career</h3></div>
         <div className="matter">in high-demand fields like IT, AI and cloud engineering</div>
         </div>
         <div className="goal" >
         <div><img className="res-img1" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Earn-Degree.svg?auto=format%2Ccompress&dpr=1&w=55&h=55&q=40" alt="g1" /></div>
         <div ><h3 className="resp-head">Earn a degree</h3></div>
         <div className="matter">from a leading university in business, computer science, and more</div>
         </div>
         <div className="goal" >
         <div><img className="res-img1" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Upskill-your-org.svg?auto=format%2Ccompress&dpr=1&w=55&h=55&q=40" alt="g1" /></div>
         <div><h3 className="resp-head">Upskill your organization</h3></div>
         <div className="matter">with on-demand training and development programs</div>
         </div>
       </div>
     </div>
     <div className="outcomes">
       <div className="imgs">
         <img className="imgs1" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=3&w=606&h=553&q=40" alt="i1" />
       </div>
       <div className="imgs3">
         <img className="imgs2" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=300&q=40" alt="i1" />
       </div>
       <div className="outcome">
         <div className="m4">Learner outcomes on Coursera</div>
         <div className="m5"><b>87% of people learning</b> for professional development <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</div>
         <div className="m6">- Coursera Learner Outcomes Survey (2019)</div>
         <div className="btns">
           <button className="btn3">Join for Free</button>
           <button className="btn4">Try Coursera for Business</button>
         </div>
       </div>
     </div>
     <section className="details1">
       <div className="m7">World-class learning for anyone, anywhere</div>
       <div className="sec1">
         <div className="m8">Top Quality</div>
         <div className="m9">Learn from leading universities and companies</div>
         <div className="m10">Start streaming on-demand video lectures today from top instructors in subjects like<u><a>bisiness</a></u>,<u><a>computer Science</a></u>,<u><a>data science</a></u>,<u><a>language learning</a></u> & more</div>
       </div>
       <div className="i2"><img className="imgs4" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/top-quality-image.png?auto=format%2Ccompress&dpr=1&w=624&h=463&q=40" alt="i2"/></div>
     </section>
     <section className="details2">
       <div className="i3"><img className="imgs5" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/accessible-updated-certs.svg?auto=format%2Ccompress&dpr=1&w=518&h=501&q=40" alt="i3"/></div>
       <div className="sec2">
         <div className="m8">Accessible</div>
         <div className="m9">Find flexible, affordable options</div>
         <div className="m10">Choose from many options including free courses and <u><a>university degrees</a></u> at a breakthrough price. Learn at your own pace, 100% online.</div>
       </div>
     </section>
     <section className="details1">
       <div className="sec1">
         <div className="m8">Applied Learning</div>
         <div className="m9">Master skills with in-depth learning</div>
         <div className="m10">Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners.</div>
       </div>
       <div className="i2"><img className="imgs5"  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/applied-learning.png?auto=format%2Ccompress&dpr=1&w=655&h=481&q=40" alt="i3"/></div>
     </section>
     <section className="details2">
       <div className="i3"><img className="imgs5"  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/certificate-crop.png?auto=format%2Ccompress&dpr=1&w=580&h=440&q=40" alt="i3"/></div>
       <div className="sec2">
         <div className="m8">Shareable Certificates</div>
         <div className="m9">Earn industry-recognized credentials</div>
         <div className="m10">Demonstrate your new skills by sharing your Course Certificate, <u><a> Professional Certificate</a></u>,<u><a>MasterTrack<sup>Tm</sup>Certificate</a></u>, or diploma with your network.</div>
       </div>
     </section>
     <section className="community">
     <div className="m11">From the Coursera community</div>
     <div className="m12">77+ million people are already learning on Coursera</div>
     <div className="members">
     <div className="member1" >
         <div  className="imgs6"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/social-proof/coursera-learner-a.png?auto=format%2Ccompress&dpr=1&w=202&h=202&q=40" alt="g1" /></div>
         <div className="m13">Julio R.</div>
         <div className="m14">Web Developer</div>
         <div className="m15">Chile</div>
         <div className="m16">"I started ar stage aero.With Courera I was ablw to start learning online and eventually build up enough knowledge and skills to transition into a well-playing carrer."</div>
        
         </div >
         <div className="member2" >
         <div ><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/social-proof/coursera-learner-b.png?auto=format%2Ccompress&dpr=1&w=202&h=202&q=40" alt="g1" /></div>
         <div className="m17">Kara A.</div>
         <div className="m18">iMBA Graduate,University of Illinois Gies College of Business</div>
         <div className="m19">United States</div>
         <div className="m20">"It's a really big deal to offer an online MBA that's a real MBA at a price that's achievable.This programe is totally disrupting higher education"</div>
         </div >
         <div className="member3" >
         <div><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/social-proof/coursera-learner-c.png?auto=format%2Ccompress&dpr=1&w=202&h=202&q=40" alt="g1" /></div>
         <div className="m21">Mirela I.</div>
         <div className="m22">IBM Data Science Professional Certificate Alumna</div>
         <div className="m23">Romania</div>
         <div className="m24">"Recruiters saw my Professional Certificate on my LinkedIn profile.During the interview,they told were impressed with skills I learned. I got the job!"</div>
         
         </div >
     </div>

     </section>
     </>

     
    // </div>
  );
}

export default App;
