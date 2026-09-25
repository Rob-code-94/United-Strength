import { PRIVACY_POLICY } from "../../../data/legal-copy";
import V1LegalDocumentPage from "../../direction-v1/V1LegalDocumentPage";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Privacy Policy — permanent URL `/privacy-policy` (aliases `/privacy`).
 * Verbatim counsel text · V1 dark editorial shell.
 */
export default function PrivacyPage({ onBack, onNav }: PageProps) {
  return (
    <V1LegalDocumentPage
      doc={PRIVACY_POLICY}
      onBack={onBack}
      onNav={onNav}
      sibling={{ href: "/terms-of-service", label: "Terms of Service" }}
    />
  );
}
