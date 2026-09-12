import { useEffect, useState } from 'react';
import { Award, Expand, X } from 'lucide-react';

const certificates = [
  {
    title: 'Bootcamp de Machine Learning',
    institution: 'TOTVS',
    year: '2026',
    image: '/certificado_totvs_ML.png',
    alt: 'Certificado do Bootcamp de Machine Learning',
  },
  {
    title: 'Curso Hashtag Fullstack',
    institution: 'Hashtag',
    year: '2025',
    image: '/certificado_hashtag_fullstack.png',
    alt: 'Certificado do curso Fullstack',
  },
  {
    title: 'Curso Prompting Responsável',
    institution: 'Santander',
    year: '2026',
    image: '/certificado_santander_IA.png',
    alt: 'Certificado do curso de Prompting Responsável',
  },
];

export function CertificatesWindow() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section className="certificates-panel">
      <div className="certificates-heading">
        <Award size={24} />
        <div>
          <h2>Certificados</h2>
          <p>Formações, cursos e conquistas profissionais.</p>
        </div>
      </div>

      {certificates.map((certificate) => (
        <article className="certificado-card" key={certificate.title}>
          <div className="certificate-preview-area">
            <img className="certificate-preview" src={certificate.image} alt={certificate.alt} />
            <button className="certificate-action" type="button" onClick={() => setSelectedCertificate(certificate)}>
              <Expand size={16} />
              Ver certificado
            </button>
          </div>

          <div className="certificate-info">
            <Award size={24} />
            <div>
              <h3>{certificate.title}</h3>
              <p>
                {certificate.institution} · {certificate.year}
              </p>
            </div>
          </div>
        </article>
      ))}

      {selectedCertificate && (
        <div className="certificate-modal" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <section
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <h2 id="certificate-modal-title">{selectedCertificate.title}</h2>
              <button type="button" onClick={() => setSelectedCertificate(null)} aria-label="Fechar certificado ampliado">
                <X size={18} />
              </button>
            </div>
            <img src={selectedCertificate.image} alt={selectedCertificate.alt} />
          </section>
        </div>
      )}
    </section>
  );
}
