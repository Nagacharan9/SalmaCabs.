document.getElementById('cabBookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if(from && to && date && time) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = Searching cabs from from to{to} on date at{time}...;
  } else {
    alert('Please fill in all fields.');
  }
});
