import Card from "@/components/Card";

export default function Logo() {
  return (
    <Card className="logo flex flex-col gap-2 p-5" key="logo">
      <div className="flex items-center gap-2">
        <img
          src="https://img.marcus233.top/i/24/03/avatar.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-2xl font-bold">Marcus</span>
      </div>
      <span className="text-2xl font-bold">人间值得,未来可期</span>
    </Card>
  );
}
