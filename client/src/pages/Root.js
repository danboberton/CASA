import '../App.css';
import React, {useEffect, useState} from "react";
import getExperimentCount from "../api/getExperimentCount";

export default function Root(props) {
    const [count, setCount] = useState(undefined)

    useEffect(()=>{
        getExperimentCount()
            .then((response)=>{
                setCount(response.count)
                console.log(response)
            });
    }, [])

  return (
    <div className="content">
        <h1>Experiment Portal Home</h1>
        <p>Number of experiments already performed:</p>
        <p>{count ? count : "Hmmm... Maybe you're not connected to the server..."}</p>
    </div>
  );
}

