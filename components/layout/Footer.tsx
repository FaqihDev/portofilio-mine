import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary py-10 text-center text-sm text-text-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <a href="#top" className="text-xl font-bold tracking-tighter text-text-primary">
            FAR<span className="text-accent">.</span>
          </a>
          <p>
            &copy; {new Date().getFullYear()} {profile.name} · Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
