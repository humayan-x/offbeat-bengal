import { createSignal, createMemo, For, Show } from 'solid-js';
import type { Place } from '../../types/place';

interface Props {
  places: Place[];
}

export default function SearchModal(props: Props) {
  const [query, setQuery] = createSignal('');

  const filteredPlaces = createMemo(() => {
    const q = query().trim().toLowerCase();
    if (!q) return [];
    return props.places.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.district.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.usp.toLowerCase().includes(q)
    ).slice(0, 6);
  });

  return (
    <div class="w-full max-w-2xl mx-auto relative font-sans">
      <div class="relative">
        <input
          type="text"
          value={query()}
          onInput={(e) => setQuery(e.currentTarget.value)}
          placeholder="Search hamlets by name, district, or altitude..."
          class="min-h-12 w-full rounded border border-[#d6d0c4] bg-white px-4 py-3 pl-10 pr-14 text-base sm:text-sm text-[#1c2421] placeholder-[#7d8a83] shadow-xs outline-none focus:border-[#b45309] focus:ring-1 focus:ring-[#b45309]/30 transition"
        />
        <svg
          class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#7d8a83]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>

        <Show when={query().length > 0}>
          <button
            onClick={() => setQuery('')}
            class="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[11px] text-[#7d8a83] hover:text-[#1c2421] px-1.5 py-0.5 bg-[#f2efe9] hover:bg-[#e5e0d8] rounded transition"
          >
            ESC
          </button>
        </Show>
      </div>

      {/* Instant Search Dropdown */}
      <Show when={filteredPlaces().length > 0}>
        <div class="absolute left-0 right-0 top-full mt-1.5 rounded border border-[#e5e0d8] bg-white shadow-lg p-1.5 z-50 divide-y divide-[#f2efe9] text-left">
          <For each={filteredPlaces()}>
            {(place) => (
              <a
                href={`/${place.district}/${place.slug}`}
                class="flex min-h-14 items-center justify-between gap-3 p-2.5 hover:bg-[#f9f8f5] rounded group transition"
              >
                <div class="min-w-0">
                  <div class="flex min-w-0 items-center gap-2">
                    <span class="truncate font-serif text-sm font-medium text-[#1c2421] group-hover:text-[#b45309] transition">
                      {place.title}
                    </span>
                    <span class="shrink-0 text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-[#f2efe9] text-[#4a5550]">
                      {place.district}
                    </span>
                  </div>
                  <p class="text-xs text-[#5f6c65] mt-0.5 line-clamp-1">{place.usp}</p>
                </div>
                <span class="text-xs text-[#7d8a83] font-mono shrink-0 pl-3">{place.altitudeFeet} ft</span>
              </a>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
