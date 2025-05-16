interface PageMetadata {
  title: string;
  description: string;
}

export const updatePageMetadata = (page: string) => {
  const metadata: Record<string, PageMetadata> = {
    home: {
      title: "STAVEBNÍ PROGRESS - Montáž hal a zámečnické práce",
      description: "Specialista na montáž hal, zámečnické práce a stavební buňky - STAVEBNÍ PROGRESS"
    },
    "montaz-haly": {
      title: "Montáž hal | STAVEBNÍ PROGRESS",
      description: "Profesionální montáž průmyslových a skladových hal - STAVEBNÍ PROGRESS"
    },
    "zamecnicke-prace": {
      title: "Zámečnické práce | STAVEBNÍ PROGRESS",
      description: "Kompletní zámečnické služby včetně pálení plasmou - STAVEBNÍ PROGRESS"
    },
    reference: {
      title: "Reference | STAVEBNÍ PROGRESS",
      description: "Přehled našich realizovaných projektů - STAVEBNÍ PROGRESS"
    },
    kontakt: {
      title: "Kontakt | STAVEBNÍ PROGRESS",
      description: "Kontaktujte nás pro nezávaznou konzultaci - STAVEBNÍ PROGRESS"
    }
  };

  const pageData = metadata[page] || metadata.home;
  
  document.title = pageData.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', pageData.description);
} 