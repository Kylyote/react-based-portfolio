export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label for="nameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label for="emailInput">Your Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                autoComplete="on"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <label for="messageInput">Message</label>
              <textarea
                className="form-control"
                id="messageInput"
                rows="3"
                placeholder="The body of your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p>
            My email address is{' '}
            <a href="mailto: kjocoy@gmail.com">

            </a>
          </p>
        </div>
      </div>
    </div>
  );
}