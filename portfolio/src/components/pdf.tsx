"use client";

export const Pdf = () => {
  const pdfUrl = "/Kezon-Lacheteau-CV.pdf";

  return (
    <>
      <div className="border rounded-xl shadow-lg">
        <object
          className="w-full rounded-xl"
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="700"
        >
          <p>
            Il semble que votre navigateur ne peut pas afficher le PDF. Pas de soucis, vous pouvez 
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer"> le télécharger ici</a>.
          </p>
        </object>
      </div>
    </>
  );
};