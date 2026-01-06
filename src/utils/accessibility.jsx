// Global helper to announce messages to screen readers
export function announcePage(message) {
  const liveRegion = document.getElementById("sr-live-region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}
