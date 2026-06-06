export type AgreementBlock =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string };

const RAW = `@@title@@PILOT AGREEMENT
relating to Tavo, the interactive menu platform

Dated [6th June] 2026
@@heading@@PARTIES
This Agreement is between:
(1) Tavo, the interactive menu platform (the "Provider"); and
(2) {{RESTAURANT}}, the restaurant based in {{CITY}} (the "Client").
Together, we are the "Parties". The rest of this Agreement sets out how the pilot will work.
@@heading@@BACKGROUND
(A) The Provider has developed and operates Tavo, a cloud-based, AI-powered interactive menu platform for hospitality venues (the "Platform"), the principal features of which are described in clause 2.
(B) The Client operates a restaurant business in {{CITY}} (the "Venue") and, following a demonstration of the Platform by the Provider and the onboarding of the Venue onto the Platform, wishes to evaluate the Platform under live operating conditions.
(C) The Parties have agreed to conduct a structured one-week pilot of the Platform on the terms set out in this Agreement, and to record the basis on which the Client may elect to proceed to a full implementation of the Platform following that pilot.
@@heading@@AGREED TERMS
@@subheading@@1. Definitions and interpretation
1.1 In this Agreement, the following definitions apply:
"Commencement Date": the date on which the Pilot Period begins, as stated in Schedule 1 (or, if not stated, the date of this Agreement).
"Commission": the commission payable to the Client in respect of Qualifying Event Bookings, as described in clause 7 and Schedule 2.
"Confidential Information": all information of a confidential nature (however recorded) disclosed by one Party to the other in connection with this Agreement, including the terms of this Agreement and the Platform.
"Data Protection Legislation": the UK GDPR, the Data Protection Act 2018, and all other applicable laws relating to the processing of personal data.
"Diner": an end customer of the Venue who interacts with the Platform.
"Diner Data": personal data relating to Diners that is collected or processed through the Platform.
"Event Partner": a third party providing entertainment, hospitality or experiences (for example cinema, comedy or live events) made available through the Platform.
"Full Implementation": the full deployment and ongoing provision of the Platform to the Client following a successful Pilot.
"Full Implementation Agreement": a separate written agreement governing the Full Implementation, as contemplated by clause 8.
"Holding Deposit": the sum of £49 (forty-nine pounds), payable under clause 6.
"Pilot": the evaluation of the Platform at the Venue under this Agreement.
"Pilot Period": the period of seven (7) days commencing on the Commencement Date, unless extended under clause 4.2.
"Qualifying Event Booking": a booking or purchase of an Event Partner offering made by a Diner through the Platform and attributable to the Venue.
"Success Metrics": the metrics set out in Schedule 1 against which the Pilot is to be evaluated.
1.2 In this Agreement: clause headings do not affect its interpretation; "including" and "in particular" are without limitation; a reference to legislation includes its amendments and re-enactments; the singular includes the plural and vice versa; and a reference to a "person" includes a natural person and a body corporate.
@@subheading@@2. The Platform
2.1 The Platform is an interactive, mobile, AI-powered menu accessed by Diners by scanning a QR code at the Venue. Its principal features are:
(a) guided onboarding of the Diner, by voice or short questions, to capture dietary requirements, allergies and taste preferences;
(b) a conversational AI concierge that answers questions about the menu, explains unfamiliar dishes, and makes personalised dish recommendations grounded in the Venue's actual menu;
(c) interactive visual presentation of dishes;
(d) allergen- and diet-aware filtering, such that dishes conflicting with a Diner's stated requirements are clearly identified;
(e) a memory capability enabling the Platform to recognise returning Diners and personalise their experience over time; and
(f) the Events feature described in clause 2.2.
2.2 Events feature. Following a Diner's meal, the Platform may present curated recommendations for post-dining experiences provided by Event Partners (such as a film, comedy or live event) selected as appropriate to the Diner and their party. Where a Diner books or purchases such an experience through the Platform, the Client shall be entitled to a Commission in accordance with clause 7 and Schedule 2.
2.3 During the Pilot, the Platform is provided on an evaluation basis as further described in clause 13.
@@subheading@@3. The Pilot
3.1 With effect from the Commencement Date and for the Pilot Period, the Provider shall make the Platform available for use at the Venue for the purpose of the Pilot.
3.2 The Provider shall: (a) configure and onboard the Venue's menu onto the Platform; (b) provide reasonable set-up support and training to the Client's staff; and (c) make a representative available for regular check-ins during the Pilot Period.
3.3 The Client shall: (a) co-operate with the Provider and provide timely access to the information and personnel reasonably required for the Pilot; (b) provide accurate and complete menu, ingredient and allergen information for configuration; (c) brief and encourage its staff to support use of the Platform at the Venue; and (d) use the Platform only in accordance with this Agreement and the Provider's reasonable instructions.
@@subheading@@4. Pilot period
4.1 The Pilot shall commence on the Commencement Date and continue for the Pilot Period, unless terminated earlier in accordance with clause 15.
4.2 The Pilot Period may be extended only by written agreement of both Parties.
@@subheading@@5. Evaluation and success metrics
5.1 During the Pilot Period, the Parties shall in good faith measure the performance of the Platform against the Success Metrics set out in Schedule 1, which include (without limitation) improvements in customer satisfaction, customer retention, top-line revenue growth, and Commissions earned through the Events feature.
5.2 The Parties shall agree the relevant baseline and the method of measurement for each Success Metric before, or as soon as reasonably practicable after, the Commencement Date.
5.3 Promptly following the end of the Pilot Period, the Parties shall jointly review the results against the Success Metrics.
5.4 The Client shall be entitled to determine, in its discretion, whether the Pilot has been successful and whether it wishes to proceed to Full Implementation. The Success Metrics are intended to inform that decision.
@@subheading@@6. Holding deposit
6.1 On or before the Commencement Date, the Client shall pay to the Provider the Holding Deposit of £49.
6.2 The Holding Deposit secures the Provider's reservation of onboarding capacity and resources for the Client during the Pilot.
6.3 The Holding Deposit is fully refundable. If, following the Pilot, the Client elects not to proceed to Full Implementation, or if this Agreement is terminated other than for the Client's material breach, the Provider shall refund the Holding Deposit in full within fourteen (14) days.
6.4 If the Client proceeds to Full Implementation, the Holding Deposit shall be credited in full against the first invoice issued under the Full Implementation Agreement.
6.5 Save for the Holding Deposit, no fees are payable by the Client for the Pilot itself.
@@subheading@@7. Commissions and events
7.1 The Provider shall be responsible for establishing and maintaining arrangements with Event Partners.
7.2 The Client shall be entitled to a Commission in respect of each Qualifying Event Booking, calculated as set out in Schedule 2.
7.3 During the Pilot Period, Commissions earned shall be recorded and reported by the Provider as part of the Success Metrics, and shall be reconciled and paid to the Client within the period stated in Schedule 2 after the end of the Pilot Period.
7.4 The Provider shall provide the Client with a reasonable breakdown of Qualifying Event Bookings and Commissions on request.
@@subheading@@8. Full implementation
8.1 If, following the Pilot, the Client wishes to proceed to Full Implementation, the Parties shall negotiate in good faith with a view to entering into a Full Implementation Agreement.
8.2 The fees payable for the Full Implementation shall be as agreed between the Parties at that time and recorded in the Full Implementation Agreement.
8.3 Exclusivity during the Pilot. During the Pilot Period, the Client shall not trial or operate at the Venue any platform that competes with the Platform.
8.4 Right of first refusal. During the Pilot Period and for a period of sixty (60) days following its end, the Client shall not enter into an agreement with any third party for an interactive menu or substantially similar platform without first offering the Provider a reasonable opportunity to provide the Full Implementation on equivalent terms.
8.5 No obligation to proceed. For the avoidance of doubt, and notwithstanding any other provision of this Agreement, neither Party is obliged to enter into the Full Implementation Agreement. The decision whether to proceed rests with the Client in its discretion, and any Full Implementation is subject to the negotiation and execution of a separate written agreement.
@@subheading@@9. Fees, invoicing and payment
9.1 The only sum payable by the Client under this Agreement is the Holding Deposit.
9.2 All sums are exclusive of VAT, which shall be added where applicable.
9.3 Each payment shall be made to the bank account notified by the receiving Party.
@@subheading@@10. Intellectual property
10.1 All intellectual property rights in and to the Platform, including all software, content and designs and any improvements, enhancements or modifications (including any arising from or based on the Client's feedback), are and shall remain the exclusive property of the Provider.
10.2 The Client retains all rights in its own trade marks, branding, menu content and other materials it provides (the "Client Materials"), and grants the Provider a non-exclusive, royalty-free licence to use the Client Materials to the extent necessary to provide the Platform and conduct the Pilot.
10.3 Rights in and obligations relating to Diner Data are governed by clause 11.
@@subheading@@11. Data protection
11.1 Each Party shall comply with the Data Protection Legislation in connection with this Agreement.
11.2 The Parties acknowledge that, in operating the Platform, the Provider processes Diner Data, and that the Parties shall enter into a data processing agreement recording their respective roles and obligations where required by the Data Protection Legislation.
11.3 The Provider shall implement appropriate technical and organisational measures to protect Diner Data, and shall enable Diners to exercise their rights under the Data Protection Legislation, including the right to erasure.
11.4 The Provider shall not transfer Diner Data outside the United Kingdom without ensuring an adequate level of protection in accordance with the Data Protection Legislation.
11.5 Diner Data shall be collected and used only with appropriate notice to, and where required the consent of, Diners.
@@subheading@@12. Confidentiality
12.1 Each Party shall keep confidential the other Party's Confidential Information and shall not use it other than for the purposes of this Agreement.
12.2 This obligation does not apply to information that is or becomes public other than through breach of this Agreement, was lawfully known before disclosure, or is required to be disclosed by law or a regulator.
12.3 This clause survives termination of this Agreement.
@@subheading@@13. Warranties and disclaimers
13.1 Each Party warrants that it has the authority to enter into this Agreement.
13.2 The Client acknowledges that, during the Pilot, the Platform is provided on an "as is" and "as available" basis for evaluation purposes and that, to the maximum extent permitted by law, the Provider gives no warranties, conditions or representations in respect of the Platform during the Pilot, whether express or implied, including as to fitness for a particular purpose, uninterrupted availability, or freedom from errors.
@@subheading@@14. Limitation of liability
14.1 Nothing in this Agreement limits or excludes either Party's liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited or excluded by law.
14.2 Subject to clause 14.1, neither Party shall be liable for any indirect or consequential loss, or for any loss of profit, revenue, business or anticipated savings.
14.3 Subject to clause 14.1, each Party's total aggregate liability arising out of or in connection with this Agreement shall not exceed the amount of the Holding Deposit.
@@subheading@@15. Term and termination
15.1 This Agreement takes effect on the date stated at the beginning of it and continues until the end of the Pilot Period, unless terminated earlier in accordance with this clause.
15.2 Either Party may terminate this Agreement on three (3) days' written notice to the other.
15.3 Either Party may terminate immediately by written notice if the other commits a material breach that is not remedied within five (5) days of notice, or becomes insolvent.
15.4 On termination or expiry: (a) the Client shall cease using the Platform; (b) each Party shall, on request, return or destroy the other's Confidential Information; and (c) the Provider shall refund the Holding Deposit in accordance with clause 6.3 (where applicable).
15.5 Clauses that by their nature are intended to survive termination shall do so, including clauses 10, 11, 12, 14 and 16.
@@subheading@@16. General
16.1 Entire agreement. This Agreement constitutes the entire agreement between the Parties in relation to the Pilot and supersedes all prior discussions, representations and arrangements. Each Party acknowledges that it has not relied on any statement not set out in this Agreement.
16.2 Variation. No variation of this Agreement is effective unless in writing and signed by both Parties.
16.3 No partnership or agency. Nothing in this Agreement creates a partnership, joint venture or agency between the Parties.
16.4 Assignment. Neither Party may assign this Agreement without the other's prior written consent, save that the Provider may assign to a successor of its business.
16.5 Severability. If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions continue in full force.
16.6 Notices. Notices under this Agreement must be in writing and sent to the addresses stated above or to the email addresses notified by the Parties.
16.7 Third party rights. A person who is not a Party has no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of this Agreement.
16.8 Counterparts. This Agreement may be executed in counterparts and by electronic signature, each of which is an original and which together constitute one agreement.
16.9 Governing law and jurisdiction. This Agreement and any dispute arising out of or in connection with it are governed by the laws of England and Wales, and the Parties submit to the exclusive jurisdiction of the courts of England and Wales.
@@heading@@EXECUTION
This Agreement has been entered into on the date stated at the beginning of it.
SIGNED for and on behalf of Tavo (the Provider): Abhinav Gupta, Co-Founder.
SIGNED for and on behalf of {{RESTAURANT}} (the Client): accepted electronically by the authorised signatory named on the form.`;

export interface CompanyInfo {
  restaurantName: string;
  city: string;
}

export function buildAgreement({ restaurantName, city }: CompanyInfo): AgreementBlock[] {
  const restaurant = restaurantName.trim() || "[RESTAURANT NAME]";
  const venueCity = city.trim() || "[CITY]";

  return RAW.split("\n").map<AgreementBlock>((line) => {
    const text = line
      .replace(/\{\{RESTAURANT\}\}/g, restaurant)
      .replace(/\{\{CITY\}\}/g, venueCity);

    if (text.startsWith("@@title@@")) return { type: "title", text: text.replace("@@title@@", "") };
    if (text.startsWith("@@heading@@")) return { type: "heading", text: text.replace("@@heading@@", "") };
    if (text.startsWith("@@subheading@@")) return { type: "subheading", text: text.replace("@@subheading@@", "") };
    return { type: "paragraph", text };
  });
}
