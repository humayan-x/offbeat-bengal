import { createSignal, createMemo, For } from 'solid-js';
import type { Place } from '../../types/place';

interface Props {
  initialPlaces: Place[];
  eyebrow: string;
  title: string;
  description: string;
}

export default function PlacesDirectory(props: Props) {
  const [sortBy, setSortBy] = createSignal<'default' | 'altitude-desc' | 'altitude-asc'>('default');

  const filtered = createMemo(() => {
    let list = [...props.initialPlaces];

    if (sortBy() === 'altitude-desc') {
      list.sort((a, b) => b.altitudeFeet - a.altitudeFeet);
    } else if (sortBy() === 'altitude-asc') {
      list.sort((a, b) => a.altitudeFeet - b.altitudeFeet);
    }

    return list;
  });

  return (
    <div class="space-y-6">
      <header class="border-b border-[#e5e0d8] pb-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="space-y-2">
            <div class="font-mono text-[10px] uppercase tracking-widest text-[#b45309] font-semibold">
              {props.eyebrow}
            </div>
            <h1 class="font-serif text-3xl sm:text-4xl font-medium text-[#1c2421] tracking-tight">
              {props.title}
            </h1>
            <p class="max-w-2xl font-sans text-xs text-[#5f6c65] sm:text-sm">
              {props.description}
            </p>
          </div>
          <div class="flex shrink-0 items-center gap-2 text-xs font-mono sm:mb-0.5">
            <span class="text-[#7d8a83]">Sort:</span>
            <select
              value={sortBy()}
              onChange={(e) => setSortBy(e.currentTarget.value as any)}
              class="min-h-10 max-w-[calc(100vw-7rem)] cursor-pointer rounded border border-[#e5e0d8] bg-white px-2.5 py-1.5 font-mono text-xs text-[#1c2421] outline-none shadow-2xs focus:border-[#b45309] sm:max-w-none"
            >
              <option value="default">Default Index</option>
              <option value="altitude-desc">Elevation (Highest First)</option>
              <option value="altitude-asc">Elevation (Lowest First)</option>
            </select>
          </div>
        </div>
      </header>

      {/* Grid of Results */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <For each={filtered()}>
          {(place) => (
            <a
              href={`/${place.district}/${place.slug}`}
              class="group flex min-w-0 flex-col justify-between rounded border border-[#e5e0d8] bg-white p-4 sm:p-5 hover:border-[#b45309]/50 hover:shadow-xs transition duration-200"
            >
              <div>
                <div class="flex items-start justify-between gap-2 mb-2.5 border-b border-[#f2efe9] pb-2 text-xs">
                  <span class="font-mono text-[10px] uppercase font-semibold text-[#2d4739] bg-[#2d4739]/10 px-2 py-0.5 rounded break-words">
                    {place.category}
                  </span>
                  <span class="font-mono text-[11px] text-[#4a5550]">
                    <span class="text-[#7d8a83]">EL.</span> <strong class="text-[#1c2421] font-semibold">{place.altitudeFeet.toLocaleString()}</strong> ft
                  </span>
                </div>

                <h3 class="font-serif text-lg font-medium text-[#1c2421] group-hover:text-[#b45309] transition">
                  {place.title}
                </h3>

                <p class="text-xs text-[#5f6c65] mt-2 line-clamp-3 leading-relaxed font-sans">
                  {place.usp}
                </p>
              </div>

              <div class="mt-4 pt-3 border-t border-[#f2efe9] flex items-center justify-between gap-3 font-mono text-xs text-[#7d8a83]">
                <span class="min-w-0">{place.nearestHub.distanceKm} km from {place.nearestHub.name}</span>
                <span class="shrink-0 text-[#1c2421] font-semibold group-hover:text-[#b45309] transition text-[11px]">
                  Spec Sheet &rarr;
                </span>
              </div>
            </a>
          )}
        </For>
      </div>
    </div>
  );
}
