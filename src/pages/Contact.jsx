export default function Contact() {
  return (
    <main>
      <section className="inner-hero contact-hero">
        <div>
          <p className="eyebrow">CONTACT</p>

          <h1>
            Let's build something <em>meaningful.</em>
          </h1>

          <p>
            Talk to us about student programmes, school partnerships,
            labs, makerspaces or innovation initiatives.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="contact-grid">

          {/* Company Details */}
          <div>
            <p className="eyebrow dark">
              START A CONVERSATION
            </p>

            <h2>
              Partner with <span>The Makers.</span>
            </h2>

            <div className="company-details">

             
              <div className="contact-detail">
                <h4>Name</h4>
                <p>
                 MR VIVEK GAUTAM
                </p>
              </div> 

              <div className="contact-detail">
                <h4>Email</h4>
                <p>
                  <a href="mailto:vivek@themakers.org.in">
                    vivek@themakers.org.in
                  </a>
                </p>
              </div>

              <div className="contact-detail">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+919871663267">
                    +91 98716 63267
                  </a>
                </p>
              </div>

              <div className="contact-detail">
                <h4>Address</h4>
                <p> <a href="https://share.google/IkfJPzw7y5rxl0Bvx">
                A11, Sector 93B, Noida, Uttar Pradesh 201304  
                </a></p>
              </div>

              
               

            </div>
          </div>


          {/* Contact Form */}
          <form onSubmit={(e) => e.preventDefault()}>

            <input
              type="text"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              placeholder="Email address"
              required
            />

            <input
              type="tel"
              placeholder="Phone number"
            />

            <input
              placeholder="School / Organisation"
            />

            <textarea
              rows="6"
              placeholder="Tell us what you are looking for"
            ></textarea>

            <button
              className="dark-btn"
              type="submit"
            >
              Send Enquiry →
            </button>

          </form>

        </div>
      </section>
    </main>
  );
}