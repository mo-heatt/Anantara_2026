// ===================== AOS INITIALIZATION & PARALLAX =====================
// Sets up AOS scroll animations, parallax, and storyline reveal
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

  // NEW: storyline reveal
  const storylineEl = document.querySelector(".storyline-text");
  if (storylineEl) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            storylineEl.classList.add("is-visible");
            observer.unobserve(storylineEl);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(storylineEl);
  }
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
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfyOpT0WLsE26QcBxTDVx65e6snRp4JfgVVpmCOFbDDmxL_Wg/viewform?usp=header",
    "_blank"
  );
}


// ===================== EVENT DETAILS MODAL CONTENT =====================
// HTML snippets for each event, injected into the modal on click
const eventDetails = {
  // PRE-EVENTS
  frames: `
    <h2>Frames of Forgotten Valley</h2>
    <p><strong>Type:</strong> Reel Making (Pre-Event)</p>
    <p><strong>Event Heads:</strong> Sanyog Redkar – 9527618749, Keziah Braganca – 8767792309</p>
    <p><strong>Duration:</strong> Maximum 1 minute 30 seconds</p>
    <h3>Rules</h3>
    <ul>
      <li>Create a video promoting Anantara in a humorous or funny manner.</li>
      <li>Collab with a Influencer above 10k followers and with one college student.</li>
      <li>Do not mention your college name in the video.</li>
      <li>Video length must not exceed 1 minute 30 seconds.</li>
      <li>Use of inappropriate language leads to direct disqualification.</li>
      <li>Fake likes or any attempt to manipulate engagement will result in disqualification.</li>
      <li>Videos must be uploaded and send collab request to <a href="mailto:anantara.2026sdcce@gmail.com">anantara.2026sdcce@gmail.com</a> by 26th January 2026, 5:00 PM.</li>
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
  <h2>Banners of Indus</h2>
  <p><strong>Theme:</strong> Roots of the Indus: Identity, Clans and Civilization Pride.</p>
  <p><strong>Event Heads:</strong> Mitali Chari – 9730204899, Aastha Rawal – 9146559377</p>

  <h3>Rules</h3>
  <ul>
    <li>The flag shall be designed in a manner that aligns with and complements the overall theme of the event.</li>
    <li>Team names will be provided in advance, and relevant elements or symbols representing the team names must be incorporated into the flag design.</li>
    <li>Flag should align with the theme as well as the allotted team name.</li>
    <li>Legacy call of the team must be written on the flag.</li>
    <li>Acrylic colors should be used.</li>
    <li>Dimensions: 100 cm (Width) × 75 cm (Height).</li>
    <li>Flag should be painted on cloth material.</li>
    <li>The given name provided by the host must be written on the flag.</li>
    <li>Team composition: Individual or team of two (only one entry per team).</li>
    <li>Model must be prepared at home and brought ready on event day.</li>
    <li>Flag must be prepared prior to the event.</li>
    <li>Clarity of the theme is most important.</li>
    <li>Teams are required to show their flags during registration.</li>
    <li>The same flag will be used for the entry parade and must be submitted later at the registration counter.</li>
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
    <p><strong>Event Heads:</strong> Onkar Chari – 8767386864, Ansh Naik – 8390006572</p>
    <h3>Rules</h3>
    <ul>
      <li>Theme: Indus civilization with modern twist - Introduce the team</li>
      <li>Length of the video must be between 3 to 5 minutes</li>
      <li>Do not reveal the college name; only the assigned team name may be used.</li>
      <li>Video should reflect positive spirit and creativity; humour must remain clean and respectful.</li>
      <li>No inappropriate language, vulgarity, or offensive gestures.</li>
      <li>Content must be original; plagiarised or copied content is not accepted.</li>
      <li>Submit video via email to <a href="mailto:anantara.2026sdcce@gmail.com">anantara.2026sdcce@gmail.com</a> on or before 20th January 2026, 5:00 PM.</li>
      <li>File name format: TeamName_IceBreaker_Anantara2026.</li>
      <li>Language should be in Konkani, Marathi, Hindi or English.</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Energy & engagement</li>
      <li>Creativity</li>
      <li>Cinematography</li>
      <li>Overall presentation</li>
    </ul>
  `,

  bestout: `
    <h2>Best Out of Waste</h2>
    <p><strong>Team:</strong> Individual or team of two (one entry per team)</p>
    <p><strong>Event Heads:</strong> Vasvi Dhuri – 8668957811, Adhira Shirvant – 9373584426</p>
    <h3>Rules & Guidelines</h3>
    <ul>
      <li>Model must be prepared at home and brought ready on day one.</li>
      <li>Same prop should be used in the fashion show</li>
      <li>The prop should be submitted during registration on counter and should be collected after judging on Day 1.</li>
      <li>Theme: creation must relate to the Rise of Indus (craftsmanship, lifestyle, motifs, ancient utilities, sustainability, etc.).</li>
      <li>Materials allowed: only waste materials (discarded, broken, old, or used items). No new materials allowed.</li>
      <li>No thermacol and hitloan should be used</li>
      <li>Product must be made entirely from waste; no assembling or altering at the venue.</li>
      <li>Each team gets 2 minutes to explain concept, theme relevance, materials used, and purpose.</li>
      <li>Use of new/unsafe materials, off-theme models, ready-made items, or inappropriate behaviour will lead to disqualification.</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Creativity & innovation</li>
      <li>Theme relevance</li>
      <li>Overall execution</li>
    </ul>
  `,

  photography: `
    <h2>Event Day Capture</h2>
    <p><strong>Event Heads:</strong> Piyush Saroj – 8600684227, Zenon Vaz – 7249538969</p>
    <h3>Rules</h3>
    <ul>
      <li>Photo must be clicked on the day of the event only.</li>
      <li>Each photo should clearly represent or promote the event theme.</li>
      <li>Photo submission must be completed on Day 1 before 5:00 PM.</li>
      <li>Photos must be captured using a camera only.</li>
      <li>No editing is allowed under any circumstances.</li>
      <li>Submit the raw photo exactly as it was captured.</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Theme relevance</li>
      <li>Creativity</li>
      <li>Composition</li>
      <li>Overall Impact</li>
    </ul>
  `,

  // ON-STAGE EVENTS
  sharktank: `
    <h2>Shark Tank</h2>
    <p><strong>Theme:</strong> From Indus to Innovation</p>
    <p><strong>Event Heads:</strong> Virasri Dhuri – 9022258096, Shivam Naik Gaonkar – 7447724414</p>
    <p>Business ideas inspired by asian wisdom, built for the future.</p>
    <h3>Team & Format</h3>
    <ul>
      <li>1–3 participants per team.</li>
      <li>Pitch: 10 minutes.</li>
      <li>Q&A by Sharks: 5 minutes.</li>
      <li>Only one entry per college/team.</li>
      <li>PPT submission mandatory 2 days prior</li>
      <li>Surprise pre round</li>
      <li>Formal Attire required</li>
    </ul>
    <h3>Pitch Requirements</h3>
    <ul>
      <li>Clearly present idea / product / business model.</li>
      <li>Must include: Problem → Solution → USP → Costing → Revenue → Impact.</li>
      <li>PPT compulsory</li>
      <li>Model/Prototype optional</li>
      <li>Content must be original and based on practical ideas only.</li>
    </ul>
    <h3>Conduct</h3>
    <ul>
      <li>No vulgarity or inappropriate content.</li>
      <li>Maintain professionalism and respect.</li>
      <li>Report 15 minutes before the event.</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Innovation & originality</li>
      <li>Feasibility & practicality</li>
      <li>Clarity of presentation</li>
      <li>Financial understanding and Market potential</li>
      <li>Overall performance</li>
    </ul>
  `,

  debate: `
    <h2>Indus Opinion Clash</h2>
    <p><strong>Type:</strong> Debate Competition</p>
    <p><strong>Event Heads:</strong> Janvi Naik Dalal – 7768815418, Sarthak Talaulikar – 8766748559</p>
    <h3>Team & Format</h3>
    <ul>
      <li>2 participants per team.</li>
      <li>Total time: 10 minutes.</li>
      <li>Topics will be given on the spot</li>
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
      <li>Content and Relevance</li>
      <li>Clarity & oratory</li>
      <li>Coordination and Timing</li>
      <li>Structure of Argument</li>
      <li>Rebuttal and Responsiveness</li>
    </ul>
  `,

  mrmiss: `
    <h2>Mr &amp; Miss Anantara</h2>
    <p><strong>Team:</strong> 1 Male + 1 Female participant</p>
    <p><strong>Event Heads:</strong> Anca Barreto – 7972046649, Sanjeel Naik Dessai – 9511669107</p>
    <h3>Format</h3>
    <ul>
      <li>3 rounds in total.</li>
      <li>Round 1 – Day 1(Physical).</li>
      <li>Round 2 – Day 1(Physical).</li>
      <li>Final Round – Day 2(ON STAGE).</li>
    </ul>
    <h3>Rules</h3>
    <ul>
      <li>Only 3 Minutes for the performance on Stage</li>
      <li>Audio for on-stage performances must be submitted at the Registration Counter.</li>
      <li>Vulgarity in costume or performance leads to immediate disqualification.</li>
      <li>Only one final winner will be crowned.</li>
      <li>Only passing both the rounds will lead to the final round</li>
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
    <p><strong>Event Heads:</strong> Tanvi Pagi – 9529931765, Vishaka Gavakar – 9405428283</p>
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
    <h2>Mascot – Indo Futuristic</h2>
    <p><strong>Team:</strong> 2 participants (1 Mascot + 1 Helper)</p>
    <p><strong>Duration:</strong> Half Day</p>
    <p><strong>Event Heads:</strong> Darshan Mangeshkar – 8007011617, Tushar Pednekar – 9420959022</p>
    <h3>Rules</h3>
    <ul>
      <li>Represent any warrior character using attire, body paint, props, etc.</li>
      <li>Create a own name for the costume. Give your mascot its own identity</li>
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
    <h2>Solo Singing</h2>
    <p><strong>Type:</strong> Solo Performance</p>
    <p><strong>Event Heads:</strong> Pratham Sawant – 7559242643, Sansh Shirodkar – 9834102180</p>
    <p>Theme: Classic soul meets modern bass. Select your favorite song from the 1980s to  1999.Keep the lyrics the same, but make the performance modern and more upbeat than the original.</p>
    <h3>Rules</h3>
    <ul>
      <li>Time limit is 3 to 5 minutes</li>
      <li>No vulgar or offensive lyrics</li>
      <li>Can refer to Lyrics</li>
      <li>Language must be Hindi, English or Konkani only</li>
      <li>Participants can sing using a Karaoke or insturmental track</li>
      <li>Lipsyncing and pre recorded vocals are not allowed</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Voice Quality</li>
      <li>Creativity</li>
      <li>Rythm and Coordination</li>
      <li>Stage Presence</li>
      <li>Overall Performance</li>
    </ul>
  `,

agt: `
  <h2>Anantara's Got Latent</h2>
  <p><strong>Type:</strong> Open Talent Showcase</p>
  <p><strong>Event Heads:</strong> Elton Luis – 9067160245, Aniket Karanjikar – 9766958469</p>

  <h3>Rules</h3>
  <ul>
    <li>Performance duration: Exactly 1 minute only (exceeding time may lead to disqualification).</li>
    <li>Solo performance only.</li>
    <li>The focus is on unique, weird, and entertaining “latent” talents; professional-level performances are not required.</li>
    <li>Performances and interviews can be in Konkani, Hindi, or English.</li>
    <li>Strict decorum must be maintained: zero tolerance for vulgarity, abusive language, hate speech, or personal attacks.</li>
    <li>By performing, contestants agree to participate in a light-hearted Q&amp;A/Roast session with the judges.</li>
    <li>Everything said on stage must be taken in a light-hearted spirit.</li>
    <li>Only safe performances are allowed.</li>
    <li>No unsafe props or actions (no fire, sharp objects, or dangerous items).</li>
    <li>No alcohol, tobacco, or misbehaviour.</li>
    <li>Maintain discipline and stage decorum at all times.</li>
  </ul>

  <h3>Judging Criteria</h3>
  <ul>
    <li>The “Latent” Factor: Uniqueness and weirdness of the talent.</li>
    <li>Entertainment Value: Audience reaction, fun, and engagement.</li>
    <li>The Interview (Wit): How well the performer handles judges’ jokes and questions.</li>
    <li>Stage Presence: Confidence, personality, and overall vibe on stage.</li>
  </ul>
`,

  box: `
    <h2>Box Theatre</h2>
    <p><strong>Theme:</strong> Progress or Price</p>
    <p><strong>Topic 1:</strong> How development helps us but also destroys the nature and heritage.</p>
    <p><strong>Topic 2:</strong> How Indus culture faded with time.</p>
    <p><strong>Event Heads:</strong> Trushank Prabhudesai – 9096587109, Anushree Shirodkar – 9834169441</p>
    <h3>Rules</h3>
    <ul>
      <li>6-9 members</li>
      <li>Violation of rules by any team will lead to direct disqualification</li>
      <li>Performance inside the box will only be considerd</li>
      <li>Act must be original, respectful, and connected to the theme.</li>
      <li>No vulgar words, abusive language, or hate content.</li>
      <li>Only safe props allowed; no fire, water, sharp objects, or dangerous items.</li>
      <li>Do not damage stage or provided props.</li>
      <li>Time limit: 8-15 minutes including setup time.</li>
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
    <p><strong>Theme:</strong> Slight modern, old and folk music</p>
    <p><strong>Event Heads:</strong> Shreyesh Naik – 7447404951, Samarth Raikar – 9322112574</p>
    <h3>Rules</h3>
    <ul>
      <li>Bands must perform using junkyard-style instruments (waste, metal scraps, cans, buckets, pipes, etc.).</li>
      <li>Performance must be original and creative</li>
      <li>No vulgar words, abusive language, or offensive gestures.</li>
      <li>Only safe materials allowed; no sharp edges, fire, chemicals, or dangerous items.</li>
      <li>Bands must set up and clear instruments within the given time.</li>
      <li>Must not damage stage or property.</li>
      <li>Carry your own Instrument</li>
      <li>Each team is allowed to use only one real musical instrument (ex. guitar, flute, keyboard, etc).</li>
      <li>Each team may include a maximum of three singers/vocal artists.</li>
      <li>Time limit: 10-15 minutes(with set up).</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Creativity</li>
      <li>Coordination</li>
      <li>Stage Presence</li>
      <li>Energy</li>
      <li>Use of junk materials</li>
    </ul>
  `,

  indusbeat: `
    <h2>Indus Beat</h2>
    <p><strong>Type:</strong> Group Dance</p>
    <p><strong>Theme:</strong> The world of Tomorrow</p>
    <p><strong>Description:</strong> This group dance explores life and movement in a futuristic world shaped by AI and advanced Technology.
    <p><strong>Event Heads:</strong> Snehin Lotlikar – 8669144066, Prachi Naik – 8275334221</p>
    <h3>Rules</h3>
    <ul>
      <li>One team per college, 6–12 participants.</li>
      <li>Dance performance should not include any kind of act in it.</li>
      <li>Total time: 8 minutes (2 minutes setup + 6 minutes performance).</li>
      <li>No warning bell; crossing 6 minutes leads to point deduction.</li>
      <li>Late arrival beyond slot leads to penalty points.</li>
      <li>Audio tracks must be submitted by 20th January 2026.</li>
      <li>No fire, water, or risky elements allowed.</li>
      <li>No vulgarity in moves, costumes, or music.</li>
    </ul>
    <h3>Judging Criteria</h3>
    <ul>
      <li>Choreography</li>
      <li>Expression and Energy</li>
      <li>Coordination</li>
      <li>Costume and Presentation</li>
      <li>Overall Performance</li>
    </ul>
  `,

  runway: `
    <h2>Ancient Runway</h2>
    <p><strong>Theme:</strong> Rise, Revival &amp; Royalty of the Indus Era</p>
    <p><strong>Type:</strong> Fashion Show</p>
    <p><strong>Event Heads:</strong> Nirbhay Desai – 8766743383, Simi Pagi – 9356387762</p>
    <h3>Rules</h3>
    <ul>
      <li>One team per clan, 10–12 participants including 1 narrator.</li>
      <li>Total duration: 20 minutes (setup + performance).</li>
      <li>Teams must report 20 minutes before their slot.</li>
      <li>Exceeding 20 minutes leads to point deduction.</li>
      <li>All audio/visual media must be submitted on Registration Counter.</li>
      <li>No dangerous or harmful items on/off stage.</li>
      <li>No vulgar acts, abusive speech, or inappropriate dressing.</li>
      <li>Do not damage the ramp or leave props behind.</li>
      <li>Extra points if eco-friendly material used</li>
      <li>Best out of waste model usage is compulsory</li>
      <li>Fire and Water are strictly not allowed</li>
    </ul>
  `,

  // OFF-STAGE EVENTS
  entry: `
    <h2>Entry Parade</h2>
    <p><strong>Theme:</strong> Goan folk style, attire should match the event theme.</p>
    <p><strong>Event Heads:</strong> Swayam Bhingi – 7499908616, Daksh Naik – 8010734856</p>
    <h3>Rules &amp; Guidelines</h3>
    <ul>
      <li>One team per clan; 25 to 35 participants in a team.</li>
      <li>Time limit: 8-15 minutes infront of judges.</li>
      <li>Flag painting: Flag should be used.</li>
      <li> Real tools can be used and real music is allowed.</li>
      <li>Instrumental, live music, or soundtrack allowed.</li>
      <li>No vulgarity, abusive language, or inappropriate dressing.</li>
      <li>Late reporting beyond the slot results in penalty points.</li>
      <li>Exceeding time limit results in point deduction.</li>
      <li>No dangerous, sharp, harmful, or flammable items.</li>
      <li>The team must include a slogan which reflects and presents the team name.</li>
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
    <p><strong>Team:</strong> 8 players per clan (at least 2 female players compulsory)</p>
    <p><strong>Team:</strong>Maximum Team weight 600 kg.</p>
    <p><strong>Event Heads:</strong> Rohan Gaonkar – 7499959716, Bhuvan Purohit – 8668598945</p>
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
    <p><strong>Event Heads:</strong> Surya Kerkar – 8329491850, Anush Naik – 8668598945</p>
    <p>Day 1: OFF STAGE, Day 2: ON STAGE</p>
    <h3>Rules</h3>
    <ul>
      <li>Only Men compulsory</li>
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
    <p><strong>Team:</strong> 9 players per clan (with 3 female players compulsory)</p>
    <p><strong>Event Heads:</strong> Eshwari Borkar – 8446659426, Shridhar Keni – 8329955835</p>
    <h3>Rules</h3>
    <ul>
      <li><strong>Overarm bowling</strong> is allowed; however, <strong>only female players are permitted to throw the ball</strong>.</li>
      <li>All matches will be played with <strong>4 overs per innings</strong>.</li>
      <li><strong>One over must be compulsorily bowled by a female player</strong>, and that over must be <strong>batted by female players only</strong>.</li>
      <li><strong>The umpire’s decision is final</strong>. Any violation may lead to <strong>disqualification of the team</strong>.</li>
      <li>Teams must carry their <strong>college ID cards</strong> and <strong>bats</strong>. These will <strong>not be provided by the organizers</strong>.</li>
      <li><strong>Sports attire is compulsory</strong> for all players.</li>
      <li>Any changes in the rules will be explained at the venue</li>
    </ul>
  `,

  stones: `
    <h2>Seven Stones</h2>
    <p><strong>Participants:</strong> 7 players in each team (2 girls compulsory)</p>
    <p><strong>Event Heads:</strong> Sanat Naik – 9960846919, Abhijeet Dhere – 9284994966</p>
    <h3>Rules</h3>
    <ul>
      <li>Two teams: Attack and Defence</li>
      <li>Stack 7 stones in the center
      <li>Attacking team gets 3 chances to hit stones with the ball.</li>
      <li>After stones fall, attackers must rebuild the stack.</li>
      <li>Defenders try to hit attackers below shoulder.</li>
      <li>Player hit = Out</li>
      <li>No head shots allowed.</li>
      <li>If stones rebuilt and team shouts “Lagori” → Win.</li>
      <li>If all attackers are out → Defence wins</li>
      <li>Underarm throw only</li>
      <li>Refree's decision is final</li>
    </ul>
  `,

  strong: `
    <h2>Strong Man &amp; Strong Woman</h2>
    <p><strong>Participants:</strong> 2 per college (1 male and 1 female compulsory)</p>
    <p><strong>Event Heads:</strong> Arif Nawar – 8983019609, Kushi Nambiar – 7066246855</p>
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
    <p><strong>Format:</strong> 4-round outdoor hunt</p>
    <p><strong>Event Heads:</strong> Divy Suthar – 8999176317, Arhaan Shaikh – 9028453020</p>
    <h3>Rules</h3>
<ul>
  <li>Any changes to the rules and regulations will be <strong>communicated accordingly</strong>.</li>
  <li>Each team will be <strong>accompanied by a volunteer</strong> for supervision.</li>
  <li><strong>Participants and the teacher in-charge must sign an undertaking form</strong>.</li>
  <li>The <strong>event coordinator’s decision will be final and binding</strong> to all.</li>
  <li>Participants are <strong>strictly forbidden</strong> to move, tamper with, destroy, or otherwise alter the answers at the clue locations.</li>
  <li>If participants <strong>skip any clue</strong>, they may have to perform a task pre-decided by a volunteer or face <strong>disqualification</strong>.</li>
  <li>The <strong>last round will be conducted outside the Ravindra Bhavan campus</strong>.</li>
</ul>

<h3>Disqualification Scenarios</h3>
<ul>
  <li>Damaging any property.</li>
  <li>Interfering with other teams.</li>
  <li>Copying or stealing from other teams.</li>
  <li>Not completing the event within the time limit.</li>
  <li>Police involvement for any reason.</li>
  <li>Getting involved in road rage.</li>
</ul>
  `,

  surprise: `
    <h2>Surprise Event</h2>
    <p><strong>Participants:</strong> 1 per college</p>
    <p><strong>Event Heads:</strong> Sarthak Satardekar – 8766748559, Tribhuvan Purohit – 9881668933</p>
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

if (modal && modalBody && eventCards.length) {
  // Open modal on card click
  eventCards.forEach((card) => {
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
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
}


// Mobile navbar toggle
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // optional: close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

