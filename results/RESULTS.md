# Results

- **tenki-seattle** (Washington, AS23033 Wowrack.com), run 2026-10-09T21-58-55-116Z-tenki-seattle, Node v24.14.0, files-sdk 3.0.0
- **railway-ashburn** (Virginia, AS400940 Railway), run 2026-10-09T21-58-55-531Z-railway-ashburn, Node v24.21.0, files-sdk 3.0.0
- **railway-amsterdam** (North Holland, AS400940 Railway), run 2026-10-09T21-58-55-691Z-railway-amsterdam, Node v24.21.0, files-sdk 3.0.0
- **freestyle-sf** (California, AS36320 Freestyle Cloud, Inc.), run 2026-10-09T21-58-56-169Z-freestyle-sf, Node v24.21.0, files-sdk 3.0.0
- **railway-ashburn** (Virginia, AS400940 Railway), run 2026-10-09T22-31-54-812Z-railway-ashburn, Node v24.21.0, files-sdk 3.0.0
- **railway-amsterdam** (North Holland, AS400940 Railway), run 2026-10-09T23-04-52-217Z-railway-amsterdam, Node v24.21.0, files-sdk 3.0.0
- **tenki-seattle** (Washington, AS19538 Luxor), run 2026-10-15T20-04-32-857Z-tenki-seattle, Node v24.14.0, files-sdk 3.0.0
- **ms-a2** (Florida, AS7018 AT&T Enterprises, LLC), run 2026-10-15T20-04-52-569Z-ms-a2, Node v24.20.0, files-sdk 3.0.0
- **boat-lille** (Hauts-de-France, AS16276 OVH SAS), run 2026-10-15T20-14-01-468Z-boat-lille, Node v24.18.1, files-sdk 3.0.0
- **railway-amsterdam** (North Holland, AS400940 Railway), run 2026-10-15T20-38-00-153Z-railway-amsterdam, Node v24.21.0, files-sdk 3.0.0
- **railway-ashburn** (Virginia, AS400940 Railway), run 2026-10-15T20-44-24-079Z-railway-ashburn, Node v24.21.0, files-sdk 3.0.0
- **freestyle-sf** (California, AS36320 Freestyle Cloud, Inc.), run 2026-10-15T20-59-04-102Z-freestyle-sf, Node v24.21.0, files-sdk 3.0.0
- **ms-a2** (Florida, AS7018 AT&T Enterprises, LLC), run 2026-10-15T21-12-03-729Z-ms-a2, Node v24.20.0, files-sdk 3.0.0
- **tenki-seattle** (Washington, AS19538 Luxor), run 2026-10-15T21-20-56-004Z-tenki-seattle, Node v24.14.0, files-sdk 3.0.0
- Excluded 0 samples from **tenki-seattle** between 2026-10-09T20:39:00.396Z and 2026-10-09T21:06:51.638Z: Tenki paused the sandbox twice when it hit its default maximum run time. Any sample whose request overlaps the pause is dropped. The sandbox was made sticky afterwards.
- Excluded 581 samples from **boat-lille** between 2026-10-15T20:13:59.000Z and 2026-10-15T20:15:53.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.
- Excluded 0 samples from **freestyle-sf** between 2026-10-15T22:05:48.000Z and 2026-10-15T22:06:35.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.

## From tenki-seattle

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| aws-s3 | burst-upload | 32x100KB | 394 ms | 513 ms | 538 ms | – | 8.3 | 20 | 0.0 |
| neon | burst-upload | 32x100KB | 449 ms | 701 ms | 712 ms | – | 7.3 | 20 | 0.0 |
| railway | burst-upload | 32x100KB | 505 ms | 696 ms | 765 ms | – | 6.5 | 20 | 0.0 |
| r2 | burst-upload | 32x100KB | 646 ms | 1.06 s | 1.13 s | – | 5.1 | 20 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.20 s | – | – | – | 2.7 | 20 | 5.0 |
| aws-s3 | concurrent-download | 16x100KB | 131 ms | 249 ms | 265 ms | – | 12.5 | 20 | 0.0 |
| neon | concurrent-download | 16x100KB | 182 ms | 359 ms | 438 ms | – | 9.0 | 20 | 0.0 |
| b2 | concurrent-download | 16x100KB | 244 ms | – | – | – | 6.7 | 19 | 0.0 |
| railway | concurrent-download | 16x100KB | 300 ms | 519 ms | 596 ms | – | 5.5 | 20 | 0.0 |
| r2 | concurrent-download | 16x100KB | 387 ms | 513 ms | 518 ms | – | 4.2 | 20 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 353 ms | 508 ms | 603 ms | – | 4.6 | 20 | 0.0 |
| neon | concurrent-upload | 16x100KB | 422 ms | 710 ms | 805 ms | – | 3.9 | 20 | 0.0 |
| railway | concurrent-upload | 16x100KB | 521 ms | 617 ms | 621 ms | – | 3.1 | 20 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 558 ms | 753 ms | 912 ms | – | 2.9 | 20 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.05 s | – | – | – | 1.6 | 20 | 5.0 |
| aws-s3 | copy | 10MB | 200 ms | 264 ms | 325 ms | – | – | 40 | 0.0 |
| neon | copy | 10MB | 317 ms | 423 ms | 887 ms | – | – | 40 | 0.0 |
| railway | copy | 10MB | 547 ms | 728 ms | 1.17 s | – | – | 40 | 0.0 |
| b2 | copy | 10MB | 551 ms | 1.47 s | 4.87 s | – | – | 40 | 0.0 |
| r2 | copy | 10MB | 1.46 s | 1.83 s | 2.34 s | – | – | 40 | 0.0 |
| b2 | delete | 1KB | 69 ms | 93 ms | 162 ms | – | – | 160 | 0.0 |
| aws-s3 | delete | 1KB | 81 ms | 110 ms | 123 ms | – | – | 161 | 0.0 |
| neon | delete | 1KB | 97 ms | 228 ms | 236 ms | – | – | 161 | 0.0 |
| railway | delete | 1KB | 121 ms | 215 ms | 270 ms | – | – | 161 | 0.0 |
| r2 | delete | 1KB | 142 ms | 240 ms | 357 ms | – | – | 160 | 0.0 |
| b2 | delete | 1MB | 70 ms | 94 ms | 151 ms | – | – | 58 | 0.0 |
| aws-s3 | delete | 1MB | 83 ms | 105 ms | 110 ms | – | – | 60 | 0.0 |
| neon | delete | 1MB | 96 ms | 118 ms | 136 ms | – | – | 60 | 0.0 |
| r2 | delete | 1MB | 138 ms | 222 ms | 292 ms | – | – | 60 | 0.0 |
| railway | delete | 1MB | 151 ms | 226 ms | 240 ms | – | – | 60 | 0.0 |
| b2 | delete | 10MB | 70 ms | 105 ms | 115 ms | – | – | 40 | 0.0 |
| aws-s3 | delete | 10MB | 80 ms | 91 ms | 105 ms | – | – | 40 | 0.0 |
| neon | delete | 10MB | 98 ms | 222 ms | 3.27 s | – | – | 40 | 0.0 |
| r2 | delete | 10MB | 145 ms | 280 ms | 392 ms | – | – | 40 | 0.0 |
| railway | delete | 10MB | 198 ms | 229 ms | 275 ms | – | – | 40 | 0.0 |
| b2 | delete | 100KB | 71 ms | 113 ms | 170 ms | – | – | 119 | 0.0 |
| aws-s3 | delete | 100KB | 81 ms | 108 ms | 136 ms | – | – | 120 | 0.0 |
| neon | delete | 100KB | 97 ms | 136 ms | 240 ms | – | – | 120 | 0.0 |
| railway | delete | 100KB | 124 ms | 213 ms | 263 ms | – | – | 120 | 0.0 |
| r2 | delete | 100KB | 171 ms | 489 ms | 753 ms | – | – | 120 | 0.0 |
| b2 | delete | 100MB | 71 ms | – | – | – | – | 16 | 0.0 |
| aws-s3 | delete | 100MB | 88 ms | – | – | – | – | 16 | 0.0 |
| neon | delete | 100MB | 105 ms | – | – | – | – | 16 | 0.0 |
| railway | delete | 100MB | 117 ms | – | – | – | – | 16 | 0.0 |
| r2 | delete | 100MB | 143 ms | – | – | – | – | 16 | 0.0 |
| b2 | download | 1KB | 75 ms | 99 ms | 139 ms | 75 ms | 0.0 | 160 | 0.0 |
| aws-s3 | download | 1KB | 88 ms | 153 ms | 218 ms | 88 ms | 0.0 | 161 | 0.0 |
| railway | download | 1KB | 102 ms | 271 ms | 474 ms | 101 ms | 0.0 | 161 | 0.0 |
| neon | download | 1KB | 110 ms | 139 ms | 201 ms | 110 ms | 0.0 | 161 | 0.0 |
| r2 | download | 1KB | 242 ms | 356 ms | 1.20 s | 242 ms | 0.0 | 160 | 0.0 |
| aws-s3 | download | 1MB | 112 ms | 392 ms | 636 ms | 93 ms | 9.3 | 60 | 0.0 |
| neon | download | 1MB | 119 ms | 380 ms | 1.03 s | 110 ms | 8.8 | 60 | 0.0 |
| railway | download | 1MB | 277 ms | 561 ms | 626 ms | 261 ms | 3.8 | 60 | 0.0 |
| r2 | download | 1MB | 346 ms | 576 ms | 1.42 s | 255 ms | 3.0 | 60 | 0.0 |
| b2 | download | 1MB | 445 ms | 538 ms | 657 ms | 102 ms | 2.4 | 58 | 0.0 |
| aws-s3 | download | 10MB | 399 ms | 999 ms | 1.09 s | 85 ms | 26.3 | 40 | 0.0 |
| railway | download | 10MB | 426 ms | 616 ms | 1.38 s | 292 ms | 24.6 | 40 | 0.0 |
| neon | download | 10MB | 473 ms | 2.53 s | 10.90 s | 109 ms | 22.2 | 40 | 0.0 |
| r2 | download | 10MB | 676 ms | 1.04 s | 2.85 s | 272 ms | 15.5 | 40 | 0.0 |
| b2 | download | 10MB | 727 ms | 1.11 s | 1.29 s | 115 ms | 14.4 | 40 | 0.0 |
| aws-s3 | download | 100KB | 89 ms | 191 ms | 357 ms | 88 ms | 1.2 | 120 | 0.0 |
| neon | download | 100KB | 111 ms | 177 ms | 323 ms | 110 ms | 0.9 | 120 | 0.0 |
| b2 | download | 100KB | 226 ms | 304 ms | 367 ms | 94 ms | 0.5 | 119 | 0.0 |
| railway | download | 100KB | 236 ms | 396 ms | 470 ms | 219 ms | 0.4 | 120 | 0.0 |
| r2 | download | 100KB | 264 ms | 2.22 s | 12.87 s | 260 ms | 0.4 | 120 | 0.0 |
| neon | download | 100MB | 1.41 s | – | – | 108 ms | 74.2 | 16 | 0.0 |
| railway | download | 100MB | 1.90 s | – | – | 207 ms | 55.2 | 16 | 0.0 |
| aws-s3 | download | 100MB | 2.36 s | – | – | 94 ms | 44.4 | 16 | 0.0 |
| b2 | download | 100MB | 2.73 s | – | – | 122 ms | 38.4 | 16 | 0.0 |
| r2 | download | 100MB | 5.01 s | – | – | 310 ms | 20.9 | 16 | 0.0 |
| r2 | first-request | 1KB | 133 ms | 179 ms | 223 ms | – | – | 40 | 0.0 |
| railway | first-request | 1KB | 155 ms | 270 ms | 709 ms | – | – | 40 | 0.0 |
| b2 | first-request | 1KB | 202 ms | 286 ms | 297 ms | – | – | 40 | 0.0 |
| aws-s3 | first-request | 1KB | 210 ms | 272 ms | 275 ms | – | – | 40 | 0.0 |
| neon | first-request | 1KB | 298 ms | 375 ms | 394 ms | – | – | 40 | 0.0 |
| b2 | head | 1KB | 68 ms | 91 ms | 112 ms | – | – | 160 | 0.0 |
| aws-s3 | head | 1KB | 74 ms | 99 ms | 119 ms | – | – | 161 | 0.0 |
| neon | head | 1KB | 82 ms | 93 ms | 113 ms | – | – | 161 | 0.0 |
| railway | head | 1KB | 102 ms | 219 ms | 521 ms | – | – | 161 | 0.0 |
| r2 | head | 1KB | 109 ms | 212 ms | 326 ms | – | – | 161 | 0.0 |
| b2 | head | 1MB | 69 ms | 98 ms | 226 ms | – | – | 58 | 0.0 |
| aws-s3 | head | 1MB | 73 ms | 104 ms | 151 ms | – | – | 60 | 0.0 |
| neon | head | 1MB | 82 ms | 118 ms | 254 ms | – | – | 60 | 0.0 |
| r2 | head | 1MB | 116 ms | 174 ms | 246 ms | – | – | 60 | 0.0 |
| railway | head | 1MB | 170 ms | 246 ms | 371 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 71 ms | 219 ms | 233 ms | – | – | 40 | 0.0 |
| neon | head | 10MB | 82 ms | 98 ms | 133 ms | – | – | 40 | 0.0 |
| r2 | head | 10MB | 108 ms | 194 ms | 234 ms | – | – | 40 | 0.0 |
| railway | head | 10MB | 186 ms | 215 ms | 392 ms | – | – | 40 | 0.0 |
| b2 | head | 10MB | 206 ms | 300 ms | 360 ms | – | – | 40 | 0.0 |
| b2 | head | 100KB | 69 ms | 103 ms | 125 ms | – | – | 119 | 0.0 |
| aws-s3 | head | 100KB | 74 ms | 104 ms | 134 ms | – | – | 120 | 0.0 |
| neon | head | 100KB | 82 ms | 107 ms | 115 ms | – | – | 120 | 0.0 |
| r2 | head | 100KB | 119 ms | 201 ms | 1.29 s | – | – | 120 | 0.0 |
| railway | head | 100KB | 127 ms | 213 ms | 265 ms | – | – | 120 | 0.0 |
| b2 | head | 100MB | 69 ms | – | – | – | – | 16 | 0.0 |
| aws-s3 | head | 100MB | 73 ms | – | – | – | – | 16 | 0.0 |
| neon | head | 100MB | 84 ms | – | – | – | – | 16 | 0.0 |
| railway | head | 100MB | 99 ms | – | – | – | – | 16 | 0.0 |
| r2 | head | 100MB | 105 ms | – | – | – | – | 16 | 0.0 |
| neon | list-all | 1000 objects | 125 ms | – | – | – | – | 12 | 0.0 |
| railway | list-all | 1000 objects | 141 ms | – | – | – | – | 12 | 0.0 |
| aws-s3 | list-all | 1000 objects | 147 ms | – | – | – | – | 12 | 0.0 |
| b2 | list-all | 1000 objects | 369 ms | – | – | – | – | 12 | 0.0 |
| r2 | list-all | 1000 objects | 590 ms | – | – | – | – | 12 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 107 ms | 343 ms | 361 ms | 93 ms | – | 40 | 0.0 |
| neon | range-get | 256KB of 10MB | 129 ms | 262 ms | 417 ms | 122 ms | – | 40 | 0.0 |
| railway | range-get | 256KB of 10MB | 271 ms | 500 ms | 509 ms | 242 ms | – | 40 | 0.0 |
| b2 | range-get | 256KB of 10MB | 326 ms | 465 ms | 481 ms | 107 ms | – | 40 | 0.0 |
| r2 | range-get | 256KB of 10MB | 372 ms | 580 ms | 613 ms | 318 ms | – | 40 | 0.0 |
| r2 | signed-upload | 1MB | 474 ms | 821 ms | 833 ms | – | – | 40 | 0.0 |
| b2 | signed-upload | 1MB | 618 ms | 828 ms | 1.30 s | – | – | 40 | 0.0 |
| railway | signed-upload | 1MB | 656 ms | 1.01 s | 1.52 s | – | – | 40 | 0.0 |
| aws-s3 | signed-upload | 1MB | 664 ms | 1.15 s | 1.26 s | – | – | 40 | 0.0 |
| neon | signed-upload | 1MB | 792 ms | 1.25 s | 1.59 s | – | – | 40 | 0.0 |
| aws-s3 | upload | 1KB | 88 ms | 115 ms | 146 ms | – | 0.0 | 161 | 0.0 |
| railway | upload | 1KB | 114 ms | 215 ms | 303 ms | – | 0.0 | 161 | 0.0 |
| neon | upload | 1KB | 142 ms | 188 ms | 219 ms | – | 0.0 | 161 | 0.0 |
| b2 | upload | 1KB | 299 ms | 834 ms | 1.39 s | – | 0.0 | 161 | 0.6 |
| r2 | upload | 1KB | 340 ms | 527 ms | 682 ms | – | 0.0 | 161 | 0.0 |
| r2 | upload | 1MB | 406 ms | 621 ms | 737 ms | – | 2.6 | 60 | 0.0 |
| railway | upload | 1MB | 474 ms | 822 ms | 898 ms | – | 2.2 | 60 | 0.0 |
| aws-s3 | upload | 1MB | 509 ms | 839 ms | 924 ms | – | 2.1 | 60 | 0.0 |
| neon | upload | 1MB | 562 ms | 678 ms | 729 ms | – | 1.9 | 60 | 0.0 |
| b2 | upload | 1MB | 617 ms | 1.05 s | 1.11 s | – | 1.7 | 60 | 3.3 |
| r2 | upload | 10MB | 955 ms | 1.64 s | 1.93 s | – | 11.0 | 40 | 0.0 |
| railway | upload | 10MB | 1.08 s | 1.78 s | 6.38 s | – | 9.7 | 40 | 0.0 |
| neon | upload | 10MB | 1.14 s | 3.44 s | 9.27 s | – | 9.2 | 40 | 0.0 |
| aws-s3 | upload | 10MB | 1.18 s | 3.96 s | 4.80 s | – | 8.9 | 40 | 0.0 |
| b2 | upload | 10MB | 1.44 s | 3.79 s | 7.08 s | – | 7.3 | 40 | 0.0 |
| aws-s3 | upload | 100KB | 274 ms | 402 ms | 486 ms | – | 0.4 | 120 | 0.0 |
| neon | upload | 100KB | 340 ms | 407 ms | 473 ms | – | 0.3 | 120 | 0.0 |
| railway | upload | 100KB | 370 ms | 544 ms | 624 ms | – | 0.3 | 120 | 0.0 |
| r2 | upload | 100KB | 399 ms | 1.01 s | 2.18 s | – | 0.3 | 120 | 0.0 |
| b2 | upload | 100KB | 593 ms | 1.12 s | 1.69 s | – | 0.2 | 120 | 0.8 |
| r2 | upload | 100MB | 4.21 s | – | – | – | 24.9 | 16 | 0.0 |
| aws-s3 | upload | 100MB | 5.44 s | – | – | – | 19.3 | 16 | 0.0 |
| railway | upload | 100MB | 5.66 s | – | – | – | 18.5 | 16 | 0.0 |
| neon | upload | 100MB | 7.23 s | – | – | – | 14.5 | 16 | 0.0 |
| b2 | upload | 100MB | 7.26 s | – | – | – | 14.4 | 16 | 0.0 |
| railway | url-get | 1KB | 165 ms | 245 ms | 586 ms | 165 ms | 0.0 | 161 | 0.0 |
| r2 | url-get | 1KB | 194 ms | 316 ms | 1.34 s | 194 ms | 0.0 | 160 | 0.0 |
| b2 | url-get | 1KB | 209 ms | 272 ms | 1.66 s | 208 ms | 0.0 | 160 | 0.0 |
| aws-s3 | url-get | 1KB | 210 ms | 278 ms | 289 ms | 210 ms | 0.0 | 161 | 0.0 |
| neon | url-get | 1KB | 248 ms | 371 ms | 458 ms | 248 ms | 0.0 | 161 | 0.0 |
| r2 | url-get | 1MB | 264 ms | 389 ms | 469 ms | 207 ms | 4.0 | 60 | 0.0 |
| railway | url-get | 1MB | 435 ms | 679 ms | 1.05 s | 321 ms | 2.4 | 60 | 0.0 |
| aws-s3 | url-get | 1MB | 525 ms | 699 ms | 875 ms | 221 ms | 2.0 | 60 | 0.0 |
| b2 | url-get | 1MB | 601 ms | 782 ms | 823 ms | 236 ms | 1.7 | 58 | 0.0 |
| neon | url-get | 1MB | 742 ms | 937 ms | 1.06 s | 332 ms | 1.4 | 60 | 0.0 |
| railway | url-get | 10MB | 572 ms | 1.02 s | 1.27 s | 326 ms | 18.3 | 40 | 0.0 |
| r2 | url-get | 10MB | 624 ms | 1.09 s | 4.38 s | 220 ms | 16.8 | 40 | 0.0 |
| aws-s3 | url-get | 10MB | 792 ms | 2.31 s | 5.89 s | 227 ms | 13.2 | 40 | 0.0 |
| b2 | url-get | 10MB | 890 ms | 1.45 s | 2.44 s | 257 ms | 11.8 | 40 | 0.0 |
| neon | url-get | 10MB | 997 ms | 2.23 s | 3.43 s | 338 ms | 10.5 | 40 | 0.0 |
| r2 | url-get | 100KB | 235 ms | 454 ms | 577 ms | 225 ms | 0.4 | 120 | 0.0 |
| aws-s3 | url-get | 100KB | 342 ms | 483 ms | 753 ms | 220 ms | 0.3 | 120 | 0.0 |
| railway | url-get | 100KB | 356 ms | 486 ms | 727 ms | 310 ms | 0.3 | 120 | 0.0 |
| b2 | url-get | 100KB | 381 ms | 523 ms | 699 ms | 229 ms | 0.3 | 119 | 0.0 |
| neon | url-get | 100KB | 532 ms | 694 ms | 753 ms | 324 ms | 0.2 | 120 | 0.0 |
| railway | url-get | 100MB | 1.79 s | – | – | 260 ms | 58.7 | 16 | 0.0 |
| neon | url-get | 100MB | 2.15 s | – | – | 327 ms | 48.8 | 16 | 0.0 |
| aws-s3 | url-get | 100MB | 2.53 s | – | – | 221 ms | 41.5 | 16 | 0.0 |
| b2 | url-get | 100MB | 2.89 s | – | – | 248 ms | 36.3 | 16 | 0.0 |
| r2 | url-get | 100MB | 3.45 s | – | – | 223 ms | 30.4 | 16 | 0.0 |

