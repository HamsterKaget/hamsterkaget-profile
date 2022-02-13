import React from "react";
import '../App.scss'

class Workbench extends React.Component {
    render() {
        return (

            <div className="workbench-wrapper">
                <div className="title">
                    <h3>My WorkSpace</h3>
                    <hr />
                </div>
                <div className="workbench-container">
                    <div className="label-wrapper">
                        <div className="label os">
                            
                            <div className="label-container">
                                <i class="fa-solid fa-gear "></i>
                                <p>windows 10 pro 64-bit</p>
                            </div>
                            
                        
                        </div>

                        <div className="label processor">
                            <div className="label-container">
                                <i class="fa-solid fa-microchip "></i>
                                <p>Intel Core i7 CPU L 640 @ 2.13Ghz</p>
                            </div>
                        </div>
                        
                        <div className="label laptop">
                            <div className="label-container">
                                <i class="fa-solid fa-laptop  "></i>
                                <p>HP Elitebook 2540p - 6 / 512 GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Workbench;