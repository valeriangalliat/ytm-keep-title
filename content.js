const BARE = 'YouTube Music';

const song = () =>
  navigator.mediaSession?.metadata?.title ||
  document.querySelector('ytmusic-player-bar .title')?.textContent.trim() ||
  null;

const fix = () => {
  if (document.title.trim() !== BARE) return;
  const s = song();
  if (s) document.title = `${s} | ${BARE}`;
};

new MutationObserver(fix).observe(document.head, { subtree: true, childList: true, characterData: true });
setInterval(fix, 2000);
fix();
