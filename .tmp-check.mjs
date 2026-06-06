const url = 'https://lvppgvqxwqsylfwzehwd.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cHBndnF4d3FzeWxmd3plaHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NjEyMzQsImV4cCI6MjA5NjMzNzIzNH0.UOD98L1pZankgLPX6TAZSv8ZO3qrN7OdWUNkSw144Y4';

// Try to insert a probe row
const res = await fetch(`${url}/rest/v1/signups`, {
  method: 'POST',
  headers: {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
  },
  body: JSON.stringify({
    mode: 'waitlist',
    restaurant_name: '__probe__',
    city: '__probe__',
    email: 'probe@example.com',
    agreement_accepted: false,
    agreement_accepted_at: null,
  }),
});
console.log('STATUS:', res.status, res.statusText);
console.log('BODY:', await res.text());
