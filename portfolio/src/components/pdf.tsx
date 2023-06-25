"use client";

export const Pdf = () => {
  return (
    <>
      <div className="border rounded-xl shadow-lg">
        <embed
          className="w-full rounded-xl"
          src="/Kezon-Lacheteau-CV.pdf"
          height="700"
          type="application/pdf"
        ></embed>
      </div>
    </>
  );
};
