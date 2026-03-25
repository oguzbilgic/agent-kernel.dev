export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      {/* Nav */}
      <nav className="flex items-center justify-end mb-16">
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <a
            href="https://github.com/oguzbilgic/agent-kernel"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub ★ 200+
          </a>
        </div>
      </nav>

      {/* Banner */}
      <a
        href="https://kern-ai.com"
        target="_blank"
        rel="noopener"
        className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-4 py-2"
      >
        <span className="bg-[var(--accent)] text-black text-xs font-bold px-2 py-0.5">NEW</span>
        <span>kern — a runtime for agent-kernel with Telegram, Slack, and daemon mode →</span>
      </a>

      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">agent-kernel</h1>
        <p className="text-xl text-[var(--muted)] mb-6">
          Three markdown files that make any AI agent stateful.
        </p>
        <p className="text-[var(--fg)] mb-8 leading-relaxed">
          Your agent remembers between sessions, takes notes, and builds on past
          work. No framework, no database — just three markdown files and a git
          repo.
        </p>

        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-4 font-mono text-sm space-y-1">
          <div><span className="text-[var(--muted)] prompt">$ </span>git clone https://github.com/oguzbilgic/agent-kernel.git my-agent</div>
          <div><span className="text-[var(--muted)] prompt">$ </span>opencode my-agent/</div>
        </div>
        <p className="text-xs text-[var(--muted)] mt-3">
          Works with any AI coding agent: OpenCode, Claude Code, Codex, Cursor, Windsurf, etc.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <p className="text-[var(--fg)] mb-6 leading-relaxed">
          AI agents already read <code className="text-sm bg-[#111] px-1.5 py-0.5 rounded">AGENTS.md</code> as
          project instructions. The kernel uses that mechanism to teach the agent <em>how to remember</em>.
        </p>
        <p className="text-[var(--fg)] leading-relaxed">
          Clone the repo, start your coding agent, talk to it. It reads the kernel, realizes it&apos;s new,
          asks who you want it to be. You tell it. It remembers.
        </p>
      </section>

      {/* Memory structure */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Memory structure</h2>
        <pre className="text-sm text-[var(--muted)] leading-relaxed bg-[#111] border border-[var(--border)] rounded-lg p-4 mb-6">
{`AGENTS.md          ← kernel (generic, don't edit)
IDENTITY.md        ← who this agent is
KNOWLEDGE.md       ← index of knowledge files
knowledge/         ← facts about the world (mutable)
notes/             ← daily session logs (append-only)`}
        </pre>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-bold mb-2">knowledge/</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              State. Facts about how things are right now. The agent updates
              these when reality changes. Each file tracks when it was last updated.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">notes/</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Narrative. What happened each session — decisions, actions, open
              items. Append-only. Never modified after the day ends.
            </p>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Quick start</h2>
        <div className="space-y-4">
          <Step n={1} label="Clone the kernel">
            git clone https://github.com/oguzbilgic/agent-kernel.git my-agent
          </Step>
          <Step n={2} label="Start your agent">
            cd my-agent &amp;&amp; opencode
          </Step>
          <Step n={3} label="Talk to it">
            Tell it who it is and what it should do. It remembers.
          </Step>
        </div>
        <p className="text-sm text-[var(--muted)] mt-6">
          Works with <code className="bg-[#111] px-1 py-0.5 rounded text-xs">opencode</code>,{" "}
          <code className="bg-[#111] px-1 py-0.5 rounded text-xs">claude</code>,{" "}
          <code className="bg-[#111] px-1 py-0.5 rounded text-xs">codex</code>,{" "}
          <code className="bg-[#111] px-1 py-0.5 rounded text-xs">cursor</code>,{" "}
          or any coding agent that reads AGENTS.md.
        </p>
      </section>

      {/* Multiple agents */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Multiple agents</h2>
        <p className="text-[var(--fg)] mb-4 leading-relaxed">
          Each agent is its own repo. Same kernel, different identity, different knowledge.
        </p>
        <pre className="text-sm text-[var(--muted)] leading-relaxed bg-[#111] border border-[var(--border)] rounded-lg p-4">
{`git clone agent-kernel homelab-agent
git clone agent-kernel investing-agent
git clone agent-kernel health-agent`}
        </pre>
      </section>

      {/* kern-ai callout */}
      <section className="mb-20 border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Want Telegram, Slack, and a daemon?</h2>
        <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
          <a href="https://kern-ai.com" target="_blank" rel="noopener" className="text-[var(--accent)] hover:underline">kern-ai</a> is
          a runtime built for agent-kernel. One brain across every channel — TUI, Telegram, Slack.
          Daemon mode, user pairing, backup &amp; restore.
        </p>
        <div className="bg-[#0a0a0a] border border-[var(--border)] rounded px-3 py-2 font-mono text-sm">
          <span className="text-[var(--muted)] prompt">$ </span>npx kern-ai init my-agent
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <a
          href="https://github.com/oguzbilgic/agent-kernel"
          className="hover:text-[var(--fg)] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://kern-ai.com"
          className="hover:text-[var(--fg)] transition-colors"
        >
          kern-ai
        </a>
      </footer>
    </main>
  );
}

function Step({ n, label, children }: { n: number; label: string; children: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[var(--accent)] font-bold text-lg">{n}</span>
      <div className="flex-1">
        <p className="text-sm text-[var(--muted)] mb-1">{label}</p>
        <div className="bg-[#111] border border-[var(--border)] rounded px-3 py-2 font-mono text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
