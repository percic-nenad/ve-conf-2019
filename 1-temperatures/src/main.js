function sortAbsSpecial(a, b) {
  return Math.abs(a) - Math.abs(b) || b - a;
}

export default function temperatures(input) {
  return [...input].sort(sortAbsSpecial)[0] || 0;
}
