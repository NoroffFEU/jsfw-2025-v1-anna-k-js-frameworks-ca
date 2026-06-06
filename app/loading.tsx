export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="section-bg rounded-2xl p-8 sm:p-12 mb-10">
        <div className="h-4 w-24 rounded-full bg-black/10 animate-pulse"></div>
        <div className="mt-4 h-10 w-72 rounded bg-black/10 animate-pulse"></div>
        <div className="mt-4 h-5 w-full max-w-xl rounded bg-black/10 animate-pulse"></div>
        <div className="mt-6 h-10 w-36 rounded-full bg-black/10 animate-pulse"></div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <article key={index} className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="h-48 rounded-xl bg-black/10 animate-pulse"></div>
            <div className="mt-4 h-5 w-3/4 rounded bg-black/10 animate-pulse"></div>
            <div className="mt-3 h-4 w-1/2 rounded bg-black/10 animate-pulse"></div>
            <div className="mt-5 h-10 w-full rounded-full bg-black/10 animate-pulse"></div>
          </article>
        ))}
      </section>
    </main>
  );
}