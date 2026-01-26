import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useMemo } from "react";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { ILedgerEntry, IWallet } from "~/services/wallet/types/wallet.interface";
import { walletRepo } from "~/services/wallet/wallet.server";

// Type for the combined data structure from loader
type WalletWithLedger = {
  wallet: IWallet;
  pagedLedgers: IPaginatedResponse<ILedgerEntry>;
};

// TODO: MOCK, please delete when integrating with real API
function mockWalletsData(){
  let wallets: WalletWithLedger[] = [];
  const mockWallets: IWallet[] = [
    {
      _id: "wallet_ngn_001",
      str_id: "697488b46c9b452c5ddde651",
      created_at: "2026-01-24T09:51:32.682471+01:00",
      updated_at: "2026-01-24T10:38:50.245569+01:00",
      is_deleted: false,
      account_number: "6652132270",
      user_id: "user_001",
      user_type: "INDIVIDUAL",
      account_balance: 7830.0,
      restricted_balance: 0.0,
      wallet_currency: "NGN",
      wallet_name: "Samuel Atuma Okpara",
      wallet_type: "withdrawable",
      is_active: true,
      daily_transaction_limit: 1000000.0,
      withdrawable_balance: 7830.0,
      metrics: {
        net_change_this_month: 1250.0,
        money_out: 500.0,
        money_in: 1750.0
      }
    },
    {
      _id: "wallet_usd_002",
      str_id: "usd_wallet_ref_123",
      created_at: "2026-01-20T08:00:00.000000+01:00",
      updated_at: "2026-01-24T12:00:00.000000+01:00",
      is_deleted: false,
      account_number: "9900112233",
      user_id: "user_001",
      user_type: "INDIVIDUAL",
      account_balance: 10500.75,
      restricted_balance: 0.0,
      wallet_currency: "USD",
      wallet_name: "Samuel Atuma Okpara (Business)",
      wallet_type: "withdrawable",
      is_active: true,
      daily_transaction_limit: 50000.0,
      withdrawable_balance: 10500.75,
      metrics: {
        net_change_this_month: -200.0,
        money_out: 1200.0,
        money_in: 1000.0
      }
    }
  ];

  // Mocking paginated ledger responses for each wallet
  const mockLedgers: Record<string, IPaginatedResponse<ILedgerEntry>> = {
    wallet_ngn_001: {
      current_page: 1,
      total_pages: 1,
      total_items: 2,
      items_per_page: 10,
      last_key_id: null,
      items: [
        {
          _id: "txn_001",
          str_id: "txn_001",
          created_at: "2026-01-25T10:00:00Z",
          updated_at: "2026-01-25T10:05:00Z",
          is_deleted: false,
          payment_ref: "REF-NGN-001",
          amount: 450.0,
          currency: "NGN",
          wallet_id: "wallet_ngn_001",
          wallet_name: "Samuel Atuma Okpara",
          contestant_code: "C-123",
          contest_code: "CONTEST_01",
          stage_id: "S-01",
          description: "CREDIT: Contestant earning",
          entry_type: "credit",
          balance_after: 7830.0,
          status: "completed",
          completed_at: "2026-01-25T10:05:00Z"
        },
        {
          _id: "txn_002",
          str_id: "txn_002",
          created_at: "2026-01-24T15:00:00Z",
          updated_at: "2026-01-24T15:10:00Z",
          is_deleted: false,
          payment_ref: "REF-NGN-002",
          amount: 1200.0,
          currency: "NGN",
          wallet_id: "wallet_ngn_001",
          wallet_name: "Samuel Atuma Okpara",
          contestant_code: null,
          contest_code: null,
          stage_id: null,
          description: "DEBIT: Withdrawal to Bank",
          entry_type: "debit",
          balance_after: 7380.0,
          status: "pending",
          completed_at: null
        }
      ]
    },
    wallet_usd_002: {
      current_page: 1,
      total_pages: 1,
      total_items: 1,
      items_per_page: 10,
      last_key_id: null,
      items: [
        {
          _id: "txn_usd_001",
          str_id: "txn_usd_001",
          created_at: "2026-01-25T12:00:00Z",
          updated_at: "2026-01-25T12:00:00Z",
          is_deleted: false,
          payment_ref: "REF-USD-999",
          amount: 1000.0,
          currency: "USD",
          wallet_id: "wallet_usd_002",
          wallet_name: "Samuel Atuma Okpara (Business)",
          contestant_code: null,
          contest_code: null,
          stage_id: null,
          description: "CREDIT: Global Partner Payout",
          entry_type: "credit",
          balance_after: 10500.75,
          status: "completed",
          completed_at: "2026-01-25T12:00:00Z"
        }
      ]
    }
  };

  // Combining them to match your intended loader output
  wallets = mockWallets.map(w => ({
    wallet: w,
    pagedLedgers: mockLedgers[w._id]
  }));

   return wallets;
}
export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return redirect("/login");

  const walletsResponse = await walletRepo.getUserWallets(cookieHeader);
  let wallets: WalletWithLedger[] = [];

  if (walletsResponse.data?.length) {
    for (const _wallet of walletsResponse.data) {
      const pagedLedgers = await walletRepo.getUserLedgersForWallet(cookieHeader, { 
        wallet_id: _wallet._id, 
        page_size: 10 
      });
      if (pagedLedgers.data) {
        wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers.data });
      }
    }
  }


  // wallets = mockWalletsData(); // TODO: Remove this line when integrating with real API

  return json({ wallets });
}

