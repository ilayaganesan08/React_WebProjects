import { useState } from "react";
import React  from "react";

const userData = [
    {
        name: "Abi",
        city: "Chennai",
        discription: "Front-End Developer",
        skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript"],
        online: true,
        profile:"/images (1).jfif",

    },
    {
        name: "Abinesh",
        city: "Chennai",
        discription: "Full-Stack Developer",
        skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript",],
        online: true,
        profile: "/images.jfif",

    },
    {
        name: "Arun",
        city: "Cuddalore",
        discription: "UI/UX Designer",
        skills: ["UI/UX", "XML", "Python", "HTML", "CSS", "JavaScript"],
        online: false,
        profile: "/images1.jpg",

    },

]

function User(props) {
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [message, setMessage] = useState("");
    const [isFollowing, setIsFollowing] = useState(true);
    // const [allowMessage, setallowMessage] = useState(false)
    const handleSendMessage = () => {
        setShowMessageBox(false);
        alert(`Message sent to ${props.name}: ${message}`);
        setMessage("");
    };

    const handlefollow = ()=>{
        setIsFollowing(!isFollowing)
    }

    const handleMessageClick = () => {
        if (isFollowing) {
            setShowMessageBox(true);
        } else {
            alert("You need to follow this user to send a message.");
        }
    };

    return (
        <div id="card-container">
            <span className={props.online ? "pro-state online" : "pro-state offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="profile1" className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.discription}</p>
            <div className="buttons">
                <button className="message" onClick={handleMessageClick}>Message</button>
                <button className={isFollowing ? "following" : "follow"} onClick={handlefollow}>{isFollowing? "Following" : "Follow"}</button>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    {props.skills.map((skills, index) => (
                        <li key={index}>{skills}</li>
                    ))}
                </ul>
            </div>
            {showMessageBox && (
                <div className="message-box">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`Write a message to ${props.name}`}
                    ></textarea>
                    <div className="message-buttons">
                        <button onClick={handleSendMessage}>Send</button>
                        <button onClick={() => setShowMessageBox(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}
const Cards = () => {
    return (
        <>
        {
            userData.map((user, index) => (
                <User key={index}
                name={user.name}
                city={user.city}
                discription={user.discription}
                skills={user.skills}
                online={user.online}
                profile={user.profile}
                />
            ))
        }
            
        </>
    )
}



export default Cards;