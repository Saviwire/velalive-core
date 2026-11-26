import React from 'react';

/**
 * One tool page, driven entirely by the registry entry for #/tool/<id>.
 *
 * This is a labelled status page, not a fake workspace: every tool is
 * currently 'coming', so it says so and points people back to the grid.
 * When an adapter for a tool goes live its run UI gets added here behind
 * a check on tool.status. The status label itself stays unconditional.
 */
export default function ToolPage({ tool, toolId }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      <nav className="border-b border-white/10 bg-[#0a0a0a]/90 px-4 py-4 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a href="#top" className="text-lg font-bold tracking-[0.2em] text-white no-underline md:text-2xl">
            VELALIVE
          </a>
          <a href="#tools" className="text-xs font-bold text-[#d4af37] no-underline md:text-sm">
            &larr; All tools
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        {tool ? (
          <>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">{tool.category}</p>
            <h1 className="mb-6 font-serif text-4xl text-white md:text-6xl">{tool.label}</h1>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {tool.status}
              </span>
              {tool.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d4af37]"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 md:p-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Status</p>
              <p className="mb-6 text-lg text-white">
                This tool is not live yet. No model is connected, so nothing here claims a result.
              </p>

              <ul className="mb-8 space-y-2 text-sm text-gray-400">
                <li>Nothing to run until the adapter is connected.</li>
                <li>Credits are not charged for a tool that is not live.</li>
              </ul>

              <a href="#tools" className="font-bold text-[#d4af37] hover:text-white">
                Back to every tool
              </a>
            </div>
          </>
        ) : (
          <>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">404</p>
            <h1 className="mb-4 font-serif text-4xl text-white md:text-6xl">No such tool.</h1>
            <p className="mb-8 text-gray-400">
              &quot;{toolId}&quot; is not in the catalog. Try the{' '}
              <a href="#tools" className="text-[#d4af37]">
                full tool list
              </a>
              .
            </p>
          </>
        )}
      </main>
    </div>
  );
}
