export type AgreementBlock =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string };

const RAW = `@@title@@Tavo Pilot Agreement
@@paragraph@@This is a summary of the key terms for your one-week free pilot with {{RESTAURANT}} in {{CITY}}. A full legal agreement is available on request.
@@subheading@@What's included
@@paragraph@@• 1-week free pilot — Tavo sets up and configures your interactive AI menu at no charge.
@@paragraph@@• Full onboarding support — we configure your menu, allergens, and train your team.
@@paragraph@@• Regular check-ins from the Tavo team throughout the pilot week.
@@subheading@@Holding deposit
@@paragraph@@A refundable £49 deposit is required to secure your onboarding slot. It is credited in full toward your first invoice if you continue, or refunded within 14 days if you don't.
@@subheading@@After the pilot
@@paragraph@@You decide whether to proceed — there is no obligation. If you'd like to continue, we'll agree pricing and sign a separate implementation agreement.
@@subheading@@During the pilot
@@paragraph@@Please don't trial a directly competing menu platform at the same venue during the pilot week. For 60 days after the pilot, we ask for right of first refusal before signing with a competitor.
@@subheading@@Intellectual property & data
@@paragraph@@Tavo retains all rights to the platform. Your menu content and branding remain yours. Diner data is processed in compliance with UK GDPR and is never sold or shared with third parties.
@@subheading@@Liability
@@paragraph@@The platform is provided "as is" during the pilot. Neither party is liable for indirect losses; total liability is capped at the holding deposit amount.
@@subheading@@Governing law
@@paragraph@@This agreement is governed by the laws of England and Wales.
@@paragraph@@By accepting below, {{RESTAURANT}} agrees to these terms on behalf of the restaurant.`;

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
