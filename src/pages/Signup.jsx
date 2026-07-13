import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";

export default function Signup() {
  const navigate = useNavigate();
  const register = useAuth((s) => s.register);

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-[32px] p-10 shadow-sm border dark:border-zinc-800">
        <h1 className="text-3xl font-black text-blue-600">Shop Ease</h1>
        <p className="mt-2 text-zinc-500">Create your account</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full h-12 rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 outline-none focus:border-blue-500"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full h-12 rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-2 w-full h-12 rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 outline-none focus:border-blue-500"
              placeholder="At least 6 characters"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
