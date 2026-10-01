// Politique de confidentialité de l'appli Portail Bedrock, en français puis en anglais, pour Google Play.
import type { Metadata } from "next";
import DocumentPage from "@/app/components/layout/DocumentPage";
import { privacyContactUrl, privacyPolicies, privacyUpdated } from "@/app/data/portailBedrockPrivacy";

const path = "/portail-bedrock/confidentialite";

export const metadata: Metadata = {
  title: "Politique de confidentialité de Portail Bedrock",
  description:
    "Ce que l'appli Android Portail Bedrock fait de tes données : rien ne quitte ton téléphone, sauf les images que tu choisis de partager. Pas de compte, pas de pub, pas de mesure d'audience.",
  alternates: { canonical: path },
  openGraph: { url: path },
};

const Page = () => (
  <DocumentPage>
    <div className="flex items-center gap-4 mb-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Portail Bedrock</p>
      <span className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent" />
    </div>
    <nav aria-label="Langue · Language" className="mb-12 flex gap-3 font-mono text-xs uppercase tracking-[0.15em]">
      {privacyPolicies.map((policy) => (
        <a
          key={policy.lang}
          href={`#${policy.lang}`}
          className="rounded-full border border-white/15 px-4 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {policy.lang === "fr" ? "Français" : "English"}
        </a>
      ))}
    </nav>
    {privacyPolicies.map((policy, index) => (
      <article key={policy.lang} id={policy.lang} lang={policy.lang} className={index > 0 ? "mt-24 border-t border-white/10 pt-24" : ""}>
        {index === 0 ? (
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{policy.title}</h1>
        ) : (
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{policy.title}</h2>
        )}
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          <time dateTime={privacyUpdated}>{policy.updatedLabel}</time>
        </p>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-paper sm:text-lg">{policy.intro}</p>
        {policy.sections.map((section) => (
          <section key={section.title} className="mt-12 max-w-3xl">
            <h3 className="text-xl font-semibold text-paper">{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p className="mt-12">
          <a
            href={privacyContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-strong to-fuchsia px-6 py-3 text-sm font-medium text-white"
          >
            {policy.contactLabel}
          </a>
        </p>
      </article>
    ))}
  </DocumentPage>
);

export default Page;
