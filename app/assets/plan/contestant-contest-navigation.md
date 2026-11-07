# Contestant and Contest Navigation Plan

## Summary

Add two public contest navigation links using the existing contest identifiers: one on each contest card in the contestant profile’s contests list, and one beside the share actions on the public contestant page.

## Implementation Changes

- In `user.contestantprofilecontests.$profileId.tsx`, add an accessible “View contest” Remix `Link` to each card using `/contests/${contest.tournament_unique_id}/${contest.contest_unique_id}`. Preserve the existing performance details and responsive card layout.
- In `_public.contest.contestant.$contestantId._index.tsx`, read the contest identifiers from the contestant detail loader data and render a “View contest” link beside “Share Link” and “Share via WhatsApp”. Use the existing `/contests/:tournamentId/:contestId` route format.
- Keep the existing DTOs; `IContestWFinalResult` and `IContestWStageWContestant` already declare the required identifiers. Confirm the runtime contestant-detail API response includes both before relying on them. If either is absent at runtime, treat that as an API contract gap and update the API response and DTO before rendering a malformed URL.
- Do not change contestant query parameters, sharing behavior, vote actions, or contest loading.

## Test Plan

- Verify every profile contest card links to its matching contest using its tournament and contest unique IDs.
- Verify the public contestant page’s “View contest” link appears beside the share actions and opens its associated contest.
- Verify navigation works at mobile and desktop widths, including keyboard focus and activation.
- Verify share links and existing contestant and contest performance information remain functional.
- Verify missing contest identifiers do not produce a malformed destination.

## Assumptions

- “View contest” is the action label on both pages.
- Contest navigation uses public unique IDs, not internal database IDs.
- The public contestant API returns `tournament_unique_id` and `contest_unique_id` as declared by `IContestWStageWContestant`; backend changes are only needed if runtime inspection disproves this.