## From railway-ashburn

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| aws-s3 | burst-upload | 32x100KB | 131 ms | 184 ms | 214 ms | – | 25.0 | 30 | 0.0 |
| railway | burst-upload | 32x100KB | 173 ms | 431 ms | 566 ms | – | 19.0 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 197 ms | 407 ms | 459 ms | – | 16.6 | 30 | 0.0 |
| r2 | burst-upload | 32x100KB | 344 ms | 826 ms | 2.87 s | – | 9.5 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 953 ms | 1.76 s | 1.95 s | – | 3.4 | 30 | 13.3 |
| b2 | concurrent-download | 16x100KB | 27 ms | 101 ms | 105 ms | – | 61.2 | 30 | 0.0 |
| aws-s3 | concurrent-download | 16x100KB | 55 ms | 99 ms | 102 ms | – | 29.7 | 30 | 0.0 |
| neon | concurrent-download | 16x100KB | 72 ms | 210 ms | 299 ms | – | 22.8 | 30 | 0.0 |
| railway | concurrent-download | 16x100KB | 103 ms | 254 ms | 324 ms | – | 16.0 | 30 | 0.0 |
| r2 | concurrent-download | 16x100KB | 218 ms | 1.52 s | 2.80 s | – | 7.5 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 114 ms | 177 ms | 197 ms | – | 14.3 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 133 ms | 452 ms | 684 ms | – | 12.3 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 174 ms | 236 ms | 249 ms | – | 9.4 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 352 ms | 978 ms | 1.13 s | – | 4.7 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 888 ms | 2.52 s | 2.83 s | – | 1.8 | 30 | 0.0 |
| aws-s3 | copy | 10MB | 151 ms | 213 ms | 235 ms | – | – | 60 | 0.0 |
| neon | copy | 10MB | 237 ms | 767 ms | 4.29 s | – | – | 60 | 0.0 |
| railway | copy | 10MB | 298 ms | 572 ms | 655 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 657 ms | 1.99 s | 4.95 s | – | – | 59 | 0.0 |
| r2 | copy | 10MB | 1.18 s | 2.28 s | 2.71 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 7 ms | 22 ms | 48 ms | – | – | 180 | 0.0 |
| railway | delete | 1KB | 22 ms | 34 ms | 41 ms | – | – | 180 | 0.0 |
| neon | delete | 1KB | 28 ms | 35 ms | 40 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 1KB | 38 ms | 48 ms | 53 ms | – | – | 180 | 0.0 |
| r2 | delete | 1KB | 87 ms | 163 ms | 255 ms | – | – | 180 | 0.0 |
| b2 | delete | 1MB | 7 ms | 19 ms | 89 ms | – | – | 90 | 0.0 |
| railway | delete | 1MB | 21 ms | 35 ms | 64 ms | – | – | 90 | 0.0 |
| neon | delete | 1MB | 29 ms | 108 ms | 199 ms | – | – | 90 | 0.0 |
| aws-s3 | delete | 1MB | 38 ms | 44 ms | 50 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 80 ms | 176 ms | 241 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 7 ms | 22 ms | 77 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 23 ms | 37 ms | 45 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 30 ms | 54 ms | 107 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 37 ms | 41 ms | 47 ms | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 86 ms | 155 ms | 284 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 7 ms | 17 ms | 36 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 23 ms | 38 ms | 52 ms | – | – | 180 | 0.0 |
| neon | delete | 100KB | 29 ms | 51 ms | 170 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 100KB | 37 ms | 50 ms | 100 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 86 ms | 181 ms | 320 ms | – | – | 179 | 0.0 |
| b2 | delete | 100MB | 9 ms | 61 ms | 77 ms | – | – | 23 | 0.0 |
| railway | delete | 100MB | 24 ms | 39 ms | 40 ms | – | – | 24 | 0.0 |
| neon | delete | 100MB | 30 ms | 40 ms | 52 ms | – | – | 24 | 0.0 |
| aws-s3 | delete | 100MB | 47 ms | 57 ms | 83 ms | – | – | 24 | 0.0 |
| r2 | delete | 100MB | 89 ms | 172 ms | 354 ms | – | – | 24 | 0.0 |
| railway | download | 1KB | 8 ms | 14 ms | 17 ms | 8 ms | 0.1 | 180 | 0.0 |
| b2 | download | 1KB | 12 ms | 24 ms | 42 ms | 12 ms | 0.1 | 180 | 0.0 |
| neon | download | 1KB | 41 ms | 57 ms | 86 ms | 41 ms | 0.0 | 180 | 0.0 |
| aws-s3 | download | 1KB | 43 ms | 82 ms | 101 ms | 43 ms | 0.0 | 180 | 0.0 |
| r2 | download | 1KB | 103 ms | 240 ms | 433 ms | 102 ms | 0.0 | 180 | 0.0 |
| b2 | download | 1MB | 25 ms | 33 ms | 42 ms | 22 ms | 42.1 | 90 | 0.0 |
| neon | download | 1MB | 48 ms | 77 ms | 122 ms | 43 ms | 21.9 | 90 | 0.0 |
| aws-s3 | download | 1MB | 49 ms | 166 ms | 208 ms | 44 ms | 21.6 | 90 | 0.0 |
| railway | download | 1MB | 50 ms | 162 ms | 347 ms | 35 ms | 21.1 | 90 | 0.0 |
| r2 | download | 1MB | 157 ms | 433 ms | 1.71 s | 96 ms | 6.7 | 90 | 0.0 |
| b2 | download | 10MB | 108 ms | 190 ms | 218 ms | 30 ms | 96.7 | 60 | 0.0 |
| neon | download | 10MB | 128 ms | 179 ms | 267 ms | 43 ms | 82.0 | 60 | 0.0 |
| aws-s3 | download | 10MB | 131 ms | 135 ms | 137 ms | 42 ms | 80.3 | 60 | 0.0 |
| railway | download | 10MB | 151 ms | 434 ms | 461 ms | 46 ms | 69.4 | 60 | 0.0 |
| r2 | download | 10MB | 428 ms | 704 ms | 1.04 s | 113 ms | 24.5 | 60 | 0.0 |
| b2 | download | 100KB | 13 ms | 31 ms | 65 ms | 13 ms | 7.6 | 180 | 0.0 |
| railway | download | 100KB | 30 ms | 88 ms | 150 ms | 24 ms | 3.4 | 180 | 0.0 |
| neon | download | 100KB | 42 ms | 62 ms | 123 ms | 42 ms | 2.4 | 180 | 0.0 |
| aws-s3 | download | 100KB | 45 ms | 104 ms | 136 ms | 44 ms | 2.3 | 180 | 0.0 |
| r2 | download | 100KB | 94 ms | 222 ms | 370 ms | 91 ms | 1.1 | 179 | 0.0 |
| b2 | download | 100MB | 1.05 s | 1.97 s | 2.04 s | 27 ms | 99.6 | 23 | 0.0 |
| railway | download | 100MB | 1.15 s | 1.93 s | 2.07 s | 36 ms | 91.2 | 24 | 0.0 |
| neon | download | 100MB | 1.15 s | 1.20 s | 3.69 s | 41 ms | 90.9 | 24 | 0.0 |
| aws-s3 | download | 100MB | 1.16 s | 1.18 s | 1.18 s | 47 ms | 90.6 | 24 | 0.0 |
| r2 | download | 100MB | 3.25 s | 6.44 s | 7.34 s | 155 ms | 32.3 | 24 | 0.0 |
| b2 | first-request | 1KB | 13 ms | 46 ms | 191 ms | – | – | 60 | 0.0 |
| railway | first-request | 1KB | 20 ms | 33 ms | 75 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 21 ms | 58 ms | 91 ms | – | – | 60 | 0.0 |
| r2 | first-request | 1KB | 77 ms | 163 ms | 231 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 79 ms | 89 ms | 101 ms | – | – | 60 | 0.0 |
| b2 | head | 1KB | 5 ms | 16 ms | 52 ms | – | – | 180 | 0.0 |
| railway | head | 1KB | 9 ms | 16 ms | 25 ms | – | – | 180 | 0.0 |
| neon | head | 1KB | 13 ms | 21 ms | 50 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 1KB | 31 ms | 40 ms | 47 ms | – | – | 180 | 0.0 |
| r2 | head | 1KB | 50 ms | 121 ms | 359 ms | – | – | 180 | 0.0 |
| b2 | head | 1MB | 5 ms | 9 ms | 21 ms | – | – | 90 | 0.0 |
| railway | head | 1MB | 8 ms | 15 ms | 25 ms | – | – | 90 | 0.0 |
| neon | head | 1MB | 14 ms | 22 ms | 68 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 1MB | 30 ms | 33 ms | 38 ms | – | – | 90 | 0.0 |
| r2 | head | 1MB | 46 ms | 156 ms | 260 ms | – | – | 90 | 0.0 |
| railway | head | 10MB | 9 ms | 16 ms | 36 ms | – | – | 60 | 0.0 |
| b2 | head | 10MB | 12 ms | 65 ms | 101 ms | – | – | 60 | 0.0 |
| neon | head | 10MB | 13 ms | 26 ms | 169 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 29 ms | 33 ms | 43 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 51 ms | 101 ms | 169 ms | – | – | 60 | 0.0 |
| b2 | head | 100KB | 5 ms | 28 ms | 54 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 8 ms | 14 ms | 19 ms | – | – | 180 | 0.0 |
| neon | head | 100KB | 14 ms | 22 ms | 42 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 100KB | 30 ms | 38 ms | 93 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 49 ms | 139 ms | 265 ms | – | – | 179 | 0.0 |
| b2 | head | 100MB | 6 ms | 20 ms | 28 ms | – | – | 23 | 0.0 |
| railway | head | 100MB | 8 ms | 14 ms | 15 ms | – | – | 24 | 0.0 |
| neon | head | 100MB | 13 ms | 38 ms | 42 ms | – | – | 24 | 0.0 |
| aws-s3 | head | 100MB | 31 ms | 34 ms | 35 ms | – | – | 24 | 0.0 |
| r2 | head | 100MB | 49 ms | 86 ms | 273 ms | – | – | 24 | 0.0 |
| neon | list-all | 1000 objects | 43 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 48 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | list-all | 1000 objects | 83 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 289 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 352 ms | – | – | – | – | 18 | 0.0 |
| b2 | range-get | 256KB of 10MB | 26 ms | 63 ms | 1.10 s | 25 ms | – | 59 | 0.0 |
| neon | range-get | 256KB of 10MB | 45 ms | 122 ms | 274 ms | 42 ms | – | 60 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 46 ms | 87 ms | 128 ms | 45 ms | – | 60 | 0.0 |
| railway | range-get | 256KB of 10MB | 68 ms | 354 ms | 424 ms | 54 ms | – | 60 | 0.0 |
| r2 | range-get | 256KB of 10MB | 202 ms | 412 ms | 449 ms | 174 ms | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 59 ms | 176 ms | 244 ms | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 120 ms | 212 ms | 308 ms | – | – | 60 | 0.0 |
| neon | signed-upload | 1MB | 123 ms | 207 ms | 274 ms | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 249 ms | 303 ms | 328 ms | – | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 282 ms | 473 ms | 1.15 s | – | – | 60 | 0.0 |
| railway | upload | 1KB | 19 ms | 35 ms | 67 ms | – | 0.1 | 180 | 0.0 |
| aws-s3 | upload | 1KB | 45 ms | 55 ms | 61 ms | – | 0.0 | 180 | 0.0 |
| neon | upload | 1KB | 71 ms | 101 ms | 301 ms | – | 0.0 | 180 | 0.0 |
| r2 | upload | 1KB | 185 ms | 426 ms | 534 ms | – | 0.0 | 180 | 0.0 |
| b2 | upload | 1KB | 198 ms | 578 ms | 852 ms | – | 0.0 | 180 | 0.0 |
| b2 | upload | 1MB | 52 ms | 132 ms | 296 ms | – | 20.1 | 90 | 0.0 |
| railway | upload | 1MB | 113 ms | 200 ms | 250 ms | – | 9.3 | 90 | 0.0 |
| neon | upload | 1MB | 115 ms | 160 ms | 235 ms | – | 9.1 | 90 | 0.0 |
| aws-s3 | upload | 1MB | 170 ms | 230 ms | 238 ms | – | 6.2 | 90 | 0.0 |
| r2 | upload | 1MB | 257 ms | 1.72 s | 3.84 s | – | 4.1 | 90 | 0.0 |
| neon | upload | 10MB | 203 ms | 348 ms | 995 ms | – | 51.8 | 60 | 0.0 |
| railway | upload | 10MB | 283 ms | 521 ms | 746 ms | – | 37.1 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 347 ms | 426 ms | 539 ms | – | 30.2 | 60 | 0.0 |
| b2 | upload | 10MB | 545 ms | 1.74 s | 3.94 s | – | 19.2 | 60 | 0.0 |
| r2 | upload | 10MB | 739 ms | 1.94 s | 3.41 s | – | 14.2 | 60 | 0.0 |
| railway | upload | 100KB | 67 ms | 143 ms | 243 ms | – | 1.5 | 180 | 0.0 |
| neon | upload | 100KB | 81 ms | 143 ms | 182 ms | – | 1.3 | 180 | 0.0 |
| aws-s3 | upload | 100KB | 102 ms | 120 ms | 168 ms | – | 1.0 | 180 | 0.0 |
| b2 | upload | 100KB | 184 ms | 663 ms | 1.25 s | – | 0.6 | 180 | 0.0 |
| r2 | upload | 100KB | 200 ms | 447 ms | 3.32 s | – | 0.5 | 180 | 0.6 |
| railway | upload | 100MB | 1.37 s | 1.88 s | 1.89 s | – | 76.5 | 24 | 0.0 |
| aws-s3 | upload | 100MB | 1.96 s | 2.17 s | 2.21 s | – | 53.5 | 24 | 0.0 |
| b2 | upload | 100MB | 2.34 s | 3.94 s | 4.16 s | – | 44.7 | 24 | 4.2 |
| neon | upload | 100MB | 2.74 s | 3.78 s | 4.72 s | – | 38.2 | 24 | 0.0 |
| r2 | upload | 100MB | 3.21 s | 15.82 s | 19.77 s | – | 32.6 | 24 | 0.0 |
| railway | url-get | 1KB | 8 ms | 16 ms | 39 ms | 8 ms | 0.1 | 180 | 0.0 |
| b2 | url-get | 1KB | 11 ms | 24 ms | 45 ms | 11 ms | 0.1 | 180 | 0.0 |
| neon | url-get | 1KB | 41 ms | 53 ms | 77 ms | 41 ms | 0.0 | 180 | 0.0 |
| aws-s3 | url-get | 1KB | 42 ms | 52 ms | 83 ms | 42 ms | 0.0 | 180 | 0.0 |
| r2 | url-get | 1KB | 76 ms | 215 ms | 334 ms | 76 ms | 0.0 | 180 | 0.0 |
| b2 | url-get | 1MB | 29 ms | 70 ms | 127 ms | 26 ms | 36.2 | 90 | 0.0 |
| aws-s3 | url-get | 1MB | 48 ms | 199 ms | 204 ms | 44 ms | 21.8 | 90 | 0.0 |
| neon | url-get | 1MB | 49 ms | 109 ms | 133 ms | 42 ms | 21.2 | 90 | 0.0 |
| railway | url-get | 1MB | 52 ms | 144 ms | 216 ms | 33 ms | 20.0 | 90 | 0.0 |
| r2 | url-get | 1MB | 137 ms | 310 ms | 461 ms | 79 ms | 7.7 | 90 | 0.0 |
| b2 | url-get | 10MB | 124 ms | 173 ms | 289 ms | 39 ms | 84.9 | 60 | 0.0 |
| neon | url-get | 10MB | 135 ms | 207 ms | 311 ms | 47 ms | 77.7 | 60 | 0.0 |
| railway | url-get | 10MB | 145 ms | 309 ms | 485 ms | 48 ms | 72.5 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 261 ms | 299 ms | 306 ms | 83 ms | 40.1 | 60 | 0.0 |
| r2 | url-get | 10MB | 366 ms | 856 ms | 997 ms | 114 ms | 28.6 | 60 | 0.0 |
| b2 | url-get | 100KB | 13 ms | 40 ms | 87 ms | 13 ms | 7.7 | 180 | 0.0 |
| railway | url-get | 100KB | 31 ms | 81 ms | 163 ms | 24 ms | 3.3 | 180 | 0.0 |
| neon | url-get | 100KB | 42 ms | 79 ms | 160 ms | 41 ms | 2.5 | 180 | 0.0 |
| aws-s3 | url-get | 100KB | 44 ms | 113 ms | 135 ms | 43 ms | 2.3 | 180 | 0.0 |
| r2 | url-get | 100KB | 69 ms | 200 ms | 397 ms | 67 ms | 1.5 | 179 | 0.0 |
| railway | url-get | 100MB | 1.01 s | 1.35 s | 1.41 s | 51 ms | 103.5 | 24 | 0.0 |
| b2 | url-get | 100MB | 1.05 s | 2.93 s | 3.13 s | 39 ms | 100.3 | 23 | 0.0 |
| neon | url-get | 100MB | 1.17 s | 1.19 s | 1.31 s | 51 ms | 89.6 | 24 | 0.0 |
| aws-s3 | url-get | 100MB | 1.20 s | 1.26 s | 1.51 s | 86 ms | 87.7 | 24 | 0.0 |
| r2 | url-get | 100MB | 1.84 s | 14.49 s | 33.23 s | 84 ms | 57.0 | 24 | 0.0 |

