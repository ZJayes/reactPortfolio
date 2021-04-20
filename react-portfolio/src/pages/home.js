import React from 'react'
import ZacPic from '../img/ZacPic.jpg'

const Home = () => (
  <div style={{textAlign: "center"}} className="container ">
    <section id="" className="mb-5">
      <div className="card bg-light mb-3 ml-5 mr-5">
        <div className="card-header bg-dark text-light">
          <h1>About Me</h1>
        </div>
        <div className="card-body ">
        <img src={ZacPic} style={{ width: "25rem" }} alt="Propic" className="card-img-top" />
          
          <p  className="card-text ">
          Hello, my name is Zachary Jayes.  I am currently 22 years old and I am a driver for FedEx.  I am currently enrolled in the Northwestern Coding Bootcamp.  I am looking to find a job in the web development industry after I complete this course.  Some hobbies of mine are playing sports and streaming video games on twitch with my friends.
          </p>
          <hr></hr>
          <a href="https://www.linkedin.com/in/zachary-jayes-a78519187/" >LinkedIn</a>
          <hr></hr>
          <a href="https://github.com/ZJayes" >Github</a>
        </div>
      </div>
    </section>

  </div>
)

export default Home