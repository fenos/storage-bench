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
- **boat-lille** (Hauts-de-France, AS16276 OVH SAS), run 2026-10-15T21-45-45-534Z-boat-lille, Node v24.18.1, files-sdk 3.0.0
- **freestyle-sf** (California, AS36320 Freestyle Cloud, Inc.), run 2026-10-15T22-05-48-908Z-freestyle-sf, Node v24.21.0, files-sdk 3.0.0
- **ms-a2** (Florida, AS7018 AT&T Enterprises, LLC), run 2026-10-15T22-10-46-755Z-ms-a2, Node v24.20.0, files-sdk 3.0.0
- **tenki-seattle** (Washington, AS19538 Luxor), run 2026-10-15T22-35-38-317Z-tenki-seattle, Node v24.14.0, files-sdk 3.0.0
- **boat-lille** (Hauts-de-France, AS16276 OVH SAS), run 2026-10-15T23-31-52-136Z-boat-lille, Node v24.18.1, files-sdk 3.0.0
- Excluded 0 samples from **tenki-seattle** between 2026-10-09T20:39:00.396Z and 2026-10-09T21:06:51.638Z: Tenki paused the sandbox twice when it hit its default maximum run time. Any sample whose request overlaps the pause is dropped. The sandbox was made sticky afterwards.
- Excluded 581 samples from **boat-lille** between 2026-10-15T20:13:59.000Z and 2026-10-15T20:15:53.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.
- Excluded 303 samples from **freestyle-sf** between 2026-10-15T22:05:48.000Z and 2026-10-15T22:06:35.000Z: A campaign restart briefly started a second run on the same machine. The duplicate was stopped and its data deleted; samples from the surviving run during the overlap are dropped.

