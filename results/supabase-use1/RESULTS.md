# Results

- **fly-ams** (North Holland, AS60068 Datacamp Limited), run 2026-10-16T08-20-39-279Z-fly-ams, Node v24.22.0, files-sdk 3.0.0
- **fly-cdg** (Île-de-France, AS30081 CacheFly), run 2026-10-16T08-20-39-556Z-fly-cdg, Node v24.22.0, files-sdk 3.0.0
- **fly-iad** (Virginia, AS60068 Datacamp Limited), run 2026-10-16T08-20-41-045Z-fly-iad, Node v24.22.0, files-sdk 3.0.0
- **fly-sjc** (California, AS396356 Latitude.sh), run 2026-10-16T08-20-41-871Z-fly-sjc, Node v24.22.0, files-sdk 3.0.0
- **fly-iad** (Virginia, AS60068 Datacamp Limited), run 2026-10-16T08-25-21-046Z-fly-iad, Node v24.22.0, files-sdk 3.0.0
- **fly-ams** (North Holland, AS60068 Datacamp Limited), run 2026-10-16T08-28-21-608Z-fly-ams, Node v24.22.0, files-sdk 3.0.0
- **fly-cdg** (Île-de-France, AS30081 CacheFly), run 2026-10-16T08-28-22-479Z-fly-cdg, Node v24.22.0, files-sdk 3.0.0
- **fly-sjc** (California, AS396356 Latitude.sh), run 2026-10-16T08-28-43-862Z-fly-sjc, Node v24.22.0, files-sdk 3.0.0
- **fly-iad** (Virginia, AS60068 Datacamp Limited), run 2026-10-16T08-30-19-253Z-fly-iad, Node v24.22.0, files-sdk 3.0.0
- **fly-sjc** (California, AS396356 Latitude.sh), run 2026-10-16T08-35-58-131Z-fly-sjc, Node v24.22.0, files-sdk 3.0.0
- **fly-cdg** (Île-de-France, AS30081 CacheFly), run 2026-10-16T08-36-09-028Z-fly-cdg, Node v24.22.0, files-sdk 3.0.0
- **fly-ams** (North Holland, AS60068 Datacamp Limited), run 2026-10-16T08-37-12-472Z-fly-ams, Node v24.22.0, files-sdk 3.0.0
- Excluded 0 samples from **tenki-seattle** between 2026-10-09T20:39:00.396Z and 2026-10-09T21:06:51.638Z: Tenki paused the sandbox twice when it hit its default maximum run time. Any sample whose request overlaps the pause is dropped. The sandbox was made sticky afterwards.
- Excluded 0 samples from **boat-lille** between 2026-10-15T20:13:59.000Z and 2026-10-15T20:15:53.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.
- Excluded 0 samples from **freestyle-sf** between 2026-10-15T22:05:48.000Z and 2026-10-15T22:06:35.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.

