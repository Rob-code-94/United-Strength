/**
 * United Strength Privacy Policy + Terms of Service
 * Source: Copywright/privacypolicyandtermsandservices/*.docx
 * Effective Date: September 22, 2026 — verbatim member-facing counsel text.
 * Do not paraphrase. Update only when counsel delivers a new doc.
 */

export type LegalParagraph = { type: "paragraph"; text: string };
export type LegalList = { type: "list"; items: readonly string[] };
export type LegalSubsection = {
  type: "subsection";
  title: string;
  blocks: readonly (LegalParagraph | LegalList)[];
};
export type LegalBlock = LegalParagraph | LegalList | LegalSubsection;

export type LegalSection = {
  number: number;
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
};

export const PRIVACY_POLICY = {
  title: "UNITED STRENGTH PRIVACY POLICY",
  effectiveDate: "September 22, 2026",
  intro: [
    "United Strength respects your privacy. This Privacy Policy explains how United Strength (“United Strength,” “United,” “we,” “our,” or “us”) collects, uses, shares, and protects information when you visit our website, create an account, use our mobile application or member platform, purchase a membership or service, participate in our programs, communicate with us, or otherwise interact with United Strength.",
    "By using our website, mobile application, member platform, or services, you acknowledge the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      number: 1,
      title: "INFORMATION WE COLLECT",
      blocks: [
        { type: "paragraph", text: "Depending on how you interact with United Strength, we may collect information including:" },
        {
          type: "subsection",
          title: "Contact and Account Information",
          blocks: [
            {
              type: "list",
              items: [
              "Name",
              "Email address",
              "Phone number",
              "Mailing address",
              "Date of birth, when required",
              "Account credentials and member profile information",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Membership and Transaction Information",
          blocks: [
            {
              type: "list",
              items: [
              "Membership type",
              "Purchases and transaction history",
              "Billing status",
              "Class, appointment, and reservation history",
              "Membership start, freeze, cancellation, and expiration information",
              "Promotional offers or discounts associated with your account",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Payment Information",
          blocks: [
            { type: "paragraph", text: "Payments may be processed by third-party payment processors. United Strength does not necessarily receive or store your complete payment card or banking information. We may receive limited transaction information necessary to administer your account, confirm payments, process refunds, or address billing issues." },
          ],
        },
        {
          type: "subsection",
          title: "Facility and Participation Information",
          blocks: [
            { type: "paragraph", text: "We may collect information related to your use of United Strength, including:" },
            {
              type: "list",
              items: [
              "Facility access and entry records",
              "Class and training attendance",
              "Reservations and cancellations",
              "Program participation",
              "Communications with our staff",
              "Information voluntarily provided in forms, questionnaires, assessments, or membership documents",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Device and Website Information",
          blocks: [
            { type: "paragraph", text: "When you use our website, mobile application, or other digital services, certain information may be collected automatically, including:" },
            {
              type: "list",
              items: [
              "IP address",
              "Browser and device type",
              "Operating system",
              "Pages viewed",
              "Referring pages",
              "Approximate location derived from IP address",
              "Website and application usage",
              "Cookies and similar technologies",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "HOW WE USE INFORMATION",
      blocks: [
        { type: "paragraph", text: "United Strength may use collected information to:" },
        {
          type: "list",
          items: [
            "Create and manage your account",
            "Administer memberships",
            "Process purchases and payments",
            "Schedule classes, appointments, assessments, and training",
            "Manage facility access",
            "Communicate about your membership or account",
            "Provide customer service",
            "Send operational notices, schedule changes, facility updates, and other service-related communications",
            "Send marketing or promotional communications where permitted",
            "Improve our programs, services, website, application, and member experience",
            "Maintain facility security",
            "Prevent fraud or misuse",
            "Maintain business and financial records",
            "Enforce our agreements and policies",
            "Comply with legal obligations",
            "Protect the rights, safety, and property of United Strength, our members, staff, and others",
          ],
        },
        { type: "paragraph", text: "We may also use aggregated or de-identified information for business analysis, planning, and service improvement." },
      ],
    },
    {
      number: 3,
      title: "MEMBERSHIP AND TECHNOLOGY PROVIDERS",
      blocks: [
        { type: "paragraph", text: "United Strength uses third-party technology providers to operate portions of our business." },
        { type: "paragraph", text: "These providers may include membership-management and scheduling platforms such as Mariana Tek, payment processors such as Stripe, facility-access technology providers, website hosting and analytics providers, email and SMS communication platforms, and other service providers necessary to operate United Strength." },
        { type: "paragraph", text: "Information may be transmitted to and processed by these providers when necessary to provide their services." },
        { type: "paragraph", text: "These third parties maintain their own privacy and security practices, and their handling of information may also be governed by their respective privacy policies and terms." },
      ],
    },
    {
      number: 4,
      title: "PAYMENT PROCESSING",
      blocks: [
        { type: "paragraph", text: "Payment transactions may be processed through third-party payment processors." },
        { type: "paragraph", text: "By providing payment information in connection with a United Strength purchase or membership, you authorize the applicable payment processor and United Strength to process charges in accordance with the membership, service, or purchase you selected and any applicable agreement." },
        { type: "paragraph", text: "United Strength does not sell payment information." },
      ],
    },
    {
      number: 5,
      title: "EMAIL AND TEXT COMMUNICATIONS",
      blocks: [
        { type: "paragraph", text: "We may communicate with you through email, telephone, text message, push notification, or other contact information you provide." },
        { type: "paragraph", text: "Operational communications may include membership information, billing notices, reservations, schedule changes, facility information, account security messages, and other communications necessary to provide our services." },
        { type: "paragraph", text: "Where permitted, we may also send promotional or marketing communications." },
        { type: "paragraph", text: "You may unsubscribe from promotional emails through the unsubscribe option provided in those communications." },
        { type: "paragraph", text: "Where applicable, you may opt out of promotional text messages by following the instructions included with those messages." },
        { type: "paragraph", text: "Opting out of marketing communications does not prevent United Strength from sending necessary transactional, safety, billing, membership, or account-related communications." },
      ],
    },
    {
      number: 6,
      title: "COOKIES AND ANALYTICS",
      blocks: [
        { type: "paragraph", text: "Our website and digital services may use cookies, pixels, analytics technologies, and similar tools to operate the website, remember preferences, understand usage, measure performance, and improve our services." },
        { type: "paragraph", text: "Your browser may allow you to limit or disable certain cookies. Doing so may affect the functionality of portions of our website or services." },
      ],
    },
    {
      number: 7,
      title: "FACILITY SECURITY",
      blocks: [
        { type: "paragraph", text: "United Strength may use security cameras, access-control systems, and related technologies to help protect members, staff, property, and the facility." },
        { type: "paragraph", text: "Security footage and facility-access records may be reviewed when reasonably necessary for safety, security, incident investigation, loss prevention, policy enforcement, or legal purposes." },
        { type: "paragraph", text: "United Strength does not use security cameras in areas where individuals would reasonably expect complete privacy." },
      ],
    },
    {
      number: 8,
      title: "HOW WE SHARE INFORMATION",
      blocks: [
        { type: "paragraph", text: "United Strength does not sell your personal information for money." },
        { type: "paragraph", text: "We may share information when reasonably necessary with:" },
        {
          type: "list",
          items: [
            "Membership and scheduling providers",
            "Payment processors",
            "Facility-access providers",
            "Website and technology providers",
            "Email and communications providers",
            "Professional advisers, including attorneys and accountants",
            "Insurance providers",
            "Government agencies or law enforcement when legally required",
            "Other service providers assisting with United Strength operations",
          ],
        },
        { type: "paragraph", text: "We may also disclose information when reasonably necessary to enforce our agreements, protect United Strength or others, investigate fraud or misconduct, respond to legal proceedings, or comply with applicable law." },
        { type: "paragraph", text: "If United Strength undergoes a merger, acquisition, financing, restructuring, sale of assets, or similar business transaction, information may be transferred as part of that transaction as permitted by law." },
      ],
    },
    {
      number: 9,
      title: "DATA RETENTION",
      blocks: [
        { type: "paragraph", text: "We retain personal information for as long as reasonably necessary to provide our services, administer accounts and memberships, maintain legitimate business records, resolve disputes, comply with legal obligations, and enforce agreements." },
        { type: "paragraph", text: "Different categories of information may be retained for different periods." },
        { type: "paragraph", text: "Where applicable law requires information to be returned, deleted, destroyed, or otherwise handled in a particular manner following the end of a membership or agreement, United Strength will comply with those requirements." },
      ],
    },
    {
      number: 10,
      title: "DATA SECURITY",
      blocks: [
        { type: "paragraph", text: "United Strength uses reasonable administrative, physical, and technological safeguards intended to protect personal information." },
        { type: "paragraph", text: "No website, application, database, transmission method, or storage system can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security." },
        { type: "paragraph", text: "Members are responsible for maintaining the confidentiality of their account credentials and should notify United Strength if they believe their account has been accessed without authorization." },
      ],
    },
    {
      number: 11,
      title: "CHILDREN'S PRIVACY",
      blocks: [
        { type: "paragraph", text: "United Strength's website and general digital services are not directed toward children under 13, and we do not knowingly collect personal information online directly from children under 13 without appropriate authorization." },
        { type: "paragraph", text: "When minors participate in eligible United Strength services, information and required agreements may be provided or completed by a parent or legal guardian as appropriate." },
      ],
    },
    {
      number: 12,
      title: "YOUR INFORMATION AND REQUESTS",
      blocks: [
        { type: "paragraph", text: "You may contact United Strength to request that we review or correct certain personal information associated with your account." },
        { type: "paragraph", text: "Some account information may also be managed directly through United Strength's member platform or mobile application." },
        { type: "paragraph", text: "Certain information may need to be retained even after a request for deletion when required or permitted for legal, financial, security, contractual, or legitimate business purposes." },
      ],
    },
    {
      number: 13,
      title: "THIRD-PARTY LINKS AND SERVICES",
      blocks: [
        { type: "paragraph", text: "Our website or application may contain links to websites, services, or platforms operated by third parties." },
        { type: "paragraph", text: "United Strength is not responsible for the privacy practices, security, availability, or content of third-party websites or services." },
      ],
    },
    {
      number: 14,
      title: "CHANGES TO THIS PRIVACY POLICY",
      blocks: [
        { type: "paragraph", text: "United Strength may update this Privacy Policy as our services, technology, business, or legal requirements change." },
        { type: "paragraph", text: "When the policy is updated, the revised version will be posted with an updated effective date." },
        { type: "paragraph", text: "Material changes may also be communicated through our website, member platform, email, or other appropriate means." },
      ],
    },
    {
      number: 15,
      title: "CONTACT US",
      blocks: [
        { type: "paragraph", text: "Questions or requests regarding this Privacy Policy may be directed to United Strength using the contact information published on our website or through our designated member-support channels." },
        { type: "paragraph", text: "United Strength" },
        { type: "paragraph", text: "Columbus, Ohio" },
      ],
    },
  ],
} as const;

export const TERMS_OF_SERVICE = {
  title: "UNITED STRENGTH TERMS OF SERVICE",
  effectiveDate: "September 22, 2026",
  intro: [
    "Welcome to United Strength.",
    "These Terms of Service (“Terms”) govern your use of United Strength's website, mobile application, member platform, digital services, and related services.",
    "Our goal is simple: make the expectations clear.",
    "By creating an account, accessing our digital services, purchasing eligible services, or otherwise using services governed by these Terms, you agree to these Terms and our Privacy Policy.",
    "Certain United Strength services are also governed by separate agreements, including membership purchase agreements, liability waivers, program agreements, and other policies. When a separate agreement applies, it becomes part of the terms governing that particular service.",
  ],
  sections: [
    {
      number: 1,
      title: "UNITED STRENGTH SERVICES",
      blocks: [
        { type: "paragraph", text: "United Strength may provide services including:" },
        {
          type: "list",
          items: [
            "Memberships",
            "Open gym access",
            "Group training and signature classes",
            "Personal training",
            "Private and small-group training",
            "Assessments",
            "Educational and training programs",
            "Run club and community activities",
            "Events",
            "Retail products",
            "Digital content",
            "Other health, fitness, wellness, or community offerings",
          ],
        },
        { type: "paragraph", text: "Availability and eligibility may vary by service." },
      ],
    },
    {
      number: 2,
      title: "ACCOUNTS",
      blocks: [
        { type: "paragraph", text: "Certain services require a United Strength account." },
        { type: "paragraph", text: "You agree to provide accurate and current information and to keep your account information updated." },
        { type: "paragraph", text: "Your account is personal to you. Login credentials and access privileges may not be transferred, sold, or shared unless United Strength expressly permits it." },
        { type: "paragraph", text: "You are responsible for activity occurring through your account and should promptly notify United Strength if you believe your account has been compromised." },
      ],
    },
    {
      number: 3,
      title: "MEMBERSHIPS",
      blocks: [
        { type: "paragraph", text: "Membership pricing, included services, billing frequency, commitment terms, cancellation requirements, and other membership-specific conditions will be disclosed in the applicable membership purchase agreement or at the time of purchase." },
        { type: "paragraph", text: "Purchasing a membership constitutes agreement to the terms associated with that membership." },
        { type: "paragraph", text: "Memberships are personal and may not be transferred or shared unless expressly authorized by United Strength." },
      ],
    },
    {
      number: 4,
      title: "RECURRING BILLING",
      blocks: [
        { type: "paragraph", text: "When you purchase a recurring membership or service, you authorize United Strength and its payment processor to charge the payment method associated with your account according to the billing schedule disclosed at purchase." },
        { type: "paragraph", text: "Recurring charges continue until the membership or service is properly canceled in accordance with the applicable membership agreement and cancellation policy." },
        { type: "paragraph", text: "You are responsible for maintaining a valid payment method." },
        { type: "paragraph", text: "A failed or expired payment method does not automatically cancel a membership or eliminate amounts properly due under an applicable agreement." },
      ],
    },
    {
      number: 5,
      title: "STANDARD MEMBERSHIP CANCELLATION",
      blocks: [
        { type: "paragraph", text: "Unless a different cancellation provision is stated in your specific membership agreement, recurring United Strength memberships require 30 days' written notice to cancel." },
        { type: "paragraph", text: "To keep cancellations clear and properly documented for everyone, standard cancellation requests must be submitted through United Strength's designated cancellation process or form." },
        { type: "paragraph", text: "The date a properly submitted request is received establishes the beginning of the 30-day notice period." },
        { type: "paragraph", text: "Regular membership billing continues during the 30-day notice period. If a regularly scheduled payment occurs during that period, the payment will be processed as scheduled." },
        { type: "paragraph", text: "Members continue to receive the applicable membership privileges through their effective cancellation date." },
        { type: "paragraph", text: "For standard membership cancellations, verbal conversations, text messages, social-media messages, direct messages, or informal notice to a coach or staff member do not replace United Strength's designated cancellation process." },
        { type: "paragraph", text: "Not using the facility, classes, or services during the notice period does not itself cancel a membership or eliminate charges otherwise due." },
        { type: "paragraph", text: "United Strength will make its designated cancellation process reasonably accessible to members." },
        { type: "paragraph", text: "Nothing in this section limits any cancellation right that a consumer has under applicable law." },
      ],
    },
    {
      number: 6,
      title: "OHIO STATUTORY CANCELLATION RIGHTS",
      blocks: [
        { type: "paragraph", text: "Certain United Strength memberships or agreements may constitute prepaid entertainment contracts under Ohio law." },
        { type: "paragraph", text: "Where applicable, members have the cancellation rights provided by Ohio law, including applicable statutory cooling-off rights." },
        { type: "paragraph", text: "Those statutory rights are separate from United Strength's standard 30-day membership cancellation policy and will be honored regardless of the standard cancellation procedure described above." },
        { type: "paragraph", text: "Where required, applicable membership agreements will contain the legally required Notice of Cancellation and instructions for exercising those rights." },
        { type: "paragraph", text: "Nothing in these Terms waives or restricts a consumer right that cannot legally be waived." },
      ],
    },
    {
      number: 7,
      title: "MEMBERSHIP CHANGES AND PRICING",
      blocks: [
        { type: "paragraph", text: "United Strength may change membership offerings, schedules, programming, benefits, or pricing from time to time." },
        { type: "paragraph", text: "Existing members will receive any notice required by their applicable membership agreement or applicable law before a change affecting their recurring membership takes effect." },
        { type: "paragraph", text: "We believe members should understand what they are paying for. Current membership offerings and applicable pricing will be communicated through United Strength's website, member platform, purchase process, or direct member communications." },
      ],
    },
    {
      number: 8,
      title: "BOOKINGS, CANCELLATIONS, AND ATTENDANCE",
      blocks: [
        { type: "paragraph", text: "Classes, training sessions, appointments, events, and other services may have specific booking, cancellation, late-cancellation, waitlist, or no-show policies." },
        { type: "paragraph", text: "Those policies may vary by service and will be communicated through the applicable booking platform, purchase terms, program information, or member communications." },
        { type: "paragraph", text: "Members are responsible for managing their reservations and complying with applicable booking policies." },
      ],
    },
    {
      number: 9,
      title: "FACILITY ACCESS",
      blocks: [
        { type: "paragraph", text: "Certain memberships may include access to United Strength outside staffed hours through an electronic access-control system." },
        { type: "paragraph", text: "Access privileges are personal to the member and may not be shared." },
        { type: "paragraph", text: "Members may not permit unauthorized individuals to enter the facility using their credentials or access privileges." },
        { type: "paragraph", text: "United Strength may suspend or revoke access when reasonably necessary for safety, security, nonpayment, violation of facility policies, misuse of access privileges, or violation of an applicable agreement." },
      ],
    },
    {
      number: 10,
      title: "MEMBER CONDUCT",
      blocks: [
        { type: "paragraph", text: "United Strength is built around mutual respect." },
        { type: "paragraph", text: "Members and guests are expected to treat other members, coaches, staff, property, equipment, and the facility appropriately." },
        { type: "paragraph", text: "United Strength may restrict, suspend, or terminate access for conduct that reasonably threatens safety, damages property, substantially disrupts operations, harasses others, violates applicable law, or materially violates United Strength policies or agreements." },
        { type: "paragraph", text: "We reserve the right to make reasonable decisions necessary to maintain a safe and functional environment." },
      ],
    },
    {
      number: 11,
      title: "HEALTH, FITNESS, AND ASSUMPTION OF RISK",
      blocks: [
        { type: "paragraph", text: "Physical exercise and participation in fitness activities involve inherent risks." },
        { type: "paragraph", text: "Participation in United Strength's physical activities may require acceptance of a separate liability waiver, assumption-of-risk agreement, health acknowledgment, or similar document." },
        { type: "paragraph", text: "These Terms do not replace any separately executed liability waiver or assumption-of-risk agreement." },
        { type: "paragraph", text: "Members are responsible for determining whether they are physically capable of participating in a particular activity and for seeking appropriate professional medical guidance when necessary." },
        { type: "paragraph", text: "United Strength does not provide medical diagnosis or treatment unless expressly stated and provided by an appropriately licensed professional." },
      ],
    },
    {
      number: 12,
      title: "PERSONAL TRAINING AND OTHER SERVICES",
      blocks: [
        { type: "paragraph", text: "Personal training, assessments, specialty programs, events, private training, and other services may have separate pricing, expiration periods, cancellation requirements, scheduling rules, or agreements." },
        { type: "paragraph", text: "The applicable terms will be disclosed in connection with those services." },
      ],
    },
    {
      number: 13,
      title: "PAYMENTS AND REFUNDS",
      blocks: [
        { type: "paragraph", text: "Payments are generally nonrefundable once earned or after the applicable service has been provided, except where a specific United Strength policy, written agreement, or applicable law provides otherwise." },
        { type: "paragraph", text: "Any refund or credit offered outside a legal or contractual requirement is at United Strength's discretion and does not create an obligation to provide the same exception in another situation." },
        { type: "paragraph", text: "Nothing in this section limits refund rights required by law." },
      ],
    },
    {
      number: 14,
      title: "THIRD-PARTY SERVICES",
      blocks: [
        { type: "paragraph", text: "United Strength uses third-party providers to support services including scheduling, membership management, payments, communications, website functionality, and facility access." },
        { type: "paragraph", text: "Use of certain third-party features may also be subject to that provider's applicable terms and privacy practices." },
        { type: "paragraph", text: "United Strength is not responsible for interruptions or failures caused solely by third-party systems outside United Strength's reasonable control, although we will make reasonable efforts to address service issues affecting our members." },
      ],
    },
    {
      number: 15,
      title: "WEBSITE AND DIGITAL CONTENT",
      blocks: [
        { type: "paragraph", text: "Unless otherwise stated, United Strength owns or licenses the content appearing on its website, applications, and digital platforms, including text, graphics, photographs, videos, designs, branding, logos, program names, and other materials." },
        { type: "paragraph", text: "United Strength content may not be copied, reproduced, sold, distributed, republished, or commercially exploited without permission except as permitted by law." },
      ],
    },
    {
      number: 16,
      title: "UNITED STRENGTH BRAND AND INTELLECTUAL PROPERTY",
      blocks: [
        { type: "paragraph", text: "The United Strength name, branding, logos, marks, program names, creative materials, training materials, and related intellectual property are owned by or licensed to United Strength." },
        { type: "paragraph", text: "Nothing in these Terms grants a user ownership of or a license to commercially use United Strength intellectual property unless expressly agreed in writing." },
      ],
    },
    {
      number: 17,
      title: "PHOTOGRAPHY AND MEDIA",
      blocks: [
        { type: "paragraph", text: "United Strength may capture general photographs or video within the facility or at community events for operational, documentary, or promotional purposes where permitted by law." },
        { type: "paragraph", text: "Any separate media release or consent presented to a member will govern identifiable promotional use when such consent is required." },
        { type: "paragraph", text: "Members should communicate with United Strength if they have questions or concerns regarding photography or media participation." },
      ],
    },
    {
      number: 18,
      title: "SERVICE AVAILABILITY",
      blocks: [
        { type: "paragraph", text: "We work to keep our facility and digital services available, but uninterrupted access cannot be guaranteed." },
        { type: "paragraph", text: "Schedules, instructors, equipment availability, operating hours, programming, technology, and facility availability may change due to maintenance, staffing, emergencies, weather, safety concerns, events, circumstances outside our reasonable control, or operational needs." },
        { type: "paragraph", text: "Reasonable changes to schedules or programming do not automatically create a right to a refund unless required by an applicable agreement or law." },
      ],
    },
    {
      number: 19,
      title: "SUSPENSION OR TERMINATION BY UNITED STRENGTH",
      blocks: [
        { type: "paragraph", text: "United Strength may suspend or terminate an account, membership, or facility access when reasonably necessary because of:" },
        {
          type: "list",
          items: [
            "Material violation of these Terms or another applicable agreement",
            "Unpaid amounts",
            "Fraud or misuse",
            "Sharing access credentials",
            "Unsafe behavior",
            "Harassment or threatening conduct",
            "Material damage to United Strength property",
            "Illegal activity",
            "Conduct that substantially interferes with United Strength's operations or community",
          ],
        },
        { type: "paragraph", text: "Any outstanding financial obligations remain subject to the applicable membership or purchase agreement and applicable law." },
      ],
    },
    {
      number: 20,
      title: "LIMITATION OF LIABILITY",
      blocks: [
        { type: "paragraph", text: "To the fullest extent permitted by applicable law, United Strength will not be responsible for indirect, incidental, special, consequential, or punitive damages arising solely from use of its website or digital services." },
        { type: "paragraph", text: "Nothing in these Terms excludes or limits liability where doing so would be prohibited by law." },
        { type: "paragraph", text: "Liability relating specifically to participation in physical activities may also be addressed by a separate liability waiver or assumption-of-risk agreement." },
      ],
    },
    {
      number: 21,
      title: "PRIVACY",
      blocks: [
        { type: "paragraph", text: "Use of United Strength's website, application, member platform, and related services is also subject to the United Strength Privacy Policy." },
      ],
    },
    {
      number: 22,
      title: "CHANGES TO THESE TERMS",
      blocks: [
        { type: "paragraph", text: "United Strength may update these Terms as our business, services, technology, or legal requirements change." },
        { type: "paragraph", text: "Updated Terms will be posted with a revised effective date." },
        { type: "paragraph", text: "Where legally or contractually required, United Strength will provide appropriate notice before material changes affecting an existing membership become effective." },
      ],
    },
    {
      number: 23,
      title: "GOVERNING LAW",
      blocks: [
        { type: "paragraph", text: "These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles, except where another law is required to apply." },
        { type: "paragraph", text: "Nothing in these Terms eliminates any consumer protection or other right that cannot legally be waived." },
      ],
    },
    {
      number: 24,
      title: "CONTACT",
      blocks: [
        { type: "paragraph", text: "Questions regarding these Terms, membership policies, or United Strength services may be directed to United Strength using the contact information published on our website or through our designated member-support channels." },
        { type: "paragraph", text: "United Strength" },
        { type: "paragraph", text: "Columbus, Ohio" },
      ],
    },
  ],
} as const;

