
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TermsAndConditions = () => {
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

            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">GoBright – Terms & Conditions</h1>

            <div className="text-gray-600 dark:text-gray-300 space-y-6">
              <p>Last Updated: October 25, 2025</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">1. Agreement</h2>
              <p>By using the GoBright app or any related services, you confirm that you have read and agreed to these Terms & Conditions. If you do not agree, please stop using the service immediately.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">2. Company Details</h2>
              <p>
                <strong>GoBright Solutions Private Limited</strong><br />
                Bose Nagar Road, Ernakulam, Kerala – 682020<br />
                Phone: <strong>9496763260</strong><br />
                Email: <a href="mailto:hello@gobright.co.in" className="text-teal-600 dark:text-teal-400 hover:underline">hello@gobright.co.in</a>
              </p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">3. Age Requirement</h2>
              <p>The service is intended for users aged <strong>13 years or above</strong>. Minors must use the service under parent/guardian supervision.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">4. Intellectual Property</h2>
              <p>All content, logos, designs, text, graphics, and software belong to GoBright. You may access and use the content <strong>only for personal or business purposes</strong>. Copying, selling, reproducing, or distributing the content without permission is not allowed.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">5. User Responsibilities</h2>
              <p>By using GoBright, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your account details are accurate.</li>
                <li>You won’t use bots, scrapers, or automated systems.</li>
                <li>You will not use the platform for illegal activities.</li>
                <li>You won’t misuse or attempt to manipulate any system, order, pricing, or delivery.</li>
                <li>You won’t upload harmful, offensive, or copyrighted content.</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">6. Account Registration</h2>
              <p>You must keep your password confidential. GoBright can remove or change usernames that are inappropriate.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">7. Purchases & Payments</h2>
              <p>Accepted payment methods include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visa, Mastercard, American Express, Discover</li>
                <li>PayPal</li>
                <li>UPI, PhonePe</li>
                <li>Net Banking</li>
                <li>Debit Cards</li>
              </ul>
              <p>All payments must be made in <strong>INR</strong>. All sales are <strong>final</strong> — no refunds.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">8. Prohibited Activities</h2>
              <p>You cannot:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scrape or collect data without permission</li>
                <li>Try to hack, bypass, or manipulate systems</li>
                <li>Harass or harm others</li>
                <li>Upload viruses, spam, or unauthorized content</li>
                <li>Post misleading or illegal content</li>
                <li>Use GoBright for commercial activities without approval</li>
                <li>Delete your account if you have pending orders</li>
              </ul>
              <h3 className="text-xl font-semibold pt-4 pb-2 text-gray-800 dark:text-gray-100">Account Deletion Rules</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Users:</strong> Can delete their account only after completing all pending orders.</li>
                <li><strong>Vendors:</strong> Must return all customer items and finish all active orders before deleting their account.</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">9. User Contributions (Posts/Uploads)</h2>
              <p>If you upload text, photos, or any content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You confirm you own the content</li>
                <li>You agree that GoBright can use, publish, and display it</li>
                <li>You cannot post harmful, abusive, false, or illegal content</li>
                <li>GoBright may remove any content that violates guidelines</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">10. Reviews</h2>
              <p>Reviews must be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Honest</li>
                <li>Based on real experience</li>
                <li>Free from hate speech, profanity, discrimination, or false claims</li>
                <li>Not influenced by competitors</li>
              </ul>
              <p>GoBright may remove inappropriate reviews.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">11. Mobile App License</h2>
              <p>You are given a limited license to install and use the GoBright app. You cannot:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineer or modify the app</li>
                <li>Use the app for commercial resale</li>
                <li>Use the app to send automated queries</li>
                <li>Copy or distribute app code</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">12. Privacy</h2>
              <p>Your usage of GoBright means you accept its Privacy Policy. Data may be processed in <strong>India</strong>, even if you belong to another region.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">13. SMS Text Messaging (MSG91)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You consent to receive SMS updates and offers</li>
                <li>You can stop receiving messages by replying <strong>STOP</strong></li>
                <li>Data/SMS charges may apply</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">14. Limitations of Liability</h2>
              <p>GoBright is <strong>not responsible for</strong>:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Errors, inaccuracies, or technical issues</li>
                <li>Service interruptions</li>
                <li>Loss of data</li>
                <li>Damage caused by third-party services</li>
                <li>User mistakes or misuse</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">15. Pre-existing Damage</h2>
              <p>GoBright is <strong>not responsible</strong> for stains, tears, or defects that existed before pickup.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">16. Dry Cleaning Exceptions</h2>
              <p>GoBright may refuse garments that are:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Severely damaged</li>
                <li>Contaminated</li>
                <li>Not suitable for dry cleaning</li>
              </ul>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">17. Service Guarantee</h2>
              <p>Service-related issues must be reported <strong>within 24 hours</strong> of receiving garments.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">18. Force Majeure</h2>
              <p>GoBright is not responsible for delays caused by factors outside our control (e.g., natural disasters, power failures).</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">19. Changes to Terms</h2>
              <p>GoBright may update the Terms & Conditions anytime. Continued use means you accept the latest terms.</p>

              <h2 className="text-2xl font-semibold pt-6 pb-2 text-gray-900 dark:text-white">20. Contact</h2>
              <p>For support or complaints:</p>
              <p>
                <strong>GoBright Solutions Private Limited</strong><br />
                Bose Nagar Road, Ernakulam, Kerala – 682020<br />
                Phone: <strong>9496763260</strong><br />
                Email: <a href="mailto:hello@gobright.co.in" className="text-teal-600 dark:text-teal-400 hover:underline">hello@gobright.co.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
export default TermsAndConditions;
