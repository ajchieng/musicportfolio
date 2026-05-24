const stats = [
  { value: "01", label: "Producer" },
  { value: "02", label: "Portfolio" },
  { value: "03", label: "Collabs" }
];

export const metadata = {
  title: "About | Alexander Chieng"
};

export default function AboutPage() {
  return (
    <section className="section-stack">
      <h1 className="page-title mt-3">about</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <p className="body-copy">
          i&apos;m alex, a producer with a classical violin and jazz piano background. i've been making beats and producing songs for around 5 years, and i'm always looking to collaborate with artists from any genre! 
        </p>
      </div>


    </section>
  );
}
