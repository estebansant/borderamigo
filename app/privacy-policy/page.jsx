import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="relative flex h-full min-h-screen w-full flex-col items-center justify-start gap-[45px] bg-bew-gray px-[16px] py-[100px]">
      <h1 className="text-center font-Petrona text-[4.2rem] font-medium leading-[120%] text-black md:text-[5.6rem] lg:text-[7rem]">
        Privacy Policy
      </h1>
      <div className="flex-column-start  max-w-[95%] gap-[30px] avg:max-w-[85%] lg:max-w-[1000px]">
        <div>
          <h2 className="h5-bold text-black">Introduction</h2>
          <p className="paragraph text-justify text-black">
            DigitalNomadVisa.io (“we,” “us,” or “our”) is committed to
            protecting your privacy. This Privacy Policy explains how your
            personal information is collected, used, and disclosed when you use
            our website and the choices you have associated with that
            information. Information We Collect.
          </p>
        </div>

        <div>
          <h2 className="h5-bold text-black">Contact Form</h2>
          <p className="paragraph text-justify text-black">
            When you use the contact form on our website, we collect the
            following information:
          </p>
          <ul>
            <li className="paragraph text-justify text-black">
              Name: To address you properly.
            </li>
            <li className="paragraph text-justify text-black">
              Email: To respond to your inquiries.
            </li>
            <li className="paragraph text-justify text-black">
              Message: To understand and respond to your inquiries.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h5-bold text-black">How We Use Your Information</h2>
          <p className="paragraph text-justify text-black">
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li className="paragraph text-justify text-black">
              To respond to your inquiries submitted through the contact form.
            </li>
            <li className="paragraph text-justify text-black">
              To process and assist with digital nomad visa applications.
            </li>
            <li className="paragraph text-justify text-black">
              To improve our website and services.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h5-bold text-black">Cookies</h2>
          <p className="paragraph text-justify text-black">
            We use cookies on our website to enhance your experience. You can
            set your browser to refuse all or some browser cookies or to alert
            you when websites set or access cookies.
          </p>
        </div>

        <div>
          <h2 className="h5-bold text-black">Sharing Your Information</h2>
          <p className="paragraph text-justify text-black">
            We share your personal information with third parties, including
            visa specialists, we share this information for the explicit purpose
            of delivering the visa you have requested.
          </p>
        </div>

        <div>
          <h2 className="h5-bold text-black">Security</h2>
          <p className="paragraph text-justify text-black">
            We are committed to ensuring that your information is secure.
          </p>
        </div>

        <div>
          <h2 className="h5-bold text-black">Changes to This Privacy Policy</h2>
          <p className="paragraph text-justify text-black">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>

        <div>
          <h2 className="h5-bold text-black">Contact Us</h2>
          <p className="paragraph text-justify text-black">
            If you have any questions about this Privacy Policy, please contact
            us at info@digitalnomadvisa.io
          </p>
        </div>
      </div>
    </section>
  );
}
