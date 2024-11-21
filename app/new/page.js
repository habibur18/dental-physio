export default async function NewPage() {
  const res = await fetch("/api/slots");
  const data = await res.json();
  console.log(data);
  return <div></div>;
}