## From fly-ams

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| supabase | burst-upload | 32x100KB | 636 ms | 1.05 s | 1.27 s | – | 5.2 | 30 | 0.0 |
| supabase | concurrent-download | 16x100KB | 329 ms | 720 ms | 890 ms | – | 5.0 | 30 | 0.0 |
| supabase | concurrent-upload | 16x100KB | 491 ms | 913 ms | 1.03 s | – | 3.3 | 30 | 0.0 |
| supabase | copy | 10MB | 357 ms | 471 ms | 500 ms | – | – | 60 | 0.0 |
| supabase | delete | 1KB | 155 ms | 264 ms | 875 ms | – | – | 180 | 0.0 |
| supabase | delete | 1MB | 154 ms | 235 ms | 356 ms | – | – | 90 | 0.0 |
| supabase | delete | 10MB | 167 ms | 270 ms | 512 ms | – | – | 60 | 0.0 |
| supabase | delete | 100KB | 155 ms | 315 ms | 541 ms | – | – | 180 | 0.0 |
| supabase | delete | 100MB | 179 ms | 460 ms | 776 ms | – | – | 24 | 0.0 |
| supabase | download | 1KB | 149 ms | 262 ms | 589 ms | 149 ms | 0.0 | 180 | 0.0 |
| supabase | download | 1MB | 173 ms | 310 ms | 419 ms | 150 ms | 6.1 | 90 | 0.0 |
| supabase | download | 10MB | 448 ms | 1.29 s | 1.84 s | 165 ms | 23.4 | 60 | 0.0 |
| supabase | download | 100KB | 153 ms | 310 ms | 646 ms | 151 ms | 0.7 | 180 | 0.0 |
| supabase | download | 100MB | 2.88 s | 6.09 s | 6.30 s | 182 ms | 36.4 | 24 | 0.0 |
| supabase | first-request | 1KB | 161 ms | 352 ms | 764 ms | – | – | 60 | 0.0 |
| supabase | head | 1KB | 117 ms | 175 ms | 296 ms | – | – | 180 | 0.0 |
| supabase | head | 1MB | 118 ms | 284 ms | 623 ms | – | – | 90 | 0.0 |
| supabase | head | 10MB | 125 ms | 232 ms | 393 ms | – | – | 60 | 0.0 |
| supabase | head | 100KB | 116 ms | 239 ms | 476 ms | – | – | 180 | 0.0 |
| supabase | head | 100MB | 121 ms | 163 ms | 186 ms | – | – | 24 | 0.0 |
| supabase | list-all | 1000 objects | 222 ms | – | – | – | – | 18 | 0.0 |
| supabase | range-get | 256KB of 10MB | 171 ms | 479 ms | 898 ms | 154 ms | – | 60 | 0.0 |
| supabase | signed-upload | 1MB | 413 ms | 879 ms | 981 ms | – | – | 60 | 0.0 |
| supabase | upload | 1KB | 197 ms | 309 ms | 562 ms | – | 0.0 | 180 | 0.0 |
| supabase | upload | 1MB | 375 ms | 662 ms | 905 ms | – | 2.8 | 90 | 0.0 |
| supabase | upload | 10MB | 1.23 s | 1.67 s | 2.15 s | – | 8.5 | 60 | 0.0 |
| supabase | upload | 100KB | 301 ms | 571 ms | 706 ms | – | 0.3 | 180 | 0.0 |
| supabase | upload | 100MB | 4.21 s | 4.86 s | 5.41 s | – | 24.9 | 24 | 0.0 |
| supabase | url-get | 1KB | 169 ms | 365 ms | 508 ms | 169 ms | 0.0 | 180 | 0.0 |
| supabase | url-get | 1MB | 200 ms | 498 ms | 905 ms | 167 ms | 5.2 | 90 | 0.0 |
| supabase | url-get | 10MB | 408 ms | 1.35 s | 2.70 s | 177 ms | 25.7 | 60 | 0.0 |
| supabase | url-get | 100KB | 172 ms | 516 ms | 744 ms | 167 ms | 0.6 | 180 | 0.0 |
| supabase | url-get | 100MB | 5.49 s | 6.87 s | 7.32 s | 220 ms | 19.1 | 24 | 0.0 |

