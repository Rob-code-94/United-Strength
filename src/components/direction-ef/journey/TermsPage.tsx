import { TERMS_OF_SERVICE } from "../../../data/legal-copy";
import V1LegalDocumentPage from "../../direction-v1/V1LegalDocumentPage";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Terms of Service — permanent URL `/terms-of-service` (aliases `/terms`).
 * Verbatim counsel text · V1 dark editorial shell.
 */
export default function TermsPage({ onBack, onNav }: PageProps) {
  return (
    <V1LegalDocumentPage
      doc={TERMS_OF_SERVICE}
      onBack={onBack}
      onNav={onNav}
      sibling={{ href: "/privacy-policy", label: "Privacy Policy" }}
    />
  );
}
