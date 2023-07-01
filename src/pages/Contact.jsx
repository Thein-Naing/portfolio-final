import './Contact.css';

const Contact = () => {
  return (
    <section>
      <h6>Contact</h6>
      <br />
      <ul>
        {/* <li>
        <i className="fa fa-link" aria-hidden="true"></i>
          <a href="https://www.theinnaing.com/">www.theinnaing.com</a>
        </li> */}
        <li>
          <a href="https://github.com/Thein-Naing">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.linkedin.com/in/thein-naing-394a3b52/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <br />
        <br />
        <li>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <br />
          theinnaing0908@gmail.com
        </li>
        <br />
        <li>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <br />
          (+65) 9784 5693
        </li>
      </ul>
    </section>
  );
};

export default Contact;
