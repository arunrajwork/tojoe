import React, { Component } from 'react'
import Line from './Line'

export default class Introduction extends Component {

    handleClick = () => {


        // Get the Sidebar
        var mySidebar = document.getElementById("mySidebar");

        // Get the DIV with overlay effect
        var overlayBg = document.getElementById("myOverlay");


        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        }
        else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }




    }
    render() {
        return (

            <div className="w3-light-grey">


                <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
                    <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.handleClick} ><i className="fa fa-bars"></i> &nbsp;Menu</button>
                    <span className="w3-bar-item w3-right">Logo</span>
                </div>
                <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "300px" }} id="mySidebar"><br />
                    <div className="w3-container w3-row">
                        <div className="w3-col s4">
                            <img src={('./css/avatar2.png')} className="w3-circle w3-margin-right" alt="some text" style={{ width: "46px" }} />
                        </div>
                        <div className="w3-col s8 w3-bar">
                            <span>Welcome, <strong>Joe</strong></span><br />
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                        </div>
                    </div>
                    <hr />
                    <div className="w3-container">
                        <h5>Dashboard</h5>
                    </div>
                    <div className="w3-bar-block">
                        <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={this.handleClick} title="close menu"><i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu</a>
                        <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>&nbsp; Chart.js</a>
                        <a href="#gen" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>&nbsp; SecondTab</a>

                        <a href="#cou" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>&nbsp; Countries</a><br /><br />
                    </div>
                </nav>




                <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>


                <div className="w3-main" style={{ marginLeft: "300px", marginTop: "43px" }}>


                    <header className="w3-container" style={{ paddingTop: "22px" }}>
                        <h5><b><i className="fa fa-dashboard"></i> Arunraj G</b></h5>
                    </header>

                    <div className="w3-panel">
                        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                            <div className="w3-third">
                               
                                <Line ></Line>
                            </div>
                            <div className="w3-twothird">
                                <h5>Skills</h5>
                                <table className="w3-table w3-striped w3-white">
                                    <tbody><tr>
                                        <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                                        <td>react js</td>
                                        <td><i>50%</i></td>
                                    </tr>
                                        <tr>
                                            <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                                            <td>Express js</td>
                                            <td><i>50%</i></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                                            <td>Node js</td>
                                            <td><i>50%</i></td>
                                        </tr>

                                        <tr>
                                            <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                                            <td>Mongodb/css-html to jsx/sass </td>
                                            <td><i>60%</i></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                                            <td>php</td>
                                            <td><i>80 %</i></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                                            <td>Html/CSS/php</td>
                                            <td><i>90%</i></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                                            <td>Bootstrap3 /PSD TO HTML</td>
                                            <td><i>90%</i></td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>

                    <div className="w3-container" id="gen">
                        <h5>General Stats</h5>
                        <p>New Visitors</p>
                        <div className="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-green" style={{ width: "25%" }}>+25%</div>
                        </div>

                        <p>New Users</p>
                        <div class="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-orange" style={{ width: "50%" }}>50%</div>
                        </div>

                        <p>Bounce Rate</p>
                        <div class="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-red" style={{ width: "75%" }}>75%</div>
                        </div>
                    </div>
                    <hr />

                    <div className="w3-container" id="cou">
                        <h5>Countries</h5>
                        <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tbody><tr>
                                <td>United States</td>
                                <td>65%</td>
                            </tr>
                                <tr>
                                    <td>UK</td>
                                    <td>15.7%</td>
                                </tr>
                                <tr>
                                    <td>Russia</td>
                                    <td>5.6%</td>
                                </tr>
                                <tr>
                                    <td>Spain</td>
                                    <td>2.1%</td>
                                </tr>
                                <tr>
                                    <td>India</td>
                                    <td>1.9%</td>
                                </tr>
                                <tr>
                                    <td>France</td>
                                    <td>1.5%</td>
                                </tr>
                            </tbody></table><br />
                        <button className="w3-button w3-dark-grey">More Countries &nbsp;<i class="fa fa-arrow-right"></i></button>
                    </div>
                    <hr />








                </div>

            </div>



        )
    }
}
