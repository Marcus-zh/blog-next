import { Config } from "@/Config";
import { ThemeSwitcher } from "@/components/Button/ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row gap-4 justify-between items-center mt-32 border-t dark:bg-[rgb(56,56,58)] text-base-content/80 px-10 py-4">
      <div className="left flex flex-col gap-4 items-center md:items-baseline">
        <div className="links flex flex-row items-baseline">
          <span>
            ©
            {Config.footer.left.year === new Date().getFullYear()
              ? null
              : `${Config.footer.left.year}-`}
            {new Date().getFullYear()}{" "}
            <a href={Config.info.siteUrl} className="link font-bold">
              {Config.info.author}
            </a>
          </span>
          <span className="mx-2">|</span>
          {Config.footer.left.links?.map((link, index) => (
            <span key={link.name}>
              <a href={link.url} className="link font-bold">
                {link.name}
              </a>
              {index < (Config.footer.left.links?.length ?? 0) - 1 && (
                <span className="mx-2">|</span>
              )}
            </span>
          ))}
        </div>
        <div className="info flex flex-col md:flex-row items-center md:items-baseline">
          <div className="copyright">Powered by{" "}
          <a href="https://nextjs.org/" className="link font-bold">
            Next.js
          </a>
          &
          <a
            href="https://github.com/Marcus-zh/blog-next"
            className="link font-bold"
          >
            Blog-Next
          </a></div>
          <span className="mx-2 hidden md:block">|</span>
          {Config.footer.left.icp?.name && (
            <a href={Config.footer.left.icp.url} className="link font-bold">
              {Config.footer.left.icp.name}
            </a>
          )}
        </div>
      </div>
      <div className="right">
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