## From fly-cdg

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| supabase | burst-upload | 32x100KB | 653 ms | 1.51 s | 1.69 s | – | 5.0 | 30 | 0.0 |
| supabase | concurrent-download | 16x100KB | 280 ms | 617 ms | 943 ms | – | 5.9 | 30 | 0.0 |
| supabase | concurrent-upload | 16x100KB | 505 ms | 919 ms | 938 ms | – | 3.2 | 30 | 0.0 |
| supabase | copy | 10MB | 376 ms | 688 ms | 1.24 s | – | – | 60 | 0.0 |
| supabase | delete | 1KB | 137 ms | 248 ms | 393 ms | – | – | 180 | 0.0 |
| supabase | delete | 1MB | 136 ms | 352 ms | 643 ms | – | – | 90 | 0.0 |
| supabase | delete | 10MB | 142 ms | 358 ms | 1.16 s | – | – | 60 | 0.0 |
| supabase | delete | 100KB | 137 ms | 260 ms | 429 ms | – | – | 180 | 0.0 |
| supabase | delete | 100MB | 161 ms | 335 ms | 700 ms | – | – | 24 | 0.0 |
| supabase | download | 1KB | 131 ms | 235 ms | 717 ms | 131 ms | 0.0 | 180 | 0.0 |
| supabase | download | 1MB | 144 ms | 327 ms | 422 ms | 132 ms | 7.3 | 90 | 0.0 |
| supabase | download | 10MB | 298 ms | 753 ms | 1.34 s | 134 ms | 35.1 | 60 | 0.0 |
| supabase | download | 100KB | 134 ms | 311 ms | 613 ms | 132 ms | 0.8 | 180 | 0.0 |
| supabase | download | 100MB | 2.64 s | 5.77 s | 5.85 s | 138 ms | 39.6 | 24 | 0.0 |
| supabase | first-request | 1KB | 136 ms | 225 ms | 302 ms | – | – | 60 | 0.0 |
| supabase | head | 1KB | 100 ms | 167 ms | 686 ms | – | – | 180 | 0.0 |
| supabase | head | 1MB | 100 ms | 235 ms | 858 ms | – | – | 90 | 0.0 |
| supabase | head | 10MB | 102 ms | 261 ms | 497 ms | – | – | 60 | 0.0 |
| supabase | head | 100KB | 100 ms | 143 ms | 428 ms | – | – | 180 | 0.0 |
| supabase | head | 100MB | 103 ms | 278 ms | 325 ms | – | – | 24 | 0.0 |
| supabase | list-all | 1000 objects | 177 ms | – | – | – | – | 18 | 0.0 |
| supabase | range-get | 256KB of 10MB | 147 ms | 474 ms | 1.05 s | 142 ms | – | 60 | 0.0 |
| supabase | signed-upload | 1MB | 358 ms | 824 ms | 973 ms | – | – | 60 | 0.0 |
| supabase | upload | 1KB | 174 ms | 297 ms | 789 ms | – | 0.0 | 180 | 0.0 |
| supabase | upload | 1MB | 346 ms | 635 ms | 1.22 s | – | 3.0 | 90 | 0.0 |
| supabase | upload | 10MB | 1.20 s | 1.61 s | 1.96 s | – | 8.8 | 60 | 0.0 |
| supabase | upload | 100KB | 279 ms | 513 ms | 670 ms | – | 0.4 | 180 | 0.0 |
| supabase | upload | 100MB | 3.99 s | 5.02 s | 5.13 s | – | 26.3 | 24 | 0.0 |
| supabase | url-get | 1KB | 139 ms | 297 ms | 644 ms | 138 ms | 0.0 | 180 | 0.0 |
| supabase | url-get | 1MB | 154 ms | 304 ms | 521 ms | 140 ms | 6.8 | 90 | 0.0 |
| supabase | url-get | 10MB | 321 ms | 764 ms | 1.01 s | 152 ms | 32.7 | 60 | 0.0 |
| supabase | url-get | 100KB | 140 ms | 493 ms | 730 ms | 139 ms | 0.7 | 180 | 0.0 |
| supabase | url-get | 100MB | 5.60 s | 6.42 s | 8.81 s | 213 ms | 18.7 | 24 | 0.0 |

