// Envoi des formulaires via Web3Forms (livraison réelle dans la boîte mail).
// La clé Web3Forms est PUBLIQUE (prévue pour le code côté client). On la
// définit ici par défaut pour que les formulaires fonctionnent sans config ;
// elle reste surchargeable par variable d'environnement.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "950cc4ff-047c-46c4-8a50-1e19851c676b";

export const isFormDeliveryEnabled = WEB3FORMS_KEY.length > 0;

export async function submitForm(
  payload: Record<string, string>
): Promise<boolean> {
  if (!isFormDeliveryEnabled) return false;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload })
    });
    const data = (await response.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export function openMailto(
  email: string,
  subject: string,
  body: string
): void {
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
