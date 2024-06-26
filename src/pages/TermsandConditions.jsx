import Aos from "aos";
import React, { useEffect } from "react";

const TermsandConditions = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // duration of the animations in ms
    });
  }, []);

  return (
    <div className="page_wrapper">
      <section className="blog_detail_section text-center pb-0 mb-0">
        <div className="container">
          <span
            className="title_badge"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Our Terms and Conditions
          </span>
          <h2
            style={{ fontWeight: "bold" }}
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Terms and Condition
          </h2>
        </div>
      </section>
      <section className="blog_detail_section pt-0 mt-5">
        <div className="container blog-body" style={{ lineHeight: "1.8" }}>
          <div className="blog_body">
            <div
              className="content-one  mb_20"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>I.General Provisions</h2>
              <p>
                These Terms and Conditions govern the terms under which you may
                access and use our website ("the Website") the services
                associated with it (together, the "Service"). By accessing,
                registering with and using the Service, you agree to be bound by
                the terms of the Terms and Conditions.
              </p>
              <p>
                In the present Terms and Conditions, the terms "we", "us", "our"
                refer to Aremko Pay and "you", "your" refer to any person who
                accesses and/or uses the Service. It is important that you
                understand that access and use of the Service is conditional on
                your acceptance of present Terms and Conditions. The language of
                these Terms and Conditions is English and all Services,
                instructions and transactions carried out in connection with it
                shall be in English.
              </p>
            </div>
            <div
              className="content-two mb_20"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2 className>II.Definitions</h2>
              <p>
                In this Terms and Conditions the terms below shall have the
                following definition(s):{" "}
              </p>
              <ol style={{ listStyle: "upper-alpha", lineHeight: "1.8" }}>
                <li classname="mb-2">
                  "Compliance Officer" means one or more members of staff at
                  Aremko Pay. who is responsible for compliance with Money
                  Transfer Regulations, anti-money laundering legislation and
                  other applicable laws;
                </li>
                <li classname="mb-2">
                  "Fees" means the charges and fees we charge to you for the
                  Service, as applicable, in accordance with the price list
                  published on the Website and/or the Application, or the prices
                  or rates that we communicate to you before we issue a
                  Confirmation, or as provided in these Terms and Conditions;
                </li>
                <li classname="mb-2">
                  "Force Majeure Event" means any of the circumstances referred
                  to in clause VII.G;
                </li>
                <li classname="mb-2">
                  "FX Spread" is where you pay for a transaction in one currency
                  and it is paid out in another currency, we apply an FX spread.
                  The FX spread is the difference between the exchange rate we
                  buy the currency in and the exchange rate we are able to
                  provide to you and we communicated it in the order
                  confirmation and it covers our costs plus a small margin.
                </li>
                <li classname="mb-2">
                  "Malicious Code" means computer viruses, Trojans, software
                  locks, drop-dead devices, malicious logic or trap door, worms,
                  time bombs, corrupted files or other computer programme
                  routines that are intended to delete, disable, deactivate,
                  damage, detrimentally interfere with, surreptitiously
                  intercept or expropriate any systems, data, personal
                  information or property of another;
                </li>
                <li classname="mb-2">
                  "Money Transfer Regulations" means the applicable laws of the
                  United Kingdom or of the country from which funds are
                  transferred or where funds are intended to be received which
                  relate to electronic money transfer services including,
                  without limitation, the Financial Services and Markets Act
                  2000/2016, the Payment Services Regulations 2017 and the
                  Electronic Money Regulations 2011;
                </li>
                <li classname="mb-2">
                  "Prohibited purpose" means any unlawful purpose (whether such
                  illegality arises in the country from which the funds are
                  transferred or where they are intended to be received or in
                  any territory with jurisdiction over the Sender or the
                  Receiver) including, without limitation, the transfer or
                  receipt of payment for illegal activities, the transfer of
                  funds which constitute proceeds of crime or money laundering
                  under the Proceeds of Crime Act 2002 or which are obtained by
                  illegal activity, the transfer of funds for the purpose of
                  funding illegal activity, the transfer of funds for the
                  purpose of avoiding the seizure of such funds by law
                  enforcement authorities or under orders of any court of law,
                  and any transfer of funds without the permission of their
                  owner;
                </li>
                <li classname="mb-2">
                  "Recipient" means the person who receives the money through
                  the Service,
                </li>
                <li classname="mb-2">
                  "Reference number" means the unique transaction number, which
                  will be issued to you as and which the recipient will be
                  required to provide to our partners in order to receive the
                  amount transferred,
                </li>
                <li classname="mb-2">
                  "Sender" means the person who initiates the carrying out of a
                  money transfer through the Service,
                </li>
                <li classname="mb-2">
                  "Transaction" means every money transfer that you initiate
                  using the Service and/or every other use that you make of the
                  Service,
                </li>
              </ol>
            </div>
            <div
              className="content-three mb_20"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2 className>III. Eligibility and access rights</h2>
              <ol type="A" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  By using the Service you warrant that you are at least 18
                  years old and that you have a legal capacity to enter into
                  legally binding contracts.
                </li>
                <li classname="mb-2">
                  Without prejudice to your rights in relation to any order for
                  Services in relation to which we issued a Confirmation (in
                  accordance with clause V below), we reserve the right, at any
                  time, to terminate or suspend your access to the Service
                  without prior notice if:
                  <br />
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      You use the Service or attempt to use it for any
                      Prohibited Purpose;
                    </li>
                    <li className="list-lower">
                      You attempt to transfer or charge funds from an account
                      that does not belong to you;
                    </li>
                    <li className="list-lower">
                      We receive conflicting claims regarding ownership of or
                      the right to withdraw funds from a debit or credit card
                      account;
                    </li>
                    <li className="list-lower">
                      You have provided us with false evidence of your identity
                      or you keep failing in providing us with true, accurate,
                      current and complete evidence of your identity or details
                      regarding transactions;
                    </li>
                    <li className="list-lower">
                      You attempt to tamper, hack, modify, overload, or
                      otherwise corrupt or circumvent the security and/or
                      functionality of the Website and/or the Application or to
                      infect it with any Malicious Code;
                    </li>
                    <li className="list-lower">
                      You are in breach of these Terms and Conditions;
                    </li>
                    <li className="list-lower">
                      We have reason to believe that any of the foregoing has
                      occurred or is likely to occur; or
                    </li>
                    <li className="list-lower">
                      A Compliance Officer has taken a discretionary decision to
                      do so.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>
                IV. How the contract is formed between you and us
              </h2>
              <ol type="A" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  After you place a money transfer order via the Website or the
                  Application an e-mail will be sent to you acknowledging that
                  your order has been received. Please note that this does not
                  mean that your order is accepted.
                </li>
                <li classname="mb-2">
                  A transaction order constitutes solely an offer to buy our
                  services, which is subject to our discretionary acceptance.
                  Such acceptance will be communicated to you via e-mail
                  confirming that we are processing your request (hereinafter
                  called "the Confirmation"). The contract between you and us
                  (hereinafter called "the Contract") will only be formed when
                  the Confirmation has been sent.
                </li>
                <li classname="mb-2">
                  The Contract relates solely to the services that have been
                  confirmed accepted in the Confirmation.
                </li>
                <li classname="mb-2">
                  We reserve the right to refuse to perform any of the Services
                  (including after Confirmation) if:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      We are unable to obtain satisfactory evidence of your
                      identity;
                    </li>
                    <li className="list-lower">
                      You provide us with false, incorrect or incomplete
                      information;
                    </li>
                    <li className="list-lower">
                      We are unable to reach you via contact details provided by
                      you;
                    </li>
                    <li className="list-lower">
                      Your transfer order, information or documentation is not
                      provided sufficiently in advance to allow us to process it
                      in accordance to your request;
                    </li>
                    <li className="list-lower">
                      You attempt to tamper, hack, modify, overload, or
                      otherwise corrupt or circumvent the security and/or
                      functionality of the Website and/or the Application or to
                      infect it with any Malicious Code;
                    </li>
                    <li className="list-lower">
                      You are in breach of these Terms and Conditions;
                    </li>
                    <li className="list-lower">
                      You or the order you placed are in breach of any
                      applicable laws or regulations or are made for a
                      Prohibited Purpose;
                    </li>
                    <li className="list-lower">
                      Processing the Service in accordance with your order may
                      expose us to liability;
                    </li>
                    <li className="list-lower">
                      We are unable to process your transfer due to variations
                      in business hours, currency exchange or currency
                      availability issues or due to any Force Majeure Event;
                    </li>
                    <li className="list-lower">
                      We have reason to believe that any of the foregoing has
                      occurred or is likely to occur; or
                    </li>
                    <li className="list-lower">
                      A Compliance Officer has taken a discretionary decision to
                      do so.
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">
                  We shall not be liable for any damages, costs or losses
                  incurred by the Sender or the Recipient or any third party if,
                  as a result of any of the circumstances referred to in clause
                  III.B or VI.D, we fail to complete the transfer of funds in
                  accordance with an order.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>
                V. Information provided after we process a transaction
              </h2>
              <p>
                After we process your transaction to the Recipient an e-mail
                will be sent to you with the following information:
              </p>
              <ol type="A" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">A transaction reference number,</li>
                <li classname="mb-2">
                  A confirmation of the exact amount we are sending to the
                  Recipient on your behalf in both pay in and pay out
                  currencies,
                </li>
                <li classname="mb-2">
                  A confirmation of the Fee that has been charged,
                </li>
                <li classname="mb-2">
                  An exchange rate applied to your transaction,
                </li>
                <li classname="mb-2">
                  A confirmation of the bank to which the money has been sent
                  (for credit to bank option),
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>VI. Confidentiality/ privacy</h2>
              <ol type="A" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  As a fully regulated institution and with a purpose of
                  providing the Service we are bound by the legal requirements
                  to obtain, verify and record information about our customers.
                  Therefore we may request from you or consult any legal sources
                  to obtain your personal data when offering the Service to you.
                </li>
                <li classname="mb-2">
                  Your personal information will be treated and processed
                  securely and strictly in accordance with applicable laws and
                  regulations.
                </li>
                <li classname="mb-2">
                  We will not treat customer information as confidential where
                  it is already public knowledge or where it becomes public
                  knowledge through no fault of our own.
                </li>
                <li classname="mb-2">
                  We may disclose customer information if we are required to do
                  so by law, by court order, by any statutory, legal or
                  regulatory requirement, by the police or any other competent
                  authorities in connection with the prevention or detection of
                  crime or to help combat fraud, money laundering and terrorism
                  financing. We may also report suspicious activity to
                  appropriate competent law enforcement or government
                  authorities.
                </li>
                <li classname="mb-2">
                  For more details and information regarding the
                  confidentiality, privacy and security please refer to our
                  Privacy Policy.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>VII. Limitations of liability</h2>
              <ol type="A" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  If a money transfer you ordered is delayed or fails, you may
                  have a right to receive a refund less applicable fees or
                  compensation under Money Transfer Regulations. Please contact
                  us at{" "}
                  <a href="mailto:info@aremkopay.com"> info@aremkopay.com</a>{" "}
                  for more information regarding refunds and compensations.
                </li>
                <li classname="mb-2">
                  Claims for refund or compensation must be supported by all
                  available evidence.
                </li>
                <li classname="mb-2">
                  If a money transfer in accordance with an order you made and
                  that we Confirmed is delayed or fails and you are not entitled
                  to a refund or compensation under the Money Transfer
                  Regulations, we expressly limit our liability in respect of
                  any such delayed or failed transfer (including for any claimed
                  refund) to the greater of: (a) the amount of any service
                  charge that was paid to us; and (b) €600. The foregoing cap on
                  our liability applies to any single transaction, act, omission
                  or event and to any number of related transactions, acts, and
                  omissions or events.
                </li>
                <li classname="mb-2">
                  Except as provided in clause 9.5, we shall not be liable to
                  you or to any third party in relation to the Services, whether
                  for breach of contract, tort (including negligence),
                  misrepresentation, unjust enrichment or any other grounds, for
                  any indirect, incidental, consequential or special damages
                  including any loss of profits or savings or anticipated
                  profits or savings, loss of data, loss of opportunity, loss or
                  reputation, goodwill or business or any economic loss, even if
                  we are advised in advance of the possibility of such loss.
                </li>
                <li classname="mb-2">
                  Nothing in this clause shall:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      Exclude or limit liability on our part for death or
                      personal injury resulting from our negligence,
                    </li>
                    <li className="list-lower">
                      Exclude liability for our fraud, our wilful misconduct or
                      gross negligence.
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">
                  We are not liable for the quality, safety, legality, or
                  delivery of the goods or services that you pay for using the
                  Services.
                </li>
                <li classname="mb-2">
                  We shall not be liable for any breach of our obligations under
                  the Contract to you nor for any failure or delay in
                  performance of any obligations under the Contract arising from
                  or attributable to acts, events, omissions or accidents beyond
                  our reasonable control, including, without limitation, where
                  our failure to perform our obligations arise from:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      an act of God, fire, flood, earthquake, windstorm or other
                      natural disaster, explosion or accidental damage, war,
                      threat of or preparation for war, armed conflict,
                      imposition of sanctions, embargo, export controls,
                      breaking off of diplomatic relations or similar actions,
                      terrorist attack, civil war, civil commotion or riots,
                      pandemic or epidemic, industrial disputes, shortages of
                      raw materials or components, general disruptions to
                      transportation, telecommunication systems, power supply or
                      other utilities;
                    </li>
                    <li className="list-lower">
                      the acts, decrees, legislation, regulations or
                      restrictions imposed by any government or state;
                    </li>
                    <li className="list-lower">
                      the actions or omissions of the third parties;
                    </li>
                    <li className="list-lower">
                      malfunctions in communications facilities which cannot
                      reasonably be considered to be under our control and that
                      may affect the accuracy or timeliness of messages you send
                      to us;
                    </li>
                    <li className="list-lower">
                      any losses or delays in transmission of messages arising
                      out of the use of any internet access service provider or
                      caused by any browser or other software which is not under
                      our control; or
                    </li>
                    <li className="list-lower">
                      any Malicious Code interfering with the Service
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">(each, a "Force Majeure Event").</li>
                <li classname="mb-2">
                  Our performance under the Contract shall be deemed suspended
                  for the period that the Force Majeure Event continues and the
                  time for performance will be extended for the duration of that
                  period. We will use our reasonable endeavours to find a
                  solution by which our obligations under the Contract may be
                  resumed despite the Force Majeure Event.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>VIII. Your responsibilities and obligations</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  You will not use the Service unless you are at least 18 years
                  old and you have a legal capacity to enter into legally
                  binding contracts.
                </li>
                <li classname="mb-2">
                  The Fees for each Service we have provided to you have to be
                  paid.
                </li>
                <li classname="mb-2">
                  You shall comply with these Terms and Conditions as well as
                  with any applicable laws, rules and regulations.
                </li>
                <li classname="mb-2">
                  In relation to your registration and use of the Service you
                  will:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li classname="mb-2">
                      provide us with accurate, current, complete and true
                      evidence of your identity and any additional information
                      or evidence we may require to confirm your identity;
                    </li>
                    <li classname="mb-2">
                      supply us with all information and documentation we may
                      ask in order to process your transfer and to comply with
                      any legal requirements applicable to us or to our partners
                      (including without limitation, the Money Transfer
                      Regulations and the Money Laundering Regulations 2017);
                    </li>
                    <li classname="mb-2">
                      update all information you provide to us to keep it
                      accurate, current, complete and true;
                    </li>
                    <li classname="mb-2">
                      not use the Service for or in connection with any
                      Prohibited Purpose or attempt to tamper, hack, modify,
                      overload, or otherwise corrupt or circumvent the security
                      and/or functionality of the Website and/or the Application
                      or to infect it with any Malicious Code;
                    </li>
                    <li classname="mb-2">
                      transfer money only from your own credit, debit card or
                      bank account. You may not submit a transfer on behalf of
                      another person;
                    </li>
                    <li classname="mb-2">
                      not open more than one account with us;
                    </li>
                    <li classname="mb-2">
                      keep your Reference Number secure, you must not share the
                      Reference Number or any other transaction details with
                      anybody except the Recipient;
                    </li>
                    <li classname="mb-2">
                      use the Service to send money only to people that you know
                      personally or to pay for goods and services purchased from
                      suppliers of whom you have sufficient knowledge and whose
                      identity you verified. You acknowledge that we have no
                      control over the suppliers or over the goods and services
                      for which you use our Services to make payments and we
                      have no responsibility for the quality, safety, legality,
                      or the delivery of such goods or services to you.
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">
                  You understand and accept that:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      We are legally obliged to retain information about our
                      users and the transactions that we process for up to 5
                      years or as may be required from time to time by
                      applicable law or by any regulatory authorities;
                    </li>
                    <li className="list-lower">
                      All currency converted as part of the Service will be
                      converted using our rate of exchange (as published on the
                      Website and/or the Application or as may be communicated
                      to you before we issue a Confirmation);
                    </li>
                    <li className="list-lower">
                      We reserve the right to increase the FX Spread when the
                      markets are closed (weekends, bank holidays) to prevent
                      loss stemming from currencies fluctuating and ensure
                      payouts for our customers (we will still display the rate
                      that we are offering on the homepage and the final rate on
                      the checkout page before confirming the transaction);
                    </li>
                    <li className="list-lower">
                      Some countries may impose minimum and maximum thresholds
                      in relation to the amounts that can be sent through our
                      Service;
                    </li>
                    <li className="list-lower">
                      You will be liable to us for all losses which we suffer or
                      incur in relation to any fraud or fraudulent activity by
                      you;
                    </li>
                    <li className="list-lower">
                      You must call us or write an e-mail to us as soon as
                      possible if you believe or suspect that a transfer of
                      funds was not executed properly or that the amount has not
                      been received or was only partly received;
                    </li>
                    <li className="list-lower">
                      It is your responsibility to inform the Recipient of the
                      information he/she will need to provide in order to
                      collect the money you transfer through the Service (such
                      as photographic identification, the exact amount of the
                      send order and the Reference Number).
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>IX. Fees and payment methods</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  The prices for the Service consist of FX Spread and the Fees.
                </li>
                <li classname="mb-2">
                  Our Fees vary from time to time, but changes in the Fees will
                  not apply to any orders in respect for which we have already
                  sent you the Confirmation.
                </li>
                <li classname="mb-2">
                  If you pay by debit card it will be charged as soon as we
                  accept your request for the transfer.
                </li>
                <li classname="mb-2">
                  When you pay by debit card and your order is refused by your
                  bank or by the card issuer, your bank account will not be
                  debited. However, it is possible that your bank or the card
                  issuer might hold the amount you tried to send. If this
                  happens you will need to contact your bank or card issuer to
                  resolve the issue.
                </li>
                <li classname="mb-2">
                  Discounts on our Fees may be available through promotions that
                  we or our partners may offer from time to time. Promotions are
                  subject to terms and conditions and will be honoured in
                  accordance with their published terms.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>X. Cancellations and refunds</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  You have a right to cancel an order before payment has been
                  made to the Recipient. You may exercise this right by:
                  <br />
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      Calling us on{" "}
                      <a href="tel:4408025260000">+44(08025260000)</a>
                    </li>
                    <li className="list-lower">
                      Emailing us at{" "}
                      <a href="mailto:info@aremkopay.com">
                        {" "}
                        info@aremkopay.com
                      </a>
                    </li>
                    <li className="list-lower">
                      If you exercise your right to cancel the order after you
                      have already paid us the funds to be transferred:
                    </li>
                    <li className="list-lower">
                      we will refund money paid by you and intended for a
                      Recipient only under the condition that it has not already
                      been paid out to the Recipient in accordance with your
                      original instructions prior to the cancellation request;
                      and
                    </li>
                    <li className="list-lower">
                      we reserve the right to retain the Fees charged for the
                      Service (and we may charge you with those Fees if they
                      have not yet been paid); and
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">
                  if by the time you notify us of the cancellation of the
                  transfer we have already sent the money to one of our partners
                  in the country of destination, we may not be able to
                  successfully cancel the order, given that the cancellation
                  procedures with our partners differ in length and complexity,
                  as well as often require communication across time zones.
                </li>
                <li classname="mb-2">
                  Refunds can take up to 7 working days to be processed and this
                  depends as well on the customer's bank processes, which are
                  beyond our control.
                </li>
                <li classname="mb-2">
                  We reserve the right not to refund amounts smaller than £3 or
                  €3 and charge a refund fee of £3 or €3 (according to the
                  currency with which you pay us) if the refund has been
                  requested by the customer with no fault of our own.
                </li>
                <li classname="mb-2">
                  If we do not transfer the money to the Recipient in accordance
                  with an order within 45 days after your instructions have been
                  received, provided that you correctly followed our procedures
                  and complied with all our policies, you may ask for a refund
                  of the money transferred to us and intended for the Recipient.
                </li>
                <li classname="mb-2">
                  If the Recipient does not collect the money within 13 months
                  after the date it became available for collection, all rights
                  of cancellation of the order or refund of the money
                  transferred or the Fees shall be deemed to be waived by you.
                </li>
                <li classname="mb-2">
                  Your order expires after 1 month. In case the money has not
                  been collected (in the case of cash transfers) or the order
                  requires a correction, we reserve the right to cancel your
                  order without prior notice to you and to refund to you the
                  amount that was to be transferred. The refund will not include
                  the Fees paid for the Service, which we will retain.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>XI. Complaints</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  We value your feedback as it helps us improve our service. We
                  have established internal procedures for complaints. You can
                  make a complaint in writing to us regarding any aspect of the
                  Service by mail or e-mail to the following addresses:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      655 Center Street South Calgary Alberta
                    </li>
                    <li className="list-lower">
                      <a href="mailto:info@aremkopay.com">
                        {" "}
                        info@aremkopay.com
                      </a>
                    </li>
                  </ol>
                </li>
                <li classname="mb-2">
                  We will investigate your complaint and use reasonable
                  endeavours to come back to you with the results of our
                  investigation within 7 working days after receipt of your
                  complaint.
                </li>
                <li classname="mb-2">
                  If you are still dissatisfied with the manner in which we have
                  dealt with your complaint or the outcome of it, you have a
                  right to refer your complaint to the Financial Ombudsman
                  Service, South Quay Plaza, 183 Marsh Wall, London E14 9SR, Tel
                  No <a href="tel:08000234567">0800 0234 567 </a>, Email:{" "}
                  <a href="complaint.info@financial-ombudsman.org.uk">
                    complaint.info@financial-ombudsman.org.uk
                  </a>
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>
                XII. Money transfer and the payment services regulations
              </h2>
              <p>
                The Payment Services Regulations 2017 (hereinafter called "the
                Regulations") govern the transfer of money to recipients within
                the European Economic Area (being all members states of the
                European Union, together with Norway, Iceland and
                Liechtenstein), where the transfer of funds is carried out in
                Euros, Sterling or the currency of another EEA state which has
                not adopted the Euro as its currency.
              </p>
              <p>
                The Regulations regulate payment services, which have an
                electronic component and place payment services providers into
                certain categories as well as require certain payment
                institutions to be authorised by the FCA and to follow conduct
                of business rules. Please contact us at{" "}
                <a href="mailto:info@aremkopay.com"> info@aremkopay.com</a> for
                more information.
              </p>
              <h2 className>XIII. Written communications</h2>
              <p>
                Applicable laws and regulations require that some of the
                information we send to you or communications between you and us
                should be in writing. You agree to receive such written
                communications electronically. You also agree that electronic
                means of communication shall be effective for the purpose of the
                Contract between you and us. The foregoing does not affect your
                statutory rights.
              </p>
            </div>
            <div className="content-three mb_20">
              <h2 className>XIV. Notices and communications</h2>
              <p>
                All notices given to us must be in the English Language and sent
                to Aremko Pay, 8A Queen Victoria Street Reading, Berkshire
                RG11TG UK. We may give notices to you in connection with any
                aspect of the Service or any order either through the e-mail
                address or the postal address that you provided to us or in any
                other way permitted pursuant these Terms and Conditions. Notices
                to you will be deemed received and properly served immediately
                after an e-mail is sent to you at the address you provided, or
                where a notice is sent to your postal address, one day after the
                date of posting in the case of domestic notices and 6 days in
                the case of international mail.
              </p>
              <h2 className>XV. Transfer of rights and obligations</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  We shall be entitled, without your consent, to transfer our
                  rights and obligations under these Terms and Conditions and
                  under any Contract to any of our affiliates or to any entity
                  or person that acquires our business. Any such transfer of
                  rights and obligation will have effect upon notice being given
                  to you (including notices given through the Website or the
                  Application).
                </li>
                <li classname="mb-2">
                  We are entitled to perform our obligations to you through
                  subcontractors, agents and other third parties.
                </li>
                <li classname="mb-2">
                  You may only transfer your rights and obligations under the
                  Contract if we have agreed for this in writing.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>XV. Transfer of rights and obligations</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  If we fail, at any time during the term of the Contract, to
                  insist upon strict performance of any of your obligations
                  under the Contract or any clause of these Terms and
                  Conditions, or if we fail to exercise any of the rights or
                  remedies to which we are entitled under the Contract or by
                  law, this will not constitute a waiver of such rights or
                  remedies and will not relieve you from compliance with such
                  obligations.
                </li>
                <li classname="mb-2">
                  A waiver by us of any default will not constitute a waiver of
                  any subsequent default.
                </li>
                <li classname="mb-2">
                  No waiver by us of any term in these Terms and Conditions will
                  be effective unless it is expressly stated to be a waiver and
                  is communicated to you in writing in accordance with these
                  Terms and Conditions.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>XVII. Severability</h2>
              <p>
                If any court or competent authority holds that any of the
                provisions of these Terms and Conditions or any provisions of
                the Contract are invalid, unlawful or unenforceable to any
                extent, that shall not affect the other terms of these Terms and
                Conditions or the Contract which will continue in full force and
                effect to the fullest extent permitted by law.
              </p>
              <h2 className>XVIII. Entire agreement</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  These Terms and Conditions and any document expressly referred
                  to in them constitute the whole agreement between us and you
                  and supersede all previous discussions, correspondence,
                  negotiations, previous arrangement, understanding or agreement
                  between us and you relating to the subject matter hereof.
                </li>
                <li classname="mb-2">
                  You acknowledge that, in entering into the Contract and
                  accepting these Terms and Conditions, you do not rely on, or
                  will have no remedies in respect of, any representation or
                  warranty (whether made innocently or negligently) that is not
                  expressly set out in these Terms and Conditions or the
                  documents referred to in them.
                </li>
                <li classname="mb-2">
                  Nothing in this clause limits or excludes any liability for
                  fraud.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>
                XIX. Our right to vary these terms and conditions
              </h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  We reserve the right to revise, amend or replace these Terms
                  and Conditions from time to time.
                </li>
                <li classname="mb-2">
                  Our Terms and Conditions in force at the time that you order
                  Services from us will have effect between you and us for the
                  purpose of that order. We may notify you of a change to the
                  Terms and Conditions after you place an order but before we
                  send you the Confirmation, in which case, unless you notify us
                  within a reasonable period of time and in any event within
                  seven days that you wish to cancel the order, the revised
                  Terms and Conditions will apply.
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>XX. Third party rights</h2>
              <p>
                A person who is not a party to this Agreement shall have no
                rights to enforce the provisions of this Agreement under the
                Contracts (Rights of Third Parties) Act 1999.
              </p>
              <h2 className>XXI. Law and jurisdiction</h2>
              <p>
                Contracts for the purchase of our services using the Website or
                the Application and any dispute or claim arising out of or in
                connection with them or their subject matter or formation
                (including non-contractual disputes or claims) will be governed
                by English law. Any dispute or claim arising out of or in
                connection with such contracts or their formation (including
                non-contractual disputes or claims) will be subject to the
                non-exclusive jurisdiction of the courts of England and Wales.
                The foregoing shall be without prejudice to your statutory
                rights.
              </p>
              <h2 className>XXII. Intellectual property</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  The Website the content, the name Aremko Pay and other names,
                  logos, signs, domain names, email addresses and other
                  indications of origin displayed on the Website relating to our
                  products and/or services and all intellectual property
                  relating to them and contained in them (including but not
                  limited to copyrights, patents, database rights, design right,
                  trade marks,) ("IPRs") are owned by us, our affiliates or
                  third party licensors. Other names and logos of third party
                  product, service and companies displayed on the Website may be
                  the trademarks of third parties. You shall not acquire any
                  right, title or interest in any such IPRs by reason of the
                  Services or the Contract and all right, title and interest in
                  and to the Website and the Application shall remain our
                  property and/or the property of such other third parties.
                </li>
                <li classname="mb-2">
                  You may use the Website and the Application only for the
                  purpose of the bona fide use of our Services as an individual
                  consumer or business customer and only as permitted by these
                  Terms and Conditions or described on the Website. You are
                  authorized solely to view and to retain a copy of the pages of
                  the Website for your own personal use. The Website and the
                  Application and the Services may not be used for the purpose
                  of testing the Service or to obtain information about the
                  Service or about us. You may not duplicate, publish, modify,
                  create derivative works from, participate in the transfer or
                  sale of, post on the internet, or in any way distribute or
                  exploit the Website, the Application or any portion thereof
                  for any public or commercial use without our express written
                  permission. You may not: (a) use any robot, spider, scraper or
                  other automated device to access the Website or the
                  Application or to use the Service; and/or (b) remove or alter
                  any copyright, trade mark or other proprietary notice or
                  legend displayed on the Website (or printed pages of the
                  Website)
                </li>
              </ol>
            </div>
            <div className="content-three mb_20">
              <h2 className>XXIII. The company and how to get in touch</h2>
              <ol type="a" style={{ lineHeight: "1.8" }}>
                <li classname="mb-2">
                  Aremko Pay operates a website (the Website) that enable you to
                  transfer money using a device connected to the Internet and/or
                  a mobile phone.
                </li>
                <li classname="mb-2">
                  Aremko Pay is a company incorporated and licensed under the
                  laws of the United Kingdom, engaged in the business of funds
                  remittance with its Head Office located at 8A Queen Victoria
                  Street Reading, Berkshire RG11TG UK.
                </li>
                <li classname="mb-2">
                  Aremko Pay is regulated by the Financial Conduct Authority
                  under the Payment Service Regulations 2006 with firm reference
                  number 801282 as Small Payment Institution.
                </li>
                <li classname="mb-2">
                  We can be contacted via the following means:
                  <ol type="a" style={{ lineHeight: "1.8" }}>
                    <li className="list-lower">
                      Telephone:{" "}
                      <a href="tel:4408025260000">+44(08025260000)</a>
                    </li>
                    <li className="list-lower">
                      Post using the address: 8A Queen Victoria Street Reading,
                      Berkshire RG11TG UK
                    </li>
                    <li className="list-lower">
                      Email using the email address:{" "}
                      <a href="mailto:info@aremkopay.com">
                        {" "}
                        info@aremkopay.com
                      </a>
                    </li>
                    <li className="list-lower">
                      Website:{" "}
                      <a href="www.aremkopay.com" target="_blank">
                        www.aremkopay.com
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsandConditions;
