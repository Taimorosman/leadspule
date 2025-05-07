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

        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Responsibilities</h2>
      <ol className="list-decimal pl-6 space-y-4 text-gray-800">
        <li>
          Unauthorized Access or Changes:
          You must not change the password, authenticator, or login credentials
          of the account without informing the account holder (client).
          <ul className="list-disc pl-6 mt-2">
            <li>
              If such changes are made without prior notice, you will be held
              fully responsible..
            </li>
            <li>
              You agree to a 3-day suspension without pay and
              will be available to compensate for 3 days of salary












































































































































































































































































































































































































































































































































































































              
            </li>
          </ul>
        </li>

        <li>
          <strong>Re-accessing the Account:</strong> <br />
          If you intend to regain access to the account for any reason, you are
          required to <strong>notify the account holder at least 7 days in advance</strong>.
        </li>

        <li>
          <strong>Account Rule Compliance:</strong> <br />
          Any violation of the above-mentioned rules will make you solely
          responsible for any resulting consequences.
        </li>

        <li>
          <strong>Connection Activity:</strong> <br />
          You confirm that you have <strong>not created any new connections</strong> 
          (such as leads, client links, or campaigns) in the <strong>last 7 days</strong>.
        </li>

        <li>
          <strong>Account Tenure:</strong> <br />
          You acknowledge that the account under discussion is <strong>more than 1 year old</strong>.
        </li>

        <li>
          <strong>OTP, Password, and Authenticator Responsibility:</strong> <br />
          If you log in to the account, change the password, authenticator, or perform 
          any activity without informing the account holder, this will be considered a 
          serious violation, and you will be held fully responsible for the consequences.
          <br /><br />
          You are expected to carefully observe any OTP (One-Time Password) received 
          when the account holder attempts to log in. If the OTP is required for changing 
          the password, email, phone number, or authenticator — you must understand that:
          <ul className="list-disc pl-6 mt-2">
            <li>We will never ask you to share or use the OTP for such changes.</li>
            <li>It is solely your responsibility to verify the purpose of the OTP.</li>
            <li>
              After submitting your account, you are fully responsible for its access.
            </li>
            <li>
              We clearly inform you not to share OTPs for changing sensitive settings like 
              password, email, phone number, or authenticator.
            </li>
          </ul>
        </li>
      </ol>

      <div className="mt-8">
        <p className="text-gray-600">Signature: ________________________</p>
        <p className="text-gray-600 mt-2">Date: ___________________________</p>
      </div>
    </div>
<br />
<br />
<div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
  <h3 className="text-xl font-semibold mb-4">Our Responsibilities</h3>

  <ul className="list-disc text-gray-800 space-y-1 leading-snug">
  <li>
    We will not change your permanent access or take control of your account.
  </li>
  <li>
    Your account reputation and privacy are fully protected under our responsibility.
  </li>
  <li>
    We will always follow back from your account when required, as per agreement.
  </li>
  <li>
    We ensure responsible and on-time payments, following agreed timelines.
  </li>
  <li>
    We will keep you informed about all important updates related to your account and our work.
  </li>
    We always stay committed to our promises, unless any unexpected or major challenge occurs — such as: <br />
    <ul className="list-disc ">
      <li>Network issues</li>
      <li>Client-side company delays or responses</li>
      <li>Digital system disruptions</li>
      <li>Natural or unforeseen technical problems</li>
    </ul>
</ul>


  <div className="mt-8">
    <p className="text-gray-600">Authorized By: ________________________</p>
    <p className="text-gray-600 mt-2">Date: ___________________________</p>
  </div>
</div>

       
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
