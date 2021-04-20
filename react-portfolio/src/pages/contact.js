import React from 'react';

function Contact() {
    return (
        <div className="container">
        <div className="card bg-light mb-3 ">
          <div className="card-header bg-light text-dark">
            <h1>Contact Me: </h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" ></input>
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label >Name</label>
                <input  className="form-control" ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Additional Information</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    </div>
    );
  }
  
  export default Contact;