## From railway-amsterdam

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| railway | burst-upload | 32x100KB | 403 ms | 565 ms | 627 ms | – | 8.1 | 30 | 0.0 |
| aws-s3 | burst-upload | 32x100KB | 454 ms | 668 ms | 698 ms | – | 7.2 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 488 ms | 742 ms | 765 ms | – | 6.7 | 30 | 0.0 |
| r2 | burst-upload | 32x100KB | 764 ms | 1.05 s | 1.08 s | – | 4.3 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.30 s | 3.58 s | 4.22 s | – | 2.5 | 30 | 6.7 |
| neon | concurrent-download | 16x100KB | 198 ms | 409 ms | 414 ms | – | 8.3 | 30 | 0.0 |
| aws-s3 | concurrent-download | 16x100KB | 221 ms | 386 ms | 434 ms | – | 7.4 | 30 | 0.0 |
| b2 | concurrent-download | 16x100KB | 371 ms | 386 ms | 1.65 s | – | 4.4 | 28 | 0.0 |
| r2 | concurrent-download | 16x100KB | 431 ms | 601 ms | 666 ms | – | 3.8 | 30 | 0.0 |
| railway | concurrent-download | 16x100KB | 467 ms | 620 ms | 664 ms | – | 3.5 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 378 ms | 632 ms | 768 ms | – | 4.3 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 446 ms | 609 ms | 626 ms | – | 3.7 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 448 ms | 660 ms | 695 ms | – | 3.7 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 619 ms | 918 ms | 1.09 s | – | 2.6 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.20 s | 1.72 s | 1.98 s | – | 1.4 | 30 | 6.7 |
| aws-s3 | copy | 10MB | 252 ms | 286 ms | 297 ms | – | – | 60 | 0.0 |
| neon | copy | 10MB | 310 ms | 379 ms | 1.00 s | – | – | 60 | 0.0 |
| railway | copy | 10MB | 533 ms | 754 ms | 920 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 628 ms | 2.54 s | 5.53 s | – | – | 60 | 0.0 |
| r2 | copy | 10MB | 1.35 s | 1.75 s | 3.85 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 99 ms | 135 ms | 189 ms | – | – | 178 | 0.0 |
| neon | delete | 1KB | 110 ms | 140 ms | 250 ms | – | – | 180 | 0.0 |
| railway | delete | 1KB | 113 ms | 126 ms | 148 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 1KB | 116 ms | 129 ms | 137 ms | – | – | 180 | 0.0 |
| r2 | delete | 1KB | 155 ms | 211 ms | 344 ms | – | – | 180 | 0.0 |
| b2 | delete | 1MB | 98 ms | 135 ms | 179 ms | – | – | 90 | 0.0 |
| neon | delete | 1MB | 111 ms | 121 ms | 171 ms | – | – | 90 | 0.0 |
| railway | delete | 1MB | 114 ms | 124 ms | 131 ms | – | – | 90 | 0.0 |
| aws-s3 | delete | 1MB | 117 ms | 129 ms | 133 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 154 ms | 191 ms | 226 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 98 ms | 107 ms | 145 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 111 ms | 267 ms | 320 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 116 ms | 127 ms | 129 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 117 ms | 126 ms | 131 ms | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 157 ms | 277 ms | 352 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 98 ms | 124 ms | 174 ms | – | – | 177 | 0.0 |
| neon | delete | 100KB | 111 ms | 128 ms | 248 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 100KB | 114 ms | 136 ms | 175 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 115 ms | 127 ms | 156 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 154 ms | 210 ms | 400 ms | – | – | 180 | 0.0 |
| b2 | delete | 100MB | 99 ms | 109 ms | 111 ms | – | – | 23 | 8.7 |
| railway | delete | 100MB | 115 ms | 134 ms | 160 ms | – | – | 24 | 0.0 |
| neon | delete | 100MB | 116 ms | 130 ms | 224 ms | – | – | 24 | 0.0 |
| aws-s3 | delete | 100MB | 122 ms | 132 ms | 133 ms | – | – | 24 | 0.0 |
| r2 | delete | 100MB | 157 ms | 224 ms | 295 ms | – | – | 24 | 0.0 |
| railway | download | 1KB | 102 ms | 105 ms | 130 ms | 102 ms | 0.0 | 180 | 0.0 |
| b2 | download | 1KB | 104 ms | 126 ms | 180 ms | 104 ms | 0.0 | 178 | 0.0 |
| aws-s3 | download | 1KB | 122 ms | 154 ms | 324 ms | 122 ms | 0.0 | 180 | 0.0 |
| neon | download | 1KB | 125 ms | 155 ms | 274 ms | 125 ms | 0.0 | 180 | 0.0 |
| r2 | download | 1KB | 267 ms | 358 ms | 419 ms | 267 ms | 0.0 | 180 | 0.0 |
| aws-s3 | download | 1MB | 129 ms | 617 ms | 831 ms | 123 ms | 8.1 | 90 | 0.0 |
| neon | download | 1MB | 131 ms | 211 ms | 378 ms | 123 ms | 8.0 | 90 | 0.0 |
| railway | download | 1MB | 225 ms | 744 ms | 1.03 s | 209 ms | 4.7 | 90 | 0.0 |
| r2 | download | 1MB | 360 ms | 574 ms | 1.13 s | 279 ms | 2.9 | 90 | 0.0 |
| b2 | download | 1MB | 624 ms | 690 ms | 700 ms | 145 ms | 1.7 | 90 | 0.0 |
| neon | download | 10MB | 228 ms | 302 ms | 319 ms | 122 ms | 46.0 | 60 | 0.0 |
| aws-s3 | download | 10MB | 336 ms | 1.08 s | 1.17 s | 122 ms | 31.2 | 60 | 0.0 |
| railway | download | 10MB | 366 ms | 1.10 s | 1.27 s | 223 ms | 28.6 | 60 | 0.0 |
| r2 | download | 10MB | 645 ms | 1.19 s | 5.55 s | 280 ms | 16.3 | 60 | 0.0 |
| b2 | download | 10MB | 1.03 s | 1.11 s | 1.13 s | 153 ms | 10.2 | 60 | 0.0 |
| aws-s3 | download | 100KB | 121 ms | 215 ms | 505 ms | 120 ms | 0.8 | 180 | 0.0 |
| neon | download | 100KB | 125 ms | 176 ms | 378 ms | 124 ms | 0.8 | 180 | 0.0 |
| railway | download | 100KB | 204 ms | 463 ms | 520 ms | 202 ms | 0.5 | 180 | 0.0 |
| r2 | download | 100KB | 265 ms | 389 ms | 525 ms | 260 ms | 0.4 | 180 | 0.0 |
| b2 | download | 100KB | 309 ms | 362 ms | 380 ms | 128 ms | 0.3 | 177 | 0.0 |
| neon | download | 100MB | 1.48 s | 2.24 s | 2.35 s | 128 ms | 70.8 | 24 | 0.0 |
| railway | download | 100MB | 2.19 s | 3.16 s | 3.32 s | 228 ms | 48.0 | 24 | 0.0 |
| r2 | download | 100MB | 2.61 s | 5.71 s | 8.37 s | 280 ms | 40.2 | 24 | 0.0 |
| aws-s3 | download | 100MB | 3.32 s | 3.60 s | 3.65 s | 128 ms | 31.6 | 24 | 0.0 |
| b2 | download | 100MB | 3.68 s | 4.85 s | 5.11 s | 156 ms | 28.5 | 23 | 0.0 |
| r2 | first-request | 1KB | 146 ms | 262 ms | 331 ms | – | – | 60 | 0.0 |
| railway | first-request | 1KB | 212 ms | 274 ms | 341 ms | – | – | 60 | 0.0 |
| b2 | first-request | 1KB | 272 ms | 310 ms | 349 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 309 ms | 333 ms | 342 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 349 ms | 382 ms | 391 ms | – | – | 60 | 0.0 |
| neon | head | 1KB | 96 ms | 111 ms | 129 ms | – | – | 180 | 0.0 |
| b2 | head | 1KB | 97 ms | 109 ms | 149 ms | – | – | 178 | 0.0 |
| railway | head | 1KB | 102 ms | 105 ms | 143 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 1KB | 109 ms | 120 ms | 166 ms | – | – | 180 | 0.0 |
| r2 | head | 1KB | 121 ms | 180 ms | 267 ms | – | – | 180 | 0.0 |
| b2 | head | 1MB | 97 ms | 143 ms | 170 ms | – | – | 90 | 0.0 |
| neon | head | 1MB | 97 ms | 123 ms | 130 ms | – | – | 90 | 1.1 |
| railway | head | 1MB | 102 ms | 105 ms | 133 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 1MB | 110 ms | 120 ms | 324 ms | – | – | 90 | 0.0 |
| r2 | head | 1MB | 120 ms | 236 ms | 296 ms | – | – | 90 | 0.0 |
| neon | head | 10MB | 96 ms | 122 ms | 172 ms | – | – | 60 | 0.0 |
| railway | head | 10MB | 102 ms | 117 ms | 211 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 110 ms | 316 ms | 344 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 122 ms | 177 ms | 197 ms | – | – | 60 | 0.0 |
| b2 | head | 10MB | 287 ms | 313 ms | 335 ms | – | – | 60 | 0.0 |
| b2 | head | 100KB | 96 ms | 131 ms | 203 ms | – | – | 177 | 0.0 |
| neon | head | 100KB | 97 ms | 109 ms | 120 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 102 ms | 105 ms | 134 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 100KB | 106 ms | 119 ms | 172 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 119 ms | 173 ms | 219 ms | – | – | 180 | 0.0 |
| neon | head | 100MB | 97 ms | 106 ms | 110 ms | – | – | 24 | 0.0 |
| b2 | head | 100MB | 97 ms | 179 ms | 184 ms | – | – | 23 | 0.0 |
| railway | head | 100MB | 102 ms | 105 ms | 106 ms | – | – | 24 | 0.0 |
| aws-s3 | head | 100MB | 105 ms | 117 ms | 120 ms | – | – | 24 | 0.0 |
| r2 | head | 100MB | 115 ms | 155 ms | 259 ms | – | – | 24 | 0.0 |
| neon | list-all | 1000 objects | 119 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 136 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | list-all | 1000 objects | 172 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 299 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 749 ms | – | – | – | – | 18 | 0.0 |
| neon | range-get | 256KB of 10MB | 127 ms | 199 ms | 234 ms | 125 ms | – | 60 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 129 ms | 450 ms | 519 ms | 126 ms | – | 60 | 0.0 |
| railway | range-get | 256KB of 10MB | 241 ms | 662 ms | 824 ms | 214 ms | – | 60 | 0.0 |
| r2 | range-get | 256KB of 10MB | 366 ms | 688 ms | 810 ms | 318 ms | – | 60 | 0.0 |
| b2 | range-get | 256KB of 10MB | 466 ms | 520 ms | 596 ms | 149 ms | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 507 ms | 964 ms | 1.07 s | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 600 ms | 813 ms | 1.18 s | – | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 865 ms | 945 ms | 1.08 s | – | – | 60 | 0.0 |
| neon | signed-upload | 1MB | 910 ms | 1.01 s | 1.04 s | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 1.03 s | 1.36 s | 1.71 s | – | – | 60 | 0.0 |
| railway | upload | 1KB | 110 ms | 120 ms | 128 ms | – | 0.0 | 180 | 0.0 |
| aws-s3 | upload | 1KB | 123 ms | 135 ms | 183 ms | – | 0.0 | 180 | 0.0 |
| neon | upload | 1KB | 156 ms | 190 ms | 284 ms | – | 0.0 | 180 | 0.0 |
| b2 | upload | 1KB | 367 ms | 760 ms | 1.04 s | – | 0.0 | 180 | 1.1 |
| r2 | upload | 1KB | 401 ms | 534 ms | 651 ms | – | 0.0 | 180 | 0.0 |
| r2 | upload | 1MB | 461 ms | 804 ms | 927 ms | – | 2.3 | 90 | 0.0 |
| railway | upload | 1MB | 500 ms | 556 ms | 648 ms | – | 2.1 | 90 | 0.0 |
| neon | upload | 1MB | 678 ms | 736 ms | 811 ms | – | 1.5 | 90 | 0.0 |
| aws-s3 | upload | 1MB | 719 ms | 738 ms | 888 ms | – | 1.5 | 90 | 0.0 |
| b2 | upload | 1MB | 844 ms | 961 ms | 1.15 s | – | 1.2 | 90 | 0.0 |
| r2 | upload | 10MB | 965 ms | 1.48 s | 1.67 s | – | 10.9 | 60 | 0.0 |
| railway | upload | 10MB | 1.02 s | 2.75 s | 4.70 s | – | 10.3 | 60 | 0.0 |
| neon | upload | 10MB | 1.28 s | 1.44 s | 1.46 s | – | 8.2 | 60 | 0.0 |
| b2 | upload | 10MB | 1.54 s | 2.33 s | 2.86 s | – | 6.8 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 1.67 s | 1.99 s | 2.30 s | – | 6.3 | 60 | 0.0 |
| railway | upload | 100KB | 306 ms | 368 ms | 455 ms | – | 0.3 | 180 | 0.0 |
| neon | upload | 100KB | 400 ms | 443 ms | 537 ms | – | 0.3 | 180 | 0.0 |
| r2 | upload | 100KB | 402 ms | 578 ms | 776 ms | – | 0.3 | 180 | 0.0 |
| aws-s3 | upload | 100KB | 407 ms | 458 ms | 480 ms | – | 0.3 | 180 | 0.0 |
| b2 | upload | 100KB | 670 ms | 1.23 s | 1.77 s | – | 0.2 | 180 | 1.7 |
| r2 | upload | 100MB | 4.61 s | 5.20 s | 5.66 s | – | 22.8 | 24 | 0.0 |
| railway | upload | 100MB | 7.61 s | 9.30 s | 11.69 s | – | 13.8 | 24 | 0.0 |
| neon | upload | 100MB | 8.03 s | 9.92 s | 10.06 s | – | 13.1 | 24 | 0.0 |
| aws-s3 | upload | 100MB | 8.37 s | 9.05 s | 9.48 s | – | 12.5 | 24 | 0.0 |
| b2 | upload | 100MB | 8.77 s | 10.38 s | 13.91 s | – | 12.0 | 24 | 4.2 |
| r2 | url-get | 1KB | 200 ms | 361 ms | 536 ms | 200 ms | 0.0 | 180 | 0.0 |
| railway | url-get | 1KB | 213 ms | 251 ms | 394 ms | 213 ms | 0.0 | 180 | 0.0 |
| neon | url-get | 1KB | 288 ms | 383 ms | 406 ms | 287 ms | 0.0 | 180 | 0.0 |
| b2 | url-get | 1KB | 289 ms | 333 ms | 400 ms | 289 ms | 0.0 | 178 | 0.0 |
| aws-s3 | url-get | 1KB | 311 ms | 345 ms | 355 ms | 310 ms | 0.0 | 180 | 0.0 |
| r2 | url-get | 1MB | 264 ms | 575 ms | 1.20 s | 218 ms | 4.0 | 90 | 0.0 |
| railway | url-get | 1MB | 403 ms | 937 ms | 1.02 s | 337 ms | 2.6 | 90 | 0.0 |
| aws-s3 | url-get | 1MB | 825 ms | 942 ms | 990 ms | 320 ms | 1.3 | 90 | 0.0 |
| b2 | url-get | 1MB | 856 ms | 946 ms | 2.08 s | 333 ms | 1.2 | 90 | 0.0 |
| neon | url-get | 1MB | 882 ms | 956 ms | 1.01 s | 382 ms | 1.2 | 90 | 0.0 |
| r2 | url-get | 10MB | 430 ms | 1.26 s | 2.08 s | 207 ms | 24.4 | 60 | 0.0 |
| railway | url-get | 10MB | 865 ms | 1.46 s | 3.55 s | 351 ms | 12.1 | 60 | 0.0 |
| neon | url-get | 10MB | 1.16 s | 1.24 s | 1.28 s | 387 ms | 9.1 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 1.22 s | 1.33 s | 1.41 s | 325 ms | 8.6 | 60 | 0.0 |
| b2 | url-get | 10MB | 1.26 s | 1.37 s | 3.50 s | 356 ms | 8.3 | 60 | 0.0 |
| r2 | url-get | 100KB | 202 ms | 341 ms | 392 ms | 196 ms | 0.5 | 180 | 0.0 |
| railway | url-get | 100KB | 353 ms | 603 ms | 649 ms | 312 ms | 0.3 | 180 | 0.0 |
| aws-s3 | url-get | 100KB | 509 ms | 559 ms | 630 ms | 320 ms | 0.2 | 180 | 0.0 |
| neon | url-get | 100KB | 546 ms | 664 ms | 683 ms | 302 ms | 0.2 | 180 | 0.0 |
| b2 | url-get | 100KB | 549 ms | 598 ms | 660 ms | 326 ms | 0.2 | 177 | 0.0 |
| railway | url-get | 100MB | 1.98 s | 3.02 s | 3.17 s | 271 ms | 52.8 | 24 | 0.0 |
| neon | url-get | 100MB | 2.28 s | 2.42 s | 2.43 s | 388 ms | 46.1 | 24 | 0.0 |
| r2 | url-get | 100MB | 2.67 s | 6.38 s | 7.47 s | 208 ms | 39.2 | 24 | 0.0 |
| aws-s3 | url-get | 100MB | 3.59 s | 3.96 s | 3.99 s | 327 ms | 29.2 | 24 | 0.0 |
| b2 | url-get | 100MB | 3.97 s | 4.83 s | 5.18 s | 348 ms | 26.4 | 23 | 0.0 |

