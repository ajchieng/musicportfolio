import { AudioPlayer } from "@/components/audio-player";
import { DisclosureSection } from "@/components/disclosure-section";

const fullSongs = [
  {
    title: "face to face",
    collaborator: "azure",
    note: "hip-hop inflected rnb track with two distinct sections. features live strings played by myself, as well as saxophone played by andrew zhang. produced and co-written for azure.",
    src: "/audio/full-songs/facetoface.m4a",
    startTime: 233
  },
  {
    title: "out of time",
    collaborator: "azure",
    note: "alt-pop track with layered synths, live bass, and a focus on vocal arrangement. produced and co-written for azure.",
    src: "/audio/full-songs/outoftime.m4a",
    startTime: 172
  },
  {
    title: "tapestry",
    collaborator: "naveen",
    note: "afro-beat record with heavy jazz influences. inspired by isaiah falls.",
    src: "/audio/full-songs/tapestry.m4a",
    startTime: 80
  },
  {
    title: "temptation",
    collaborator: "naveen",
    note: "rnb track inspired by reuben james and carrtoons. features a live bass performance and layered vocal production.",
    src: "/audio/full-songs/temptation.m4a",
    startTime: 50
  }
];

const beatGenres = [
  {
    genre: "R&B",
    beats: [
      {
        title: "R1.1",
        artistTags: ["Isaiah Rashad"],
        note: "dreamy, ethereal sax layered on a laid back funk groove.",
        src: "/audio/beats/rnb/r1.m4a",
        startTime: 22
      },
      {
        title: "R2.1",
        artistTags: ["J Dilla", "D'Angelo"],
        note: "super laid-back groove with a drunken dilla time feel.",
        src: "/audio/beats/rnb/r2.m4a",
        startTime: 30
      },
      {
        title: "R3.1",
        artistTags: ["Brent Faiyaz"],
        note: "acoustic guitar, synth stabs, and a bouncy groove.",
        src: "/audio/beats/rnb/r3.m4a",
        startTime: 15
      },
      {
        title: "R4.1",
        artistTags: ["Sam Wills", "Reuben James"],
        note: "smooth synth chords with a live bassline and jazzy drums.",
        src: "/audio/beats/rnb/r4.m4a",
        startTime: 30
      },
      {
        title: "R5.1",
        artistTags: ["Sam Wills", "Mac Ayres"],
        note: "spacey, ambient vibe with soft, felt acoustic piano and a trumpet sample.",
        src: "/audio/beats/rnb/r5.m4a",
        startTime: 0
      },
    ]
  },
  {
    genre: "Hip-Hop",
    beats: [
      {
        title: "H1.1",
        artistTags: ["JID", "Mos Def"],
        note: "samples one step ahead by aretha franklin. hard-hitting drums with a lot of movement in the sample.",
        src: "/audio/beats/hip-hop/h1.m4a",
        startTime: 23
      },
      {
        title: "H2.2",
        artistTags: ["Mos Def", "Common"],
        note: "boom bap style beat with a jazzy piano sample and strings",
        src: "/audio/beats/hip-hop/h2.m4a",
        startTime: 0
      },
      {
        title: "love takes over",
        artistTags: ["Kendrick Lamar"],
        note: "inspired by duckworth on DAMN",
        src: "/audio/beats/hip-hop/lovetakesover.m4a",
        startTime: 40
      },
      {
        title: "love u too",
        artistTags: ["J Dilla"],
        note: "heavily inspired by dilla's sound on donuts.",
        src: "/audio/beats/hip-hop/loveutoo.m4a",
        startTime: 40
      },
      {
        title: "no more",
        note: "some of my favourite drums i've programmed.",
        src: "/audio/beats/hip-hop/nomore.m4a",
        startTime: 20
      }
    ]
  },
  {
    genre: "Trap",
    beats: [
      {
        title: "T1.1",
        artistTags: ["Drake", "Bryson Tiller"],
        note: "made in a hotel room in munich. samples vocals from face to face.",
        src: "/audio/beats/trap/t1.m4a",
        startTime: 12
      },
      {
        title: "T2.1",
        artistTags: ["Saba"],
        note: "jazz-influenced trap beat with a piano/sax sample. made on the plane back from budapest",
        src: "/audio/beats/trap/t2.m4a",
        startTime: 19
      },
      {
        title: "T3.1",
        note: "smooth, sliding trap beat. made for a beat battle game.",
        src: "/audio/beats/trap/bb7.m4a",
        startTime: 0
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
        src: "/audio/beats/pop/p1.m4a",
        startTime: 37
      },
      {
        title: "P2",
        artistTags: ["The Marias", "Tame Impala"],
        note: "dreamy indie pop beat. acoustic drums and lots of synths.",
        src: "/audio/beats/pop/p2.m4a",
        startTime: 120
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
      <h1 className="page-title mt-3">portfolio</h1>
      <p className="body-copy mt-5 max-w-3xl">
        songs and beats that i&apos;ve written and produced, either solo or in collaboration
        with other artists
      </p>

      <div className="music-section mt-16">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="eyebrow">01 / beats</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-[color:var(--text)] sm:text-5xl">
              beats
            </h2>
            <p className="body-copy mt-4 text-sm">
              instrumentals grouped by genre
            </p>
          </div>

          <div className="grid gap-y-5">
            {beatGenres.map((group) => (
              <DisclosureSection
                countLabel={`${group.beats.length} ${group.beats.length === 1 ? "beat" : "beats"}`}
                eyebrow={group.genre}
                key={group.genre}
              >
                <div className="music-entry-grid mt-8 grid gap-x-10 md:grid-cols-2">
                  {group.beats.map((beat, beatIndex) => (
                    <article
                      className="music-entry surface-card"
                      key={`${group.genre}-${beat.title}-${beatIndex}`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                        <h3 className="font-display text-3xl leading-none text-[color:var(--text)]">
                          {beat.title}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                          beat
                        </p>
                      </div>
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
                      <AudioPlayer
                        src={beat.src}
                        startTime={beat.startTime}
                        title={beat.title}
                      />
                    </article>
                  ))}
                </div>
              </DisclosureSection>
            ))}
          </div>
        </div>
      </div>

      <div className="music-section mt-24">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="eyebrow">02 / songs</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-[color:var(--text)] sm:text-5xl">
              songs
            </h2>
            <p className="body-copy mt-4 text-sm">
              full productions and artist records
            </p>
          </div>

          <DisclosureSection
            countLabel={`${fullSongs.length} ${fullSongs.length === 1 ? "song" : "songs"}`}
            eyebrow="full songs"
          >
            <div className="music-entry-list mt-8">
              {fullSongs.map((song) => (
                <article className="music-entry surface-card" key={song.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <p className="eyebrow">{song.collaborator}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      song
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-none text-[color:var(--text)] sm:text-4xl">
                    {song.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-2xl text-[0.98rem]">{song.note}</p>
                  <AudioPlayer
                    src={song.src}
                    startTime={song.startTime}
                    title={song.title}
                  />
                </article>
              ))}
            </div>
          </DisclosureSection>
        </div>
      </div>
    </section>
  );
}
