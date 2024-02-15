export async function POST() {
  await new Promise(r => setTimeout(r, 1000))
  return new Response(JSON.stringify({ status: 'ok' }), { status: 200 })
}