## From freestyle-sf

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| railway | burst-upload | 32x100KB | 534 ms | 684 ms | 684 ms | – | 6.1 | 20 | 0.0 |
| aws-s3 | burst-upload | 32x100KB | 557 ms | 927 ms | 1.06 s | – | 5.9 | 20 | 0.0 |
| r2 | burst-upload | 32x100KB | 610 ms | 2.65 s | 2.94 s | – | 5.4 | 20 | 0.0 |
| neon | burst-upload | 32x100KB | 614 ms | 805 ms | 904 ms | – | 5.3 | 20 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.41 s | – | – | – | 2.3 | 20 | 5.0 |
| aws-s3 | concurrent-download | 16x100KB | 134 ms | 319 ms | 650 ms | – | 12.2 | 20 | 0.0 |
| neon | concurrent-download | 16x100KB | 201 ms | 558 ms | 757 ms | – | 8.2 | 20 | 0.0 |
| b2 | concurrent-download | 16x100KB | 254 ms | – | – | – | 6.5 | 17 | 0.0 |
| railway | concurrent-download | 16x100KB | 306 ms | 528 ms | 565 ms | – | 5.4 | 20 | 0.0 |
| r2 | concurrent-download | 16x100KB | 366 ms | 2.02 s | 2.30 s | – | 4.5 | 20 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 430 ms | 676 ms | 686 ms | – | 3.8 | 20 | 0.0 |
| railway | concurrent-upload | 16x100KB | 459 ms | 726 ms | 747 ms | – | 3.6 | 20 | 0.0 |
| neon | concurrent-upload | 16x100KB | 490 ms | 770 ms | 837 ms | – | 3.3 | 20 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 591 ms | 1.17 s | 2.74 s | – | 2.8 | 20 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.16 s | – | – | – | 1.4 | 20 | 15.0 |
| aws-s3 | copy | 10MB | 183 ms | 258 ms | 287 ms | – | – | 40 | 0.0 |
| neon | copy | 10MB | 297 ms | 441 ms | 1.68 s | – | – | 40 | 2.5 |
| b2 | copy | 10MB | 491 ms | 1.24 s | 1.53 s | – | – | 40 | 0.0 |
| railway | copy | 10MB | 532 ms | 715 ms | 874 ms | – | – | 40 | 0.0 |
| r2 | copy | 10MB | 1.33 s | 2.18 s | 2.45 s | – | – | 40 | 0.0 |
| b2 | delete | 1KB | 72 ms | 86 ms | 125 ms | – | – | 117 | 0.0 |
| aws-s3 | delete | 1KB | 83 ms | 103 ms | 123 ms | – | – | 120 | 0.0 |
| railway | delete | 1KB | 101 ms | 228 ms | 319 ms | – | – | 120 | 0.0 |
| neon | delete | 1KB | 102 ms | 135 ms | 212 ms | – | – | 120 | 0.0 |
| r2 | delete | 1KB | 165 ms | 243 ms | 382 ms | – | – | 120 | 0.0 |
| b2 | delete | 1MB | 71 ms | 97 ms | 154 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 1MB | 83 ms | 115 ms | 185 ms | – | – | 60 | 0.0 |
| neon | delete | 1MB | 100 ms | 127 ms | 285 ms | – | – | 60 | 0.0 |
| railway | delete | 1MB | 134 ms | 238 ms | 285 ms | – | – | 60 | 0.0 |
| r2 | delete | 1MB | 158 ms | 233 ms | 336 ms | – | – | 60 | 0.0 |
| b2 | delete | 10MB | 71 ms | 82 ms | 118 ms | – | – | 40 | 0.0 |
| aws-s3 | delete | 10MB | 83 ms | 89 ms | 90 ms | – | – | 40 | 0.0 |
| neon | delete | 10MB | 101 ms | 119 ms | 151 ms | – | – | 40 | 0.0 |
| r2 | delete | 10MB | 168 ms | 225 ms | 251 ms | – | – | 40 | 0.0 |
| railway | delete | 10MB | 179 ms | 216 ms | 227 ms | – | – | 40 | 0.0 |
| b2 | delete | 100KB | 71 ms | 97 ms | 162 ms | – | – | 120 | 0.0 |
| aws-s3 | delete | 100KB | 83 ms | 99 ms | 148 ms | – | – | 120 | 0.0 |
| neon | delete | 100KB | 101 ms | 163 ms | 356 ms | – | – | 120 | 0.0 |
| railway | delete | 100KB | 113 ms | 210 ms | 287 ms | – | – | 120 | 0.0 |
| r2 | delete | 100KB | 161 ms | 335 ms | 912 ms | – | – | 120 | 0.0 |
| b2 | delete | 100MB | 72 ms | – | – | – | – | 15 | 0.0 |
| aws-s3 | delete | 100MB | 90 ms | – | – | – | – | 16 | 0.0 |
| neon | delete | 100MB | 101 ms | – | – | – | – | 16 | 0.0 |
| railway | delete | 100MB | 135 ms | – | – | – | – | 16 | 0.0 |
| r2 | delete | 100MB | 178 ms | – | – | – | – | 16 | 0.0 |
| b2 | download | 1KB | 76 ms | 100 ms | 113 ms | 76 ms | 0.0 | 117 | 0.0 |
| railway | download | 1KB | 86 ms | 170 ms | 237 ms | 86 ms | 0.0 | 120 | 0.0 |
| aws-s3 | download | 1KB | 90 ms | 133 ms | 231 ms | 90 ms | 0.0 | 120 | 0.0 |
| neon | download | 1KB | 114 ms | 156 ms | 183 ms | 114 ms | 0.0 | 120 | 0.0 |
| r2 | download | 1KB | 252 ms | 338 ms | 408 ms | 251 ms | 0.0 | 120 | 0.0 |
| aws-s3 | download | 1MB | 114 ms | 407 ms | 681 ms | 89 ms | 9.2 | 60 | 0.0 |
| neon | download | 1MB | 190 ms | 551 ms | 904 ms | 112 ms | 5.5 | 60 | 0.0 |
| railway | download | 1MB | 244 ms | 599 ms | 636 ms | 211 ms | 4.3 | 60 | 0.0 |
| r2 | download | 1MB | 336 ms | 524 ms | 547 ms | 256 ms | 3.1 | 60 | 0.0 |
| b2 | download | 1MB | 444 ms | 503 ms | 535 ms | 107 ms | 2.4 | 60 | 0.0 |
| railway | download | 10MB | 444 ms | 752 ms | 1.05 s | 227 ms | 23.6 | 40 | 0.0 |
| aws-s3 | download | 10MB | 670 ms | 937 ms | 1.28 s | 88 ms | 15.7 | 40 | 0.0 |
| neon | download | 10MB | 742 ms | 1.99 s | 2.20 s | 113 ms | 14.1 | 40 | 0.0 |
| b2 | download | 10MB | 754 ms | 844 ms | 862 ms | 118 ms | 13.9 | 40 | 0.0 |
| r2 | download | 10MB | 841 ms | 1.38 s | 1.50 s | 271 ms | 12.5 | 40 | 0.0 |
| aws-s3 | download | 100KB | 92 ms | 215 ms | 374 ms | 90 ms | 1.1 | 120 | 0.0 |
| b2 | download | 100KB | 144 ms | 250 ms | 640 ms | 95 ms | 0.7 | 120 | 0.0 |
| neon | download | 100KB | 179 ms | 354 ms | 494 ms | 115 ms | 0.6 | 120 | 0.0 |
| railway | download | 100KB | 182 ms | 328 ms | 383 ms | 179 ms | 0.6 | 120 | 0.0 |
| r2 | download | 100KB | 252 ms | 380 ms | 519 ms | 249 ms | 0.4 | 120 | 0.0 |
| railway | download | 100MB | 2.47 s | – | – | 266 ms | 42.5 | 16 | 0.0 |
| b2 | download | 100MB | 3.49 s | – | – | 121 ms | 30.0 | 15 | 0.0 |
| r2 | download | 100MB | 4.66 s | – | – | 317 ms | 22.5 | 16 | 0.0 |
| aws-s3 | download | 100MB | 4.99 s | – | – | 117 ms | 21.0 | 16 | 0.0 |
| neon | download | 100MB | 7.93 s | – | – | 112 ms | 13.2 | 16 | 0.0 |
| railway | first-request | 1KB | 108 ms | 147 ms | 175 ms | – | – | 40 | 0.0 |
| r2 | first-request | 1KB | 167 ms | 282 ms | 309 ms | – | – | 40 | 0.0 |
| b2 | first-request | 1KB | 217 ms | 271 ms | 299 ms | – | – | 40 | 0.0 |
| aws-s3 | first-request | 1KB | 232 ms | 248 ms | 262 ms | – | – | 40 | 0.0 |
| neon | first-request | 1KB | 327 ms | 369 ms | 386 ms | – | – | 40 | 0.0 |
| b2 | head | 1KB | 70 ms | 84 ms | 143 ms | – | – | 117 | 0.0 |
| aws-s3 | head | 1KB | 74 ms | 97 ms | 131 ms | – | – | 120 | 0.0 |
| neon | head | 1KB | 88 ms | 134 ms | 208 ms | – | – | 120 | 0.0 |
| railway | head | 1KB | 89 ms | 182 ms | 330 ms | – | – | 120 | 0.0 |
| r2 | head | 1KB | 126 ms | 205 ms | 238 ms | – | – | 120 | 0.0 |
| b2 | head | 1MB | 69 ms | 102 ms | 111 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 1MB | 75 ms | 95 ms | 182 ms | – | – | 60 | 0.0 |
| neon | head | 1MB | 85 ms | 98 ms | 232 ms | – | – | 60 | 0.0 |
| railway | head | 1MB | 89 ms | 179 ms | 204 ms | – | – | 60 | 0.0 |
| r2 | head | 1MB | 122 ms | 166 ms | 188 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 76 ms | 240 ms | 241 ms | – | – | 40 | 0.0 |
| neon | head | 10MB | 86 ms | 116 ms | 241 ms | – | – | 40 | 0.0 |
| r2 | head | 10MB | 140 ms | 272 ms | 337 ms | – | – | 40 | 0.0 |
| railway | head | 10MB | 165 ms | 232 ms | 16.58 s | – | – | 40 | 0.0 |
| b2 | head | 10MB | 214 ms | 265 ms | 3.30 s | – | – | 40 | 0.0 |
| b2 | head | 100KB | 70 ms | 106 ms | 191 ms | – | – | 120 | 0.0 |
| aws-s3 | head | 100KB | 75 ms | 95 ms | 137 ms | – | – | 120 | 0.0 |
| railway | head | 100KB | 86 ms | 192 ms | 505 ms | – | – | 120 | 0.0 |
| neon | head | 100KB | 87 ms | 116 ms | 165 ms | – | – | 120 | 0.0 |
| r2 | head | 100KB | 123 ms | 185 ms | 393 ms | – | – | 120 | 0.0 |
| b2 | head | 100MB | 69 ms | – | – | – | – | 15 | 0.0 |
| aws-s3 | head | 100MB | 74 ms | – | – | – | – | 16 | 0.0 |
| railway | head | 100MB | 83 ms | – | – | – | – | 16 | 0.0 |
| neon | head | 100MB | 87 ms | – | – | – | – | 16 | 0.0 |
| r2 | head | 100MB | 124 ms | – | – | – | – | 16 | 0.0 |
| neon | list-all | 1000 objects | 125 ms | – | – | – | – | 12 | 0.0 |
| railway | list-all | 1000 objects | 130 ms | – | – | – | – | 12 | 0.0 |
| aws-s3 | list-all | 1000 objects | 145 ms | – | – | – | – | 12 | 0.0 |
| b2 | list-all | 1000 objects | 521 ms | – | – | – | – | 12 | 0.0 |
| r2 | list-all | 1000 objects | 749 ms | – | – | – | – | 12 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 98 ms | 298 ms | 420 ms | 88 ms | – | 40 | 0.0 |
| neon | range-get | 256KB of 10MB | 148 ms | 413 ms | 1.25 s | 112 ms | – | 40 | 0.0 |
| railway | range-get | 256KB of 10MB | 262 ms | 357 ms | 572 ms | 258 ms | – | 40 | 0.0 |
| r2 | range-get | 256KB of 10MB | 315 ms | 634 ms | 1.33 s | 289 ms | – | 40 | 0.0 |
| b2 | range-get | 256KB of 10MB | 337 ms | 373 ms | 404 ms | 113 ms | – | 40 | 0.0 |
| r2 | signed-upload | 1MB | 467 ms | 729 ms | 1.20 s | – | – | 40 | 0.0 |
| b2 | signed-upload | 1MB | 642 ms | 770 ms | 875 ms | – | – | 40 | 0.0 |
| aws-s3 | signed-upload | 1MB | 701 ms | 1.17 s | 1.24 s | – | – | 40 | 0.0 |
| railway | signed-upload | 1MB | 707 ms | 1.00 s | 1.54 s | – | – | 40 | 0.0 |
| neon | signed-upload | 1MB | 861 ms | 1.50 s | 3.51 s | – | – | 40 | 0.0 |
| aws-s3 | upload | 1KB | 88 ms | 109 ms | 182 ms | – | 0.0 | 120 | 0.0 |
| railway | upload | 1KB | 98 ms | 208 ms | 433 ms | – | 0.0 | 120 | 0.0 |
| neon | upload | 1KB | 150 ms | 220 ms | 276 ms | – | 0.0 | 120 | 0.0 |
| b2 | upload | 1KB | 275 ms | 735 ms | 922 ms | – | 0.0 | 120 | 2.5 |
| r2 | upload | 1KB | 372 ms | 632 ms | 732 ms | – | 0.0 | 120 | 0.0 |
| r2 | upload | 1MB | 467 ms | 794 ms | 1.01 s | – | 2.2 | 60 | 0.0 |
| railway | upload | 1MB | 479 ms | 733 ms | 1.17 s | – | 2.2 | 60 | 0.0 |
| aws-s3 | upload | 1MB | 556 ms | 1.03 s | 1.32 s | – | 1.9 | 60 | 0.0 |
| b2 | upload | 1MB | 617 ms | 952 ms | 1.17 s | – | 1.7 | 60 | 0.0 |
| neon | upload | 1MB | 706 ms | 2.34 s | 2.63 s | – | 1.5 | 60 | 0.0 |
| r2 | upload | 10MB | 1.04 s | 1.57 s | 15.13 s | – | 10.1 | 40 | 0.0 |
| railway | upload | 10MB | 1.38 s | 2.75 s | 3.64 s | – | 7.6 | 40 | 0.0 |
| b2 | upload | 10MB | 1.43 s | 2.87 s | 7.34 s | – | 7.3 | 40 | 0.0 |
| aws-s3 | upload | 10MB | 1.70 s | 12.72 s | 15.97 s | – | 6.2 | 40 | 0.0 |
| neon | upload | 10MB | 2.86 s | 9.86 s | 15.23 s | – | 3.7 | 40 | 0.0 |
| aws-s3 | upload | 100KB | 285 ms | 356 ms | 468 ms | – | 0.4 | 120 | 0.0 |
| railway | upload | 100KB | 308 ms | 507 ms | 591 ms | – | 0.3 | 120 | 0.0 |
| neon | upload | 100KB | 359 ms | 495 ms | 654 ms | – | 0.3 | 120 | 0.0 |
| r2 | upload | 100KB | 380 ms | 613 ms | 714 ms | – | 0.3 | 120 | 0.0 |
| b2 | upload | 100KB | 513 ms | 1.01 s | 1.25 s | – | 0.2 | 120 | 0.0 |
| r2 | upload | 100MB | 4.78 s | – | – | – | 22.0 | 16 | 0.0 |
| railway | upload | 100MB | 6.74 s | – | – | – | 15.5 | 16 | 0.0 |
| b2 | upload | 100MB | 8.05 s | – | – | – | 13.0 | 16 | 6.3 |
| aws-s3 | upload | 100MB | 13.15 s | – | – | – | 8.0 | 16 | 0.0 |
| neon | upload | 100MB | 17.07 s | – | – | – | 6.1 | 16 | 0.0 |
| railway | url-get | 1KB | 121 ms | 316 ms | 486 ms | 120 ms | 0.0 | 120 | 0.0 |
| r2 | url-get | 1KB | 197 ms | 320 ms | 424 ms | 197 ms | 0.0 | 120 | 0.0 |
| b2 | url-get | 1KB | 222 ms | 286 ms | 835 ms | 222 ms | 0.0 | 117 | 0.0 |
| aws-s3 | url-get | 1KB | 224 ms | 293 ms | 379 ms | 224 ms | 0.0 | 120 | 0.0 |
| neon | url-get | 1KB | 274 ms | 417 ms | 494 ms | 273 ms | 0.0 | 120 | 0.0 |
| r2 | url-get | 1MB | 258 ms | 380 ms | 555 ms | 217 ms | 4.1 | 60 | 0.0 |
| railway | url-get | 1MB | 308 ms | 464 ms | 692 ms | 268 ms | 3.4 | 60 | 0.0 |
| aws-s3 | url-get | 1MB | 558 ms | 1.05 s | 1.24 s | 232 ms | 1.9 | 60 | 0.0 |
| b2 | url-get | 1MB | 617 ms | 689 ms | 827 ms | 248 ms | 1.7 | 60 | 0.0 |
| neon | url-get | 1MB | 800 ms | 1.17 s | 1.25 s | 360 ms | 1.3 | 60 | 0.0 |
| railway | url-get | 10MB | 485 ms | 999 ms | 1.49 s | 292 ms | 21.6 | 40 | 0.0 |
| r2 | url-get | 10MB | 617 ms | 1.72 s | 5.85 s | 252 ms | 17.0 | 40 | 0.0 |
| aws-s3 | url-get | 10MB | 866 ms | 2.85 s | 3.03 s | 231 ms | 12.1 | 40 | 0.0 |
| b2 | url-get | 10MB | 911 ms | 1.03 s | 1.16 s | 260 ms | 11.5 | 40 | 0.0 |
| neon | url-get | 10MB | 1.14 s | 3.16 s | 4.09 s | 356 ms | 9.2 | 40 | 0.0 |
| r2 | url-get | 100KB | 218 ms | 339 ms | 415 ms | 215 ms | 0.5 | 120 | 0.8 |
| railway | url-get | 100KB | 251 ms | 436 ms | 627 ms | 244 ms | 0.4 | 120 | 0.0 |
| aws-s3 | url-get | 100KB | 353 ms | 391 ms | 768 ms | 228 ms | 0.3 | 120 | 0.0 |
| b2 | url-get | 100KB | 392 ms | 435 ms | 513 ms | 241 ms | 0.3 | 120 | 0.0 |
| neon | url-get | 100KB | 574 ms | 672 ms | 707 ms | 356 ms | 0.2 | 120 | 0.0 |
| railway | url-get | 100MB | 2.27 s | – | – | 273 ms | 46.2 | 16 | 0.0 |
| r2 | url-get | 100MB | 2.84 s | – | – | 227 ms | 37.0 | 16 | 0.0 |
| b2 | url-get | 100MB | 3.52 s | – | – | 266 ms | 29.8 | 15 | 0.0 |
| aws-s3 | url-get | 100MB | 5.11 s | – | – | 248 ms | 20.5 | 16 | 0.0 |
| neon | url-get | 100MB | 5.93 s | – | – | 447 ms | 17.7 | 16 | 0.0 |