## From tenki-seattle

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| aws-s3 | burst-upload | 32x100KB | 376 ms | 504 ms | 535 ms | – | 8.7 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 451 ms | 689 ms | 710 ms | – | 7.3 | 30 | 0.0 |
| railway | burst-upload | 32x100KB | 482 ms | 668 ms | 756 ms | – | 6.8 | 30 | 0.0 |
| r2 | burst-upload | 32x100KB | 606 ms | 1.05 s | 1.12 s | – | 5.4 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.20 s | 2.38 s | 3.46 s | – | 2.7 | 30 | 3.3 |
| aws-s3 | concurrent-download | 16x100KB | 154 ms | 259 ms | 313 ms | – | 10.6 | 30 | 0.0 |
| neon | concurrent-download | 16x100KB | 169 ms | 349 ms | 428 ms | – | 9.7 | 30 | 0.0 |
| b2 | concurrent-download | 16x100KB | 244 ms | 320 ms | 324 ms | – | 6.7 | 27 | 0.0 |
| railway | concurrent-download | 16x100KB | 308 ms | 535 ms | 597 ms | – | 5.3 | 30 | 0.0 |
| r2 | concurrent-download | 16x100KB | 390 ms | 516 ms | 573 ms | – | 4.2 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 353 ms | 519 ms | 600 ms | – | 4.6 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 402 ms | 682 ms | 793 ms | – | 4.1 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 508 ms | 619 ms | 799 ms | – | 3.2 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 558 ms | 788 ms | 915 ms | – | 2.9 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.05 s | 1.45 s | 1.68 s | – | 1.6 | 30 | 10.0 |
| aws-s3 | copy | 10MB | 199 ms | 262 ms | 313 ms | – | – | 59 | 0.0 |
| neon | copy | 10MB | 317 ms | 404 ms | 790 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 541 ms | 1.36 s | 4.17 s | – | – | 59 | 0.0 |
| railway | copy | 10MB | 549 ms | 784 ms | 1.07 s | – | – | 60 | 0.0 |
| r2 | copy | 10MB | 1.42 s | 1.93 s | 2.34 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 69 ms | 90 ms | 134 ms | – | – | 178 | 0.0 |
| aws-s3 | delete | 1KB | 80 ms | 107 ms | 123 ms | – | – | 180 | 0.0 |
| neon | delete | 1KB | 97 ms | 184 ms | 236 ms | – | – | 180 | 0.0 |
| railway | delete | 1KB | 119 ms | 206 ms | 320 ms | – | – | 180 | 0.0 |
| r2 | delete | 1KB | 147 ms | 229 ms | 355 ms | – | – | 180 | 0.0 |
| b2 | delete | 1MB | 70 ms | 90 ms | 130 ms | – | – | 86 | 0.0 |
| aws-s3 | delete | 1MB | 81 ms | 104 ms | 110 ms | – | – | 90 | 0.0 |
| neon | delete | 1MB | 97 ms | 136 ms | 239 ms | – | – | 90 | 0.0 |
| railway | delete | 1MB | 125 ms | 223 ms | 238 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 142 ms | 226 ms | 299 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 70 ms | 105 ms | 123 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 80 ms | 91 ms | 102 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 97 ms | 142 ms | 2.28 s | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 146 ms | 280 ms | 390 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 196 ms | 222 ms | 267 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 70 ms | 112 ms | 151 ms | – | – | 178 | 0.0 |
| aws-s3 | delete | 100KB | 80 ms | 105 ms | 123 ms | – | – | 180 | 0.0 |
| neon | delete | 100KB | 97 ms | 125 ms | 238 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 121 ms | 213 ms | 239 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 160 ms | 434 ms | 593 ms | – | – | 180 | 0.0 |
| b2 | delete | 100MB | 71 ms | 173 ms | 290 ms | – | – | 24 | 0.0 |
| aws-s3 | delete | 100MB | 87 ms | 115 ms | 207 ms | – | – | 24 | 0.0 |
| neon | delete | 100MB | 98 ms | 120 ms | 201 ms | – | – | 24 | 0.0 |
| railway | delete | 100MB | 117 ms | 214 ms | 221 ms | – | – | 24 | 0.0 |
| r2 | delete | 100MB | 148 ms | 255 ms | 407 ms | – | – | 24 | 0.0 |
| b2 | download | 1KB | 75 ms | 99 ms | 179 ms | 75 ms | 0.0 | 178 | 0.0 |
| aws-s3 | download | 1KB | 86 ms | 142 ms | 217 ms | 86 ms | 0.0 | 180 | 0.0 |
| railway | download | 1KB | 101 ms | 216 ms | 453 ms | 101 ms | 0.0 | 180 | 0.0 |
| neon | download | 1KB | 110 ms | 139 ms | 200 ms | 110 ms | 0.0 | 180 | 0.0 |
| r2 | download | 1KB | 243 ms | 339 ms | 1.09 s | 243 ms | 0.0 | 180 | 0.0 |
| aws-s3 | download | 1MB | 100 ms | 454 ms | 603 ms | 88 ms | 10.5 | 90 | 0.0 |
| neon | download | 1MB | 119 ms | 364 ms | 627 ms | 110 ms | 8.8 | 90 | 0.0 |
| railway | download | 1MB | 265 ms | 534 ms | 610 ms | 251 ms | 4.0 | 90 | 0.0 |
| r2 | download | 1MB | 394 ms | 559 ms | 958 ms | 261 ms | 2.7 | 90 | 0.0 |
| b2 | download | 1MB | 444 ms | 504 ms | 656 ms | 102 ms | 2.4 | 86 | 0.0 |
| neon | download | 10MB | 226 ms | 2.07 s | 9.61 s | 111 ms | 46.5 | 60 | 0.0 |
| aws-s3 | download | 10MB | 241 ms | 792 ms | 1.07 s | 86 ms | 43.5 | 60 | 0.0 |
| railway | download | 10MB | 412 ms | 673 ms | 1.20 s | 287 ms | 25.4 | 60 | 0.0 |
| r2 | download | 10MB | 697 ms | 1.13 s | 2.42 s | 273 ms | 15.0 | 60 | 0.0 |
| b2 | download | 10MB | 725 ms | 1.08 s | 1.24 s | 116 ms | 14.5 | 60 | 0.0 |
| aws-s3 | download | 100KB | 88 ms | 191 ms | 350 ms | 87 ms | 1.2 | 180 | 0.0 |
| neon | download | 100KB | 110 ms | 168 ms | 328 ms | 109 ms | 0.9 | 180 | 0.0 |
| railway | download | 100KB | 213 ms | 370 ms | 435 ms | 201 ms | 0.5 | 180 | 0.0 |
| b2 | download | 100KB | 224 ms | 298 ms | 359 ms | 93 ms | 0.5 | 178 | 0.0 |
| r2 | download | 100KB | 256 ms | 616 ms | 9.09 s | 251 ms | 0.4 | 180 | 0.0 |
| neon | download | 100MB | 1.32 s | 1.95 s | 2.28 s | 109 ms | 79.3 | 24 | 0.0 |
| railway | download | 100MB | 1.85 s | 2.45 s | 2.81 s | 216 ms | 56.6 | 24 | 0.0 |
| aws-s3 | download | 100MB | 2.30 s | 2.76 s | 3.03 s | 93 ms | 45.5 | 24 | 0.0 |
| b2 | download | 100MB | 2.73 s | 4.10 s | 4.18 s | 116 ms | 38.5 | 24 | 0.0 |
| r2 | download | 100MB | 5.01 s | 8.34 s | 9.77 s | 318 ms | 20.9 | 24 | 0.0 |
| r2 | first-request | 1KB | 133 ms | 173 ms | 212 ms | – | – | 60 | 0.0 |
| railway | first-request | 1KB | 153 ms | 241 ms | 652 ms | – | – | 60 | 0.0 |
| b2 | first-request | 1KB | 202 ms | 264 ms | 295 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 211 ms | 269 ms | 274 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 298 ms | 375 ms | 486 ms | – | – | 60 | 0.0 |
| b2 | head | 1KB | 68 ms | 91 ms | 105 ms | – | – | 178 | 0.0 |
| aws-s3 | head | 1KB | 72 ms | 97 ms | 119 ms | – | – | 180 | 0.0 |
| neon | head | 1KB | 82 ms | 93 ms | 117 ms | – | – | 180 | 0.0 |
| railway | head | 1KB | 101 ms | 219 ms | 495 ms | – | – | 180 | 0.0 |
| r2 | head | 1KB | 110 ms | 212 ms | 325 ms | – | – | 180 | 0.0 |
| b2 | head | 1MB | 69 ms | 95 ms | 195 ms | – | – | 86 | 0.0 |
| aws-s3 | head | 1MB | 73 ms | 101 ms | 119 ms | – | – | 90 | 0.0 |
| neon | head | 1MB | 82 ms | 113 ms | 305 ms | – | – | 90 | 0.0 |
| railway | head | 1MB | 112 ms | 223 ms | 359 ms | – | – | 90 | 0.0 |
| r2 | head | 1MB | 114 ms | 167 ms | 263 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 10MB | 72 ms | 107 ms | 229 ms | – | – | 60 | 0.0 |
| neon | head | 10MB | 82 ms | 112 ms | 129 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 110 ms | 177 ms | 231 ms | – | – | 60 | 0.0 |
| railway | head | 10MB | 184 ms | 211 ms | 341 ms | – | – | 60 | 0.0 |
| b2 | head | 10MB | 206 ms | 299 ms | 349 ms | – | – | 60 | 0.0 |
| b2 | head | 100KB | 68 ms | 96 ms | 123 ms | – | – | 178 | 0.0 |
| aws-s3 | head | 100KB | 73 ms | 93 ms | 133 ms | – | – | 180 | 0.0 |
| neon | head | 100KB | 82 ms | 107 ms | 124 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 111 ms | 199 ms | 272 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 117 ms | 187 ms | 949 ms | – | – | 180 | 0.0 |
| b2 | head | 100MB | 69 ms | 89 ms | 146 ms | – | – | 24 | 0.0 |
| aws-s3 | head | 100MB | 73 ms | 89 ms | 90 ms | – | – | 24 | 0.0 |
| neon | head | 100MB | 84 ms | 102 ms | 114 ms | – | – | 24 | 0.0 |
| railway | head | 100MB | 99 ms | 191 ms | 208 ms | – | – | 24 | 0.0 |
| r2 | head | 100MB | 109 ms | 168 ms | 208 ms | – | – | 24 | 0.0 |
| neon | list-all | 1000 objects | 124 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 143 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | list-all | 1000 objects | 145 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 245 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 617 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 102 ms | 336 ms | 356 ms | 91 ms | – | 59 | 0.0 |
| neon | range-get | 256KB of 10MB | 125 ms | 262 ms | 437 ms | 115 ms | – | 60 | 0.0 |
| railway | range-get | 256KB of 10MB | 278 ms | 455 ms | 509 ms | 268 ms | – | 60 | 0.0 |
| b2 | range-get | 256KB of 10MB | 323 ms | 463 ms | 479 ms | 107 ms | – | 59 | 0.0 |
| r2 | range-get | 256KB of 10MB | 372 ms | 574 ms | 610 ms | 318 ms | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 447 ms | 806 ms | 832 ms | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 570 ms | 995 ms | 1.39 s | – | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 620 ms | 828 ms | 1.15 s | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 671 ms | 1.14 s | 1.25 s | – | – | 60 | 1.7 |
| neon | signed-upload | 1MB | 792 ms | 1.29 s | 4.64 s | – | – | 60 | 0.0 |
| aws-s3 | upload | 1KB | 88 ms | 113 ms | 145 ms | – | 0.0 | 180 | 0.0 |
| railway | upload | 1KB | 113 ms | 201 ms | 268 ms | – | 0.0 | 180 | 0.0 |
| neon | upload | 1KB | 141 ms | 185 ms | 213 ms | – | 0.0 | 180 | 0.0 |
| b2 | upload | 1KB | 294 ms | 833 ms | 1.25 s | – | 0.0 | 180 | 1.1 |
| r2 | upload | 1KB | 342 ms | 528 ms | 653 ms | – | 0.0 | 180 | 0.0 |
| r2 | upload | 1MB | 414 ms | 641 ms | 827 ms | – | 2.5 | 90 | 0.0 |
| aws-s3 | upload | 1MB | 462 ms | 832 ms | 921 ms | – | 2.3 | 90 | 0.0 |
| railway | upload | 1MB | 483 ms | 829 ms | 960 ms | – | 2.2 | 90 | 0.0 |
| neon | upload | 1MB | 564 ms | 667 ms | 726 ms | – | 1.9 | 90 | 0.0 |
| b2 | upload | 1MB | 611 ms | 1.02 s | 1.10 s | – | 1.7 | 90 | 4.4 |
| r2 | upload | 10MB | 924 ms | 1.55 s | 1.85 s | – | 11.4 | 60 | 0.0 |
| railway | upload | 10MB | 1.07 s | 1.99 s | 4.98 s | – | 9.8 | 60 | 0.0 |
| neon | upload | 10MB | 1.13 s | 3.26 s | 8.30 s | – | 9.2 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 1.15 s | 2.71 s | 4.61 s | – | 9.1 | 60 | 0.0 |
| b2 | upload | 10MB | 1.34 s | 3.26 s | 6.69 s | – | 7.8 | 60 | 0.0 |
| aws-s3 | upload | 100KB | 272 ms | 363 ms | 461 ms | – | 0.4 | 180 | 0.0 |
| neon | upload | 100KB | 339 ms | 396 ms | 472 ms | – | 0.3 | 180 | 0.0 |
| railway | upload | 100KB | 353 ms | 540 ms | 609 ms | – | 0.3 | 180 | 0.0 |
| r2 | upload | 100KB | 385 ms | 869 ms | 2.16 s | – | 0.3 | 180 | 0.0 |
| b2 | upload | 100KB | 564 ms | 1.11 s | 1.52 s | – | 0.2 | 180 | 1.1 |
| r2 | upload | 100MB | 4.21 s | 4.68 s | 4.86 s | – | 24.9 | 24 | 0.0 |
| aws-s3 | upload | 100MB | 5.35 s | 8.67 s | 10.73 s | – | 19.6 | 24 | 0.0 |
| railway | upload | 100MB | 5.83 s | 7.73 s | 8.35 s | – | 18.0 | 24 | 0.0 |
| b2 | upload | 100MB | 6.96 s | 9.85 s | 10.33 s | – | 15.1 | 24 | 0.0 |
| neon | upload | 100MB | 7.18 s | 7.83 s | 8.86 s | – | 14.6 | 24 | 0.0 |
| neon | url-get | 1KB | 144 ms | 365 ms | 440 ms | 144 ms | 0.0 | 180 | 0.0 |
| railway | url-get | 1KB | 152 ms | 242 ms | 377 ms | 152 ms | 0.0 | 180 | 0.0 |
| aws-s3 | url-get | 1KB | 160 ms | 276 ms | 287 ms | 160 ms | 0.0 | 180 | 0.0 |
| r2 | url-get | 1KB | 190 ms | 296 ms | 997 ms | 190 ms | 0.0 | 180 | 0.0 |
| b2 | url-get | 1KB | 207 ms | 269 ms | 662 ms | 207 ms | 0.0 | 178 | 0.0 |
| r2 | url-get | 1MB | 251 ms | 427 ms | 508 ms | 203 ms | 4.2 | 90 | 0.0 |
| railway | url-get | 1MB | 431 ms | 691 ms | 1.02 s | 316 ms | 2.4 | 90 | 0.0 |
| aws-s3 | url-get | 1MB | 525 ms | 694 ms | 843 ms | 220 ms | 2.0 | 90 | 0.0 |
| b2 | url-get | 1MB | 599 ms | 769 ms | 802 ms | 236 ms | 1.7 | 86 | 0.0 |
| neon | url-get | 1MB | 744 ms | 891 ms | 1.00 s | 329 ms | 1.4 | 90 | 0.0 |
| railway | url-get | 10MB | 556 ms | 999 ms | 1.19 s | 326 ms | 18.9 | 60 | 0.0 |
| r2 | url-get | 10MB | 644 ms | 1.04 s | 3.37 s | 242 ms | 16.3 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 788 ms | 1.62 s | 5.03 s | 218 ms | 13.3 | 60 | 0.0 |
| b2 | url-get | 10MB | 889 ms | 1.16 s | 2.13 s | 258 ms | 11.8 | 60 | 0.0 |
| neon | url-get | 10MB | 990 ms | 1.70 s | 3.26 s | 336 ms | 10.6 | 60 | 0.0 |
| r2 | url-get | 100KB | 219 ms | 442 ms | 555 ms | 214 ms | 0.5 | 180 | 0.0 |
| railway | url-get | 100KB | 329 ms | 473 ms | 692 ms | 277 ms | 0.3 | 180 | 0.0 |
| aws-s3 | url-get | 100KB | 339 ms | 454 ms | 592 ms | 218 ms | 0.3 | 180 | 0.0 |
| b2 | url-get | 100KB | 379 ms | 497 ms | 655 ms | 228 ms | 0.3 | 178 | 0.0 |
| neon | url-get | 100KB | 532 ms | 676 ms | 747 ms | 324 ms | 0.2 | 180 | 0.0 |
| railway | url-get | 100MB | 1.77 s | 5.01 s | 19.86 s | 279 ms | 59.2 | 24 | 0.0 |
| neon | url-get | 100MB | 2.01 s | 2.65 s | 9.19 s | 327 ms | 52.1 | 24 | 0.0 |
| aws-s3 | url-get | 100MB | 2.49 s | 4.49 s | 50.27 s | 221 ms | 42.0 | 24 | 0.0 |
| b2 | url-get | 100MB | 2.88 s | 3.95 s | 4.13 s | 244 ms | 36.4 | 24 | 0.0 |
| r2 | url-get | 100MB | 4.00 s | 6.43 s | 8.44 s | 232 ms | 26.2 | 24 | 0.0 |

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
| aws-s3 | burst-upload | 32x100KB | 394 ms | 866 ms | 1.04 s | – | 8.3 | 30 | 0.0 |
| railway | burst-upload | 32x100KB | 517 ms | 681 ms | 684 ms | – | 6.3 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 575 ms | 795 ms | 891 ms | – | 5.7 | 30 | 0.0 |
| r2 | burst-upload | 32x100KB | 669 ms | 2.97 s | 3.12 s | – | 4.9 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.34 s | 2.77 s | 5.58 s | – | 2.5 | 30 | 10.0 |
| aws-s3 | concurrent-download | 16x100KB | 166 ms | 282 ms | 606 ms | – | 9.9 | 30 | 0.0 |
| neon | concurrent-download | 16x100KB | 193 ms | 519 ms | 731 ms | – | 8.5 | 30 | 0.0 |
| b2 | concurrent-download | 16x100KB | 245 ms | 343 ms | 1.53 s | – | 6.7 | 26 | 0.0 |
| railway | concurrent-download | 16x100KB | 301 ms | 526 ms | 560 ms | – | 5.4 | 30 | 0.0 |
| r2 | concurrent-download | 16x100KB | 409 ms | 1.52 s | 2.26 s | – | 4.0 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 348 ms | 666 ms | 685 ms | – | 4.7 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 444 ms | 780 ms | 836 ms | – | 3.7 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 445 ms | 721 ms | 744 ms | – | 3.7 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 590 ms | 921 ms | 2.54 s | – | 2.8 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.14 s | 2.09 s | 2.16 s | – | 1.4 | 30 | 13.3 |
| aws-s3 | copy | 10MB | 191 ms | 280 ms | 294 ms | – | – | 60 | 0.0 |
| neon | copy | 10MB | 297 ms | 372 ms | 1.45 s | – | – | 60 | 1.7 |
| railway | copy | 10MB | 525 ms | 742 ms | 909 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 562 ms | 1.24 s | 1.45 s | – | – | 60 | 0.0 |
| r2 | copy | 10MB | 1.33 s | 1.95 s | 2.43 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 72 ms | 100 ms | 131 ms | – | – | 165 | 0.0 |
| aws-s3 | delete | 1KB | 82 ms | 104 ms | 121 ms | – | – | 168 | 0.0 |
| railway | delete | 1KB | 100 ms | 223 ms | 346 ms | – | – | 167 | 0.0 |
| neon | delete | 1KB | 101 ms | 135 ms | 214 ms | – | – | 168 | 0.0 |
| r2 | delete | 1KB | 157 ms | 233 ms | 363 ms | – | – | 168 | 0.0 |
| b2 | delete | 1MB | 71 ms | 103 ms | 150 ms | – | – | 90 | 0.0 |
| aws-s3 | delete | 1MB | 82 ms | 107 ms | 158 ms | – | – | 90 | 0.0 |
| neon | delete | 1MB | 100 ms | 236 ms | 363 ms | – | – | 90 | 0.0 |
| railway | delete | 1MB | 116 ms | 241 ms | 314 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 154 ms | 226 ms | 383 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 71 ms | 83 ms | 141 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 83 ms | 89 ms | 96 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 101 ms | 167 ms | 247 ms | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 155 ms | 211 ms | 247 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 178 ms | 220 ms | 280 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 72 ms | 104 ms | 209 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 100KB | 83 ms | 99 ms | 145 ms | – | – | 180 | 0.0 |
| neon | delete | 100KB | 101 ms | 160 ms | 338 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 107 ms | 205 ms | 360 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 155 ms | 274 ms | 577 ms | – | – | 180 | 0.0 |
| b2 | delete | 100MB | 71 ms | 209 ms | 11.30 s | – | – | 22 | 0.0 |
| aws-s3 | delete | 100MB | 89 ms | 95 ms | 98 ms | – | – | 24 | 0.0 |
| neon | delete | 100MB | 101 ms | 146 ms | 309 ms | – | – | 24 | 0.0 |
| railway | delete | 100MB | 141 ms | 188 ms | 189 ms | – | – | 24 | 0.0 |
| r2 | delete | 100MB | 168 ms | 251 ms | 265 ms | – | – | 24 | 0.0 |
| b2 | download | 1KB | 77 ms | 100 ms | 137 ms | 76 ms | 0.0 | 165 | 0.0 |
| railway | download | 1KB | 83 ms | 169 ms | 215 ms | 83 ms | 0.0 | 167 | 0.0 |
| aws-s3 | download | 1KB | 89 ms | 144 ms | 228 ms | 89 ms | 0.0 | 168 | 0.0 |
| neon | download | 1KB | 113 ms | 144 ms | 203 ms | 113 ms | 0.0 | 168 | 0.6 |
| r2 | download | 1KB | 243 ms | 331 ms | 399 ms | 243 ms | 0.0 | 168 | 0.0 |
| aws-s3 | download | 1MB | 118 ms | 694 ms | 889 ms | 89 ms | 8.9 | 90 | 0.0 |
| neon | download | 1MB | 185 ms | 451 ms | 854 ms | 112 ms | 5.7 | 90 | 0.0 |
| railway | download | 1MB | 260 ms | 596 ms | 820 ms | 243 ms | 4.0 | 90 | 0.0 |
| r2 | download | 1MB | 334 ms | 509 ms | 570 ms | 253 ms | 3.1 | 90 | 0.0 |
| b2 | download | 1MB | 444 ms | 492 ms | 519 ms | 107 ms | 2.4 | 90 | 0.0 |
| railway | download | 10MB | 412 ms | 752 ms | 961 ms | 224 ms | 25.5 | 60 | 0.0 |
| aws-s3 | download | 10MB | 679 ms | 1.23 s | 1.59 s | 88 ms | 15.4 | 60 | 0.0 |
| b2 | download | 10MB | 751 ms | 841 ms | 857 ms | 118 ms | 14.0 | 60 | 0.0 |
| neon | download | 10MB | 760 ms | 1.81 s | 2.18 s | 113 ms | 13.8 | 60 | 0.0 |
| r2 | download | 10MB | 807 ms | 1.38 s | 1.54 s | 266 ms | 13.0 | 60 | 0.0 |
| aws-s3 | download | 100KB | 91 ms | 210 ms | 374 ms | 89 ms | 1.1 | 180 | 0.0 |
| neon | download | 100KB | 120 ms | 331 ms | 494 ms | 113 ms | 0.8 | 180 | 0.0 |
| b2 | download | 100KB | 123 ms | 250 ms | 810 ms | 90 ms | 0.8 | 180 | 0.0 |
| railway | download | 100KB | 185 ms | 328 ms | 506 ms | 182 ms | 0.6 | 180 | 0.0 |
| r2 | download | 100KB | 240 ms | 360 ms | 448 ms | 238 ms | 0.4 | 180 | 0.0 |
| railway | download | 100MB | 2.41 s | 4.00 s | 4.52 s | 245 ms | 43.5 | 24 | 0.0 |
| b2 | download | 100MB | 3.39 s | 4.53 s | 4.62 s | 118 ms | 30.9 | 22 | 0.0 |
| aws-s3 | download | 100MB | 4.99 s | 9.21 s | 26.81 s | 108 ms | 21.0 | 24 | 0.0 |
| r2 | download | 100MB | 5.30 s | 10.70 s | 21.86 s | 302 ms | 19.8 | 24 | 0.0 |
| neon | download | 100MB | 7.93 s | 12.89 s | 17.92 s | 112 ms | 13.2 | 24 | 0.0 |
| railway | first-request | 1KB | 108 ms | 190 ms | 478 ms | – | – | 60 | 0.0 |
| r2 | first-request | 1KB | 167 ms | 282 ms | 330 ms | – | – | 60 | 0.0 |
| b2 | first-request | 1KB | 217 ms | 263 ms | 296 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 228 ms | 247 ms | 259 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 321 ms | 368 ms | 383 ms | – | – | 60 | 0.0 |
| b2 | head | 1KB | 70 ms | 94 ms | 150 ms | – | – | 165 | 0.0 |
| aws-s3 | head | 1KB | 74 ms | 100 ms | 136 ms | – | – | 167 | 0.0 |
| railway | head | 1KB | 86 ms | 179 ms | 266 ms | – | – | 167 | 0.0 |
| neon | head | 1KB | 87 ms | 137 ms | 206 ms | – | – | 168 | 0.0 |
| r2 | head | 1KB | 121 ms | 197 ms | 271 ms | – | – | 168 | 0.0 |
| b2 | head | 1MB | 69 ms | 97 ms | 122 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 1MB | 75 ms | 93 ms | 151 ms | – | – | 90 | 0.0 |
| neon | head | 1MB | 85 ms | 104 ms | 143 ms | – | – | 90 | 0.0 |
| railway | head | 1MB | 89 ms | 182 ms | 259 ms | – | – | 90 | 0.0 |
| r2 | head | 1MB | 117 ms | 170 ms | 193 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 10MB | 75 ms | 240 ms | 244 ms | – | – | 60 | 0.0 |
| neon | head | 10MB | 86 ms | 118 ms | 525 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 130 ms | 241 ms | 328 ms | – | – | 60 | 0.0 |
| railway | head | 10MB | 166 ms | 231 ms | 11.26 s | – | – | 60 | 0.0 |
| b2 | head | 10MB | 212 ms | 265 ms | 5.22 s | – | – | 60 | 0.0 |
| b2 | head | 100KB | 70 ms | 104 ms | 189 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 100KB | 74 ms | 88 ms | 137 ms | – | – | 180 | 0.0 |
| neon | head | 100KB | 86 ms | 115 ms | 136 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 86 ms | 191 ms | 434 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 118 ms | 185 ms | 354 ms | – | – | 180 | 0.0 |
| b2 | head | 100MB | 69 ms | 92 ms | 96 ms | – | – | 22 | 0.0 |
| aws-s3 | head | 100MB | 74 ms | 94 ms | 202 ms | – | – | 24 | 0.0 |
| railway | head | 100MB | 83 ms | 198 ms | 280 ms | – | – | 24 | 0.0 |
| neon | head | 100MB | 86 ms | 97 ms | 28.98 s | – | – | 24 | 0.0 |
| r2 | head | 100MB | 120 ms | 172 ms | 181 ms | – | – | 24 | 0.0 |
| neon | list-all | 1000 objects | 121 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 133 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | list-all | 1000 objects | 144 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 502 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 731 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 95 ms | 291 ms | 413 ms | 88 ms | – | 60 | 0.0 |
| neon | range-get | 256KB of 10MB | 122 ms | 404 ms | 990 ms | 109 ms | – | 60 | 0.0 |
| railway | range-get | 256KB of 10MB | 263 ms | 369 ms | 565 ms | 258 ms | – | 60 | 0.0 |
| r2 | range-get | 256KB of 10MB | 321 ms | 634 ms | 3.20 s | 293 ms | – | 60 | 0.0 |
| b2 | range-get | 256KB of 10MB | 334 ms | 373 ms | 409 ms | 112 ms | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 480 ms | 769 ms | 1.13 s | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 624 ms | 1.00 s | 1.49 s | – | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 640 ms | 770 ms | 859 ms | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 698 ms | 1.11 s | 1.23 s | – | – | 60 | 0.0 |
| neon | signed-upload | 1MB | 840 ms | 1.48 s | 2.95 s | – | – | 60 | 0.0 |
| aws-s3 | upload | 1KB | 88 ms | 112 ms | 169 ms | – | 0.0 | 167 | 0.0 |
| railway | upload | 1KB | 98 ms | 207 ms | 383 ms | – | 0.0 | 167 | 0.0 |
| neon | upload | 1KB | 149 ms | 219 ms | 266 ms | – | 0.0 | 168 | 0.0 |
| b2 | upload | 1KB | 256 ms | 717 ms | 1.27 s | – | 0.0 | 168 | 1.8 |
| r2 | upload | 1KB | 358 ms | 612 ms | 726 ms | – | 0.0 | 168 | 0.0 |
| r2 | upload | 1MB | 444 ms | 774 ms | 977 ms | – | 2.4 | 90 | 0.0 |
| railway | upload | 1MB | 509 ms | 736 ms | 1.21 s | – | 2.1 | 90 | 0.0 |
| aws-s3 | upload | 1MB | 531 ms | 1.02 s | 1.32 s | – | 2.0 | 90 | 0.0 |
| b2 | upload | 1MB | 618 ms | 933 ms | 1.15 s | – | 1.7 | 90 | 0.0 |
| neon | upload | 1MB | 637 ms | 2.25 s | 2.51 s | – | 1.6 | 90 | 0.0 |
| r2 | upload | 10MB | 992 ms | 1.57 s | 10.84 s | – | 10.6 | 60 | 0.0 |
| railway | upload | 10MB | 1.18 s | 2.75 s | 8.87 s | – | 8.9 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 1.36 s | 9.16 s | 15.41 s | – | 7.7 | 60 | 0.0 |
| b2 | upload | 10MB | 1.39 s | 2.72 s | 6.85 s | – | 7.5 | 60 | 0.0 |
| neon | upload | 10MB | 1.48 s | 8.61 s | 14.24 s | – | 7.1 | 60 | 0.0 |
| aws-s3 | upload | 100KB | 283 ms | 356 ms | 494 ms | – | 0.4 | 180 | 0.0 |
| railway | upload | 100KB | 332 ms | 504 ms | 560 ms | – | 0.3 | 180 | 0.0 |
| neon | upload | 100KB | 352 ms | 439 ms | 625 ms | – | 0.3 | 180 | 0.0 |
| r2 | upload | 100KB | 372 ms | 613 ms | 3.71 s | – | 0.3 | 180 | 0.0 |
| b2 | upload | 100KB | 486 ms | 1.00 s | 1.32 s | – | 0.2 | 180 | 0.0 |
| r2 | upload | 100MB | 4.72 s | 5.54 s | 5.59 s | – | 22.2 | 24 | 0.0 |
| railway | upload | 100MB | 6.58 s | 16.83 s | 30.99 s | – | 15.9 | 24 | 0.0 |
| b2 | upload | 100MB | 7.53 s | 9.32 s | 11.40 s | – | 13.9 | 24 | 8.3 |
| aws-s3 | upload | 100MB | 9.73 s | 22.05 s | 25.58 s | – | 10.8 | 24 | 0.0 |
| neon | upload | 100MB | 12.03 s | 33.30 s | 45.19 s | – | 8.7 | 24 | 0.0 |
| aws-s3 | url-get | 1KB | 110 ms | 274 ms | 374 ms | 110 ms | 0.0 | 168 | 0.0 |
| railway | url-get | 1KB | 123 ms | 334 ms | 486 ms | 123 ms | 0.0 | 167 | 0.0 |
| neon | url-get | 1KB | 147 ms | 411 ms | 641 ms | 146 ms | 0.0 | 168 | 0.0 |
| r2 | url-get | 1KB | 193 ms | 314 ms | 397 ms | 193 ms | 0.0 | 168 | 0.0 |
| b2 | url-get | 1KB | 221 ms | 287 ms | 1.04 s | 221 ms | 0.0 | 165 | 0.0 |
| r2 | url-get | 1MB | 265 ms | 463 ms | 755 ms | 220 ms | 4.0 | 90 | 0.0 |
| railway | url-get | 1MB | 309 ms | 472 ms | 704 ms | 274 ms | 3.4 | 90 | 0.0 |
| aws-s3 | url-get | 1MB | 553 ms | 937 ms | 1.18 s | 231 ms | 1.9 | 90 | 0.0 |
| b2 | url-get | 1MB | 609 ms | 666 ms | 822 ms | 247 ms | 1.7 | 90 | 0.0 |
| neon | url-get | 1MB | 796 ms | 1.10 s | 1.23 s | 357 ms | 1.3 | 90 | 0.0 |
| railway | url-get | 10MB | 484 ms | 987 ms | 1.34 s | 297 ms | 21.7 | 60 | 0.0 |
| r2 | url-get | 10MB | 645 ms | 1.22 s | 5.65 s | 254 ms | 16.3 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 858 ms | 2.49 s | 3.03 s | 228 ms | 12.2 | 60 | 0.0 |
| b2 | url-get | 10MB | 909 ms | 1.15 s | 1.54 s | 255 ms | 11.5 | 60 | 0.0 |
| neon | url-get | 10MB | 1.33 s | 3.15 s | 3.83 s | 358 ms | 7.9 | 60 | 0.0 |
| r2 | url-get | 100KB | 214 ms | 342 ms | 422 ms | 210 ms | 0.5 | 180 | 0.6 |
| railway | url-get | 100KB | 249 ms | 424 ms | 593 ms | 242 ms | 0.4 | 180 | 0.0 |
| aws-s3 | url-get | 100KB | 348 ms | 386 ms | 759 ms | 225 ms | 0.3 | 180 | 0.0 |
| b2 | url-get | 100KB | 400 ms | 490 ms | 657 ms | 244 ms | 0.3 | 180 | 0.0 |
| neon | url-get | 100KB | 565 ms | 641 ms | 701 ms | 353 ms | 0.2 | 180 | 0.0 |
| railway | url-get | 100MB | 2.18 s | 3.10 s | 3.13 s | 265 ms | 48.0 | 24 | 0.0 |
| b2 | url-get | 100MB | 3.48 s | 9.67 s | 13.46 s | 270 ms | 30.1 | 22 | 0.0 |
| r2 | url-get | 100MB | 5.03 s | 7.12 s | 7.23 s | 279 ms | 20.9 | 24 | 0.0 |
| aws-s3 | url-get | 100MB | 5.21 s | 10.07 s | 13.86 s | 245 ms | 20.1 | 24 | 0.0 |
| neon | url-get | 100MB | 6.80 s | 25.77 s | 38.63 s | 447 ms | 15.4 | 24 | 0.0 |

