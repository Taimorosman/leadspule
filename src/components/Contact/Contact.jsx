import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "88eb4045-d1f6-465c-b900-1ac908bbaea2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
  return (
    <div className='contact'>
        <div className="contact-col">
    <h3>Send us a meesage <img src={msg_icon} alt="" /></h3>
    <p>Have questions or need more details? Reach out to our team for support and guidance. We’re here to help.

</p>
    <ul>
        <li><img src={mail_icon} alt="" />leadspuls@gmail.com</li>
 
    </ul>
    <br />
    <br />
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800">
      {/* Privacy Policy Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4 text-lg font-medium">Your Privacy, Our Priority</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>We do not change your account credentials, including email.</li>
          <li>Your LinkedIn account remains fully yours and is only used as agreed.</li>
          <li>Your personal information is stored securely and used solely for verification.</li>
          <li>We maintain full confidentiality and do not share your data externally.</li>
          <li>Payment delays may occur only due to natural issues like internet disruption, but we always ensure payment is made responsibly.</li>
        </ul>
      </section>

      {/* Terms and Conditions Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
        <p className="mb-4 text-lg font-medium">Clear Terms. Mutual Responsibility.</p>
<br />
        <h3 className="text-xl font-semibold mb-2">Account Requirements:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Account must be at least 1 year old.</li>
          <li>Must have 100+ real connections.</li>
          <li>No new connection activity in the past 7 days before submission.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Your Responsibilities:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Do not log in to your account during the rental period.</li>
          <li>Notify us 7 days in advance if you want to reclaim your account.</li>
          <li>Inform us before accessing or changing anything on your account.</li>
          <li>You voluntarily rent your account and accept our usage terms.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Our Responsibilities:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>We never change your access or take permanent control of your account by adding the Authenticate or block your account..</li>
          <li>Your account reputation and privacy are protected.</li>
          <li>We ensure responsible and timely payments.</li>
        </ul>

       
      </section>
    </div>
        </div>
      <div className="contact-col">
    <ContactForm/>
      </div>
      
    </div>
  )
}

export default Contact
