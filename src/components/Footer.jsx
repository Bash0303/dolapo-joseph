export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500">
      <p>
        © {new Date().getFullYear()} Dolapo Joseph. Built with React &
        Tailwind CSS.
      </p>
    </footer>
  );
}