## From ms-a2

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| railway | burst-upload | 32x100KB | 228 ms | 444 ms | 570 ms | – | 14.4 | 20 | 0.0 |
| aws-s3 | burst-upload | 32x100KB | 233 ms | 335 ms | 342 ms | – | 14.1 | 20 | 0.0 |
| neon | burst-upload | 32x100KB | 309 ms | 413 ms | 549 ms | – | 10.6 | 20 | 0.0 |
| r2 | burst-upload | 32x100KB | 587 ms | 1.35 s | 2.94 s | – | 5.6 | 20 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.13 s | – | – | – | 2.9 | 20 | 10.0 |
| aws-s3 | concurrent-download | 16x100KB | 94 ms | 172 ms | 198 ms | – | 17.4 | 20 | 0.0 |
| b2 | concurrent-download | 16x100KB | 98 ms | – | – | – | 16.7 | 19 | 0.0 |
| neon | concurrent-download | 16x100KB | 100 ms | 194 ms | 224 ms | – | 16.4 | 20 | 0.0 |
| railway | concurrent-download | 16x100KB | 193 ms | 373 ms | 388 ms | – | 8.5 | 20 | 0.0 |
| r2 | concurrent-download | 16x100KB | 230 ms | 383 ms | 400 ms | – | 7.1 | 20 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 213 ms | 331 ms | 368 ms | – | 7.7 | 20 | 0.0 |
| railway | concurrent-upload | 16x100KB | 218 ms | 403 ms | 413 ms | – | 7.5 | 20 | 0.0 |
| neon | concurrent-upload | 16x100KB | 235 ms | 356 ms | 408 ms | – | 7.0 | 20 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 555 ms | 2.56 s | 2.72 s | – | 3.0 | 20 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 898 ms | – | – | – | 1.8 | 20 | 5.0 |
| aws-s3 | copy | 10MB | 193 ms | 234 ms | 241 ms | – | – | 40 | 0.0 |
| neon | copy | 10MB | 287 ms | 383 ms | 552 ms | – | – | 39 | 0.0 |
| railway | copy | 10MB | 312 ms | 480 ms | 543 ms | – | – | 40 | 0.0 |
| b2 | copy | 10MB | 589 ms | 1.30 s | 4.59 s | – | – | 40 | 0.0 |
| r2 | copy | 10MB | 1.05 s | 1.44 s | 1.55 s | – | – | 40 | 0.0 |
| b2 | delete | 1KB | 42 ms | 95 ms | 112 ms | – | – | 120 | 0.0 |
| railway | delete | 1KB | 55 ms | 69 ms | 106 ms | – | – | 120 | 0.0 |
| neon | delete | 1KB | 56 ms | 188 ms | 199 ms | – | – | 120 | 0.0 |
| aws-s3 | delete | 1KB | 57 ms | 67 ms | 87 ms | – | – | 120 | 0.0 |
| r2 | delete | 1KB | 115 ms | 159 ms | 292 ms | – | – | 120 | 0.0 |
| b2 | delete | 1MB | 39 ms | 103 ms | 134 ms | – | – | 60 | 0.0 |
| neon | delete | 1MB | 56 ms | 171 ms | 264 ms | – | – | 60 | 0.0 |
| railway | delete | 1MB | 57 ms | 75 ms | 105 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 1MB | 58 ms | 66 ms | 85 ms | – | – | 60 | 0.0 |
| r2 | delete | 1MB | 135 ms | 209 ms | 288 ms | – | – | 60 | 0.0 |
| b2 | delete | 10MB | 39 ms | 130 ms | 151 ms | – | – | 40 | 0.0 |
| neon | delete | 10MB | 56 ms | 183 ms | 199 ms | – | – | 40 | 0.0 |
| railway | delete | 10MB | 57 ms | 77 ms | 79 ms | – | – | 40 | 0.0 |
| aws-s3 | delete | 10MB | 58 ms | 63 ms | 66 ms | – | – | 40 | 0.0 |
| r2 | delete | 10MB | 118 ms | 149 ms | 241 ms | – | – | 40 | 0.0 |
| b2 | delete | 100KB | 40 ms | 58 ms | 100 ms | – | – | 120 | 0.0 |
| railway | delete | 100KB | 55 ms | 79 ms | 90 ms | – | – | 120 | 0.0 |
| neon | delete | 100KB | 55 ms | 67 ms | 195 ms | – | – | 120 | 0.0 |
| aws-s3 | delete | 100KB | 58 ms | 68 ms | 80 ms | – | – | 120 | 0.0 |
| r2 | delete | 100KB | 132 ms | 278 ms | 445 ms | – | – | 120 | 0.0 |
| b2 | delete | 100MB | 43 ms | – | – | – | – | 15 | 0.0 |
| railway | delete | 100MB | 51 ms | – | – | – | – | 16 | 0.0 |
| neon | delete | 100MB | 59 ms | – | – | – | – | 16 | 0.0 |
| aws-s3 | delete | 100MB | 65 ms | – | – | – | – | 15 | 0.0 |
| r2 | delete | 100MB | 122 ms | – | – | – | – | 16 | 0.0 |
| railway | download | 1KB | 39 ms | 45 ms | 47 ms | 39 ms | 0.0 | 120 | 0.0 |
| b2 | download | 1KB | 47 ms | 122 ms | 1.58 s | 47 ms | 0.0 | 120 | 0.0 |
| aws-s3 | download | 1KB | 63 ms | 79 ms | 159 ms | 63 ms | 0.0 | 120 | 0.0 |
| neon | download | 1KB | 68 ms | 95 ms | 126 ms | 68 ms | 0.0 | 120 | 0.0 |
| r2 | download | 1KB | 141 ms | 209 ms | 365 ms | 141 ms | 0.0 | 120 | 0.0 |
| aws-s3 | download | 1MB | 73 ms | 337 ms | 362 ms | 62 ms | 14.3 | 60 | 0.0 |
| b2 | download | 1MB | 83 ms | 332 ms | 462 ms | 58 ms | 12.7 | 60 | 0.0 |
| neon | download | 1MB | 86 ms | 140 ms | 192 ms | 69 ms | 12.2 | 60 | 0.0 |
| railway | download | 1MB | 261 ms | 377 ms | 509 ms | 65 ms | 4.0 | 60 | 0.0 |
| r2 | download | 1MB | 266 ms | 414 ms | 566 ms | 176 ms | 3.9 | 60 | 0.0 |
| neon | download | 10MB | 297 ms | 343 ms | 442 ms | 67 ms | 35.2 | 40 | 0.0 |
| aws-s3 | download | 10MB | 331 ms | 414 ms | 489 ms | 65 ms | 31.7 | 40 | 0.0 |
| b2 | download | 10MB | 392 ms | 1.44 s | 1.59 s | 72 ms | 26.7 | 40 | 0.0 |
| railway | download | 10MB | 499 ms | 749 ms | 792 ms | 74 ms | 21.0 | 40 | 0.0 |
| r2 | download | 10MB | 514 ms | 874 ms | 1.00 s | 163 ms | 20.4 | 40 | 0.0 |
| b2 | download | 100KB | 64 ms | 158 ms | 214 ms | 48 ms | 1.6 | 120 | 0.0 |
| aws-s3 | download | 100KB | 65 ms | 113 ms | 228 ms | 64 ms | 1.6 | 120 | 0.0 |
| neon | download | 100KB | 69 ms | 94 ms | 152 ms | 68 ms | 1.5 | 120 | 0.0 |
| railway | download | 100KB | 151 ms | 168 ms | 225 ms | 55 ms | 0.7 | 120 | 0.0 |
| r2 | download | 100KB | 153 ms | 7.92 s | 15.08 s | 149 ms | 0.7 | 120 | 0.0 |
| b2 | download | 100MB | 2.02 s | – | – | 70 ms | 52.0 | 15 | 0.0 |
| railway | download | 100MB | 2.02 s | – | – | 72 ms | 51.8 | 16 | 0.0 |
| neon | download | 100MB | 2.20 s | – | – | 70 ms | 47.7 | 16 | 0.0 |
| aws-s3 | download | 100MB | 2.31 s | – | – | 67 ms | 45.4 | 15 | 0.0 |
| r2 | download | 100MB | 3.27 s | – | – | 228 ms | 32.1 | 16 | 0.0 |
| b2 | first-request | 1KB | 112 ms | 325 ms | 351 ms | – | – | 40 | 0.0 |
| r2 | first-request | 1KB | 114 ms | 165 ms | 341 ms | – | – | 40 | 0.0 |
| railway | first-request | 1KB | 115 ms | 268 ms | 374 ms | – | – | 40 | 0.0 |
| neon | first-request | 1KB | 131 ms | 157 ms | 175 ms | – | – | 40 | 0.0 |
| aws-s3 | first-request | 1KB | 144 ms | 166 ms | 174 ms | – | – | 40 | 0.0 |
| b2 | head | 1KB | 38 ms | 110 ms | 147 ms | – | – | 120 | 0.0 |
| railway | head | 1KB | 39 ms | 46 ms | 110 ms | – | – | 120 | 0.0 |
| neon | head | 1KB | 41 ms | 46 ms | 72 ms | – | – | 120 | 0.0 |
| aws-s3 | head | 1KB | 50 ms | 56 ms | 77 ms | – | – | 120 | 0.0 |
| r2 | head | 1KB | 78 ms | 111 ms | 136 ms | – | – | 120 | 0.0 |
| b2 | head | 1MB | 38 ms | 67 ms | 95 ms | – | – | 60 | 0.0 |
| railway | head | 1MB | 42 ms | 51 ms | 72 ms | – | – | 60 | 0.0 |
| neon | head | 1MB | 42 ms | 55 ms | 70 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 1MB | 50 ms | 56 ms | 80 ms | – | – | 60 | 0.0 |
| r2 | head | 1MB | 87 ms | 154 ms | 174 ms | – | – | 60 | 0.0 |
| neon | head | 10MB | 40 ms | 46 ms | 168 ms | – | – | 40 | 0.0 |
| railway | head | 10MB | 41 ms | 58 ms | 62 ms | – | – | 40 | 0.0 |
| aws-s3 | head | 10MB | 51 ms | 56 ms | 57 ms | – | – | 40 | 0.0 |
| r2 | head | 10MB | 84 ms | 153 ms | 234 ms | – | – | 40 | 0.0 |
| b2 | head | 10MB | 111 ms | 322 ms | 362 ms | – | – | 40 | 0.0 |
| b2 | head | 100KB | 38 ms | 55 ms | 97 ms | – | – | 120 | 0.0 |
| railway | head | 100KB | 39 ms | 47 ms | 78 ms | – | – | 120 | 0.0 |
| neon | head | 100KB | 41 ms | 52 ms | 72 ms | – | – | 120 | 0.0 |
| aws-s3 | head | 100KB | 50 ms | 68 ms | 111 ms | – | – | 120 | 0.0 |
| r2 | head | 100KB | 88 ms | 149 ms | 162 ms | – | – | 120 | 0.0 |
| b2 | head | 100MB | 37 ms | – | – | – | – | 15 | 0.0 |
| neon | head | 100MB | 40 ms | – | – | – | – | 16 | 0.0 |
| railway | head | 100MB | 41 ms | – | – | – | – | 16 | 0.0 |
| aws-s3 | head | 100MB | 51 ms | – | – | – | – | 15 | 0.0 |
| r2 | head | 100MB | 79 ms | – | – | – | – | 16 | 0.0 |
| neon | list-all | 1000 objects | 64 ms | – | – | – | – | 12 | 0.0 |
| railway | list-all | 1000 objects | 75 ms | – | – | – | – | 12 | 0.0 |
| aws-s3 | list-all | 1000 objects | 115 ms | – | – | – | – | 12 | 0.0 |
| b2 | list-all | 1000 objects | 542 ms | – | – | – | – | 12 | 0.0 |
| r2 | list-all | 1000 objects | 547 ms | – | – | – | – | 12 | 0.0 |
| neon | range-get | 256KB of 10MB | 71 ms | 174 ms | 184 ms | 66 ms | – | 39 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 74 ms | 190 ms | 195 ms | 64 ms | – | 40 | 0.0 |
| b2 | range-get | 256KB of 10MB | 178 ms | 523 ms | 633 ms | 67 ms | – | 40 | 0.0 |
| railway | range-get | 256KB of 10MB | 195 ms | 493 ms | 541 ms | 67 ms | – | 40 | 0.0 |
| r2 | range-get | 256KB of 10MB | 244 ms | 399 ms | 677 ms | 189 ms | – | 40 | 0.0 |
| b2 | signed-upload | 1MB | 349 ms | 1.14 s | 1.24 s | – | – | 40 | 0.0 |
| railway | signed-upload | 1MB | 363 ms | 460 ms | 490 ms | – | – | 40 | 0.0 |
| r2 | signed-upload | 1MB | 378 ms | 652 ms | 729 ms | – | – | 40 | 0.0 |
| neon | signed-upload | 1MB | 387 ms | 468 ms | 475 ms | – | – | 40 | 0.0 |
| aws-s3 | signed-upload | 1MB | 448 ms | 634 ms | 689 ms | – | – | 40 | 0.0 |
| railway | upload | 1KB | 50 ms | 71 ms | 84 ms | – | 0.0 | 120 | 0.0 |
| aws-s3 | upload | 1KB | 64 ms | 77 ms | 122 ms | – | 0.0 | 120 | 0.0 |
| neon | upload | 1KB | 101 ms | 177 ms | 306 ms | – | 0.0 | 120 | 0.0 |
| b2 | upload | 1KB | 217 ms | 867 ms | 1.26 s | – | 0.0 | 120 | 0.0 |
| r2 | upload | 1KB | 252 ms | 356 ms | 429 ms | – | 0.0 | 120 | 0.0 |
| railway | upload | 1MB | 285 ms | 319 ms | 329 ms | – | 3.7 | 60 | 0.0 |
| b2 | upload | 1MB | 318 ms | 622 ms | 809 ms | – | 3.3 | 60 | 0.0 |
| aws-s3 | upload | 1MB | 323 ms | 359 ms | 373 ms | – | 3.3 | 60 | 0.0 |
| neon | upload | 1MB | 324 ms | 380 ms | 421 ms | – | 3.2 | 60 | 0.0 |
| r2 | upload | 1MB | 388 ms | 681 ms | 837 ms | – | 2.7 | 60 | 0.0 |
| neon | upload | 10MB | 506 ms | 598 ms | 720 ms | – | 20.7 | 40 | 0.0 |
| railway | upload | 10MB | 589 ms | 660 ms | 714 ms | – | 17.8 | 40 | 0.0 |
| aws-s3 | upload | 10MB | 728 ms | 862 ms | 957 ms | – | 14.4 | 40 | 0.0 |
| r2 | upload | 10MB | 830 ms | 1.47 s | 7.99 s | – | 12.6 | 40 | 0.0 |
| b2 | upload | 10MB | 958 ms | 4.39 s | 5.14 s | – | 10.9 | 40 | 0.0 |
| railway | upload | 100KB | 165 ms | 196 ms | 219 ms | – | 0.6 | 120 | 0.0 |
| neon | upload | 100KB | 168 ms | 233 ms | 355 ms | – | 0.6 | 120 | 0.0 |
| aws-s3 | upload | 100KB | 184 ms | 201 ms | 232 ms | – | 0.6 | 120 | 0.0 |
| r2 | upload | 100KB | 319 ms | 540 ms | 613 ms | – | 0.3 | 120 | 0.0 |
| b2 | upload | 100KB | 325 ms | 827 ms | 867 ms | – | 0.3 | 120 | 0.0 |
| r2 | upload | 100MB | 3.57 s | – | – | – | 29.4 | 16 | 0.0 |
| railway | upload | 100MB | 3.59 s | – | – | – | 29.2 | 16 | 0.0 |
| aws-s3 | upload | 100MB | 4.29 s | – | – | – | 24.4 | 16 | 6.3 |
| neon | upload | 100MB | 4.68 s | – | – | – | 22.4 | 16 | 0.0 |
| b2 | upload | 100MB | 6.82 s | – | – | – | 15.4 | 16 | 6.3 |
| railway | url-get | 1KB | 40 ms | 135 ms | 151 ms | 40 ms | 0.0 | 120 | 0.0 |
| b2 | url-get | 1KB | 47 ms | 141 ms | 254 ms | 47 ms | 0.0 | 120 | 0.0 |
| aws-s3 | url-get | 1KB | 63 ms | 150 ms | 164 ms | 63 ms | 0.0 | 120 | 0.0 |
| neon | url-get | 1KB | 67 ms | 164 ms | 221 ms | 67 ms | 0.0 | 120 | 0.0 |
| r2 | url-get | 1KB | 132 ms | 243 ms | 281 ms | 132 ms | 0.0 | 120 | 0.0 |
| r2 | url-get | 1MB | 261 ms | 403 ms | 524 ms | 184 ms | 4.0 | 60 | 0.0 |
| b2 | url-get | 1MB | 319 ms | 614 ms | 1.14 s | 136 ms | 3.3 | 60 | 0.0 |
| neon | url-get | 1MB | 336 ms | 392 ms | 452 ms | 164 ms | 3.1 | 60 | 1.7 |
| aws-s3 | url-get | 1MB | 336 ms | 375 ms | 487 ms | 148 ms | 3.1 | 60 | 1.7 |
| railway | url-get | 1MB | 343 ms | 490 ms | 784 ms | 144 ms | 3.1 | 60 | 0.0 |
| neon | url-get | 10MB | 487 ms | 971 ms | 976 ms | 170 ms | 21.5 | 40 | 0.0 |
| b2 | url-get | 10MB | 495 ms | 1.32 s | 1.49 s | 155 ms | 21.2 | 40 | 0.0 |
| railway | url-get | 10MB | 521 ms | 816 ms | 899 ms | 151 ms | 20.1 | 40 | 0.0 |
| aws-s3 | url-get | 10MB | 543 ms | 924 ms | 1.22 s | 149 ms | 19.3 | 40 | 0.0 |
| r2 | url-get | 10MB | 686 ms | 973 ms | 1.63 s | 253 ms | 15.3 | 40 | 0.0 |
| aws-s3 | url-get | 100KB | 67 ms | 255 ms | 270 ms | 66 ms | 1.5 | 120 | 0.0 |
| neon | url-get | 100KB | 83 ms | 276 ms | 384 ms | 75 ms | 1.2 | 120 | 0.0 |
| railway | url-get | 100KB | 155 ms | 266 ms | 281 ms | 60 ms | 0.7 | 120 | 0.0 |
| r2 | url-get | 100KB | 163 ms | 400 ms | 7.37 s | 160 ms | 0.6 | 120 | 0.0 |
| b2 | url-get | 100KB | 196 ms | 471 ms | 628 ms | 123 ms | 0.5 | 120 | 0.0 |
| railway | url-get | 100MB | 1.57 s | – | – | 143 ms | 66.9 | 16 | 0.0 |
| neon | url-get | 100MB | 1.79 s | – | – | 173 ms | 58.7 | 16 | 0.0 |
| b2 | url-get | 100MB | 2.19 s | – | – | 153 ms | 48.0 | 15 | 0.0 |
| aws-s3 | url-get | 100MB | 2.46 s | – | – | 157 ms | 42.7 | 15 | 0.0 |
| r2 | url-get | 100MB | 5.82 s | – | – | 277 ms | 18.0 | 16 | 0.0 |

