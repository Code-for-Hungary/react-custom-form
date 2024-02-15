export async function GET() {
  return new Response(JSON.stringify([
    { id: 1, value: '1st', label: 'First'},
    { id: 2, value: '2nd', label: 'Second'},
    { id: 3, value: '3rd', label: 'Third'},
  ]), { status: 200 })
}
