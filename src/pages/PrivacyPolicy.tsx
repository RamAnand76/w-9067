
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>

            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>Last updated October 21, 2025</p>

              <p>
                This Privacy Notice for Gobright Solutions Private Limited (doing business as GoBright) ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you: - Download and use our mobile application (GoBright), or any other application of ours that links to this Privacy Notice - Engage with us in other related ways, including any sales, marketing, or events Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at hello@gobright.co.in.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">SUMMARY OF KEY POINTS</h2>
              <p>
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>What personal information do we process?</li>
                <li>Do we process any sensitive personal information?</li>
                <li>Do we collect any information from third parties?</li>
                <li>How do we process your information?</li>
                <li>In what situations and with which parties do we share personal information?</li>
                <li>How do we keep your information safe?</li>
                <li>What are your rights?</li>
                <li>How do you exercise your rights?</li>
                <li>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>WHAT INFORMATION DO WE COLLECT?</li>
                <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                <li>PRE-EXISTING GARMENT DAMAGE DISCLAIMER</li>
                <li>DATA RETENTION</li>
                <li>INTERNAL PRIVACY COMPLIANCE CONTACT</li>
                <li>VENDOR AND CUSTOMER RESPONSIBILITIES</li>
                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              </ol>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Personal information you disclose to us</h3>
              <p>
                <strong>In Short:</strong> We collect personal information that you provide to us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses, mailing addresses, contact preferences, billing addresses, contact or authentication data.
              </p>
              <p>
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
              <p>
                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay. You may find their privacy notice link(s) here : https://razorpay.com/privacy/.
              </p>
              <p>
                <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                <li><strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
                <li><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
              </ul>
              <p>
                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Information automatically collected</h3>
              <p>
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.Like many businesses, we also collect information through cookies and similar technologies.
              </p>
              <p>The information we collect includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
                  <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address(or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                  <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
              </ul>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Google API</h3>
              <p>
                  Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p>
                  <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                  <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
                  <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                  <li>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                  <li>To fulfil and manage your orders. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</li>
                  <li>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below.</li>
                  <li>To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
                  <li>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                  <li>To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p>
                  <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties. We may need to share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device ('cache') your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</li>
                  <li><strong>Offer Wall.</strong> Our application(s) may display a third-party hosted 'offer wall'. Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p>
                  <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services.
              </p>
              <p>
                Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
              </p>
              <p>
                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Google Analytics</h3>
              <p>
                  We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p>
                  <strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p>
                  <strong>In Short:</strong> We aim to protect your personal information through a system of organisational and technical security measures. We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p>
                  <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence. Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <p>
                  <strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by Users can unsubscribe from marketing and promotional communications by managing their preferences in the GoBright App settings., or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
              </p>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Account Information</h3>
              <p>
                  If you would at any time like to review or change the information in your account or terminate your account, you can: Log in to your account settings and update your user account.
              </p>
              <p>
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
              </p>
              <p>
                  <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
              </p>
              <p>
                  If you have questions or comments about your privacy rights, you may email us at hello@gobright.co.in.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p>
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">9. PRE-EXISTING GARMENT DAMAGE DISCLAIMER</h2>
              <p>
                  GoBright is not responsible for any damage, stains, or defects that existed in the garment prior to being submitted for laundry service.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">10. DATA RETENTION</h2>
              <p>
                  User and vendor data, including location and order information, will be stored only as long as necessary to process the order and fulfill legal obligations
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">11. INTERNAL PRIVACY COMPLIANCE CONTACT</h2>
              <p>
                  While GoBright does not have a formally appointed Data Protection Officer (DPO), we have designated an internal team member responsible for managing privacy and data protection matters. Contact: hello@gobright.co.in
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">12. VENDOR AND CUSTOMER RESPONSIBILITIES</h2>
              <p>
                  Customers must provide accurate information when placing orders. Vendors must report any pre-existing garment defects and provide services according to agreed standards.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p>
                  <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                  If you have questions or comments about this notice, you may email us at hello@gobright.co.in or contact us by post at:
              </p>
              <p>
                Gobright solutions Private Limited<br/>
                Bose Nagar Road<br/>
                Ernakulam<br/>
                Ernakulam, Kerala 682020<br/>
                India
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
export default PrivacyPolicy;

    