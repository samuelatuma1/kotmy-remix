export class ApiEndPoints {
    // GENERAL
    static get getTournaments(): string {
        return "/v2/api/tournament"
    }
    static getTournamentById(uniqueId: string): string {
        return `/v2/api/tournament/${uniqueId}`
    }
    static getContestsInTournament(tournamentUniqueId: string) {
        return `/v2/api/contest/tournament/${tournamentUniqueId}`
    }

    static finalResultForContest(contestUniqueId: string) {
        return `/v2/api/contest/final_result/${contestUniqueId}`
    }
    static getTournamentsPaged(page: number) {
        return `/v2/api/tournament_paged?page=${page}`
    }
    static registerContestant(contestId: string) {
        return `/v2/api/contestant/register_for_contest/${contestId}`
    }
    static getContestantsInStage(stageId: string) {
        return `/v2/api/contestant/${stageId}`
    }
    static get getTallyLink(): string {
        return "/v2/api/payment"
    }
    static get callTallyWebhook(): string {
        return "/v2/api/flutterwave-payment-status"
    }
    static voteContestant(stageId: string) {
        return `/v2/api/contestant/sm_vote/${stageId}`
    }
    static getContestantViaHash(contestantLink: string) {
        return `/v2/api/contestant/link_details/${contestantLink}`
    }
    static contestantUploadStageMedia() {
        return `/v2/api/contestant/upload_media`
    }
    
    // ADMIN
    static get createAdminAccount(): string {
        return "/users/admin_create_user"
    }
    static get getAdminAccounts(): string {
        return "/users/get_admin_accounts"
    }
    static get getAllRoles(): string {
        return "/v2/api/users/all_roles"
    }
    static get createTournament() {
        return "v2/api/admin/tournament"
    }
    static updateTournament(id: string) {
        return `v2/api/admin/tournament/${id}`
    }
    static deleteTournament(id: string) {
        return `v2/api/admin/tournament/${id}`
    }
    static get createContest() {
        return "v2/api/admin/contest"
    }
    static get getContests() {
        return "v2/api/admin/contest"
    }
    static adminGetContestsInTournament(tournamentUniqueId: string) {
        return `v2/api/admin/contest/tournament/${tournamentUniqueId}`
    }
    static getContestById(id: string) {
        return `/v2/api/contest/${id}`
        // return `/v2/api/admin/contest/${id}`
    }
    static updateContest(id: string) {
        return `/v2/api/admin/contest/${id}`
    }

    static toggleEnableStageBonus() {
        return `/v2/api/contest/toggle_stage_bonus`
    }
    static deleteContest(id: string) {
        return `/v2/api/admin/contest/${id}`
    }
    static updateStage(id: string) {
        return `/v2/api/admin/stage/${id}`
    }
    static deleteStage(id: string) {
        return `/v2/api/admin/stage/${id}`
    }
    static get migrateStage() {
        return `/v2/api/admin/contest/migration`
    }
    static toggleRegistration({ contestId }: { contestId: string }) {
        return `/v2/api/admin/contest/can_register/${contestId}`
    }
    static editContestant(contestantId: string) {
        return `/v2/api/admin/contestant/with_image/${contestantId}`
    }

    static editUserContestant(contestantId: string) {
        return `/v2/api/contestant/user/${contestantId}`
    }
    static get toggleEvictContestants() {
        return `/v2/api/admin/contestant/toggle_evict_multiple`
    }

    static get getWinners() {
        return `/v2/api/contest/winners`
    }

    static getWinner(winnerId: string) {
        return `/v2/api/contest/winners/${winnerId}`
    }

    static get login() {
        return "/v2/api/users/signin"
    }

    static get forgotPassword() {
        return '/v2/api/users/forgot_password'
    }

    static get resetPassword() {
        return '/v2/api/users/reset_password'
    }

    static get userPendingUploads(){
        return `v2/api/contestant/pending_uploads`
    }

    static userContestantDeets(contestantId: string){
        return `/v2/api/contestant/stage/details/${contestantId}`;
    }

    static getContestantDetailsForContest(contestant_code: string, stage_id: string){
        return `v2/api/contestant/contest/details/?contestant_code=${contestant_code}&stage_id=${stage_id}`
    }

    static get getGivaahCredits() {
        return "/v2/api/contestant/get_credits";
    }

    static get signup(){
        return `/v2/api/users/signup`
    }

    static get complete_registration(){
        return `/v2/api/users/complete_registration`
    }

    static get resend_complete_registration_token(){
        return `/v2/api/users/resend_complete_registration_token_mail`
    }

    static get me() {
        return "/v2/api/users/me";
    }
    static get updateProfile() {
        return "/v2/api/users/updateprofile/";
    }

    static get userWallets(){
        return `/v2/api/wallet/user_wallets`
    }

    static get organizationWallets(){
        return  `/v2/api/wallet/organizations_wallets`
    }

    static get userLedgers(){
        return `/v2/api/wallet/ledgers`
    }

    static get organizationLedgers(){
        return `/v2/api/wallet/organization_ledgers`
    }
    static get walletMetrics(){
        return `/v2/api/wallet/wallet_metrics`
    }

    static get adminPayments(){
        return `/v2/api/admin/payment/payments`
    }

    static get createBankPayment (){
        return `/v2/api/admin/create_payment`
    }

    static get createWithdrawalPin(){
        return `/v2/api/wallet/create_withdrawal_pin`
    }

    static getPartnerProductById(productId: string) {
        return `/v2/api/partner/products/${productId}`;
    }

    static updatePartnerProduct(productId: string) {
        return `/v2/api/partner/products/${productId}`;
    }

    static get requestWithdrawalTokenForPinCreation(){
        return `/v2/api/wallet/request_create_withdrawal_token`
    }

    static get setWithdrawalPin(){
        return `/v2/api/wallet/create_withdrawal_pin`
    }

    static getWalletWithdrawalAccounts(walletId: string){
        return `/v2/api/wallet/get_wallet_withdrawal_accounts/${walletId}`
    }

    static getBanksForCurrency(currency: string){
        return `/v2/api/wallet/get_banks_for_currency/${currency}`
    }

    static get resolveAccountDetails(){
        return `/v2/api/wallet/resolve_account_details`
    }

    static get addACCountDetails(){
        return `/v2/api/wallet/save_personal_withdrawal_account`
    }

    static get getWithdrawalCharges(){
        return `/v2/api/wallet/get_withdrawal_charge_for_account`
    }

    static get requestWithdrawal() {
        return '/v2/api/wallet/request_withdrawal';
    }

    static get createAdminUser(){
        return `/v2/api/users/admin_create_user`
    }

    static getUserById(id: string){
        return `/v2/api/admin/user/${id}`
    }

    static updateUser(id: string){
        return `/v2/api/users/update_user/${id}`
    }

    static get pagedUsers(){
        return `/v2/api/users/get_paged_staff_accounts`
    }

    static get pagedReferralBoard(){
        return `/v2/api/wallet/affiliate_leaderboard`
    }

    static get pagedAffiliateReferralBoard(){
        return `/v2/api/payment/affiliate/leaderboard`
    }

    static get adminAffiliateBoard(){
        return `/v2/api/admin/affiliate_leaderboard`
    }
    static get requestPartnership() {
        return "/v2/api/partner";
    }

    static get partnerSearch(){
        return `/v2/api/partner`
    }

    static get createPartnerProduct(){
        return `/v2/api/partner/products`
    }

    static get getMarketplaceProducts(){
        return `/v2/api/market_place/products`
    }

    static get getPartnerCartItems(){
        return `/v2/api/partner/cart/items`
    }

    static get getPartnerCartDelivery(){
        return `/v2/api/partner/cart-delivery`
    }

    static get createPartnerDeliveryDetails(){
        return `/v2/api/partner/delivery-details`
    }

    static get placePartnerOrders(){
        return `/v2/api/partner/orders`
    }

    static get getCustomerOrders(){
        return `/v2/api/partner/orders`
    }

    static get getPartnerOrders(){
        return `/v2/api/partner/business/orders`
    }

    static get adminPartnerOrders(){
        return `/v2/api/admin/orders`
    }

    static get adminResolveOrderDispute() {
        return `/v2/api/admin/orders/resolve-dispute`
    }

    static getPartnerOrderById(orderId: string) {
        return `/v2/api/partner/business/order/${orderId}`;
    }

    static getCustomerOrderById(orderId: string) {
        return `/v2/api/partner/customer-order/${orderId}`;
    }

    static get fulfillPartnerOrder() {
        return `/v2/api/partner/orders/fulfill`;
    }

    static get cancelPartnerOrder() {
        return `/v2/api/partner/orders/cancel`;
    }

    static get confirmPartnerOrderFulfillment() {
        return `/v2/api/partner/orders/confirm-fulfillment`;
    }

    static get disputePartnerOrderFulfillment() {
        return `/v2/api/partner/orders/dispute-fulfillment`;
    }

    static get getPartnerProducts(){
        return `/v2/api/partner/products`
    }

    static get getPartnerLocations(){
        return `/v2/api/partner/location`
    }

    static getPartnerBusinessDetails(businessId: string){
        return `/v2/api/partner/business_details/${businessId}`
    }

    static get updatePartnerBusinessStatus(){
        return `/v2/api/partner/status`
    }

    static get addBusinessOwner(){
        return `/v2/api/partner/add_business_owner`
    }

    static get searchPartnerSettlements() {
        return `/v2/api/partner/settlements`
    }
    static get adminSearchPartnerSettlements() {
        return `/v2/api/admin/partner/settlements`
    }
    
    static get settlementsProviderPayment() {
        return `/v2/api/partner/settlements/provider-payment`
    }

    static get settlementsWalletPayment() {
        return `/v2/api/partner/settlements/wallet-payment`
    }

    static get voteContestantWGivaahCredits() {
        return `/v2/api/contestant/givaah_vote`
    }

    static get getGeneralOrdersLeaderboard(){
        return `/v2/api/partner/orders/leaderboard/general`
    }

    static get getPartnerOrdersLeaderboard(){
        return `/v2/api/partner/orders/leaderboard`
    }

    static get voteFromWallet() {
        return `/v2/api/payment/vote-from-wallet`
    }

    static get getContestantProfiles() {
        return `/v2/api/contestant/get_contestant_profiles`
    }

    static getContestsForContestantProfile(profileId: string) {
        return `/v2/api/contestant/biodata_details/${profileId}`
    }
}
