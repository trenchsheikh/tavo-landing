export type AgreementBlock =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string };

const RAW = `@@title@@Tavo Pilot Agreement
@@subheading@@The pilot
@@paragraph@@Free for 1 week — a refundable £49 deposit holds your slot.
@@subheading@@Terms
@@paragraph@@No obligation after; no competing platform during the pilot.
@@subheading@@Your data
@@paragraph@@You keep your menu and branding; data is never sold. Liability is capped at the deposit, under English law.`;

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