## From ms-a2

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| aws-s3 | burst-upload | 32x100KB | 232 ms | 340 ms | 354 ms | – | 14.1 | 30 | 0.0 |
| railway | burst-upload | 32x100KB | 235 ms | 394 ms | 554 ms | – | 13.9 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 291 ms | 471 ms | 566 ms | – | 11.2 | 30 | 0.0 |
| r2 | burst-upload | 32x100KB | 577 ms | 1.18 s | 2.74 s | – | 5.7 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.13 s | 1.58 s | 1.73 s | – | 2.9 | 30 | 6.7 |
| neon | concurrent-download | 16x100KB | 99 ms | 226 ms | 272 ms | – | 16.5 | 30 | 0.0 |
| aws-s3 | concurrent-download | 16x100KB | 105 ms | 184 ms | 202 ms | – | 15.6 | 30 | 0.0 |
| b2 | concurrent-download | 16x100KB | 166 ms | 376 ms | 391 ms | – | 9.8 | 29 | 0.0 |
| railway | concurrent-download | 16x100KB | 187 ms | 334 ms | 386 ms | – | 8.8 | 30 | 0.0 |
| r2 | concurrent-download | 16x100KB | 227 ms | 378 ms | 398 ms | – | 7.2 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 210 ms | 336 ms | 367 ms | – | 7.8 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 221 ms | 376 ms | 412 ms | – | 7.4 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 228 ms | 369 ms | 410 ms | – | 7.2 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 518 ms | 2.00 s | 2.70 s | – | 3.2 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 866 ms | 1.52 s | 2.33 s | – | 1.9 | 30 | 3.3 |
| aws-s3 | copy | 10MB | 196 ms | 234 ms | 247 ms | – | – | 60 | 0.0 |
| neon | copy | 10MB | 273 ms | 383 ms | 500 ms | – | – | 59 | 0.0 |
| railway | copy | 10MB | 300 ms | 497 ms | 590 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 618 ms | 1.49 s | 4.58 s | – | – | 60 | 0.0 |
| r2 | copy | 10MB | 979 ms | 1.43 s | 1.53 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 40 ms | 76 ms | 108 ms | – | – | 180 | 0.0 |
| railway | delete | 1KB | 55 ms | 70 ms | 115 ms | – | – | 180 | 0.0 |
| neon | delete | 1KB | 55 ms | 162 ms | 205 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 1KB | 57 ms | 67 ms | 81 ms | – | – | 180 | 0.0 |
| r2 | delete | 1KB | 115 ms | 165 ms | 295 ms | – | – | 180 | 0.0 |
| b2 | delete | 1MB | 42 ms | 119 ms | 142 ms | – | – | 90 | 0.0 |
| neon | delete | 1MB | 55 ms | 74 ms | 217 ms | – | – | 90 | 0.0 |
| railway | delete | 1MB | 55 ms | 72 ms | 103 ms | – | – | 90 | 0.0 |
| aws-s3 | delete | 1MB | 58 ms | 65 ms | 73 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 122 ms | 193 ms | 284 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 39 ms | 128 ms | 144 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 55 ms | 120 ms | 199 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 57 ms | 77 ms | 81 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 58 ms | 63 ms | 65 ms | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 114 ms | 166 ms | 227 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 41 ms | 79 ms | 124 ms | – | – | 180 | 0.0 |
| neon | delete | 100KB | 54 ms | 68 ms | 198 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 56 ms | 79 ms | 87 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 100KB | 58 ms | 67 ms | 79 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 119 ms | 255 ms | 400 ms | – | – | 180 | 0.0 |
| b2 | delete | 100MB | 43 ms | 108 ms | 120 ms | – | – | 23 | 0.0 |
| railway | delete | 100MB | 52 ms | 71 ms | 78 ms | – | – | 24 | 0.0 |
| neon | delete | 100MB | 58 ms | 63 ms | 67 ms | – | – | 24 | 0.0 |
| aws-s3 | delete | 100MB | 65 ms | 79 ms | 84 ms | – | – | 23 | 0.0 |
| r2 | delete | 100MB | 122 ms | 178 ms | 316 ms | – | – | 24 | 0.0 |
| railway | download | 1KB | 39 ms | 46 ms | 58 ms | 39 ms | 0.0 | 180 | 0.0 |
| b2 | download | 1KB | 44 ms | 119 ms | 594 ms | 44 ms | 0.0 | 180 | 0.0 |
| aws-s3 | download | 1KB | 63 ms | 82 ms | 165 ms | 63 ms | 0.0 | 180 | 0.0 |
| neon | download | 1KB | 68 ms | 95 ms | 164 ms | 68 ms | 0.0 | 180 | 0.0 |
| r2 | download | 1KB | 139 ms | 208 ms | 321 ms | 139 ms | 0.0 | 180 | 0.0 |
| aws-s3 | download | 1MB | 73 ms | 334 ms | 358 ms | 63 ms | 14.3 | 90 | 0.0 |
| neon | download | 1MB | 81 ms | 137 ms | 185 ms | 67 ms | 13.0 | 90 | 0.0 |
| b2 | download | 1MB | 129 ms | 411 ms | 524 ms | 62 ms | 8.1 | 90 | 0.0 |
| railway | download | 1MB | 261 ms | 364 ms | 564 ms | 66 ms | 4.0 | 90 | 0.0 |
| r2 | download | 1MB | 265 ms | 412 ms | 500 ms | 163 ms | 4.0 | 90 | 0.0 |
| neon | download | 10MB | 302 ms | 377 ms | 428 ms | 69 ms | 34.7 | 60 | 0.0 |
| aws-s3 | download | 10MB | 363 ms | 428 ms | 482 ms | 65 ms | 28.9 | 60 | 0.0 |
| b2 | download | 10MB | 389 ms | 1.46 s | 1.61 s | 73 ms | 27.0 | 60 | 0.0 |
| railway | download | 10MB | 496 ms | 749 ms | 795 ms | 72 ms | 21.1 | 60 | 0.0 |
| r2 | download | 10MB | 514 ms | 874 ms | 1.11 s | 155 ms | 20.4 | 60 | 0.0 |
| aws-s3 | download | 100KB | 65 ms | 129 ms | 229 ms | 64 ms | 1.6 | 180 | 0.0 |
| b2 | download | 100KB | 68 ms | 184 ms | 253 ms | 52 ms | 1.5 | 180 | 0.0 |
| neon | download | 100KB | 69 ms | 94 ms | 149 ms | 68 ms | 1.5 | 180 | 0.0 |
| r2 | download | 100KB | 146 ms | 2.11 s | 14.13 s | 142 ms | 0.7 | 180 | 0.0 |
| railway | download | 100KB | 153 ms | 179 ms | 269 ms | 57 ms | 0.7 | 180 | 0.0 |
| railway | download | 100MB | 2.02 s | 2.66 s | 2.66 s | 72 ms | 52.0 | 24 | 0.0 |
| b2 | download | 100MB | 2.02 s | 4.40 s | 5.04 s | 76 ms | 52.0 | 23 | 0.0 |
| neon | download | 100MB | 2.21 s | 2.68 s | 2.78 s | 69 ms | 47.4 | 24 | 0.0 |
| aws-s3 | download | 100MB | 2.37 s | 2.98 s | 3.07 s | 68 ms | 44.2 | 23 | 0.0 |
| r2 | download | 100MB | 4.14 s | 7.21 s | 8.03 s | 232 ms | 25.3 | 24 | 0.0 |
| r2 | first-request | 1KB | 109 ms | 159 ms | 322 ms | – | – | 60 | 0.0 |
| b2 | first-request | 1KB | 112 ms | 330 ms | 354 ms | – | – | 60 | 0.0 |
| railway | first-request | 1KB | 116 ms | 245 ms | 360 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 132 ms | 158 ms | 172 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 144 ms | 166 ms | 172 ms | – | – | 60 | 0.0 |
| b2 | head | 1KB | 37 ms | 90 ms | 133 ms | – | – | 180 | 0.0 |
| railway | head | 1KB | 39 ms | 47 ms | 67 ms | – | – | 180 | 0.0 |
| neon | head | 1KB | 40 ms | 55 ms | 98 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 1KB | 50 ms | 58 ms | 83 ms | – | – | 180 | 0.0 |
| r2 | head | 1KB | 77 ms | 110 ms | 131 ms | – | – | 180 | 0.0 |
| b2 | head | 1MB | 40 ms | 104 ms | 130 ms | – | – | 90 | 0.0 |
| railway | head | 1MB | 41 ms | 50 ms | 105 ms | – | – | 90 | 0.0 |
| neon | head | 1MB | 41 ms | 60 ms | 68 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 1MB | 50 ms | 58 ms | 79 ms | – | – | 90 | 0.0 |
| r2 | head | 1MB | 83 ms | 154 ms | 182 ms | – | – | 90 | 0.0 |
| railway | head | 10MB | 40 ms | 56 ms | 61 ms | – | – | 60 | 0.0 |
| neon | head | 10MB | 40 ms | 46 ms | 131 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 51 ms | 57 ms | 61 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 82 ms | 153 ms | 269 ms | – | – | 60 | 0.0 |
| b2 | head | 10MB | 111 ms | 328 ms | 369 ms | – | – | 60 | 1.7 |
| b2 | head | 100KB | 39 ms | 76 ms | 98 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 40 ms | 47 ms | 64 ms | – | – | 180 | 0.0 |
| neon | head | 100KB | 41 ms | 60 ms | 130 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 100KB | 50 ms | 60 ms | 110 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 81 ms | 143 ms | 161 ms | – | – | 180 | 0.0 |
| b2 | head | 100MB | 39 ms | 95 ms | 111 ms | – | – | 23 | 0.0 |
| railway | head | 100MB | 40 ms | 46 ms | 46 ms | – | – | 24 | 0.0 |
| neon | head | 100MB | 40 ms | 47 ms | 64 ms | – | – | 24 | 0.0 |
| aws-s3 | head | 100MB | 51 ms | 57 ms | 125 ms | – | – | 23 | 0.0 |
| r2 | head | 100MB | 78 ms | 125 ms | 173 ms | – | – | 24 | 0.0 |
| neon | list-all | 1000 objects | 62 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 77 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | list-all | 1000 objects | 117 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 519 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 662 ms | – | – | – | – | 18 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 68 ms | 187 ms | 194 ms | 64 ms | – | 60 | 0.0 |
| neon | range-get | 256KB of 10MB | 71 ms | 174 ms | 190 ms | 66 ms | – | 59 | 0.0 |
| b2 | range-get | 256KB of 10MB | 177 ms | 521 ms | 610 ms | 67 ms | – | 60 | 0.0 |
| railway | range-get | 256KB of 10MB | 195 ms | 492 ms | 528 ms | 67 ms | – | 60 | 0.0 |
| r2 | range-get | 256KB of 10MB | 234 ms | 399 ms | 705 ms | 190 ms | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 352 ms | 1.14 s | 1.34 s | – | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 366 ms | 644 ms | 720 ms | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 368 ms | 448 ms | 483 ms | – | – | 60 | 0.0 |
| neon | signed-upload | 1MB | 390 ms | 471 ms | 587 ms | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 461 ms | 607 ms | 683 ms | – | – | 60 | 0.0 |
| railway | upload | 1KB | 51 ms | 70 ms | 83 ms | – | 0.0 | 180 | 0.0 |
| aws-s3 | upload | 1KB | 64 ms | 75 ms | 99 ms | – | 0.0 | 180 | 0.0 |
| neon | upload | 1KB | 100 ms | 172 ms | 266 ms | – | 0.0 | 180 | 0.0 |
| b2 | upload | 1KB | 211 ms | 867 ms | 1.29 s | – | 0.0 | 180 | 0.0 |
| r2 | upload | 1KB | 252 ms | 367 ms | 439 ms | – | 0.0 | 180 | 0.0 |
| railway | upload | 1MB | 284 ms | 324 ms | 338 ms | – | 3.7 | 90 | 0.0 |
| aws-s3 | upload | 1MB | 322 ms | 359 ms | 370 ms | – | 3.3 | 90 | 0.0 |
| neon | upload | 1MB | 324 ms | 397 ms | 420 ms | – | 3.2 | 90 | 0.0 |
| b2 | upload | 1MB | 345 ms | 742 ms | 822 ms | – | 3.0 | 90 | 0.0 |
| r2 | upload | 1MB | 386 ms | 704 ms | 914 ms | – | 2.7 | 90 | 0.0 |
| neon | upload | 10MB | 507 ms | 598 ms | 735 ms | – | 20.7 | 60 | 0.0 |
| railway | upload | 10MB | 589 ms | 723 ms | 836 ms | – | 17.8 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 737 ms | 848 ms | 946 ms | – | 14.2 | 60 | 0.0 |
| r2 | upload | 10MB | 807 ms | 1.47 s | 6.02 s | – | 13.0 | 60 | 0.0 |
| b2 | upload | 10MB | 949 ms | 4.38 s | 5.04 s | – | 11.1 | 60 | 0.0 |
| neon | upload | 100KB | 167 ms | 215 ms | 354 ms | – | 0.6 | 180 | 0.0 |
| railway | upload | 100KB | 168 ms | 200 ms | 237 ms | – | 0.6 | 180 | 0.0 |
| aws-s3 | upload | 100KB | 184 ms | 199 ms | 218 ms | – | 0.6 | 180 | 0.0 |
| r2 | upload | 100KB | 293 ms | 520 ms | 609 ms | – | 0.3 | 180 | 0.0 |
| b2 | upload | 100KB | 360 ms | 832 ms | 1.08 s | – | 0.3 | 180 | 0.0 |
| railway | upload | 100MB | 3.46 s | 4.51 s | 4.61 s | – | 30.3 | 24 | 0.0 |
| r2 | upload | 100MB | 3.50 s | 21.10 s | 27.75 s | – | 30.0 | 24 | 0.0 |
| aws-s3 | upload | 100MB | 4.19 s | 4.97 s | 5.26 s | – | 25.0 | 24 | 4.2 |
| neon | upload | 100MB | 4.71 s | 5.50 s | 5.71 s | – | 22.3 | 24 | 0.0 |
| b2 | upload | 100MB | 7.24 s | 8.96 s | 9.51 s | – | 14.5 | 24 | 4.2 |
| railway | url-get | 1KB | 40 ms | 132 ms | 153 ms | 40 ms | 0.0 | 180 | 0.0 |
| b2 | url-get | 1KB | 45 ms | 141 ms | 284 ms | 45 ms | 0.0 | 180 | 0.0 |
| aws-s3 | url-get | 1KB | 62 ms | 149 ms | 164 ms | 62 ms | 0.0 | 180 | 0.0 |
| neon | url-get | 1KB | 67 ms | 165 ms | 258 ms | 67 ms | 0.0 | 180 | 0.0 |
| r2 | url-get | 1KB | 129 ms | 243 ms | 322 ms | 129 ms | 0.0 | 180 | 0.0 |
| r2 | url-get | 1MB | 258 ms | 404 ms | 459 ms | 181 ms | 4.1 | 90 | 0.0 |
| b2 | url-get | 1MB | 319 ms | 932 ms | 1.27 s | 136 ms | 3.3 | 90 | 0.0 |
| neon | url-get | 1MB | 336 ms | 409 ms | 512 ms | 165 ms | 3.1 | 90 | 1.1 |
| aws-s3 | url-get | 1MB | 337 ms | 384 ms | 638 ms | 149 ms | 3.1 | 90 | 1.1 |
| railway | url-get | 1MB | 341 ms | 468 ms | 1.05 s | 143 ms | 3.1 | 90 | 0.0 |
| neon | url-get | 10MB | 492 ms | 1.04 s | 1.07 s | 171 ms | 21.3 | 60 | 0.0 |
| b2 | url-get | 10MB | 495 ms | 1.48 s | 1.77 s | 155 ms | 21.2 | 60 | 0.0 |
| railway | url-get | 10MB | 522 ms | 931 ms | 983 ms | 151 ms | 20.1 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 548 ms | 914 ms | 1.20 s | 150 ms | 19.2 | 60 | 0.0 |
| r2 | url-get | 10MB | 662 ms | 970 ms | 1.45 s | 230 ms | 15.8 | 60 | 0.0 |
| aws-s3 | url-get | 100KB | 66 ms | 252 ms | 264 ms | 65 ms | 1.5 | 180 | 0.0 |
| neon | url-get | 100KB | 79 ms | 276 ms | 346 ms | 73 ms | 1.3 | 180 | 0.0 |
| r2 | url-get | 100KB | 153 ms | 291 ms | 3.78 s | 150 ms | 0.7 | 180 | 0.0 |
| railway | url-get | 100KB | 159 ms | 267 ms | 284 ms | 65 ms | 0.6 | 180 | 0.0 |
| b2 | url-get | 100KB | 196 ms | 558 ms | 712 ms | 122 ms | 0.5 | 180 | 0.0 |
| railway | url-get | 100MB | 1.57 s | 2.01 s | 2.90 s | 140 ms | 66.9 | 24 | 0.0 |
| neon | url-get | 100MB | 1.79 s | 2.47 s | 2.48 s | 171 ms | 58.7 | 24 | 0.0 |
| b2 | url-get | 100MB | 2.19 s | 4.80 s | 7.93 s | 153 ms | 48.0 | 23 | 0.0 |
| aws-s3 | url-get | 100MB | 2.46 s | 2.75 s | 3.19 s | 156 ms | 42.7 | 23 | 0.0 |
| r2 | url-get | 100MB | 5.12 s | 9.07 s | 13.57 s | 242 ms | 20.5 | 24 | 0.0 |

