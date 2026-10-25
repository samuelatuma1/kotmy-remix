# Wallet balance breakdown and external withdrawal limit

Each wallet's `account_balance` is composed of two balance buckets:

- `external_withdrawable_balance` can be withdrawn to an external account and can also be used for platform purchases.
- `platform_only_balance` can only be used for platform purchases.

The user and partner wallet pages display `account_balance` as the total, with both bucket amounts shown separately. External withdrawal forms display the external-withdrawable amount and do not allow a requested withdrawal principal above it. The server action checks the latest wallet data both before retrieving withdrawal charges and before submitting a withdrawal.

Other purchase flows remain unchanged because the backend handles which bucket funds an in-app purchase. Withdrawal fees continue to follow the existing backend behavior; the external-withdrawable balance limit applies to the requested principal.
