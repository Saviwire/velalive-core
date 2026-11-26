import React from 'react';
import { TOOL_CATEGORIES, TOOL_CATALOG } from '../tools/registry';
import { toolHref } from '../useRoute';

/**
 * Tool grid, rendered entirely from src/tools/registry.js.
 *
 * The category list used to be a hardcoded copy in this file; it now comes from
 * the registry so a tool added there appears here on the next build with no
 * second edit to drift out of sync.
 */
export default function DenseTools() {
  const liveCount = TOOL_CATALOG.filter((t) => t.status === 'live').length;

  return (
    <section id="tools" className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Every tool, <span className="italic text-[#d4af37]">live or not.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            {TOOL_CATALOG.length} tools in {TOOL_CATEGORIES.length} studios, on one master control room.
          </p>
          <p className="mx-auto mt-4 text-xs uppercase tracking-[0.2em] text-gray-500">
            {liveCount} live today
          </p>
        </div>

        <div className="space-y-16">
          {TOOL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="bg-[#141414] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-serif text-[#d4af37] mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.tools.map((tool) => {
                  const id = tool.id;
                  const label = tool.label;
                  return (
                    <a
                      key={id}
                      href={toolHref(id)}
                      className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all cursor-pointer group flex flex-col justify-between no-underline"
                    >
                      <h4 className="font-bold text-sm text-white mb-3 group-hover:text-[#d4af37] transition-colors leading-tight">
                        {label}
                      </h4>
                      <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                        Open &rarr;
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
