import Card from "@/components/Card";
import { Config } from "@/Config";

export function Logo() {
  return (
    <Card className="logo flex flex-col gap-2 p-5" key="logo">
      <div className="flex items-center gap-2">
        <img
          src={Config.info.avatar}
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-2xl font-bold">{Config.info.author}</span>
      </div>
      <span className="text-2xl font-bold">{Config.info.description}</span>
    </Card>
  );
}
