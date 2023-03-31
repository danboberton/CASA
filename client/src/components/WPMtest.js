import React, {useEffect, useRef, useState} from "react";
import * as PropTypes from "prop-types";

export default function WPMtest(props){
    function DisplayWPM(props) {
        return(
            <p>Your WPM: {props.wpm}</p>
        )
    }

    DisplayWPM.propTypes = {wpm: PropTypes.number};
    const [text, setText] = useState(props.text);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [inputStyle, setInputStyle] = useState({});
    const inputRef = useRef(null);

    const currentSentence = text.split(".")[currentIndex];
    const remainingText = text.slice(
        currentSentence.length + 1,
        text.length
    );

    useEffect(()=>{
        props.phaseData.wpm = wpm;
    },[wpm])

    const handleKeyPress = (event) => {
        if (startTime === null) {
            setStartTime(new Date().getTime());
        }
        if (event.target.value === currentSentence) {
            if (remainingText.trim().length === 0) {
                setEndTime(new Date().getTime());
            } else {
                setCurrentIndex(currentIndex + 1);
                event.target.value = "";
            }
        } else if (currentSentence.startsWith(event.target.value)) {
            setInputStyle({});
        } else {
            setInputStyle({ backgroundColor: "#ffcccc" });
          }
    };

    const handleRestart = () => {
        setText("The quick brown fox jumps over the lazy dog.");
        setCurrentIndex(0);
        setStartTime(null);
        setEndTime(null);
        setWpm(0);
        inputRef.current.value = "";
    };

    if (startTime !== null && endTime !== null && wpm === 0) {
        const totalTime = (endTime - startTime) / 1000;
        const totalCorrectWords = text.split(" ").filter((word, index) => {
            return index !== text.split(" ").length - 1 && word === inputRef.current.value.split(" ")[index];}).length;
        setWpm(Math.round((totalCorrectWords / totalTime) * 60));
    }

    return (
        <div className={"wpm-test"}>
            <p><b>{currentSentence}</b></p>
            <textarea placeholder="Type the above sentence as fast and as accurately as possible" rows={3} cols={50} ref={inputRef} onKeyUp={handleKeyPress} style={inputStyle} />
            {startTime !== null && endTime === null && (
                <p>Typing...</p>
            )}
            {startTime !== null && endTime !== null && (
                <div>
                    <DisplayWPM wpm={wpm}/>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
        </div>
    );
}