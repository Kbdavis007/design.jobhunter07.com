# VS Code Custom Agents — JobHunter07 Design System Repo

This repo is the **source of truth** for JobHunter07 UI. It publishes **NPM packages** that consumer sites import
to get consistent themes, tokens, and components.

Typical consumers:
- `jobhunter07.com` (marketing/landing pages)
- `app.jobhunter07.com` (signed-in web app)
- future sites/apps that should share the same design language

These **custom agents** help Copilot work in a predictable pipeline:

**Designer → Implementer → Reviewer → (optional) Release Manager**
and a core repo steward:
**Design System Maintainer**

---

## Folder structure

Place agents here:

```
.github/agents/
  designer.agent.md
  implementer.agent.md
  reviewer.agent.md
  design-system-maintainer.agent.md
  release-manager.agent.md
```

---

## The agents

### 1) Designer
**Purpose:** Defines UI intent and a clear spec (states, variants, layout, a11y).
**Use when:** You need a new component/screen, visual polish, or design decisions.

**Do:**
- Provide UI spec + token guidance + Storybook plan.
- Derive values from existing tokens/patterns.

**Don’t:**
- Dump implementation code unless asked.
- Invent arbitrary colors/spacing.

---

### 2) Implementer
**Purpose:** Implements the Designer spec in React and adds Storybook stories.
**Use when:** You have a spec and need production code + stories.

**Do:**
- Reuse existing components/tokens.
- Add stories for core variants/states.
- Validate lint/build where possible.

**Don’t:**
- Change design decisions silently.
- Introduce new libraries without repo direction.

---

### 3) Reviewer
**Purpose:** QA for accessibility, design-system consistency, and UX quality.
**Use when:** Implementation is done and you want a final gate.

**Do:**
- Check tokens, API consistency, keyboard navigation, focus, responsive layouts.
- Provide small, actionable fixes.

**Don’t:**
- Rewrite large sections of code.
- Redesign without a request—stick to spec and quality fixes.

---

### 4) Design System Maintainer (core for this repo)
**Purpose:** Maintains the design system itself (tokens/components/docs) as the canonical source.
**Use when:** Adding tokens, evolving components, updating theming strategy, or maintaining Storybook docs.

**Do:**
- Think in layers: tokens → primitives → components → docs → release notes.
- Keep public APIs stable; prefer additive changes.
- Ensure tokens and component APIs are consistent and documented.

**Don’t:**
- Push breaking changes without deprecation/migration guidance.
- Duplicate logic that belongs in the design system into consumer apps.

---

### 5) Release Manager (optional but recommended)
**Purpose:** Plans/executes NPM releases for multi-consumer safety, semver discipline, and migration docs.
**Use when:** Preparing a release, deciding version bumps, writing changelogs/migration guides.

**Do:**
- Enforce semver (patch/minor/major).
- Produce migration guides for majors (and meaningful minors).
- Provide verification steps for `jobhunter07.com` and `app.jobhunter07.com`.

**Don’t:**
- Hide breaking changes in minor/patch releases.
- Skip migration notes when behavior or defaults change.

---

## Recommended workflow (best practice)

### A) New component or UI change
1. `@Designer` — write the UI spec + token guidance + Storybook plan
2. `@Implementer` — implement + add stories
3. `@Reviewer` — verify a11y + consistency + UX
4. (If publishing) `@Release Manager` — draft release notes + migration + version bump recommendation

### B) Token or theme changes
1. `@Design System Maintainer` — propose token updates + mapping + docs updates
2. `@Reviewer` — sanity check for drift and regressions
3. `@Release Manager` — handle versioning + migration + rollout advice

---

## Prompts you can copy/paste

### Designer
```
@Designer Design a reusable <ComponentName> for the JobHunter07 design system.
Include states, variants, token usage, accessibility notes, responsive behavior, and a Storybook plan.
```

### Implementer
```
@Implementer Implement the Designer spec for <ComponentName> using existing tokens/components.
Add Storybook stories for variants and states.
```

### Reviewer
```
@Reviewer Review <ComponentName> for accessibility, design-system consistency, responsive behavior, and Storybook completeness.
Return pass/fail and actionable fixes.
```

### Design System Maintainer
```
@Design System Maintainer Add/update tokens/components for <ChangeRequest>.
Include impact analysis, docs updates, and release recommendation.
```

### Release Manager
```
@Release Manager Prepare a release for the design system based on recent changes.
Recommend semver bumps per package, draft changelog entries, and produce migration steps if needed.
Include verification steps for jobhunter07.com and app.jobhunter07.com.
```

---

## Repo-level Do’s and Don’ts

### Do
- Keep the design system the **single source of truth**
- Document components in Storybook (states + variants)
- Prefer semantic tokens (e.g., `color.text.primary`) over raw palette values
- Ship additive changes when possible

### Don’t
- Let consumer apps create their own token forks
- Merge breaking API changes without a migration guide
- Change defaults silently—call out behavioral or visual shifts

---

## Notes
- Tool availability differs by VS Code/Copilot environment. If a tool name is unavailable, it is ignored.
- If your repo uses Changesets, semantic-release, or a custom publish pipeline, keep those as the source of truth—these agents adapt to it.