function useWalletController() {
  const { wallets } = useLoaderData<{ wallets: WalletWithLedger[] }>();
  
  // Track which wallet is currently selected (default to the first one)
  const [activeWalletId, setActiveWalletId] = useState<string | null>(
    wallets.length > 0 ? wallets[0].wallet._id : null
  );

  const activeData = useMemo(() => {
    return wallets.find((w) => w.wallet._id === activeWalletId) || null;
  }, [activeWalletId, wallets]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return { 
    wallets, 
    activeData, 
    setActiveWalletId, 
    formatCurrency 
  };
}

export default function WalletPage() {
  const { wallets, activeData, setActiveWalletId, formatCurrency } = useWalletController();

  if (!activeData) return <div className="p-8">No wallets found.</div>;

  const { wallet, pagedLedgers } = activeData;

  return (
    <div className="p-8 max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Wallet</h1>

      {/* Main Balance Card */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-sm">Wallet balances</span>
            <button className="hover:bg-gray-100 p-1 rounded-full">👁️</button>
          </div>
          
          {/* Multi-Wallet Selector */}
          <select 
            className="border rounded-full px-4 py-2 bg-gray-50 text-sm font-medium outline-none cursor-pointer"
            value={wallet._id}
            onChange={(e) => setActiveWalletId(e.target.value)}
          >
            {wallets.map((w) => (
              <option key={w.wallet._id} value={w.wallet._id}>
                {w.wallet.wallet_currency} - {w.wallet.account_number}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <div className="text-4xl font-bold mb-1">
              {formatCurrency(wallet.account_balance, wallet.wallet_currency)}
            </div>
            <div className="text-gray-400 text-sm">{wallet.wallet_name}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button className="bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
            ↗ Withdraw
          </button>
          <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
            + Add Withdrawal Account
          </button>
          <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
            ⇄ Transfer to another wallet
          </button>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <span>📁</span>
          <h2 className="font-medium">Recent wallet activity ({wallet.wallet_currency})</h2>
        </div>

        {/* Mini Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 mb-8 border-b border-gray-100 pb-6">
          <MetricItem 
            label="Net change this month" 
            value={formatCurrency(wallet.metrics.net_change_this_month, wallet.wallet_currency)} 
            tooltip 
          />
          <MetricItem 
            label="Money in" 
            value={formatCurrency(wallet.metrics.money_in, wallet.wallet_currency)} 
          />
          <MetricItem 
            label="Money out" 
            value={formatCurrency(wallet.metrics.money_out, wallet.wallet_currency)} 
          />
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="pb-4 font-medium">S/N</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Ref ID</th>
                <th className="pb-4 font-medium">Narration</th>
                <th className="pb-4 font-medium">Beneficiary name</th>
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pagedLedgers.items.map((item, idx) => (
                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 text-gray-500">{idx + 1}</td>
                  <td className="py-4 text-gray-900 leading-tight">
                    {new Date(item.completed_at || "").toLocaleDateString()}
                    <div className="text-xs text-gray-400">{new Date(item.completed_at || "").toLocaleTimeString()}</div>
                  </td>
                  <td className="py-4 text-gray-600 font-mono text-xs">{item.payment_ref}</td>
                  <td className="py-4 text-gray-600 max-w-xs">{item.description}</td>
                  <td className="py-4 text-gray-600 truncate">{item.wallet_name}</td>
                  <td className="py-4 uppercase text-xs font-semibold">{item.entry_type}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${item.entry_type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                        {formatCurrency(item.amount, item.currency)}
                      </span>
                      <StatusBadge status={item.status} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <div>
            Showing {pagedLedgers.items.length} of {pagedLedgers.total_items} items
          </div>
          <div className="flex gap-2">
             <button disabled={!pagedLedgers.last_key_id} className="px-4 py-2 border rounded-lg disabled:opacity-50">
               Next Page
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ... StatusBadge and MetricItem helpers remain the same as previous response
// Helper UI Components
function MetricItem({ label, value, tooltip = false }: { label: string, value: string, tooltip?: boolean }) {
  return (
    <div>
      <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
        {label} {tooltip && <span className="bg-gray-200 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white">i</span>}
      </div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Failed: "bg-red-50 text-red-500 border-red-100",
    Completed: "bg-green-50 text-green-500 border-green-100",
  };
  
  const icons: Record<string, string> = {
    Pending: "⏱",
    Failed: "⚠️",
    Completed: "✓",
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1 ${styles[status] || ""}`}>
      {icons[status]} {status}
    </span>
  );
}