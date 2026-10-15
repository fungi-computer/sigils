# Sigils (`@fungi.computer/sigils`)

Sigils provides decorative SVG marks for Fungi interfaces. Its gallery shows the
marks alongside reference artwork and visual studies, so consumers can check
which drawings are approved, live, or still concepts.

## Install or set up

Install `@fungi.computer/sigils` from its package tarball. It requires React
18.3 or React 19.2 as a peer dependency. From the repository root, build it
with:

```sh
pnpm --filter @fungi.computer/sigils build
```

## Quick start

This illustrative example renders one decorative mark. Give its enclosing
control its own accessible name:

```tsx
import { Sigil } from "@fungi.computer/sigils";

<button aria-label="List files">
  <Sigil name="list" size={24} />
</button>;
```

`Sigil` renders an aria-hidden SVG in a 64 by 64 view box. The caller controls
its size and provides the accessible text on the surrounding control.

## Core concepts

The public component accepts a `SigilName` and an optional pixel `size`.
`isSigilName` checks whether a string is one of the package's available names;
it does not check whether using that mark is approved for a particular action or
permission.

The workbench separates the library, families, use cases, source references, and
curve review. Its Permission Use page is a visual study, not the shipped
permission screen. An SVG's presence in the package does not grant a capability
or imply that an interface uses it.

## API reference

See the public [component and type exports](src/index.tsx). `Sigil` and
`isSigilName` are the runtime exports; `SigilName` is the type export.

## Examples and checks

Start the local workbench from the repository root:

```sh
pnpm --filter @fungi.computer/sigils workbench
```

Open [http://127.0.0.1:61031/](http://127.0.0.1:61031/) to compare the grouped
marks, approved examples, concepts, and reference images. Check source-image
credits and status labels in the workbench before reusing artwork.

The package declares build, lint, and typecheck commands:

```sh
pnpm --filter @fungi.computer/sigils build
pnpm --filter @fungi.computer/sigils lint
pnpm --filter @fungi.computer/sigils typecheck
```

## Limits and errors

Sigils supplies artwork only. The parent control owns its accessible name,
interaction, and permission meaning. The workbench includes candidate and
reference art that is not approved for production use. Check each mark's status
in the gallery instead of treating every available SVG as approved.

## Contribute and license

The Reference pages pair source sheets with each mark and identify whether its
vector is live, approved, or still a concept. Keep those source images and
labels with the workbench. Sigils is a package and declares no package-level
license.

## Theme colours

Sigils use Stipe's illustration roles through inline SVG styles, with literal
fallbacks when Stipe is absent. Themes may retint `--stipe-art-*` roles. Page
figures, emphasis rays, generation art and completion swooshes use
`--stipe-sketch-ink` on light themes and retain art cream on dark themes. Figure
eyes use `--color-base-100`, so they read as cut-outs. List and Prints paper and
cream details on coloured shapes retain `--stipe-art-cream` in both appearances.
There are no separate `--sigil-figure*` hooks.

The workbench loads Stipe through Tailwind. Its theme toggle switches latte and
mocha; the gallery follows it by default, with optional explicit canvas themes.
The Themes story compares latte, field-guide, consulting, mocha and
field-guide-night at 64, 28, 20 and 16 pixels, including the Tourtois disabled
filter. Palette defaults and theme ownership live in Stipe, not in this package.

## Packed consumer readiness

Run `pnpm run build`, `pnpm run pack` and `pnpm run stranger` in this package.
The maintained stranger proof installs only package tarballs into a fresh npm
consumer, checks the exact shipped files, runs the public runtime fixture and
compiles every JavaScript entrypoint with strict NodeNext and no library-check
skip. This qualification does not publish npm releases or push a repository
split.

See [LICENSE](LICENSE) for the license and the package manifest for its public
repository destination.
