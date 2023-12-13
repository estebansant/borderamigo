import React from "react";

export default function TermsOfService() {
  return (
    <section className="relative flex h-full min-h-screen w-full flex-col items-center justify-start gap-[45px] bg-bew-gray px-[16px] py-[100px]">
      <h1 className="text-center font-Petrona text-[4.2rem] font-medium leading-[120%] text-black md:text-[5.6rem] lg:text-[7rem]">
        Terms and Conditions
      </h1>
      <p className="paragraph max-w-[95%] text-justify text-black avg:max-w-[85%] lg:max-w-[1000px]">
        The information on this website is for general guidance only and should
        not be considered legal or financial advice. DigitalNomadVisa.io do not
        offer legal counsel or accounting services, but provide referrals to
        licensed professionals. <br />
        <br />
        By using our services, you authorize sharing your information with our
        network of partners for the purpose of visa procurement. We respect your
        data privacy when facilitating this process according to our documented
        standards.
        <br />
        <br />
        Please consult qualified experts regarding your specific legal or
        financial situation.
        <br />
        <br />
        All purchases are final and no refunds are offered. By completing your
        purchase with us, you acknowledge that you are aware of and agree to
        this no refund policy. We provide extensive details about our services
        prior to purchase - please review carefully before buying to ensure it
        meets your needs, as custom orders cannot be cancelled or refunded once
        placed. We appreciate your understanding of this policy, which allows us
        to deliver high quality customized products, services and pricing
      </p>
    </section>
  );
}
