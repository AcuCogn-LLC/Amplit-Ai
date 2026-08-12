import React from 'react';

export const metadata = {
  title: 'Terms and Conditions | Amplit AI',
  description: 'Terms and Conditions for Amplit AI, healthcare-focused AI solutions.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-[#4e5157]">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">TERMS AND CONDITIONS</h1>
        
        <div className="space-y-8 text-base leading-relaxed">
          <p><strong>Last Updated: August 13, 2026</strong></p>
          
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the websites, software, products, and services provided by <strong>Acucogn LLC d/b/a Amplit AI</strong> ("Amplit AI," "we," "us," or "our"), including Dentsi, our AI front-desk product for healthcare practices.
          </p>

          <p>
            By accessing or using the Services, you agree to these Terms. If you use the Services on behalf of a healthcare practice or other entity, you represent that you have authority to bind that entity.
          </p>

          <p>
            If you do not agree to these Terms, do not access or use the Services.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Company"</strong> means <strong>Acucogn LLC d/b/a Amplit AI</strong>.</li>
              <li><strong>"Dentsi"</strong> means Amplit AI’s AI front-desk product and related functionality.</li>
              <li><strong>"Services"</strong> means the Amplit AI website, Dentsi, software, applications, APIs, integrations, communications features, and related services.</li>
              <li><strong>"Customer"</strong> means the organization or person that subscribes to or uses the Services.</li>
              <li><strong>"User"</strong> means an individual authorized by a Customer to access or use the Services.</li>
              <li><strong>"Patient" or "End User"</strong> means a person who interacts with Dentsi or another Service in connection with a Customer.</li>
              <li><strong>"User Content"</strong> means data, text, recordings, configurations, prompts, or other content submitted to or processed through the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility and Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must have the legal capacity to enter into these Terms and comply with applicable law.</li>
              <li>You must provide accurate account information.</li>
              <li>You are responsible for protecting account credentials and activity under your account.</li>
              <li>You must promptly notify Amplit AI of suspected unauthorized access.</li>
              <li>Customers are responsible for authorized User access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Dentsi and the Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dentsi is an AI-powered front-desk product designed to support healthcare practices with functions such as answering calls, handling routine patient inquiries, scheduling and managing appointments, sending certain communications, and routing or escalating requests.</li>
              <li>Features may vary by plan, configuration, integrations, customer settings, and availability. Amplit AI may modify, suspend, or discontinue features.</li>
              <li>Dentsi is not a substitute for professional medical judgment and is not intended for emergency services, emergency communications, diagnosis, or definitive treatment decisions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. License to Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subject to these Terms and any applicable order form or subscription agreement, Amplit AI grants the Customer a limited, non-exclusive, non-transferable, revocable right to access and use the Services for authorized internal business purposes.</li>
              <li>You may not resell, sublicense, lease, distribute, or commercially exploit the Services for third parties without written authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Prohibited Uses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, disassemble, or attempt to discover source code or protected underlying technology, except where prohibited by law.</li>
              <li>Copy, modify, reproduce, distribute, or create derivative works except as expressly permitted.</li>
              <li>Use the Services to build a competing product using protected aspects of the Services.</li>
              <li>Circumvent security, authentication, usage limits, or access controls.</li>
              <li>Upload malware, viruses, or harmful code.</li>
              <li>Use the Services for unlawful, fraudulent, abusive, harassing, defamatory, or discriminatory activity.</li>
              <li>Access another customer’s account or data without authorization.</li>
              <li>Use automated scraping or extraction methods except as expressly authorized.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Customer Data and User Content</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customers retain their rights in User Content they submit, subject to the rights necessary for Amplit AI to provide, secure, maintain, and support the Services.</li>
              <li>You represent that you have all rights, permissions, consents, and lawful authority necessary for Amplit AI to process User Content as required to provide the Services.</li>
              <li>Where a healthcare practice uses Dentsi to process patient information, the Customer is responsible for required notices, consents, lawful processing, and appropriate configuration. Where applicable, PHI processing is governed by the applicable Business Associate Agreement and other contractual terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. AI Outputs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services may generate responses, summaries, classifications, scheduling actions, or other outputs using artificial intelligence. Outputs may be inaccurate or incomplete. Customers and Users are responsible for appropriate review and validation before relying on outputs.</li>
              <li>Dentsi must not be relied upon as the sole source for emergency decisions, diagnosis, treatment decisions, or other matters requiring professional clinical judgment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Voice, SMS, and Messaging</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where enabled, the Services may support inbound or outbound calls, recording, transcription, SMS/MMS, reminders, confirmations, and other healthcare-related communications.</li>
              <li>Customers are responsible for determining whether recording, transcription, artificial/prerecorded voice, SMS, or other communications require notice or consent.</li>
              <li>Customers are responsible for obtaining required recipient consents and maintaining evidence of consent.</li>
              <li>Customers must honor STOP, HELP, do-not-call requests, consent revocations, quiet hours, and other applicable restrictions.</li>
              <li>Customers must not use the Services for unlawful spam, fraudulent communications, purchased/scraped recipient lists, or prohibited communications.</li>
              <li>Amplit AI may suspend communication features where it reasonably believes use creates legal, carrier, security, abuse, or compliance risk.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services may be used only for lawful healthcare operations and legitimate business purposes consistent with these Terms. Unless separately agreed, outbound features are intended for operational communications such as reminders, confirmations, recalls, reactivation, post-visit follow-up, and related patient engagement.</li>
              <li>The Services must not be used for emergency communications, unlawful telemarketing, debt collection, political campaigns, purchased-lead outreach, or other prohibited uses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Amplit AI and its licensors own the Services and related software, interfaces, designs, documentation, trademarks, copyrights, technology, and other intellectual property, except for Customer-owned User Content.</li>
              <li>Nothing in these Terms transfers Amplit AI intellectual property to you. Dentsi and Amplit AI branding may not be used without authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Feedback</h2>
            <p>
              If you provide suggestions or feedback, you grant Amplit AI the right to use that feedback without restriction or compensation, provided confidential information is not disclosed contrary to applicable agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">12. Third-Party Services</h2>
            <p>
              The Services may integrate with third-party systems, communications providers, scheduling systems, EHR systems, payment providers, hosting providers, analytics tools, or other services. Third-party services are subject to their own terms and policies, and Amplit AI is not responsible for services outside its control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">13. Fees and Subscriptions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Paid Services are governed by the applicable subscription, order form, or agreement.</li>
              <li>Subscriptions may renew automatically unless cancelled under applicable terms.</li>
              <li>Fees are generally non-refundable except where required by law or expressly agreed.</li>
              <li>Pricing may change prospectively with reasonable notice where required.</li>
              <li>Usage-based features may have credits, limits, or overage charges stated in the applicable plan or order form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">14. Confidentiality</h2>
            <p>
              Each party may receive confidential information from the other. Each party will use reasonable measures to protect confidential information and use it only for permitted purposes. Standard exceptions apply for information that is public, independently developed, lawfully received without confidentiality restrictions, or required to be disclosed by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">15. Privacy and Data Protection</h2>
            <p>
              Use of the Services is also subject to the Amplit AI Privacy Policy. Healthcare customers may have additional obligations under HIPAA, state privacy laws, and agreements with patients.
            </p>
            <p>
              Please review the Amplit AI Privacy Policy for information about personal information and healthcare data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">16. Security</h2>
            <p>
              Amplit AI maintains administrative, technical, and organizational safeguards designed to protect information processed through the Services. No service can guarantee absolute security. Customers remain responsible for appropriate account security and access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">17. Availability and Changes</h2>
            <p>
              Amplit AI may modify, suspend, or discontinue portions of the Services, including features and integrations. We do not guarantee uninterrupted, error-free, or universal compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">18. Disclaimers</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. AMPLIT AI DISCLAIMS WARRANTIES NOT EXPRESSLY STATED IN THESE TERMS, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              Amplit AI does not guarantee that AI outputs, appointment information, transcripts, summaries, or generated content will always be accurate or complete. The Services are not emergency or clinical decision-making tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">19. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AMPLIT AI WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE, GOODWILL, DATA, OR BUSINESS OPPORTUNITIES ARISING FROM OR RELATED TO THE SERVICES.
            </p>
            <p>
              To the maximum extent permitted by law, Amplit AI's aggregate liability arising out of these Terms will be limited to the amounts paid or payable by the Customer to Amplit AI for the Services during the twelve (12) months preceding the event giving rise to the claim, unless a signed agreement states otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">20. Indemnification</h2>
            <p>
              To the extent permitted by law and subject to any applicable customer agreement, you agree to defend, indemnify, and hold harmless Amplit AI and its officers, employees, agents, suppliers, and service providers from claims, losses, liabilities, penalties, costs, and reasonable attorneys' fees arising from unlawful use, violation of these Terms, User Content, or failure to obtain legally required consent for communications initiated through the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">21. Suspension and Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Amplit AI may suspend or terminate access for material violations, nonpayment, security or legal risk, misuse of communications features, or conduct that exposes Amplit AI or its providers to material risk.</li>
              <li>Upon termination, access will cease subject to applicable transition, export, retention, or deletion provisions in the applicable agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">22. Governing Law and Disputes</h2>
            <p>
              These Terms will be governed by applicable law without regard to conflict-of-law principles, except where a separate written agreement provides otherwise. Any arbitration, venue, or jurisdiction terms in a signed customer agreement or order form will control if they conflict with these general Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">23. Changes to These Terms</h2>
            <p>
              Amplit AI may update these Terms from time to time. Material changes may be communicated through the website, account notifications, email, or other reasonable means.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">24. Contact Information</h2>
            <p className="mb-4">
              <strong>Business:</strong> Acucogn LLC d/b/a Amplit AI<br/>
              <strong>Product:</strong> Dentsi<br/>
              <strong>Owner / Contact:</strong> Anjali Shah<br/>
              <strong>Email:</strong> <a href="mailto:info@amplit.ai" className="text-brand hover:underline">info@amplit.ai</a><br/>
              <strong>Phone:</strong> <a href="tel:+15169578453" className="text-brand hover:underline">+1 (516) 957-8453</a><br/>
              <strong>Address:</strong> 4100 Spring Valley Rd, Suite 650, Dallas, TX 75244, USA<br/>
              <strong>Website:</strong> <a href="https://www.amplit.ai" className="text-brand hover:underline">https://www.amplit.ai/</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">25. Legal Review</h2>
            <p className="text-sm italic text-gray-500">
              These Terms are a business draft using the Dentina.AI Service Terms of Use as a structural reference and adapted for Acucogn LLC d/b/a Amplit AI and its Dentsi product. They are not legal advice. Because Dentsi may process healthcare information, PHI, telephone communications, and SMS messages, qualified U.S. healthcare, technology, privacy, and communications counsel should review the final Terms before publication.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
