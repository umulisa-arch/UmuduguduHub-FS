import "./Announcement.css";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function Annoucement() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [userType, setUserType] = useState("recipient");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [msgStatus, setMsgStatus] = useState(null);

  const msg = msgStatus === "success" ? "Message sent" : "Message failed";

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all fields are filled
    if (userType === "recipient" || title === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    const data = { userType, title, message };
    fetch("http://localhost:4000/api/UH/v1/citizen/sms/announcement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setMsgStatus("success");

        // reset form
        setUserType("recipient");
        setTitle("");
        setMessage("");
        setTimeout(() => {
          setMsgStatus(null);
        }, 3000);
      } else {
        setMsgStatus("fail");
      }
    });
  };

  return (
    <>
      {msgStatus !== null && (
        <div className={msgStatus === "success" ? "msg-sent" : "msg-fail"}>
          {msg}
        </div>
      )}
      <div className="div1announce">
        <h2 data-aos="fade-right" className="h1Announce">
          Annoucement
        </h2>
        <form data-aos="fade-up">
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="recipient" selected>
              Choose
            </option>
            <option value="citizen">Citizen</option>
            <option value="user">User</option>
          </select>
          <br /> <br />
          <input
            type="text"
            placeholder="title of message"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br /> <br />
          <textarea
            name="Message"
            id="textmessage"
            cols="30"
            rows="10"
            placeholder="Type your messsage here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <br />
          <br />
          <button
            className="btnmessage"
            name="sendMessage"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
export default Annoucement;
