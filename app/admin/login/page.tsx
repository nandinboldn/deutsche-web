import { loginAction } from "@/lib/actions";

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-9">
          <div className="font-serif font-extrabold text-2xl text-cream">Deutsche</div>
          <div className="font-serif text-sm text-cream/60">Bäckerei Admin</div>
        </div>

        <form action={loginAction} className="bg-cream rounded-lg p-7 space-y-5">
          <div>
            <label className="block text-[10px] tracking-wider uppercase text-ink/50 mb-1.5">Нууц үг</label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full rounded-lg border border-black/15 px-4 py-3 text-[15px] focus:outline-none focus:border-green bg-white"
            />
          </div>
          {searchParams.error && (
            <p className="text-orange text-sm">Нууц үг буруу байна. Дахин оролдоно уу.</p>
          )}
          <button
            type="submit"
            className="w-full bg-green text-cream py-3.5 rounded text-[11px] font-medium tracking-[2px] uppercase hover:bg-green-dark transition"
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </main>
  );
}
