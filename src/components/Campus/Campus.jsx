import React from 'react';
import './Campus.css';
import { FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Campus = () => {
  return (
    <div className='campus-container'>
      <div className="campus-content">
        <h2 className='campus-heading'>Maximize Your LinkedIn’s Earning Potential with Leeds Pulse</h2>
        <p className='campus-description'>
          Imagine earning passive income from your LinkedIn profile without any hassle. With Leeds Pulse, you have the opportunity to turn your LinkedIn account into a profitable asset, all while ensuring your privacy and security. Our unique platform connects your profile with businesses looking for credible outreach campaigns, giving you the chance to earn money on your own terms.
        </p>

        <p className='campus-description'>
          We offer a simple and secure way for you to monetize your LinkedIn account. Once you're part of Leeds Pulse, we take care of all the connections and outreach with top-tier businesses, so you can sit back and watch your earnings grow. No passwords, no changes to your account—just a seamless income stream.
        </p>
        
        <div className="features">
          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Effortless Passive Earnings</h3>
            <p>
              Turn your LinkedIn profile into an asset that generates income without any extra effort from your side. Leeds Pulse handles everything, ensuring you get paid without compromising your daily LinkedIn activities. Enjoy the benefits of passive earnings while you continue using LinkedIn as usual.
            </p>
          </div>
          
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Trusted Partnerships with Leading Brands</h3>
            <p>
              We connect your profile to verified, trustworthy businesses that are looking for brand outreach. By joining Leeds Pulse, you're partnering with top-tier organizations that value credibility, security, and ethical marketing. These brands only want to work with verified and authentic profiles like yours.
            </p>
          </div>
          
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Maximum Security & Full Control</h3>
            <p>
              Your security and privacy are our highest priority. With Leeds Pulse, you retain full control of your LinkedIn account. There’s no need to worry about sharing sensitive information—our platform ensures that your profile remains secure and your data is never compromised. You can also opt-out at any time if you decide this isn’t for you.
            </p>
          </div>
        </div>
        
        <p className='campus-text'>
          Joining Leeds Pulse isn’t just about earning money—it’s about unlocking the full potential of your LinkedIn profile in a safe and secure environment. Thousands of professionals have already discovered how easy and rewarding it is to monetize their LinkedIn accounts while maintaining complete control. Now, it’s your turn to start earning effortlessly.
        </p>
        
      </div>
    </div>
  );
};

export default Campus;
