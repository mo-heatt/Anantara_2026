// ===================== AOS INITIALIZATION & PARALLAX =====================
// Sets up AOS scroll animations and a simple scroll-based parallax
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

  const guardian = document.querySelector(".cinema-guardian");
  const city = document.querySelector(".cinema-city");

  window.addEventListener("scroll", () => {
    const y = window.scrollY || window.pageYOffset;
    if (guardian) {
      guardian.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
    }
    if (city) {
      city.style.transform = `translate3d(0, ${y * -0.02}px, 0)`;
    }
  });
});

// ===================== NAVBAR BACKGROUND ON SCROLL =====================
// Darkens the navbar background after scrolling down a bit
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (window.scrollY > 100) {
    nav.style.background = "rgba(4, 13, 14, 0.95)";
  } else {
    nav.style.background = "rgba(4, 13, 14, 0.6)";
  }
});

// ===================== SMOOTH SCROLL FOR ANCHOR LINKS =====================
// Smoothly scrolls to any in-page anchor, offsetting for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", event => {
    event.preventDefault();
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// ===================== GLASS CARD HOVER ACCENT =====================
// Changes border color of .glass cards on hover
const glassCards = document.querySelectorAll(".glass");

glassCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "rgba(184, 115, 51, 0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "rgba(184, 115, 51, 0.2)";
  });
});

// ===================== SIGIL FLOATING DELAY STAGGER =====================
// Adds staggered animation delays to all sigils
const sigils = document.querySelectorAll(".sigil");

sigils.forEach((sigil, index) => {
  sigil.style.animationDelay = `${index * 1.2}s`;
});

// ===================== REGISTRATION FORM HANDLER =====================
// Opens the Google Form in a new tab when "REGISTER NOW" is clicked
function openRegistrationForm() {
  window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
}