## From fly-iad

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| supabase | burst-upload | 32x100KB | 411 ms | 1.06 s | 1.79 s | – | 8.0 | 30 | 0.0 |
| supabase | concurrent-download | 16x100KB | 186 ms | 462 ms | 781 ms | – | 8.8 | 30 | 0.0 |
| supabase | concurrent-upload | 16x100KB | 299 ms | 1.04 s | 1.17 s | – | 5.5 | 30 | 0.0 |
| supabase | copy | 10MB | 290 ms | 441 ms | 655 ms | – | – | 60 | 0.0 |
| supabase | delete | 1KB | 62 ms | 152 ms | 274 ms | – | – | 180 | 0.0 |
| supabase | delete | 1MB | 61 ms | 228 ms | 653 ms | – | – | 90 | 0.0 |
| supabase | delete | 10MB | 65 ms | 226 ms | 421 ms | – | – | 60 | 0.0 |
| supabase | delete | 100KB | 62 ms | 167 ms | 596 ms | – | – | 180 | 0.0 |
| supabase | delete | 100MB | 83 ms | 249 ms | 273 ms | – | – | 24 | 0.0 |
| supabase | download | 1KB | 54 ms | 187 ms | 451 ms | 53 ms | 0.0 | 180 | 0.0 |
| supabase | download | 1MB | 69 ms | 244 ms | 1000 ms | 54 ms | 15.3 | 90 | 0.0 |
| supabase | download | 10MB | 188 ms | 544 ms | 663 ms | 64 ms | 55.9 | 60 | 0.0 |
| supabase | download | 100KB | 58 ms | 156 ms | 347 ms | 56 ms | 1.8 | 180 | 0.0 |
| supabase | download | 100MB | 1.98 s | 3.07 s | 3.42 s | 68 ms | 52.8 | 24 | 0.0 |
| supabase | first-request | 1KB | 46 ms | 78 ms | 109 ms | – | – | 60 | 0.0 |
| supabase | head | 1KB | 25 ms | 71 ms | 382 ms | – | – | 180 | 0.0 |
| supabase | head | 1MB | 24 ms | 43 ms | 89 ms | – | – | 90 | 0.0 |
| supabase | head | 10MB | 28 ms | 216 ms | 459 ms | – | – | 60 | 0.0 |
| supabase | head | 100KB | 24 ms | 82 ms | 574 ms | – | – | 180 | 0.0 |
| supabase | head | 100MB | 32 ms | 57 ms | 61 ms | – | – | 24 | 0.0 |
| supabase | list-all | 1000 objects | 90 ms | – | – | – | – | 18 | 0.0 |
| supabase | range-get | 256KB of 10MB | 65 ms | 104 ms | 322 ms | 56 ms | – | 60 | 0.0 |
| supabase | signed-upload | 1MB | 202 ms | 512 ms | 805 ms | – | – | 60 | 0.0 |
| supabase | upload | 1KB | 108 ms | 359 ms | 626 ms | – | 0.0 | 180 | 0.0 |
| supabase | upload | 1MB | 171 ms | 625 ms | 1.07 s | – | 6.1 | 90 | 0.0 |
| supabase | upload | 10MB | 491 ms | 853 ms | 2.22 s | – | 21.4 | 60 | 0.0 |
| supabase | upload | 100KB | 121 ms | 443 ms | 1.36 s | – | 0.8 | 180 | 0.0 |
| supabase | upload | 100MB | 2.08 s | 3.48 s | 3.82 s | – | 50.4 | 24 | 0.0 |
| supabase | url-get | 1KB | 58 ms | 143 ms | 253 ms | 58 ms | 0.0 | 180 | 0.0 |
| supabase | url-get | 1MB | 77 ms | 318 ms | 654 ms | 62 ms | 13.7 | 90 | 0.0 |
| supabase | url-get | 10MB | 188 ms | 415 ms | 548 ms | 68 ms | 55.8 | 60 | 0.0 |
| supabase | url-get | 100KB | 60 ms | 189 ms | 372 ms | 59 ms | 1.7 | 180 | 0.0 |
| supabase | url-get | 100MB | 1.90 s | 3.26 s | 3.84 s | 97 ms | 55.1 | 24 | 0.0 |

