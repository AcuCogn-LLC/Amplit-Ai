import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Amplit AI',
  description: 'Privacy Policy for Amplit AI, healthcare-focused AI solutions.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-[#4e5157]">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">Privacy Policy</h1>
        
        <div className="space-y-8 text-base leading-relaxed">
          <p>
            This Privacy Policy describes how <strong>Acucogn LLC DBA Amplit AI</strong> ("we," "us," or "our") collects, uses, discloses, and protects your personal and health information when you interact with our front desk AI system, our website at <a href="https://www.amplit.ai" className="text-brand hover:underline">https://www.amplit.ai</a>, and our SMS, voice, and email communications. This policy complies with the Health Insurance Portability and Accountability Act (HIPAA), the Texas Medical Records Privacy Act, and carrier A2P 10DLC messaging requirements.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <h3 className="font-semibold text-black mt-4 mb-2">Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name, date of birth, address, email address, and mobile phone number</li>
              <li>Appointment history, scheduling preferences, and front desk interaction notes</li>
            </ul>
            
            <h3 className="font-semibold text-black mt-4 mb-2">Protected Health Information (PHI):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information you provide during appointment booking, front desk check-in, or communications with our AI system that relates to your health condition, care, or payment for care</li>
            </ul>

            <h3 className="font-semibold text-black mt-4 mb-2">SMS and Voice Data:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mobile phone numbers provided by you at the time of booking or contact</li>
              <li>SMS message content, delivery status, and opt-in/opt-out records</li>
              <li>Voice call recordings or transcripts, if applicable and disclosed at the time of the call</li>
            </ul>

            <h3 className="font-semibold text-black mt-4 mb-2">Automatically Collected Data:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, device information, and website usage data via cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Treatment, Payment, and Health Care Operations (TPO):</strong> Appointment scheduling, reminders, confirmations, rescheduling, and front desk communications as permitted under HIPAA without separate authorization</li>
              <li><strong>Dentsi / Front Desk AI Operations:</strong> Automated call handling, message routing, appointment management, and patient inquiry responses</li>
              <li><strong>Communications:</strong> SMS reminders, voice calls, and email notifications related to your appointments</li>
              <li><strong>Minimum Necessary Standard:</strong> Our AI system accesses only the PHI strictly necessary for each specific task, in compliance with HIPAA's minimum necessary requirement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How End Users Consent to Receive SMS Messages</h2>
            <p className="mb-4">
              End users opt in to receive SMS messages by visiting <a href="https://www.amplit.ai" className="text-brand hover:underline">https://www.amplit.ai</a>, completing the appointment booking or contact form, entering their mobile phone number, and explicitly checking a consent checkbox that reads:
            </p>
            <blockquote className="border-l-4 border-brand pl-4 italic bg-gray-50 py-2 pr-2 mb-4">
              "I agree to receive SMS messages from Acucogn LLC DBA Amplit AI regarding my appointments and front desk communications. Message and data rates may apply. Reply STOP to opt out."
            </blockquote>
            <p className="mb-4">
              The checkbox is unchecked by default. End users must manually check the box to provide consent. The mobile phone number is provided directly by the end user at the time of booking or contact.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Message content and frequency:</strong> End users receive appointment reminders, confirmation requests, rescheduling notices, and front desk notifications. Message frequency varies but is typically 1–4 messages per appointment cycle. No marketing or promotional content is sent via SMS.</li>
              <li><strong>Opt-out and help:</strong> End users can opt out at any time by replying STOP to any message. Upon opt-out, no further SMS messages will be sent. End users can reply HELP for support and contact information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Mobile Information Sharing — A2P 10DLC Required Disclosure</h2>
            <p className="mb-4">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
            <p>
              All text messaging originator opt-in data and consent records are kept private and will not be shared with any third parties under any circumstances. Mobile phone numbers may be shared only with our SMS service provider (Twilio) strictly for the purpose of delivering messages, and only under confidentiality obligations that prohibit the provider from using the data for any other purpose (A2P 10DLC Privacy Policy Requirements; Aircall Compliance).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. How We Disclose Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>As Permitted or Required by Law:</strong> We may use and disclose PHI for treatment, payment, and health care operations without your written authorization, as permitted under HIPAA. We may disclose PHI when required by law, public health reporting, or court order.</li>
              <li><strong>Business Associates:</strong> We disclose PHI to our AI vendor and SMS provider only under a signed Business Associate Agreement (BAA) that requires the vendor to safeguard your information and prohibits its use for any purpose other than providing services to us. No PHI is shared with any AI vendor or service provider without a BAA in place before any data is shared (Holland & Hart LLP; Censinet).</li>
              <li><strong>With Your Authorization:</strong> We will obtain your written authorization before using or disclosing your PHI for any purpose not described in this policy or permitted by HIPAA, including marketing, sale of your information, or psychotherapy notes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. AI-Specific Data Protections</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Approved AI Tools Only:</strong> Dentsi and our front desk AI services uses only vendor-approved platforms with a signed BAA. No PHI is entered into consumer-grade AI tools (e.g., public ChatGPT) under any circumstances</li>
              <li><strong>Minimum Necessary Access:</strong> Our AI system accesses only the PHI needed for each specific task and is restricted from accessing broader datasets</li>
              <li><strong>De-Identification:</strong> Where feasible, data used for AI training or improvement is de-identified using HIPAA Safe Harbor or Expert Determination methods, and re-identification is prohibited</li>
              <li><strong>Audit Logging:</strong> All AI interactions involving PHI are logged, including user identity, timestamp, data accessed, and AI output. Logs are retained for a minimum of six years</li>
              <li><strong>Human Oversight:</strong> AI-generated content related to clinical matters is reviewed by a qualified staff member before being relied upon or filed in your record</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Data Security</h2>
            <p className="mb-4">We implement the following safeguards to protect your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption:</strong> AES-256 encryption at rest and TLS 1.3 or higher in transit</li>
              <li><strong>Access Controls:</strong> Unique user credentials, role-based access, least-privilege principle, and multi-factor authentication for all systems accessing PHI</li>
              <li><strong>Audit Controls:</strong> Logging of all access to PHI, including AI prompt and response records</li>
              <li><strong>Automatic Logoff:</strong> Systems accessing PHI enforce automatic logoff after inactivity</li>
              <li><strong>Workforce Training:</strong> All workforce members receive HIPAA privacy and security training, including AI-specific data handling guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Your Rights Under HIPAA and Texas Law</h2>
            <p className="mb-4">You have the following rights regarding your PHI:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You may request a copy of your PHI in electronic or paper form</li>
              <li><strong>Right to Amend:</strong> You may request corrections to your PHI</li>
              <li><strong>Right to an Accounting of Disclosures:</strong> You may request a list of certain disclosures we have made of your PHI</li>
              <li><strong>Right to Request Restrictions:</strong> You may request restrictions on certain uses and disclosures of your PHI</li>
              <li><strong>Right to Confidential Communications:</strong> You may request communications by alternative means or at alternative locations</li>
              <li><strong>Right to a Paper Copy of This Notice:</strong> You may request a paper copy of this policy at any time</li>
            </ul>
            <p className="mt-4 mb-4">
              To exercise any of these rights, contact our Privacy Officer at <a href="mailto:info@amplit.ai" className="text-brand hover:underline">info@amplit.ai</a> or <a href="tel:+15169578453" className="text-brand hover:underline">+1 (516) 957-8453</a>.
            </p>
            <p>
              <strong>Texas Medical Records Privacy Act (TMRIA):</strong> Under Texas law, you have additional rights including notification of a breach of your unsecured PHI and the right to request electronic copies of your health information. Texas law prohibits the electronic disclosure of your PHI without your separate express authorization, except as permitted by HIPAA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Your Rights Under CCPA/CPRA (If Applicable to California Residents)</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CPRA), including the right to know, delete, and correct your personal information, and the right to opt out of the sale or sharing of your personal information. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Breach Notification</h2>
            <p>
              In the event of a breach of unsecured PHI, we will notify affected individuals within 60 days of discovery, as required by the HIPAA Breach Notification Rule. Notification will include a description of the breach, the types of information involved, steps you can take to protect yourself, and what we are doing to mitigate the breach. If the breach affects 500 or more individuals, we will also notify the U.S. Department of Health and Human Services and prominent media outlets serving the affected area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Data Retention</h2>
            <p>
              We retain your PHI for the period required by law and professional standards, or as necessary for treatment, payment, and health care operations. SMS opt-in and consent records are retained for the duration required by carrier A2P 10DLC requirements. AI interaction logs involving PHI are retained for a minimum of six years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">12. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect PHI from minors without parental consent. If you believe we have collected information from a minor, please contact our Privacy Officer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on our website with a revised "Last updated" date. Material changes will be communicated to you via SMS, email, or posted notice at our front desk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">14. Contact Information</h2>
            <p className="mb-4">
              <strong>Privacy Officer:</strong> Anjali Shah (Owner)<br/>
              <strong>Email:</strong> <a href="mailto:info@amplit.ai" className="text-brand hover:underline">info@amplit.ai</a><br/>
              <strong>Phone:</strong> <a href="tel:+15169578453" className="text-brand hover:underline">+1 (516) 957-8453</a><br/>
              <strong>Address:</strong> 4100 Spring Valley Rd, Suite 650, Dallas, TX 75244<br/>
              <strong>Website:</strong> <a href="https://www.amplit.ai" className="text-brand hover:underline">https://www.amplit.ai</a>
            </p>
            <p className="mb-2">
              For HIPAA complaints, contact the U.S. Department of Health and Human Services Office for Civil Rights at:
            </p>
            <p>
              <strong>Website:</strong> <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">www.hhs.gov/ocr/privacy/hipaa/complaints</a><br/>
              <strong>Phone:</strong> <a href="tel:18776966775" className="text-brand hover:underline">1-877-696-6775</a>
            </p>
            <p className="mt-4">
              You will not be retaliated against for filing a complaint.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
