const Contact = () => {
  return (
    <>
      <div className="Contact-conatiner">
        <div className="Personal-details">
          <h1>Get In Touch</h1>
          <h3> Phone: +91 63353788107</h3>
          <h3> Email: mahalekalpesh101299@gmail.com </h3>
          <h3> Address: A-243, Millenium park,Dindoli,Surat</h3>
        </div>
        <div className="details-conatiner">
          <form className="form">
            <input className="Search-name" placeholder="Your-Name"></input>
            <br></br>
            <br></br>
            <input className="Search-email" placeholder="Your-Email"></input>
            <br></br>
            <input
              className="Search-phone"
              placeholder="Your-Phone"
              type="number"
            ></input>{" "}
            <br></br>
            <input
              className="Search-message"
              placeholder="Your-Message"
              size="100px"
            ></input>
            <br></br>
            <button className="click-message">Send message</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
