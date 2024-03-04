import React from "react";

export default function ContactUs() {
  return (
    <>
      section class="contact_us"&gt;
      <div className="top">
        <h1>CONTACT US!</h1>
      </div>
      <div className="map_3840px_screen">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.857296902104!2d85.3184222!3d27.6874975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1916cbe787fd%3A0x8e496e30f0dfb9ef!2sAll%20Nepal%20Trade%20Center!5e0!3m2!1sen!2snp!4v1698407136865!5m2!1sen!2snp"
          width="100%"
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        &gt;
      </div>
      <div className="contact_us_body">
        <form
          className="contact_form"
          name="myForm"
          onsubmit="return submitform()"
          action="connect.php"
          method="post"
        >
          <label>First Name:</label>
          <input
            type="text"
            className="input_fields_normal"
            name="firstName"
            placeholder="First Name"
            maxLength={20}
            oninput="updateCharacterCount(this)"
          />
          <br />
          <label>Middle Name:</label>
          <input
            type="text"
            className="input_fields_normal"
            name="middleName"
            placeholder="Middle Name"
            maxLength={20}
            oninput="updateCharacterCount(this)"
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            className="input_fields_normal"
            name="lastName"
            placeholder="Last Name"
            maxLength={16}
            oninput="updateCharacterCount(this)"
          />
          <br />
          <label>Email Address:</label>
          <input
            type="email"
            className="input_fields_normal"
            name="email"
            placeholder="Email"
          />
          <br />
          <label>Contact No:</label>
          <input
            type="tel"
            className="input_fields_normal"
            name="contactNo"
            placeholder="Contact Number (optional)"
            maxLength={12}
            oninput="updateCharacterCount(this)"
          />
          <br />
          <label>Message:</label>
          <textarea
            className="input_fields_message"
            name="message"
            cols={40}
            rows={5}
            placeholder="Message"
            maxLength={500}
            oninput="updateCharacterCount(this)"
            defaultValue={""}
          />
          <span id="charCount">500/500</span>
          <br />
          <input
            type="submit"
            className="submit_from_contact_us contact_us_btns"
            defaultValue="Submit"
          />
        </form>
        <div className="contact_us_address_and_phoneNo">
          <h1>Contact Us</h1>
          Phone Number:{" "}
          <a href="tel:+977-9801912091" className="phone-number">
            +977-9801912091
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:allnepaltradecenter.com.np@gmail.com"
            className="emailNow"
          >
            allnepaltradecenter.com.np@gmail.com
          </a>
          <br />
          Address: <br />
          <a href="tel:+977-9801912091">
            <button className="contact_us_btns">Call Now</button>
          </a>
          <a href="mailto:allnepaltradecenter.com.np@gmail.com">
            <button className="contact_us_btns">Email Now</button>
          </a>
          <br />
          <a href="https://maps.app.goo.gl/4mH8she2o7GkB1639" target="_blank">
            <button className="contact_us_btns for-find-us">Find Us</button>
          </a>
        </div>
      </div>
    </>
  );
}
