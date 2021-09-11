import React from "react"

const Cite = () => {
  return (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <h2>Pale Blue Dot</h2>
      <blockquote className="fs-6 justified ps-2 mb-1">
        Look again at that dot. That's here. That's home. That's us. On it
        everyone you love, everyone you know, everyone you ever heard of, every
        human being who ever was, lived out their lives. The aggregate of our
        joy and suffering, thousands of confident religions, ideologies, and
        economic doctrines, every hunter and forager, every hero and coward,
        every creator and destroyer of civilization, every king and peasant,
        every young couple in love, every mother and father, hopeful child,
        inventor and explorer, every teacher of morals, every corrupt
        politician, every "superstar," every "supreme leader," every saint and
        sinner in the history of our species lived there--on a mote of dust
        suspended in a sunbeam.
      </blockquote>
      <cite className="fs-5 ps-2">Carl Sagan, Pale Blue Dot, 1994</cite>
      <br />
    </div>
  )
}

export default Cite
