export default function isInternalLink(url: string) {
  return (
    url.includes("bullistic.xyz") ||
    url.includes("localhost") ||
    url.startsWith("/")
  );
}
