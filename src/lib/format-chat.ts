/** Format chat message: escape HTML → bold → links → newlines */
export function formatChat(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener" class="underline underline-offset-2">$1</a>'
    )
    .replace(
      /(?<!=")\/(?:audit|quiz|bang-gia|tai-lieu|blog|mau-workflow|doi-tac)(?:\/[^\s<]*)?/g,
      (match) =>
        `<a href="${match}" class="underline underline-offset-2">${match}</a>`
    )
    .replace(/\n/g, "<br />");
}