## From fly-sjc

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| supabase | burst-upload | 32x100KB | 599 ms | 1.98 s | 3.71 s | – | 5.5 | 30 | 0.0 |
| supabase | concurrent-download | 16x100KB | 270 ms | 730 ms | 1.12 s | – | 6.1 | 30 | 0.0 |
| supabase | concurrent-upload | 16x100KB | 551 ms | 1.26 s | 1.51 s | – | 3.0 | 30 | 0.0 |
| supabase | copy | 10MB | 353 ms | 476 ms | 989 ms | – | – | 60 | 0.0 |
| supabase | delete | 1KB | 132 ms | 215 ms | 555 ms | – | – | 180 | 0.0 |
| supabase | delete | 1MB | 135 ms | 209 ms | 449 ms | – | – | 90 | 0.0 |
| supabase | delete | 10MB | 141 ms | 299 ms | 698 ms | – | – | 60 | 0.0 |
| supabase | delete | 100KB | 139 ms | 393 ms | 736 ms | – | – | 180 | 0.0 |
| supabase | delete | 100MB | 151 ms | 350 ms | 837 ms | – | – | 24 | 0.0 |
| supabase | download | 1KB | 122 ms | 210 ms | 515 ms | 122 ms | 0.0 | 180 | 0.0 |
| supabase | download | 1MB | 198 ms | 408 ms | 553 ms | 131 ms | 5.3 | 90 | 0.0 |
| supabase | download | 10MB | 312 ms | 732 ms | 1.29 s | 136 ms | 33.6 | 60 | 0.0 |
| supabase | download | 100KB | 138 ms | 275 ms | 383 ms | 136 ms | 0.7 | 180 | 0.0 |
| supabase | download | 100MB | 2.43 s | 5.91 s | 6.22 s | 147 ms | 43.2 | 24 | 0.0 |
| supabase | first-request | 1KB | 125 ms | 186 ms | 400 ms | – | – | 60 | 0.0 |
| supabase | head | 1KB | 94 ms | 202 ms | 565 ms | – | – | 180 | 0.0 |
| supabase | head | 1MB | 99 ms | 207 ms | 720 ms | – | – | 90 | 0.0 |
| supabase | head | 10MB | 103 ms | 133 ms | 417 ms | – | – | 60 | 0.0 |
| supabase | head | 100KB | 102 ms | 200 ms | 459 ms | – | – | 180 | 0.0 |
| supabase | head | 100MB | 102 ms | 131 ms | 134 ms | – | – | 24 | 0.0 |
| supabase | list-all | 1000 objects | 149 ms | – | – | – | – | 18 | 0.0 |
| supabase | range-get | 256KB of 10MB | 178 ms | 407 ms | 716 ms | 134 ms | – | 60 | 0.0 |
| supabase | signed-upload | 1MB | 372 ms | 767 ms | 819 ms | – | – | 60 | 0.0 |
| supabase | upload | 1KB | 170 ms | 332 ms | 548 ms | – | 0.0 | 180 | 0.0 |
| supabase | upload | 1MB | 341 ms | 599 ms | 826 ms | – | 3.1 | 90 | 0.0 |
| supabase | upload | 10MB | 893 ms | 1.65 s | 1.91 s | – | 11.7 | 60 | 0.0 |
| supabase | upload | 100KB | 275 ms | 511 ms | 585 ms | – | 0.4 | 180 | 0.0 |
| supabase | upload | 100MB | 3.40 s | 3.92 s | 4.21 s | – | 30.8 | 24 | 0.0 |
| supabase | url-get | 1KB | 141 ms | 244 ms | 394 ms | 141 ms | 0.0 | 180 | 0.0 |
| supabase | url-get | 1MB | 167 ms | 377 ms | 699 ms | 147 ms | 6.3 | 90 | 0.0 |
| supabase | url-get | 10MB | 299 ms | 752 ms | 1.33 s | 145 ms | 35.0 | 60 | 0.0 |
| supabase | url-get | 100KB | 142 ms | 462 ms | 584 ms | 141 ms | 0.7 | 180 | 0.0 |
| supabase | url-get | 100MB | 4.56 s | 5.68 s | 5.91 s | 177 ms | 23.0 | 24 | 0.0 |