## From boat-lille

| Provider | Op | Size | p50 | p95 | p99 | TTFB p50 | MB/s p50 | n | fail % |
|---|---|---|---|---|---|---|---|---|---|
| railway | burst-upload | 32x100KB | 402 ms | 627 ms | 678 ms | – | 8.2 | 30 | 0.0 |
| aws-s3 | burst-upload | 32x100KB | 444 ms | 688 ms | 751 ms | – | 7.4 | 30 | 0.0 |
| neon | burst-upload | 32x100KB | 493 ms | 1.11 s | 1.35 s | – | 6.7 | 30 | 10.0 |
| r2 | burst-upload | 32x100KB | 815 ms | 1.42 s | 2.76 s | – | 4.0 | 30 | 0.0 |
| b2 | burst-upload | 32x100KB | 1.23 s | 2.59 s | 3.82 s | – | 2.7 | 30 | 10.0 |
| b2 | concurrent-download | 16x100KB | 282 ms | 377 ms | 1.59 s | – | 5.8 | 28 | 0.0 |
| neon | concurrent-download | 16x100KB | 343 ms | 613 ms | 728 ms | – | 4.8 | 30 | 0.0 |
| railway | concurrent-download | 16x100KB | 376 ms | 563 ms | 669 ms | – | 4.4 | 30 | 0.0 |
| r2 | concurrent-download | 16x100KB | 440 ms | 721 ms | 782 ms | – | 3.7 | 30 | 0.0 |
| aws-s3 | concurrent-download | 16x100KB | 447 ms | 818 ms | 1.04 s | – | 3.7 | 30 | 0.0 |
| railway | concurrent-upload | 16x100KB | 391 ms | 662 ms | 736 ms | – | 4.2 | 30 | 0.0 |
| aws-s3 | concurrent-upload | 16x100KB | 436 ms | 641 ms | 663 ms | – | 3.8 | 30 | 0.0 |
| neon | concurrent-upload | 16x100KB | 443 ms | 741 ms | 798 ms | – | 3.7 | 30 | 0.0 |
| r2 | concurrent-upload | 16x100KB | 796 ms | 976 ms | 2.80 s | – | 2.1 | 30 | 0.0 |
| b2 | concurrent-upload | 16x100KB | 1.13 s | 1.74 s | 2.35 s | – | 1.5 | 30 | 6.7 |
| aws-s3 | copy | 10MB | 246 ms | 295 ms | 301 ms | – | – | 60 | 0.0 |
| neon | copy | 10MB | 324 ms | 452 ms | 539 ms | – | – | 60 | 0.0 |
| railway | copy | 10MB | 518 ms | 656 ms | 832 ms | – | – | 60 | 0.0 |
| b2 | copy | 10MB | 677 ms | 2.21 s | 3.07 s | – | – | 60 | 0.0 |
| r2 | copy | 10MB | 1.47 s | 2.07 s | 2.16 s | – | – | 60 | 0.0 |
| b2 | delete | 1KB | 95 ms | 131 ms | 410 ms | – | – | 155 | 0.0 |
| neon | delete | 1KB | 110 ms | 238 ms | 328 ms | – | – | 157 | 0.0 |
| aws-s3 | delete | 1KB | 116 ms | 136 ms | 217 ms | – | – | 157 | 0.0 |
| railway | delete | 1KB | 117 ms | 148 ms | 234 ms | – | – | 157 | 0.0 |
| r2 | delete | 1KB | 173 ms | 351 ms | 429 ms | – | – | 156 | 0.0 |
| b2 | delete | 1MB | 98 ms | 110 ms | 152 ms | – | – | 89 | 0.0 |
| neon | delete | 1MB | 110 ms | 250 ms | 273 ms | – | – | 90 | 0.0 |
| aws-s3 | delete | 1MB | 111 ms | 119 ms | 126 ms | – | – | 89 | 0.0 |
| railway | delete | 1MB | 116 ms | 134 ms | 151 ms | – | – | 90 | 0.0 |
| r2 | delete | 1MB | 170 ms | 287 ms | 433 ms | – | – | 90 | 0.0 |
| b2 | delete | 10MB | 95 ms | 108 ms | 133 ms | – | – | 60 | 0.0 |
| aws-s3 | delete | 10MB | 111 ms | 131 ms | 365 ms | – | – | 60 | 0.0 |
| neon | delete | 10MB | 115 ms | 241 ms | 312 ms | – | – | 60 | 0.0 |
| railway | delete | 10MB | 116 ms | 220 ms | 242 ms | – | – | 60 | 0.0 |
| r2 | delete | 10MB | 191 ms | 459 ms | 528 ms | – | – | 60 | 0.0 |
| b2 | delete | 100KB | 94 ms | 123 ms | 159 ms | – | – | 177 | 0.0 |
| neon | delete | 100KB | 110 ms | 247 ms | 297 ms | – | – | 180 | 0.0 |
| aws-s3 | delete | 100KB | 114 ms | 131 ms | 183 ms | – | – | 180 | 0.0 |
| railway | delete | 100KB | 115 ms | 140 ms | 160 ms | – | – | 180 | 0.0 |
| r2 | delete | 100KB | 171 ms | 276 ms | 362 ms | – | – | 180 | 0.0 |
| neon | delete | 100MB | 116 ms | 145 ms | 151 ms | – | – | 24 | 0.0 |
| railway | delete | 100MB | 119 ms | 154 ms | 204 ms | – | – | 24 | 0.0 |
| b2 | delete | 100MB | 137 ms | 296 ms | 300 ms | – | – | 24 | 0.0 |
| r2 | delete | 100MB | 188 ms | 465 ms | 479 ms | – | – | 23 | 0.0 |
| aws-s3 | delete | 100MB | 228 ms | 335 ms | 345 ms | – | – | 24 | 0.0 |
| b2 | download | 1KB | 101 ms | 158 ms | 380 ms | 101 ms | 0.0 | 155 | 0.0 |
| railway | download | 1KB | 104 ms | 124 ms | 137 ms | 103 ms | 0.0 | 157 | 0.0 |
| aws-s3 | download | 1KB | 120 ms | 286 ms | 379 ms | 120 ms | 0.0 | 157 | 0.0 |
| neon | download | 1KB | 123 ms | 171 ms | 386 ms | 123 ms | 0.0 | 157 | 0.0 |
| r2 | download | 1KB | 277 ms | 450 ms | 712 ms | 277 ms | 0.0 | 156 | 0.0 |
| railway | download | 1MB | 325 ms | 739 ms | 1.79 s | 210 ms | 3.2 | 90 | 0.0 |
| aws-s3 | download | 1MB | 397 ms | 1.22 s | 4.00 s | 118 ms | 2.6 | 89 | 0.0 |
| r2 | download | 1MB | 432 ms | 697 ms | 746 ms | 289 ms | 2.4 | 90 | 0.0 |
| b2 | download | 1MB | 609 ms | 715 ms | 1.10 s | 142 ms | 1.7 | 89 | 0.0 |
| neon | download | 1MB | 617 ms | 1.87 s | 3.99 s | 123 ms | 1.7 | 90 | 0.0 |
| railway | download | 10MB | 760 ms | 1.28 s | 2.16 s | 240 ms | 13.8 | 60 | 0.0 |
| r2 | download | 10MB | 843 ms | 1.33 s | 1.96 s | 309 ms | 12.4 | 60 | 0.0 |
| b2 | download | 10MB | 1.03 s | 1.46 s | 1.93 s | 152 ms | 10.2 | 60 | 0.0 |
| aws-s3 | download | 10MB | 2.49 s | 12.56 s | 44.30 s | 118 ms | 4.2 | 60 | 0.0 |
| neon | download | 10MB | 3.20 s | 6.89 s | 16.84 s | 128 ms | 3.3 | 60 | 0.0 |
| aws-s3 | download | 100KB | 126 ms | 555 ms | 911 ms | 120 ms | 0.8 | 180 | 0.0 |
| neon | download | 100KB | 205 ms | 533 ms | 793 ms | 122 ms | 0.5 | 180 | 0.0 |
| railway | download | 100KB | 214 ms | 393 ms | 467 ms | 202 ms | 0.5 | 180 | 0.0 |
| r2 | download | 100KB | 279 ms | 485 ms | 582 ms | 273 ms | 0.4 | 180 | 0.0 |
| b2 | download | 100KB | 295 ms | 344 ms | 400 ms | 127 ms | 0.3 | 177 | 0.0 |
| b2 | download | 100MB | 4.74 s | 6.33 s | 7.26 s | 155 ms | 22.1 | 24 | 0.0 |
| railway | download | 100MB | 5.39 s | 10.40 s | 11.72 s | 243 ms | 19.5 | 24 | 0.0 |
| r2 | download | 100MB | 5.59 s | 9.49 s | 10.20 s | 388 ms | 18.8 | 23 | 0.0 |
| aws-s3 | download | 100MB | 22.93 s | 85.15 s | 92.47 s | 136 ms | 4.6 | 24 | 0.0 |
| neon | download | 100MB | 25.74 s | 59.72 s | 68.98 s | 123 ms | 4.1 | 24 | 0.0 |
| r2 | first-request | 1KB | 166 ms | 249 ms | 283 ms | – | – | 60 | 0.0 |
| railway | first-request | 1KB | 219 ms | 293 ms | 409 ms | – | – | 60 | 0.0 |
| b2 | first-request | 1KB | 284 ms | 315 ms | 353 ms | – | – | 60 | 0.0 |
| aws-s3 | first-request | 1KB | 309 ms | 326 ms | 330 ms | – | – | 60 | 0.0 |
| neon | first-request | 1KB | 347 ms | 386 ms | 450 ms | – | – | 60 | 0.0 |
| b2 | head | 1KB | 95 ms | 124 ms | 187 ms | – | – | 155 | 0.0 |
| neon | head | 1KB | 95 ms | 128 ms | 239 ms | – | – | 157 | 0.0 |
| railway | head | 1KB | 103 ms | 127 ms | 212 ms | – | – | 157 | 0.0 |
| aws-s3 | head | 1KB | 109 ms | 125 ms | 137 ms | – | – | 157 | 0.0 |
| r2 | head | 1KB | 140 ms | 273 ms | 373 ms | – | – | 156 | 0.0 |
| b2 | head | 1MB | 93 ms | 110 ms | 167 ms | – | – | 89 | 0.0 |
| neon | head | 1MB | 96 ms | 132 ms | 177 ms | – | – | 90 | 0.0 |
| railway | head | 1MB | 103 ms | 106 ms | 139 ms | – | – | 90 | 0.0 |
| aws-s3 | head | 1MB | 104 ms | 116 ms | 297 ms | – | – | 89 | 0.0 |
| r2 | head | 1MB | 135 ms | 243 ms | 323 ms | – | – | 90 | 0.0 |
| neon | head | 10MB | 98 ms | 379 ms | 384 ms | – | – | 60 | 0.0 |
| aws-s3 | head | 10MB | 109 ms | 331 ms | 381 ms | – | – | 60 | 0.0 |
| railway | head | 10MB | 116 ms | 253 ms | 460 ms | – | – | 60 | 0.0 |
| r2 | head | 10MB | 145 ms | 239 ms | 319 ms | – | – | 60 | 0.0 |
| b2 | head | 10MB | 283 ms | 334 ms | 358 ms | – | – | 60 | 0.0 |
| b2 | head | 100KB | 93 ms | 112 ms | 140 ms | – | – | 177 | 0.0 |
| neon | head | 100KB | 95 ms | 134 ms | 209 ms | – | – | 180 | 0.0 |
| railway | head | 100KB | 103 ms | 114 ms | 193 ms | – | – | 180 | 0.0 |
| aws-s3 | head | 100KB | 107 ms | 118 ms | 240 ms | – | – | 180 | 0.0 |
| r2 | head | 100KB | 133 ms | 205 ms | 273 ms | – | – | 180 | 0.0 |
| neon | head | 100MB | 96 ms | 124 ms | 148 ms | – | – | 24 | 0.0 |
| b2 | head | 100MB | 98 ms | 161 ms | 174 ms | – | – | 24 | 0.0 |
| railway | head | 100MB | 103 ms | 122 ms | 219 ms | – | – | 24 | 0.0 |
| aws-s3 | head | 100MB | 105 ms | 118 ms | 160 ms | – | – | 24 | 0.0 |
| r2 | head | 100MB | 158 ms | 247 ms | 250 ms | – | – | 23 | 0.0 |
| aws-s3 | list-all | 1000 objects | 165 ms | – | – | – | – | 18 | 0.0 |
| railway | list-all | 1000 objects | 180 ms | – | – | – | – | 18 | 0.0 |
| neon | list-all | 1000 objects | 203 ms | – | – | – | – | 18 | 0.0 |
| b2 | list-all | 1000 objects | 298 ms | – | – | – | – | 18 | 0.0 |
| r2 | list-all | 1000 objects | 796 ms | – | – | – | – | 18 | 0.0 |
| railway | range-get | 256KB of 10MB | 255 ms | 545 ms | 558 ms | 218 ms | – | 60 | 0.0 |
| neon | range-get | 256KB of 10MB | 377 ms | 534 ms | 621 ms | 121 ms | – | 60 | 0.0 |
| aws-s3 | range-get | 256KB of 10MB | 386 ms | 720 ms | 808 ms | 120 ms | – | 60 | 0.0 |
| r2 | range-get | 256KB of 10MB | 433 ms | 705 ms | 771 ms | 369 ms | – | 60 | 0.0 |
| b2 | range-get | 256KB of 10MB | 447 ms | 695 ms | 1.28 s | 148 ms | – | 60 | 0.0 |
| r2 | signed-upload | 1MB | 568 ms | 1.19 s | 1.29 s | – | – | 60 | 0.0 |
| railway | signed-upload | 1MB | 638 ms | 868 ms | 1.33 s | – | – | 60 | 0.0 |
| b2 | signed-upload | 1MB | 842 ms | 1.09 s | 1.21 s | – | – | 60 | 0.0 |
| neon | signed-upload | 1MB | 921 ms | 1.16 s | 1.34 s | – | – | 60 | 0.0 |
| aws-s3 | signed-upload | 1MB | 960 ms | 1.42 s | 3.30 s | – | – | 60 | 0.0 |
| railway | upload | 1KB | 114 ms | 141 ms | 279 ms | – | 0.0 | 157 | 0.0 |
| aws-s3 | upload | 1KB | 123 ms | 146 ms | 159 ms | – | 0.0 | 157 | 0.0 |
| neon | upload | 1KB | 158 ms | 234 ms | 253 ms | – | 0.0 | 157 | 0.0 |
| b2 | upload | 1KB | 323 ms | 885 ms | 1.18 s | – | 0.0 | 156 | 1.3 |
| r2 | upload | 1KB | 417 ms | 662 ms | 850 ms | – | 0.0 | 156 | 0.0 |
| railway | upload | 1MB | 555 ms | 1.44 s | 1.84 s | – | 1.9 | 90 | 0.0 |
| r2 | upload | 1MB | 715 ms | 1.55 s | 1.65 s | – | 1.5 | 90 | 0.0 |
| b2 | upload | 1MB | 895 ms | 1.94 s | 4.27 s | – | 1.2 | 90 | 1.1 |
| aws-s3 | upload | 1MB | 1.06 s | 1.82 s | 1.97 s | – | 1.0 | 90 | 1.1 |
| neon | upload | 1MB | 1.10 s | 6.39 s | 9.85 s | – | 1.0 | 90 | 0.0 |
| railway | upload | 10MB | 1.11 s | 12.50 s | 25.67 s | – | 9.4 | 60 | 0.0 |
| neon | upload | 10MB | 1.34 s | 13.79 s | 15.77 s | – | 7.8 | 60 | 0.0 |
| r2 | upload | 10MB | 1.35 s | 12.50 s | 24.00 s | – | 7.8 | 60 | 0.0 |
| aws-s3 | upload | 10MB | 1.73 s | 15.14 s | 58.05 s | – | 6.1 | 60 | 0.0 |
| b2 | upload | 10MB | 1.80 s | 14.92 s | 37.76 s | – | 5.8 | 60 | 0.0 |
| railway | upload | 100KB | 315 ms | 606 ms | 730 ms | – | 0.3 | 180 | 0.0 |
| neon | upload | 100KB | 399 ms | 1.02 s | 1.80 s | – | 0.3 | 180 | 0.0 |
| aws-s3 | upload | 100KB | 415 ms | 847 ms | 1.51 s | – | 0.2 | 180 | 0.0 |
| r2 | upload | 100KB | 441 ms | 744 ms | 921 ms | – | 0.2 | 180 | 0.0 |
| b2 | upload | 100KB | 658 ms | 1.23 s | 1.56 s | – | 0.2 | 180 | 1.7 |
| r2 | upload | 100MB | 5.02 s | 40.76 s | 64.58 s | – | 20.9 | 24 | 4.2 |
| aws-s3 | upload | 100MB | 8.18 s | 51.14 s | 127.61 s | – | 12.8 | 24 | 0.0 |
| neon | upload | 100MB | 8.32 s | 58.02 s | 64.23 s | – | 12.6 | 24 | 0.0 |
| railway | upload | 100MB | 8.61 s | 40.00 s | 56.21 s | – | 12.2 | 24 | 0.0 |
| b2 | upload | 100MB | 9.58 s | 56.88 s | 62.96 s | – | 10.9 | 24 | 0.0 |
| r2 | url-get | 1KB | 198 ms | 390 ms | 425 ms | 198 ms | 0.0 | 156 | 0.0 |
| railway | url-get | 1KB | 198 ms | 316 ms | 879 ms | 198 ms | 0.0 | 157 | 0.0 |
| b2 | url-get | 1KB | 283 ms | 389 ms | 702 ms | 283 ms | 0.0 | 155 | 0.0 |
| aws-s3 | url-get | 1KB | 310 ms | 438 ms | 785 ms | 309 ms | 0.0 | 157 | 0.0 |
| neon | url-get | 1KB | 373 ms | 646 ms | 776 ms | 372 ms | 0.0 | 157 | 0.0 |
| r2 | url-get | 1MB | 334 ms | 615 ms | 863 ms | 254 ms | 3.1 | 90 | 0.0 |
| railway | url-get | 1MB | 436 ms | 797 ms | 884 ms | 346 ms | 2.4 | 90 | 0.0 |
| b2 | url-get | 1MB | 819 ms | 925 ms | 1.28 s | 321 ms | 1.3 | 89 | 0.0 |
| aws-s3 | url-get | 1MB | 879 ms | 1.66 s | 4.69 s | 318 ms | 1.2 | 89 | 0.0 |
| neon | url-get | 1MB | 954 ms | 1.91 s | 4.23 s | 389 ms | 1.1 | 90 | 0.0 |
| r2 | url-get | 10MB | 663 ms | 1.34 s | 1.52 s | 260 ms | 15.8 | 60 | 0.0 |
| railway | url-get | 10MB | 975 ms | 2.35 s | 5.51 s | 348 ms | 10.8 | 60 | 0.0 |
| b2 | url-get | 10MB | 1.28 s | 1.55 s | 1.96 s | 347 ms | 8.2 | 60 | 0.0 |
| aws-s3 | url-get | 10MB | 2.81 s | 11.59 s | 33.02 s | 315 ms | 3.7 | 60 | 0.0 |
| neon | url-get | 10MB | 3.54 s | 7.32 s | 18.81 s | 386 ms | 3.0 | 60 | 0.0 |
| r2 | url-get | 100KB | 210 ms | 367 ms | 529 ms | 202 ms | 0.5 | 180 | 0.0 |
| railway | url-get | 100KB | 368 ms | 552 ms | 668 ms | 340 ms | 0.3 | 180 | 0.0 |
| aws-s3 | url-get | 100KB | 503 ms | 612 ms | 836 ms | 317 ms | 0.2 | 180 | 0.0 |
| b2 | url-get | 100KB | 521 ms | 601 ms | 698 ms | 314 ms | 0.2 | 177 | 0.0 |
| neon | url-get | 100KB | 620 ms | 764 ms | 918 ms | 376 ms | 0.2 | 180 | 0.0 |
| r2 | url-get | 100MB | 3.87 s | 7.07 s | 7.21 s | 263 ms | 27.1 | 23 | 0.0 |
| railway | url-get | 100MB | 4.41 s | 9.36 s | 18.14 s | 333 ms | 23.8 | 24 | 0.0 |
| b2 | url-get | 100MB | 5.56 s | 6.84 s | 7.94 s | 332 ms | 18.9 | 24 | 0.0 |
| neon | url-get | 100MB | 26.89 s | 37.82 s | 47.60 s | 474 ms | 3.9 | 24 | 0.0 |
| aws-s3 | url-get | 100MB | 27.68 s | 62.48 s | 69.10 s | 375 ms | 3.8 | 24 | 0.0 |

## Errors

- 47× b2: FilesError: socket hang up
- 2× b2: FilesError: write EPIPE
- 1× neon: FilesError: Neon error
- 9× b2: FilesError: internal incident
- 1× neon: seed failed: setup: FilesError: Neon error
- 1× neon: TypeError: fetch failed
- 2× aws-s3: TypeError: fetch failed
- 2× r2: FilesError: read ECONNRESET
- 1× r2: TypeError: fetch failed
- 1× neon: FilesError: socket hang up
- 1× aws-s3: FilesError: read ETIMEDOUT
- 2× neon: FilesError: Please reduce your request rate.
- 1× b2: seed failed: setup: FilesError: Backblaze B2 error
- 1× aws-s3: seed failed: setup: FilesError: getaddrinfo EAI_AGAIN storage-bench-638432620713-us-east-2.s3.us-east-2.amazonaws.com
- 1× aws-s3: FilesError: socket hang up
- 2× neon: FilesError: We encountered an internal error. Please try again.
