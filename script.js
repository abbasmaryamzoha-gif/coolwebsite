
const date = new Date();
const formatDate = date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});
document.getElementById("date").innerHTML = `(Oct 26 2026 - ${formatDate})`