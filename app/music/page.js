import { AudioPlayer } from "@/components/audio-player";

const fullSongs = [
  {
    title: "face to face",
    collaborator: "azure",
    note: "hip-hop inflected rnb track with two distinct sections. features live strings played by myself, as well as saxophone played by andrew zhang. produced and co-written for azure.",
    src: "/audio/full-songs/facetoface.wav"
  },
  {
    title: "out of time",
    collaborator: "azure",
    note: "alt-pop track with layered synths, live bass, and a focus on vocal arrangement. produced and co-written for azure.",
    src: "/audio/full-songs/outoftime.wav"
  },
  {
    title: "tapestry",
    collaborator: "naveen",
    note: "afro-beat record with heavy jazz influences. inspired by isaiah falls.",
    src: "/audio/full-songs/tapestry.m4a"
  },
  {
    title: "temptation",
    collaborator: "naveen",
    note: "rnb track inspired by reuben james and carrtoons. features a live bass performance and layered vocal production.",
    src: "/audio/full-songs/temptation.m4a"
  }
];

const beatGenres = [
  {
    genre: "Trap",
    beats: [
      {
        title: "T1.1",
        artistTags: ["Drake", "Bryson Tiller"],
        note: "made in a hotel room in munich. samples vocals from face to face.",
        src: "/audio/beats/trap/t1.m4a"
      },
      {
        title: "T2.1",
        artistTags: ["Saba"],
        note: "jazz-influenced trap beat with a piano/sax sample. made on the plane back from budapest",
        src: "/audio/beats/trap/t2.m4a"
      },
      {
        title: "T3.1",
        note: "smooth, sliding trap beat. made for a beat battle game.",
        src: "/audio/beats/trap/bb7.m4a"
      }
    ]
  },
  {
    genre: "Pop",
    beats: [
      {
        title: "P1.1",
        artistTags: ["Dua Lipa", "Magdalena Bay"],
        note: "clean drums, and lots and lots of space. one of my favourite beats i've made",
        src: "/audio/beats/pop/p1.m4a"
      },
    ]
  },
  {
    genre: "R&B",
    beats: [
      {
        title: "Beat Title Five",
        artistTags: ["SZA", "Brent Faiyaz"],
        note: "Soft synth layers, restrained low end, and intimate groove.",
        src: "/audio/beats/rnb/beat-title-five.mp3"
      },
      {
        title: "Beat Title Six",
        artistTags: ["Summer Walker", "Giveon"],
        note: "Moody chords with a slow-burn pocket and vocal space.",
        src: "/audio/beats/rnb/beat-title-six.mp3"
      }
    ]
  },
  {
    genre: "Hip-Hop",
    beats: [
      {
        title: "H1.1",
        artistTags: ["JID", "Mos Def"],
        note: "samples one step ahead by aretha franklin. hard-hitting drums with a lot of movement in the sample.",
        src: "/audio/beats/hip-hop/beat-title-seven.mp3"
      },
      {
        title: "love u too",
        artistTags: ["J Dilla"],
        note: "heavily inspired by dilla's sound on donuts.",
        src: "/audio/beats/hip-hop/beat-title-eight.mp3"
      },
      {
        title: "no more",
        note: "some of my favourite drums i've programmed.",
        src: "/audio/beats/hip-hop/beat-title-eight.mp3"
      },
      {
        title: "no more",
        note: "some of my favourite drums i've programmed.",
        src: "/audio/beats/hip-hop/beat-title-eight.mp3"
      }
    ]
  }
];

export const metadata = {
  title: "Music | Alexander Chieng"
};

export default function MusicPage() {
  return (
    <section className="section-stack">
      <p className="eyebrow">Music</p>
      <h1 className="page-title mt-3">portfolio</h1>
      <p className="body-copy mt-5 max-w-3xl">
        songs and beats that i&apos;ve written and produced, either solo or in collaboration
        with other artists
      </p>

      <div className="mt-16">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <h2 className="mt-3 font-display text-4xl leading-none text-[color:var(--text)] sm:text-5xl">
              full songs
            </h2>
          </div>

          <div className="grid gap-y-12">
            {fullSongs.map((song) => (
              <article className="surface-card" key={song.title}>
                <p className="eyebrow">{song.collaborator}</p>
                <h3 className="mt-3 font-display text-3xl leading-none text-[color:var(--text)] sm:text-4xl">
                  {song.title}
                </h3>
                <p className="body-copy mt-4 max-w-2xl text-[0.98rem]">{song.note}</p>
                <AudioPlayer src={song.src} title={song.title} />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  {song.src}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <h2 className="mt-3 font-display text-4xl leading-none text-[color:var(--text)] sm:text-5xl">
              beats
            </h2>
          </div>

          <div className="grid gap-y-5">
            {beatGenres.map((group, groupIndex) => (
              <details
                className="genre-disclosure surface-card rounded-[1.75rem] border border-[color:rgba(24,21,18,0.1)] px-5 py-5 sm:px-7"
                key={group.genre}
                open={groupIndex === 0}
              >
                <summary className="genre-disclosure-summary flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow">{group.genre}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {group.beats.length} {group.beats.length === 1 ? "beat" : "beats"}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="genre-disclosure-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(24,21,18,0.12)] text-[color:var(--muted)] transition-transform duration-200"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
                  {group.beats.map((beat, beatIndex) => (
                    <article key={`${group.genre}-${beat.title}-${beatIndex}`}>
                      <h3 className="font-display text-3xl leading-none text-[color:var(--text)]">
                        {beat.title}
                      </h3>
                      {beat.artistTags?.length ? (
                        <div className="mt-4">
                          <p className="eyebrow">Artist reference tags</p>
                          <ul
                            aria-label={`${beat.title} artist reference tags`}
                            className="mt-3 flex flex-wrap gap-2"
                          >
                            {beat.artistTags.map((tag) => (
                              <li key={tag}>
                                <span className="inline-flex rounded-full border border-[rgba(24,21,18,0.14)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                                  {tag}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      <p className="body-copy mt-4 text-[0.98rem]">{beat.note}</p>
                      <AudioPlayer src={beat.src} title={beat.title} />
                      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                        {beat.src}
                      </p>
                    </article>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
