import { redirect } from "next/navigation";

export default async function ShortURLPage({
  params,
}: {
  params: { shortUrl: string };
}) {
  const res = await fetch(`http://localhost:3000/api/${params.shortUrl}`);

  const json = await res.json();
  if (res.ok && json.shortURL !== "") {
    redirect("https://nextjs.org");
  }

  return <div>No url found</div>;
}