## From boat-lille

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| railway | burst-upload | 32x100KB | 402 ms | – | – | – | 8.1 | 10 | 0.0 |
| aws-s3 | burst-upload | 32x100KB | 446 ms | – | – | – | 7.4 | 10 | 0.0 |
| neon | burst-upload | 32x100KB | 475 ms | – | – | – | 6.9 | 10 | 0.0 |
| r2 | burst-upload | 32x100KB | 828 ms | – | – | – | 4.0 | 10 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.20 s | – | – | – | 2.7 | 10 | 10.0 |
| b2 | concurrent-download | 16x100KB | 341 ms | – | – | – | 4.8 | 9 | 0.0 |
| railway | concurrent-download | 16x100KB | 381 ms | – | – | – | 4.3 | 10 | 0.0 |
| neon | concurrent-download | 16x100KB | 421 ms | – | – | – | 3.9 | 10 | 0.0 |
| r2 | concurrent-download | 16x100KB | 468 ms | – | – | – | 3.5 | 10 | 0.0 |
| aws-s3 | concurrent-download | 16x100KB | 498 ms | – | – | – | 3.3 | 10 | 0.0 |
| railway | concurrent-upload | 16x100KB | 391 ms | – | – | – | 4.2 | 10 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 438 ms | – | – | – | 3.7 | 10 | 0.0 |
| neon | concurrent-upload | 16x100KB | 468 ms | – | – | – | 3.5 | 10 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 778 ms | – | – | – | 2.1 | 10 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.19 s | – | – | – | 1.4 | 10 | 10.0 |
| aws-s3 | copy | 10MB | 236 ms | 279 ms | 281 ms | – | – | 20 | 0.0 |
| neon | copy | 10MB | 334 ms | 445 ms | 514 ms | – | – | 20 | 0.0 |
| railway | copy | 10MB | 562 ms | 802 ms | 865 ms | – | – | 20 | 0.0 |
| b2 | copy | 10MB | 695 ms | 2.22 s | 3.04 s | – | – | 20 | 0.0 |
| r2 | copy | 10MB | 1.44 s | 1.98 s | 2.11 s | – | – | 20 | 0.0 |
| b2 | delete | 1KB | 93 ms | 100 ms | 119 ms | – | – | 37 | 0.0 |
| neon | delete | 1KB | 109 ms | 132 ms | 208 ms | – | – | 37 | 0.0 |
| railway | delete | 1KB | 115 ms | 130 ms | 307 ms | – | – | 37 | 0.0 |
| aws-s3 | delete | 1KB | 119 ms | 130 ms | 131 ms | – | – | 37 | 0.0 |
| r2 | delete | 1KB | 171 ms | 248 ms | 313 ms | – | – | 36 | 0.0 |
| b2 | delete | 1MB | 98 ms | 104 ms | 110 ms | – | – | 30 | 0.0 |
| neon | delete | 1MB | 109 ms | 126 ms | 215 ms | – | – | 30 | 0.0 |
| aws-s3 | delete | 1MB | 111 ms | 123 ms | 127 ms | – | – | 30 | 0.0 |
| railway | delete | 1MB | 117 ms | 126 ms | 132 ms | – | – | 30 | 0.0 |
| r2 | delete | 1MB | 172 ms | 245 ms | 401 ms | – | – | 30 | 0.0 |
| b2 | delete | 10MB | 93 ms | 102 ms | 106 ms | – | – | 20 | 0.0 |
| neon | delete | 10MB | 111 ms | 140 ms | 220 ms | – | – | 20 | 0.0 |
| aws-s3 | delete | 10MB | 112 ms | 133 ms | 373 ms | – | – | 20 | 0.0 |
| railway | delete | 10MB | 115 ms | 132 ms | 138 ms | – | – | 20 | 0.0 |
| r2 | delete | 10MB | 192 ms | 229 ms | 295 ms | – | – | 20 | 0.0 |
| b2 | delete | 100KB | 94 ms | 103 ms | 149 ms | – | – | 60 | 0.0 |
| neon | delete | 100KB | 110 ms | 230 ms | 286 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 100KB | 115 ms | 121 ms | 130 ms | – | – | 60 | 0.0 |
| railway | delete | 100KB | 116 ms | 148 ms | 177 ms | – | – | 60 | 0.0 |
| r2 | delete | 100KB | 168 ms | 248 ms | 286 ms | – | – | 60 | 0.0 |
| neon | delete | 100MB | 113 ms | – | – | – | – | 8 | 0.0 |
| railway | delete | 100MB | 121 ms | – | – | – | – | 8 | 0.0 |
| r2 | delete | 100MB | 177 ms | – | – | – | – | 8 | 0.0 |
| b2 | delete | 100MB | 181 ms | – | – | – | – | 8 | 0.0 |
| aws-s3 | delete | 100MB | 324 ms | – | – | – | – | 8 | 0.0 |
| b2 | download | 1KB | 98 ms | 163 ms | 182 ms | 98 ms | 0.0 | 37 | 0.0 |
| railway | download | 1KB | 103 ms | 105 ms | 129 ms | 103 ms | 0.0 | 37 | 0.0 |
| neon | download | 1KB | 121 ms | 148 ms | 211 ms | 121 ms | 0.0 | 37 | 0.0 |
| aws-s3 | download | 1KB | 122 ms | 265 ms | 322 ms | 122 ms | 0.0 | 37 | 0.0 |
| r2 | download | 1KB | 283 ms | 421 ms | 524 ms | 283 ms | 0.0 | 36 | 0.0 |
| railway | download | 1MB | 338 ms | 635 ms | 3.64 s | 212 ms | 3.1 | 30 | 0.0 |
| r2 | download | 1MB | 384 ms | 716 ms | 736 ms | 290 ms | 2.7 | 30 | 0.0 |
| aws-s3 | download | 1MB | 399 ms | 2.52 s | 6.03 s | 118 ms | 2.6 | 30 | 0.0 |
| neon | download | 1MB | 488 ms | 1.40 s | 1.59 s | 126 ms | 2.2 | 30 | 0.0 |
| b2 | download | 1MB | 606 ms | 729 ms | 995 ms | 142 ms | 1.7 | 30 | 0.0 |
| r2 | download | 10MB | 831 ms | 1.15 s | 1.17 s | 304 ms | 12.6 | 20 | 0.0 |
| railway | download | 10MB | 846 ms | 1.30 s | 1.35 s | 215 ms | 12.4 | 20 | 0.0 |
| b2 | download | 10MB | 997 ms | 1.06 s | 1.07 s | 151 ms | 10.5 | 20 | 0.0 |
| aws-s3 | download | 10MB | 2.65 s | 7.06 s | 11.40 s | 119 ms | 4.0 | 20 | 0.0 |
| neon | download | 10MB | 3.55 s | 6.89 s | 6.98 s | 122 ms | 3.0 | 20 | 0.0 |
| b2 | download | 100KB | 181 ms | 334 ms | 343 ms | 120 ms | 0.6 | 60 | 0.0 |
| neon | download | 100KB | 210 ms | 525 ms | 628 ms | 122 ms | 0.5 | 60 | 0.0 |
| railway | download | 100KB | 211 ms | 379 ms | 484 ms | 201 ms | 0.5 | 60 | 0.0 |
| aws-s3 | download | 100KB | 217 ms | 698 ms | 1.03 s | 121 ms | 0.5 | 60 | 0.0 |
| r2 | download | 100KB | 275 ms | 402 ms | 441 ms | 271 ms | 0.4 | 60 | 0.0 |
| r2 | download | 100MB | 4.49 s | – | – | 357 ms | 23.4 | 8 | 0.0 |
| b2 | download | 100MB | 4.95 s | – | – | 149 ms | 21.2 | 8 | 0.0 |
| railway | download | 100MB | 5.00 s | – | – | 243 ms | 21.0 | 8 | 0.0 |
| neon | download | 100MB | 27.47 s | – | – | 124 ms | 3.8 | 8 | 0.0 |
| aws-s3 | download | 100MB | 34.95 s | – | – | 128 ms | 3.0 | 8 | 0.0 |
| railway | first-request | 1KB | 138 ms | 249 ms | 344 ms | – | – | 20 | 0.0 |
| r2 | first-request | 1KB | 170 ms | 240 ms | 266 ms | – | – | 20 | 0.0 |
| b2 | first-request | 1KB | 287 ms | 318 ms | 373 ms | – | – | 20 | 0.0 |
| aws-s3 | first-request | 1KB | 304 ms | 321 ms | 323 ms | – | – | 20 | 0.0 |
| neon | first-request | 1KB | 347 ms | 359 ms | 395 ms | – | – | 20 | 0.0 |
| b2 | head | 1KB | 91 ms | 151 ms | 191 ms | – | – | 37 | 0.0 |
| neon | head | 1KB | 95 ms | 121 ms | 248 ms | – | – | 37 | 0.0 |
| railway | head | 1KB | 103 ms | 106 ms | 106 ms | – | – | 37 | 0.0 |
| aws-s3 | head | 1KB | 111 ms | 114 ms | 115 ms | – | – | 37 | 0.0 |
| r2 | head | 1KB | 133 ms | 262 ms | 288 ms | – | – | 36 | 0.0 |
| b2 | head | 1MB | 95 ms | 147 ms | 183 ms | – | – | 30 | 0.0 |
| neon | head | 1MB | 95 ms | 120 ms | 139 ms | – | – | 30 | 0.0 |
| railway | head | 1MB | 103 ms | 121 ms | 169 ms | – | – | 30 | 0.0 |
| aws-s3 | head | 1MB | 104 ms | 112 ms | 255 ms | – | – | 30 | 0.0 |
| r2 | head | 1MB | 138 ms | 258 ms | 361 ms | – | – | 30 | 0.0 |
| neon | head | 10MB | 95 ms | 136 ms | 330 ms | – | – | 20 | 0.0 |
| aws-s3 | head | 10MB | 106 ms | 315 ms | 328 ms | – | – | 20 | 0.0 |
| railway | head | 10MB | 106 ms | 144 ms | 210 ms | – | – | 20 | 0.0 |
| r2 | head | 10MB | 145 ms | 209 ms | 234 ms | – | – | 20 | 0.0 |
| b2 | head | 10MB | 273 ms | 300 ms | 317 ms | – | – | 20 | 0.0 |
| b2 | head | 100KB | 92 ms | 101 ms | 123 ms | – | – | 60 | 0.0 |
| neon | head | 100KB | 95 ms | 134 ms | 256 ms | – | – | 60 | 0.0 |
| railway | head | 100KB | 103 ms | 105 ms | 107 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 100KB | 109 ms | 116 ms | 125 ms | – | – | 60 | 0.0 |
| r2 | head | 100KB | 132 ms | 184 ms | 197 ms | – | – | 60 | 0.0 |
| b2 | head | 100MB | 93 ms | – | – | – | – | 8 | 0.0 |
| neon | head | 100MB | 95 ms | – | – | – | – | 8 | 0.0 |
| railway | head | 100MB | 103 ms | – | – | – | – | 8 | 0.0 |
| aws-s3 | head | 100MB | 106 ms | – | – | – | – | 8 | 0.0 |
| r2 | head | 100MB | 155 ms | – | – | – | – | 8 | 0.0 |
| neon | list-all | 1000 objects | 112 ms | – | – | – | – | 6 | 0.0 |
| aws-s3 | list-all | 1000 objects | 154 ms | – | – | – | – | 6 | 0.0 |
| railway | list-all | 1000 objects | 160 ms | – | – | – | – | 6 | 0.0 |
| r2 | list-all | 1000 objects | 880 ms | – | – | – | – | 6 | 0.0 |
| b2 | list-all | 1000 objects | 1.01 s | – | – | – | – | 6 | 0.0 |
| railway | range-get | 256KB of 10MB | 286 ms | 555 ms | 562 ms | 218 ms | – | 20 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 349 ms | 626 ms | 702 ms | 121 ms | – | 20 | 0.0 |
| r2 | range-get | 256KB of 10MB | 422 ms | 729 ms | 743 ms | 372 ms | – | 20 | 0.0 |
| b2 | range-get | 256KB of 10MB | 434 ms | 488 ms | 539 ms | 143 ms | – | 20 | 0.0 |
| neon | range-get | 256KB of 10MB | 446 ms | 607 ms | 609 ms | 120 ms | – | 20 | 0.0 |
| r2 | signed-upload | 1MB | 565 ms | 922 ms | 930 ms | – | – | 20 | 0.0 |
| railway | signed-upload | 1MB | 611 ms | 731 ms | 1.24 s | – | – | 20 | 0.0 |
| b2 | signed-upload | 1MB | 840 ms | 913 ms | 1.27 s | – | – | 20 | 0.0 |
| neon | signed-upload | 1MB | 919 ms | 947 ms | 952 ms | – | – | 20 | 0.0 |
| aws-s3 | signed-upload | 1MB | 939 ms | 1.26 s | 1.42 s | – | – | 20 | 0.0 |
| railway | upload | 1KB | 112 ms | 125 ms | 197 ms | – | 0.0 | 37 | 0.0 |
| aws-s3 | upload | 1KB | 124 ms | 132 ms | 148 ms | – | 0.0 | 37 | 0.0 |
| neon | upload | 1KB | 155 ms | 208 ms | 236 ms | – | 0.0 | 37 | 0.0 |
| b2 | upload | 1KB | 324 ms | 868 ms | 928 ms | – | 0.0 | 36 | 0.0 |
| r2 | upload | 1KB | 400 ms | 641 ms | 702 ms | – | 0.0 | 36 | 0.0 |
| railway | upload | 1MB | 521 ms | 1.31 s | 1.64 s | – | 2.0 | 30 | 0.0 |
| r2 | upload | 1MB | 615 ms | 1.50 s | 1.54 s | – | 1.7 | 30 | 0.0 |
| b2 | upload | 1MB | 876 ms | 1.84 s | 1.85 s | – | 1.2 | 30 | 0.0 |
| neon | upload | 1MB | 909 ms | 1.60 s | 1.77 s | – | 1.2 | 30 | 0.0 |
| aws-s3 | upload | 1MB | 962 ms | 1.71 s | 1.89 s | – | 1.1 | 30 | 0.0 |
| railway | upload | 10MB | 1.03 s | 2.05 s | 6.11 s | – | 10.1 | 20 | 0.0 |
| r2 | upload | 10MB | 1.10 s | 2.09 s | 2.16 s | – | 9.5 | 20 | 0.0 |
| neon | upload | 10MB | 1.30 s | 1.99 s | 3.29 s | – | 8.1 | 20 | 0.0 |
| b2 | upload | 10MB | 1.56 s | 2.82 s | 5.40 s | – | 6.7 | 20 | 0.0 |
| aws-s3 | upload | 10MB | 1.61 s | 5.10 s | 53.38 s | – | 6.5 | 20 | 0.0 |
| railway | upload | 100KB | 306 ms | 357 ms | 392 ms | – | 0.3 | 60 | 0.0 |
| neon | upload | 100KB | 389 ms | 457 ms | 494 ms | – | 0.3 | 60 | 0.0 |
| aws-s3 | upload | 100KB | 416 ms | 447 ms | 459 ms | – | 0.2 | 60 | 0.0 |
| r2 | upload | 100KB | 435 ms | 699 ms | 856 ms | – | 0.2 | 60 | 0.0 |
| b2 | upload | 100KB | 614 ms | 972 ms | 1.09 s | – | 0.2 | 60 | 0.0 |
| r2 | upload | 100MB | 4.96 s | – | – | – | 21.2 | 8 | 0.0 |
| aws-s3 | upload | 100MB | 7.70 s | – | – | – | 13.6 | 8 | 0.0 |
| railway | upload | 100MB | 7.78 s | – | – | – | 13.5 | 8 | 0.0 |
| neon | upload | 100MB | 8.24 s | – | – | – | 12.7 | 8 | 0.0 |
| b2 | upload | 100MB | 9.01 s | – | – | – | 11.6 | 8 | 0.0 |
| r2 | url-get | 1KB | 191 ms | 393 ms | 419 ms | 191 ms | 0.0 | 36 | 0.0 |
| railway | url-get | 1KB | 229 ms | 261 ms | 317 ms | 228 ms | 0.0 | 37 | 0.0 |
| b2 | url-get | 1KB | 278 ms | 343 ms | 378 ms | 278 ms | 0.0 | 37 | 0.0 |
| neon | url-get | 1KB | 285 ms | 400 ms | 416 ms | 285 ms | 0.0 | 37 | 0.0 |
| aws-s3 | url-get | 1KB | 303 ms | 335 ms | 340 ms | 303 ms | 0.0 | 37 | 0.0 |
| r2 | url-get | 1MB | 324 ms | 758 ms | 876 ms | 254 ms | 3.2 | 30 | 0.0 |
| railway | url-get | 1MB | 437 ms | 788 ms | 929 ms | 341 ms | 2.4 | 30 | 0.0 |
| b2 | url-get | 1MB | 806 ms | 879 ms | 1.09 s | 316 ms | 1.3 | 30 | 0.0 |
| aws-s3 | url-get | 1MB | 934 ms | 1.70 s | 2.40 s | 319 ms | 1.1 | 30 | 0.0 |
| neon | url-get | 1MB | 955 ms | 1.03 s | 1.08 s | 376 ms | 1.1 | 30 | 0.0 |
| railway | url-get | 10MB | 975 ms | 1.49 s | 1.57 s | 340 ms | 10.8 | 20 | 0.0 |
| r2 | url-get | 10MB | 1.11 s | 1.51 s | 1.52 s | 316 ms | 9.5 | 20 | 0.0 |
| b2 | url-get | 10MB | 1.25 s | 1.40 s | 1.40 s | 337 ms | 8.4 | 20 | 0.0 |
| aws-s3 | url-get | 10MB | 2.83 s | 5.67 s | 5.91 s | 312 ms | 3.7 | 20 | 0.0 |
| neon | url-get | 10MB | 3.91 s | 4.72 s | 5.14 s | 383 ms | 2.7 | 20 | 0.0 |
| r2 | url-get | 100KB | 221 ms | 367 ms | 511 ms | 213 ms | 0.5 | 60 | 0.0 |
| railway | url-get | 100KB | 364 ms | 514 ms | 557 ms | 337 ms | 0.3 | 60 | 0.0 |
| aws-s3 | url-get | 100KB | 501 ms | 543 ms | 584 ms | 315 ms | 0.2 | 60 | 0.0 |
| b2 | url-get | 100KB | 524 ms | 575 ms | 668 ms | 313 ms | 0.2 | 60 | 0.0 |
| neon | url-get | 100KB | 608 ms | 779 ms | 845 ms | 369 ms | 0.2 | 60 | 0.0 |
| railway | url-get | 100MB | 5.26 s | – | – | 278 ms | 19.9 | 8 | 0.0 |
| b2 | url-get | 100MB | 5.62 s | – | – | 340 ms | 18.6 | 8 | 0.0 |
| r2 | url-get | 100MB | 6.47 s | – | – | 288 ms | 16.2 | 8 | 0.0 |
| neon | url-get | 100MB | 29.08 s | – | – | 485 ms | 3.6 | 8 | 0.0 |
| aws-s3 | url-get | 100MB | 34.68 s | – | – | 385 ms | 3.0 | 8 | 0.0 |

## Errors

- 27× b2: FilesError: socket hang up
- 2× b2: FilesError: write EPIPE
- 1× neon: FilesError: Neon error
- 8× b2: FilesError: internal incident
- 1× neon: seed failed: setup: FilesError: Neon error
- 1× neon: TypeError: fetch failed
- 1× aws-s3: TypeError: fetch failed
- 1× r2: FilesError: read ECONNRESET
- 1× r2: TypeError: fetch failed
- 1× neon: FilesError: socket hang up
- 1× aws-s3: FilesError: read ETIMEDOUT
