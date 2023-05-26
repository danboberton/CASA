import '../App.css';
import React, {useEffect, useState} from "react";
import Timer from "../components/Timer";
import getExperimentCount from "../api/getExperimentCount";

export default function Root(props) {
    const [count, setCount] = useState(undefined)

    useEffect(()=>{
        getExperimentCount()
            .then((response)=>{
                setCount(response.count)
            });
    }, [])

    const debugGuard = ()=>{
        if(props.context.debug){
            return(
                <div>
                    <p>Number of experiments already performed:</p>
                    <p>{count !== undefined ? count : "Hmmm... Maybe you're not connected to the server..."}</p>
                </div>
            )
        } else {
            return null
        }
    }

  return (
    <div className="content">
        <h1>Welcome to <br/> Context Awareness Sound Alerts (CASA)!</h1>
        <p className={"text-body"}>Thank you for taking the time today to be a participant for CASA.</p>
        <p className={"text-body"}>
            During this experiment you will be taking a typing test!
            At the same time, you will hear sound alerts while also hearing a background sound environment. You are asked to click a button to acknowledge if the sound has been heard.
            You will be completing <span className={"number"}>3</span>  groups of various background sounds and alert sounds.
            In between each group of sound alerts, you will have a timed break.
        </p>
        <p className={"text-body"}>When you are ready, please click <strong>Continue</strong> to complete the demographics survey, then you will have a chance to go through an example before beginning the experiment.</p>
        {debugGuard()}
    </div>
  );
}

