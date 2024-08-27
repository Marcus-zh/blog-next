export default function Card({ children, className = "", tip }: { children: React.ReactNode, className: string, tip?: string }) {
  return (
    <div className={`${className} ${tip?"mt-5":""} flex rounded-2xl shadow-2xl backdrop-blur-lg opacity-90 bg-zinc-800`}>
      {tip && <span className="absolute top-[-23px] left-5 text-zinc-600 text-sm">{tip}</span>}
      {children}
    </div>
  );
}