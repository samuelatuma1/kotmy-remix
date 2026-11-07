# Contestant and Contest Navigation Spec

## Summary

Add direct navigation between a contestant profile’s contest list, the public contestant page, and its associated contest page. This lets contestants share their public page and lets visitors move from a contestant page to the full contest.

## User Stories

- As a contestant viewing contests for my profile, I can open the public contestant page for a contest.
- As a visitor viewing a public contestant page, I can open the associated contest page to see contest information and other contestants.

## Behavior

- Each contest card on `/user/contestantprofilecontests/:profileId` links to `/contests/:tournamentId/:contestId`, using that contest’s `tournament_unique_id` and `contest_unique_id`.
- The public contestant page at `/contest/contestant/:contestantId` includes a clearly labeled link to the associated contest page, using the contest response’s `tournament_unique_id` and `contest_unique_id`.
- Place the “View contest” action beside the existing “Share Link” and “Share via WhatsApp” actions.
- Preserve the existing contestant page query parameters (`stageId` and `contestantCode`) used to load contestant details and existing share actions.
- Use Remix `Link` navigation and maintain usable layout on mobile and desktop.

## Data and Interfaces

- The profile contest list already uses `IContestWFinalResult`, whose contest DTO has both public URL identifiers.
- The public contestant page loader fetches `IContestWStageWContestant`, extending `IContest` with `tournament_unique_id` and `contest_unique_id` already typed.
- No frontend DTO change is required. Confirm the public contestant detail API returns both identifiers; if it does not, add them to that API response and its corresponding server DTO.
- No new route, API endpoint, or database migration is expected.

## Acceptance Criteria

- Every contest card on the profile contests page has an accessible, clickable action opening its matching public contest page.
- The public contestant page has an accessible, clickable action opening its associated public contest page.
- Both links use the contest’s public unique IDs and work when navigated to directly or opened in a new tab.
- Existing contestant sharing, voting, and contest-card performance information continue to work.

