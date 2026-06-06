export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="h-[420px] rounded-2xl bg-black/10 animate-pulse"></div>

        <section className="space-y-5">
          <div className="h-4 w-24 rounded-full bg-black/10 animate-pulse"></div>
          <div className="h-10 w-3/4 rounded bg-black/10 animate-pulse"></div>
          <div className="h-5 w-32 rounded bg-black/10 animate-pulse"></div>

          <div className="space-y-3 pt-4">
            <div className="h-4 w-full rounded bg-black/10 animate-pulse"></div>
            <div className="h-4 w-5/6 rounded bg-black/10 animate-pulse"></div>
            <div className="h-4 w-2/3 rounded bg-black/10 animate-pulse"></div>
          </div>

          <div className="h-12 w-44 rounded-full bg-black/10 animate-pulse"></div>
        </section>
      </div>
    </main>
  );
}