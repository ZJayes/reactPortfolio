import React from 'react';
import PWSS from '../img/PWSS.png'
import WDSSS from '../img/WDSSS.png'
import WGSS from '../img/WGSS.png'
import MSS from '../img/MSS.png'
import WTSS from '../img/WTSS.png'


function Portfolio() {
    return (

        <div className="card" style={{ width: "100rem",  }} >

            <div className="card-body">
                <h5 className="card-title">Portfolio</h5>




            </div>

            <div className="container">

                <div className="row">
                    <div className="col-sm-6" >
                        <a href="https://mokulling.github.io/wikigames/" >
                            <img src={WGSS} style={{ width: "25rem" }} alt="WikiGames" className="card-img-top" />
                        </a>
                    </div>

                    <div className="col-sm-6">
                        <a href="https://zjayes.github.io/Password-Generator/" >
                            <img src={PWSS} style={{ width: "25rem" }} className="card-img-top" alt="Password Generator" />
                        </a>
                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://zjayes.github.io/Work-Day-Scheduler/" >
                            <img src={WDSSS} style={{ width: "25rem" }} className="card-img-top" alt="Work Day Scheduler" />
                        </a>

                    </div>
                    <div className="col-sm-6">
                            <a href="https://calm-castle-04071.herokuapp.com/" >
                                <img src={MSS} style={{ width: "25rem" }} className="card-img-top" alt="Moody" />
                            </a>

                    </div>
                </div>
                    
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="https://zjayes.github.io/weatherapp/" >
                                <img src={WTSS} style={{ width: "25rem" }} className="card-img-top" alt="WeatherTracker" />
                            </a>

                        </div>
                            
                    </div>

                   



                



            </div>
        </div>
    );
}

export default Portfolio;