import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program-container max-w-screen-xl mx-auto px-6 py-12 text-gray-800">
        
        {/* Left Section - Key Information about Protection */}
        <div className="left-section w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Protection Is Our Passion.
          </h2>
          <p className="mb-6 text-lg font-medium leading-relaxed">
            At Leeds Pulse, your trust is our most valuable asset. We ensure that your LinkedIn profile is not only used responsibly but also with the highest level of security and full transparency. 
            <br />
            <br />
            When you allow us to manage your LinkedIn profile, we are committed to ensuring that you earn passive income with minimal effort, all while safeguarding your account information.
          </p>
          
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li>
              <strong>No Credential Changes:</strong> Rest assured that your email address, password, and other login credentials remain unchanged. We will not alter any of your personal login details.
            </li>
            <li>
              <strong>Full Account Integrity:</strong> Your account will only be used for the activities that we’ve mutually agreed upon, ensuring that your LinkedIn profile’s integrity is maintained.
            </li>
            <li>
              <strong>Privacy-Centric:</strong> Your privacy is a top priority. We will never share your personal information or data with any third parties without your explicit consent.
            </li>
            <li>
              <strong>Secure Earnings:</strong> Our system ensures timely and transparent payouts. You’ll always be able to track your earnings and see exactly when payments are made.
            </li>
          </ul>
        </div>

        {/* Right Section - Helpful Links to Manage LinkedIn Account */}
        <div className="right-section w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Helpful Links for Account Management
          </h2>
          <div className="space-y-6 text-blue-700 font-semibold">
            
            <div>
              🔁 
              <a 
                href="https://www.linkedin.com/uas/request-password-reset" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-bold"
              >
                Reset LinkedIn Password
              </a>
              <br />
              <span className="text-gray-600 text-sm">
                If you've forgotten your LinkedIn password or need to change it for security reasons, follow this link to reset your password.
              </span>
            </div>
            
            <div>
              📩 
              <a 
                href="https://www.linkedin.com/help/linkedin/ask/ts-f-appeal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-bold"
              >
                Submit an Appeal
              </a>
              <br />
              <span className="text-gray-600 text-sm">
                If your LinkedIn account has been restricted or you face any issues, you can submit an appeal to LinkedIn directly through this link.
              </span>
            </div>
            
            <div>
              🚫 
              <a 
                href="https://www.linkedin.com/help/linkedin/ask/TS-RHA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-bold"
              >
                Account Remains Restricted
              </a>
              <br />
              <span className="text-gray-600 text-sm">
                In case your account remains restricted, you can find detailed instructions on how to resolve the issue using LinkedIn’s help center.
              </span>
            </div>
            
            <div>
              ❌ 
              <a 
                href="https://lnkd.in/gfTvtQAY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-bold"
              >
                Permanent Restriction Details
              </a>
              <br />
              <span className="text-gray-600 text-sm">
                Learn more about the permanent restrictions placed on LinkedIn accounts and the steps needed to prevent such issues.
              </span>
            </div>
            
            <div>
              💬 
              <a 
                href="https://www.facebook.com/LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-bold"
              >
                Contact LinkedIn on Facebook
              </a>
              <br />
              <span className="text-gray-600 text-sm">
                For any immediate concerns or queries about your LinkedIn account, you can reach out to LinkedIn through their official Facebook page.
              </span>
            </div>
          </div>
        </div>

        {/* Vision and Mission Sections */}
        <div className="vision-mission mt-12">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Our Vision & Mission
          </h2>

          {/* Vision */}
          <div className="vision mb-8">
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-lg leading-relaxed">
              Our vision is to create a platform where professionals can seamlessly generate passive income while maintaining complete control over their LinkedIn profiles. We aim to revolutionize the way professionals engage with online opportunities, ensuring privacy, security, and transparency at every step.
            </p>
          </div>

          {/* Mission */}
          <div className="mission">
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to empower individuals by providing them with an innovative way to monetize their LinkedIn presence without compromising their personal information or account security. We are committed to fostering trust and delivering transparent, sustainable earnings for our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
