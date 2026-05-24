import Image from "next/image";

const aboutImage = {
  src: "/images/about/music-image-1.jpg",
  alt: "Alex working in a music setting",
  width: 2048,
  height: 1638
};

export const metadata = {
  title: "About | Alexander Chieng"
};

export default function AboutPage() {
  return (
    <section className="section-stack">
      <div className="max-w-3xl">
        <p className="body-copy">
          i&apos;m alex, a producer with a classical violin and jazz piano background. i've been making beats and producing songs for around 5 years, and i'm always looking to collaborate with artists from any genre! please reach out to me if you'd like to use any of my beats, or if you'd like to send you any of the (hundreds) more beats i've made.
        </p>
      </div>

      <div className="mt-10 max-w-4xl overflow-hidden rounded-[1.75rem]">
        <Image
          alt={aboutImage.alt}
          className="aspect-[5/4] w-full object-cover"
          height={aboutImage.height}
          priority
          sizes="(min-width: 1024px) 56rem, 100vw"
          src={aboutImage.src}
          width={aboutImage.width}
        />
      </div>
    </section>
  );
}
