export type AgreementBlock =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string };

const RAW = `@@title@@Tavo Pilot Agreement
@@subheading@@What's included
@@paragraph@@1-week free pilot — Tavo configures your AI menu, trains your team, and provides check-ins. No charge. A refundable £49 deposit secures your slot; credited against your first invoice if you continue, or refunded in 14 days if not.
@@subheading@@After the pilot
@@paragraph@@No obligation to continue. If you do, pricing is agreed separately in a new agreement.
@@subheading@@During the pilot
@@paragraph@@Don't run a directly competing menu platform at the same venue. Right of first refusal applies for 60 days after the pilot ends.
@@subheading@@IP, data & liability
@@paragraph@@Tavo owns the platform; you keep your menu and branding. Diner data is UK GDPR compliant and never sold. Platform is provided "as is"; liability is capped at the deposit amount. Governed by the laws of England and Wales.
@@paragraph@@By accepting, {{RESTAURANT}} agrees to these terms.`;

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
