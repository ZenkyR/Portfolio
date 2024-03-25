"use client";

export const Pdf = () => {
  const pdfUrl = "/Kezon-Lacheteau-CV.pdf";

  return (
    <>
      <div className=" rounded-xl shadow-lg flex justify-center items-center overflow-hidden h-full">
        <object
          className="w-full h-full"
          data={pdfUrl}
          type="application/pdf"
          style={{ minHeight: "70vh", marginTop: "5vh" }}
        >
          <p>
            Il semble que votre navigateur ne peut pas afficher le PDF. Pas de soucis, vous pouvez 
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{color: "white"}}> le télécharger ici</a>.
          </p>
        </object>
      </div>
    </>
  );
};