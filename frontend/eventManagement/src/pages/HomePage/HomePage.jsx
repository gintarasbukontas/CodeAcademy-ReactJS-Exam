import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to GB Events</h1>
      <div className={styles.grid}>
        <div>
          <h2 style={{ color: "orange", marginTop: 0 }}>Download Festival</h2>
          <p>
            Download Festival is a rock festival created by Terrance Gough, held
            annually at the Donington Park motorsport circuit in Leicestershire,
            England (since 2003); in Paris, France (since 2016); at Parramatta
            Park, Sydney (since 2019); Flemington Racecourse in Melbourne (since
            2018) and at the Hockenheimring in Baden-Württemberg, Germany (since
            2022). <br />
            <br />
            Download at Donington is the most popular and has hosted some of the
            biggest names, including Iron Maiden, Black Sabbath, Slipknot,
            Metallica, Linkin Park, Korn, Soundgarden, Motörhead, Aerosmith,
            AC/DC, Def Leppard, Kiss, Judas Priest, Rammstein, Status Quo,
            Mötley Crüe, Journey, ZZ Top, Whitesnake, Faith No More, Guns N
            Roses, and Fall Out Boy.
          </p>
          <h2 style={{ color: "orange" }}>History</h2>
          <p>
            The Download Festival was conceived as a follow-up to the Monsters
            of Rock festivals which had been held at the Donington Park circuit
            between 1980 and 1996. The first Download Festival was created by
            Stuart Galbraith and co-booked by Andy Copping in 2003 in the same
            location.[1][2][3] Download was initially a two-day event, expanding
            to three days in 2005. The name Download was chosen for the festival
            for two reasons. Downloading was a dirty word in the music industry
            at the time, due to file sharing, and rock is seen as a rebellious
            genre of music. Also Download was to be a Monsters of Rock for the
            21st century and the internet would provide connectivity with its
            audience. The 2003 festival tickets had a code on them, which would
            allow festival goers to download tracks from bands which had played.
            Although this idea has been dropped in subsequent years, the
            festival organisers have nurtured an online community through the
            Download Festival Forums. Initially a sounding board for the fans
            (and critics) of the festival, the boards have become an integral
            part of the festival organisation with regular contributions from
            festival director John Probyn and promoter Andy Copping. The forums
            also provide face to face feedback through the Fan Forum meetings
            (started in 2006) and organise the Boardie BBQ (2006 on) and the
            Boardie Takeover night (2009), football tournaments and a pub quiz
            for the R.I.P. campers who arrive on a Wednesday night. When
            Download began, it took place on the Donington Park circuit infield
            as had Monsters of Rock. However, in 2008 developments for Formula
            One meant that the infield was no longer suitable as a festival
            site. The festival moved to the Sunday Markets site to the west of
            the circuit. Although adequate, numbers were limited and the
            location of the campsite meant that getting from tents to the arena
            was quite a hike. 2009 saw the arena move to a much more suitable
            location to the south of the circuit and has remained there every
            year since. In 2019 the capacity was 111,000.[4] Security for the
            festival has constantly been undertaken by professional crowd
            management specialists Specialized Security, although the campsite
            area has had various contractors throughout. From 2009 to 2019 and
            returning in 2021, there has been on-site radio broadcasting from
            Rock Radio on 87.7FM. This RSL broadcast has aired music from
            festival bands, interviews and news to the festival site and the
            surrounding area, with the signal reaching as far as Nottingham.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Download_Festival"
            style={{ padding: 0 }}
          >
            Click here to learn more
          </a>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Download2014.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
