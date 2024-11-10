import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl ">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 ">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:your-email@example.com?subject=Hello%20Anubhav&body=I%20would%20like%20to%20connect%20with%20you." className="border-b hover">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
