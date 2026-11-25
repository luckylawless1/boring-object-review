# boring-object-review

[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/luckylawless1/boring-object-review/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/luckylawless1/boring-object-review/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

A make.fun bounty entry for **"The Most Boring Object, Reviewed in One Line"** — a program that writes one funny, true, single-line review of the most boring everyday object it could name.

## The entry

> The doormat: gets walked on, wiped on, rained on — and still says WELCOME.

A doormat is about as boring and everyday as an object gets, and the joke comes entirely from how it really behaves: it lives outside the front door, so it genuinely gets walked on, wiped on (everyone scrapes their shoes on it) and rained on — and most doormats literally have the word WELCOME printed on them. After a lifetime of abuse, the thing still greets you.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly).

```sh
node main.ts
```

This writes the review to `/output/entry.txt` — one line, 74 characters, well inside the 1–200 character gate. The program validates the text before writing (single line, 1–200 chars, not only whitespace) and reads the file back afterwards, failing loudly if what landed on disk is not byte-for-byte the validated entry. The output is deterministic: the same line on every run.