// ===================== EVENT DETAILS MODAL CONTENT =====================
// HTML snippets for each event, injected into the modal on click
const eventDetails = {
  // PRE-EVENTS
  frames: `
    <h2>Frames of Forgotten Valley</h2>
    <p><strong>Type:</strong> Reel Making (Pre-Event)</p>
    <p><strong>Duration:</strong> Maximum 1 minute</p>

    <h3>Rules</h3>
    <ul>
      <li>Create a video promoting Anantara in a humorous or funny manner.</li>
      <li>Do not mention your college name in the video.</li>
      <li>Video length must not exceed 1 minute.</li>
      <li>Use of inappropriate language leads to direct disqualification.</li>
      <li>Fake likes or any attempt to manipulate engagement will result in disqualification.</li>
      <li>Videos must be submitted via email to anantara.2026sdcce@gmail.com by 18th January 2026, 12:00 PM.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Number of likes</li>
      <li>Creativity</li>
      <li>Concept</li>
      <li>Overall presentation</li>
    </ul>
  `,

  banners: `
    <h2>Banners of Harappan</h2>
    <p><strong>Theme:</strong> Rise of Indus</p>

    <h3>Rules</h3>
    <ul>
      <li>Team composition: Individual or team of two (only one entry per team).</li>
      <li>Model must be prepared at home and brought ready on event day.</li>
      <li>Flag must be prepared prior to the event.</li>
      <li>Clarity of the theme is most important.</li>
      <li>Flag should align with the theme as well as the allotted team name.</li>
      <li>Legacy call of the team must be written on the flag.</li>
      <li>Flag should be painted on cloth material.</li>
      <li>Dimensions: 100 cm (Width) × 75 cm (Height).</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Uniqueness</li>
      <li>Imagination</li>
      <li>Creativity</li>
      <li>Quality: composition, design elements, and colour</li>
      <li>Overall artistic impression</li>
      <li>Relevance to the theme</li>
    </ul>
  `,

  icebreaker: `
    <h2>Ice Breaker</h2>
    <p><strong>Type:</strong> Pre-Event Video</p>

    <h3>Rules</h3>
    <ul>
      <li>Record a short video introducing the team in a fun, creative, and energetic manner.</li>
      <li>Do not reveal the college name; only the assigned team name may be used.</li>
      <li>Video should reflect positive spirit and creativity; humour must remain clean and respectful.</li>
      <li>No inappropriate language, vulgarity, or offensive gestures.</li>
      <li>Content must be original; plagiarised or copied content is not accepted.</li>
      <li>Submit video via email to anantara.2026sdcce@gmail.com on or before 19th January 2026, 12:00 PM.</li>
      <li>File name format: TeamName_IceBreaker_Anantara2026.</li>
      <li>Unsafe props or hazardous materials are strictly prohibited.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Energy & engagement</li>
      <li>Creativity</li>
      <li>Team coordination</li>
      <li>Humour & entertainment</li>
      <li>Overall presentation</li>
    </ul>
  `,

  bestout: `
    <h2>Best Out of Waste</h2>
    <p><strong>Team:</strong> Individual or team of two (one entry per team)</p>

    <h3>Rules & Guidelines</h3>
    <ul>
      <li>Model must be prepared at home and brought ready on event day.</li>
      <li>Theme: creation must relate to the Rise of Indus (craftsmanship, lifestyle, motifs, ancient utilities, sustainability, etc.).</li>
      <li>Materials allowed: only waste materials (discarded, broken, old, or used items). No new materials allowed.</li>
      <li>Prohibited: hazardous items, sharp objects, chemicals, flammable materials, pre-made or partially finished products.</li>
      <li>Product must be made entirely from waste; no assembling or altering at the venue.</li>
      <li>Theme connection must be clearly visible.</li>
      <li>Each team gets 2 minutes to explain concept, theme relevance, materials used, and purpose.</li>
      <li>Use of new/unsafe materials, off-theme models, ready-made items, or inappropriate behaviour will lead to disqualification.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Creativity & innovation</li>
      <li>Theme relevance</li>
      <li>Utility</li>
      <li>Aesthetics</li>
      <li>Overall execution</li>
    </ul>
  `,

  // ON-STAGE EVENTS
  debate: `
    <h2>Indus Opinion Clash</h2>
    <p><strong>Type:</strong> Debate Competition</p>

    <h3>Sample Topics</h3>
    <ul>
      <li>Was the Indus Civilization more advanced than today’s world?</li>
      <li>Order vs. Chaos: What truly drives a civilisation forward?</li>
      <li>If the Indus people existed today, would they embrace or reject modern technology?</li>
      <li>Does progress destroy culture or reshape it?</li>
      <li>Is creativity more powerful than logic in building a civilisation?</li>
    </ul>

    <h3>Team & Format</h3>
    <ul>
      <li>2 participants per team.</li>
      <li>Total time: 10 minutes.</li>
      <li>Includes opening speech, arguments, rebuttals, and closing.</li>
    </ul>

    <h3>Conduct Rules</h3>
    <ul>
      <li>No phones or electronic devices.</li>
      <li>Maintain discipline and respect at all times.</li>
      <li>No vulgarity or personal attacks.</li>
      <li>Report 10 minutes before the event.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Absurdity level (creative logic)</li>
      <li>Clarity & oratory</li>
      <li>Persuasiveness</li>
      <li>Team coordination</li>
    </ul>
  `,

  sharktank: `
    <h2>Shark Tank</h2>
    <p><strong>Theme:</strong> Ideas That Built Civilisations</p>

    <h3>Team & Format</h3>
    <ul>
      <li>1–3 participants per team.</li>
      <li>Pitch: 20 minutes.</li>
      <li>Q&A by Sharks: 5 minutes.</li>
      <li>Only one entry per college/team.</li>
    </ul>

    <h3>Pitch Requirements</h3>
    <ul>
      <li>Clearly present idea / product / business model.</li>
      <li>Must include: Problem → Solution → USP → Costing → Revenue → Impact.</li>
      <li>PPT / model / prototype is optional.</li>
      <li>Content must be original (no plagiarism).</li>
    </ul>

    <h3>Conduct</h3>
    <ul>
      <li>No vulgarity or inappropriate content.</li>
      <li>Maintain professionalism and respect.</li>
      <li>Report 10 minutes before the event.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Innovation & originality</li>
      <li>Feasibility & practicality</li>
      <li>Clarity of presentation</li>
      <li>Financial understanding</li>
      <li>Market potential</li>
      <li>Q&A performance</li>
    </ul>
  `,

  mrmiss: `
    <h2>Mr &amp; Miss Indus</h2>
    <p><strong>Team:</strong> 1 Male + 1 Female participant</p>

    <h3>Format</h3>
    <ul>
      <li>3 rounds in total.</li>
      <li>Round 1 – Day 1.</li>
      <li>Round 2 – Day 1.</li>
      <li>Final Round – Day 2.</li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>Audio for on-stage performances must be submitted prior.</li>
      <li>Vulgarity in costume or performance leads to immediate disqualification.</li>
      <li>Only one final winner will be crowned.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Originality</li>
      <li>Presentation</li>
      <li>Confidence</li>
      <li>Mindset</li>
    </ul>
  `,

  dance: `
    <h2>Battle of Moves</h2>
    <p><strong>Type:</strong> Solo Dance</p>

    <h3>Rules</h3>
    <ul>
      <li>Time limit: 1–2 minutes per dancer (exceeding time may lead to disqualification).</li>
      <li>All moves must be safe; no vulgar gestures or offensive actions.</li>
      <li>Only safe props allowed; no sharp or dangerous items.</li>
      <li>Maintain discipline and stage decorum.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Technique</li>
      <li>Originality &amp; style</li>
      <li>Energy</li>
      <li>Stage presence</li>
    </ul>
  `,

  mascot: `
    <h2>Mascot – Warriors of the Indus Realm</h2>
    <p><strong>Theme:</strong> Warriors of the Indus Realm</p>
    <p><strong>Team:</strong> 4 participants (1 Mascot + 3 Helpers)</p>
    <p><strong>Duration:</strong> 3 hours</p>

    <h3>Rules</h3>
    <ul>
      <li>Represent any warrior character using attire, body paint, props, etc.</li>
      <li>Design and craft a complete warrior attire on the spot, from head to toe.</li>
      <li>No materials will be provided; teams must bring everything required.</li>
      <li>Mascot must remain in the crafted attire for the full time.</li>
      <li>Must not disturb other events.</li>
      <li>No vulgar language, gestures, or obscene acts.</li>
      <li>On-stage round: each warrior showcases ability (dance, act, expression, pose, etc.).</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Introduction of the character</li>
      <li>Material utilization</li>
      <li>Creativity</li>
      <li>Overall impact</li>
    </ul>
  `,

  rap: `
    <h2>Rap Battle</h2>
    <p><strong>Type:</strong> Solo or Duo Rap Performance</p>

    <h3>Rules</h3>
    <ul>
      <li>Each participant or duo gets 2–3 minutes.</li>
      <li>Lyrics must be original.</li>
      <li>No vulgar words, abusive language, hate speech, or personal attacks.</li>
      <li>Creative dissing is allowed only if respectful.</li>
      <li>Beats / instrumentals / beatboxing / a cappella allowed; music must be submitted before the event.</li>
      <li>No unsafe actions on stage (no fire, water, smoke, dangerous props, or damaging equipment).</li>
      <li>No intoxicants during performance.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Lyrics</li>
      <li>Flow &amp; delivery</li>
      <li>Stage presence</li>
      <li>Originality</li>
      <li>Crowd engagement</li>
    </ul>
  `,

  agt: `
    <h2>Anantara Got Talent</h2>
    <p><strong>Type:</strong> Open Talent Showcase</p>

    <h3>Rules</h3>
    <ul>
      <li>Solo performance: 1 minute only (exceeding time may lead to disqualification).</li>
      <li>Performance must be original.</li>
      <li>No vulgarity, abusive language, hate speech, or personal attacks.</li>
      <li>Allowed talents: singing, dancing, acting, magic, or any safe performance.</li>
      <li>No unsafe props or actions (no fire, water, smoke, sharp objects, or dangerous items).</li>
      <li>No alcohol, tobacco, or misbehaviour.</li>
      <li>Maintain discipline and stage decorum.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Skill level</li>
      <li>Creativity &amp; originality</li>
      <li>Stage presence</li>
      <li>Audience engagement</li>
    </ul>
  `,

  box: `
    <h2>Box Theatre</h2>
    <p><strong>Theme:</strong> Rebirth of the Indus Civilization</p>
    <p><strong>Team:</strong> 6–9 members</p>

    <h3>Rules</h3>
    <ul>
      <li>Performance must be based on the Rebirth of Indus theme.</li>
      <li>Action happens inside or around the provided box.</li>
      <li>Act must be original, respectful, and connected to the theme.</li>
      <li>No vulgar words, abusive language, or hate content.</li>
      <li>Only safe props allowed; no fire, water, sharp objects, or dangerous items.</li>
      <li>Do not damage stage or provided props.</li>
      <li>Time limit: 5–7 minutes.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Storytelling</li>
      <li>Acting</li>
      <li>Use of theme</li>
      <li>Teamwork</li>
      <li>Overall performance</li>
    </ul>
  `,

  junkyard: `
    <h2>Junk Yard – Battle of Bands</h2>
    <p><strong>Team:</strong> 4–8 members</p>

    <h3>Rules</h3>
    <ul>
      <li>Bands must perform using junkyard-style instruments (waste, metal scraps, cans, buckets, pipes, etc.).</li>
      <li>Performance must be original, creative, and rhythmic.</li>
      <li>No vulgar words, abusive language, or offensive gestures.</li>
      <li>Only safe materials allowed; no sharp edges, fire, chemicals, or dangerous items.</li>
      <li>Bands must set up and clear instruments within the given time.</li>
      <li>Must not damage stage or property.</li>
      <li>Time limit: 5–7 minutes.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Creativity</li>
      <li>Rhythm &amp; coordination</li>
      <li>Energy</li>
      <li>Use of junk materials</li>
    </ul>
  `,

  indusbeat: `
    <h2>Indus Beat</h2>
    <p><strong>Type:</strong> Group Dance</p>
    <p><strong>Theme:</strong> Open theme showcasing pillars of Indus civilisation</p>

    <h3>Rules</h3>
    <ul>
      <li>One team per college, 6–12 participants.</li>
      <li>Total time: 8 minutes (2 minutes setup + 6 minutes performance).</li>
      <li>No warning bell; crossing 6 minutes leads to point deduction.</li>
      <li>Late arrival beyond slot leads to penalty points.</li>
      <li>Audio tracks must be submitted by 20th January 2026.</li>
      <li>No fire, water, or risky elements allowed.</li>
      <li>No vulgarity in moves, costumes, or music.</li>
    </ul>
  `,

  runway: `
    <h2>Ancient Runway</h2>
    <p><strong>Theme:</strong> Rise, Revival &amp; Royalty of the Indus Era</p>
    <p><strong>Type:</strong> Fashion Show</p>

    <h3>Rules</h3>
    <ul>
      <li>One team per clan, 10–12 participants including 1 narrator.</li>
      <li>Total duration: 12 minutes (setup + performance).</li>
      <li>Teams must report 20 minutes before their slot.</li>
      <li>Exceeding 12 minutes leads to point deduction.</li>
      <li>All audio/visual media must be submitted by 25 May 2025.</li>
      <li>No dangerous or harmful items on/off stage.</li>
      <li>No vulgar acts, abusive speech, or inappropriate dressing.</li>
      <li>Do not damage the ramp or leave props behind.</li>
    </ul>
  `,

  // OFF-STAGE EVENTS
  entry: `
    <h2>Entry Parade</h2>
    <p><strong>Theme:</strong> Clan revives and showcases the culture, attire, and legacy of an ancient civilisation.</p>

    <h3>Rules &amp; Guidelines</h3>
    <ul>
      <li>One team per clan; minimum 10 participants.</li>
      <li>Total time limit: 8 minutes (setup + performance).</li>
      <li>Instrumental, live music, or soundtrack allowed.</li>
      <li>All background music/audio must be submitted before 25 May 2025.</li>
      <li>No vulgarity, abusive language, or inappropriate dressing.</li>
      <li>Late reporting beyond the slot results in penalty points.</li>
      <li>Exceeding time limit results in point deduction.</li>
      <li>No dangerous, sharp, harmful, or flammable items.</li>
    </ul>

    <h3>Judging Criteria</h3>
    <ul>
      <li>Coordination</li>
      <li>Creativity &amp; costume design</li>
      <li>Entertainment / overall performance</li>
      <li>Adherence to theme</li>
    </ul>
  `,

  tug: `
    <h2>Tug of War</h2>
    <p><strong>Team:</strong> 7 players per clan (at least 2 female players)</p>

    <h3>Rules</h3>
    <ul>
      <li>Matches are best of 3 pulls in knockout format.</li>
      <li>No change of grip after referee's whistle.</li>
      <li>Misbehaviour from any team leads to immediate disqualification.</li>
      <li>Referee's decision is final.</li>
      <li>Total team weight must not exceed 560 kg.</li>
      <li>Rope must be pulled underarm; elbows must not go below the knee.</li>
    </ul>
  `,

  third: `
    <h2>Third Degree</h2>
    <p><strong>Type:</strong> Endurance &amp; task-based event</p>

    <h3>Rules</h3>
    <ul>
      <li>Competition consists of tasks that participants must survive.</li>
      <li>Elimination based on performance.</li>
      <li>Selected participants go through a final interview round.</li>
      <li>Any unmannerly behaviour toward judges or organising committee leads to elimination.</li>
      <li>During on-stage performance, participants cannot disrespect other colleges.</li>
      <li>Abusive language towards other colleges leads to direct disqualification.</li>
      <li>Rules will be explained by organisers.</li>
      <li>Participants must sign consent forms.</li>
    </ul>
  `,

  cricket: `
    <h2>Control Cricket</h2>
    <p><strong>Team:</strong> 7 players per clan (with 2 female players per team)</p>

    <h3>Rules</h3>
    <ul>
      <li>4 overs per innings.</li>
      <li>One over must be bowled by a female player to the opponent's female player.</li>
      <li>Underarm bowling only; throw bowling strictly prohibited.</li>
      <li>In case of a tie, a super over will be played.</li>
      <li>Umpire's decision is final.</li>
      <li>Matches played in knockout format.</li>
      <li>Pitch-specific rules will be explained at the venue.</li>
    </ul>
  `,

  strong: `
    <h2>Strong Man &amp; Strong Woman</h2>
    <p><strong>Participants:</strong> 2 per college</p>

    <h3>Rules</h3>
    <ul>
      <li>Sports attire and shoes are compulsory.</li>
      <li>Belts are allowed.</li>
      <li>A fitness certificate signed by a doctor must be produced and carried.</li>
      <li>Winner is decided on the basis of time taken to complete the task.</li>
      <li>Completion of the full circuit is compulsory to decide the result.</li>
      <li>Official decision is final.</li>
    </ul>
  `,

  treasure: `
    <h2>Treasure Hunt</h2>
    <p><strong>Format:</strong> 5-round outdoor hunt</p>

    <h3>Rules</h3>
    <ul>
      <li>Clues must be found in the given order; skipping a clue leads to disqualification.</li>
      <li>Team members must not use cell phones to communicate unless separated.</li>
      <li>Do not move, tamper with, destroy, or alter answers/clues at locations.</li>
      <li>Answers must be legible and exact.</li>
      <li>All team members must be present when turning in answer sheets.</li>
      <li>Each team will be accompanied by a volunteer.</li>
      <li>One team member must have and carry a valid driving licence.</li>
      <li>Teams must bring their own bike; none will be provided.</li>
      <li>Helmets are compulsory for rider and pillion.</li>
      <li>Participants and teacher in-charge must sign an undertaking.</li>
    </ul>

    <h3>Disqualification Scenarios</h3>
    <ul>
      <li>Reckless or rash driving.</li>
      <li>Damaging any property.</li>
      <li>Interfering with other teams.</li>
      <li>Copying or stealing from other teams.</li>
      <li>Not completing within the time limit.</li>
      <li>Police involvement for any reason.</li>
    </ul>
  `,

  surprise: `
    <h2>Surprise Event</h2>
    <p><strong>Participants:</strong> 2 per college</p>

    <h3>Rules</h3>
    <ul>
      <li>Participants should be prepared for any given task.</li>
      <li>Any disrespect to judges or organisers may result in disqualification.</li>
      <li>Judges’ and organisers’ decisions are final.</li>
    </ul>
  `
};

// ===================== EVENT MODAL WIRING =====================
// Opens the modal with the correct event description when an event card is clicked
const eventCards = document.querySelectorAll(".event-card");
const modal = document.getElementById("eventModal");
const modalBody = document.getElementById("eventModalBody");
const closeModalBtn = document.getElementById("closeEventModal");

eventCards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.event;
    const content = eventDetails[key];
    if (!content) return;

    modalBody.innerHTML = content;
    modal.classList.remove("hidden");
  });
});

// Close button handler
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// Close modal when clicking outside the content
if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

// Close modal on Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});
