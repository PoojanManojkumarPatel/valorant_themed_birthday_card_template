const abilityCards = document.querySelectorAll(".ability-card");
const abilityDetail = document.getElementById("ability-detail");
const bgMusic = document.getElementById("bg-music");

const abilityTexts = {
  signature:
    '<strong>Party Support:</strong> You bring the vibes, snacks, and playlist. Allies gain +30 morale and stay in queue longer.',
  utility:
    '<strong>Decor Drop:</strong> Deploy quick decor, overlays, or graphics that turn any lobby into a birthday lobby. Style +100.',
  passive:
    '<strong>Hype Check:</strong> Auto-casts a well-timed "you got this" after every round. Grants steady confidence regen.',
  ultimate:
    '<strong>Confetti Storm:</strong> Trigger during the celebration moment for instant mood boost, screenshot spam, and bonus RP (real-party) points.'
};

abilityDetail.innerHTML = abilityTexts.signature;

abilityCards.forEach(card => {
  card.addEventListener("click", () => {
    abilityCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    const id = card.dataset.ability;
    abilityDetail.innerHTML = abilityTexts[id] || "";
  });
});

// Ensure music starts after any interaction if autoplay is blocked
if (bgMusic) {
  document.addEventListener(
    "click",
    () => {
      bgMusic.play().catch(() => {});
    },
    { once: true }
  );
}
