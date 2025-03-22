// import { TocItem } from "remark-flexible-toc";
// import Card from "@/components/Card";
// import Link from "next/link";
// import { cn } from "@/lib/utils"
// export default function Toc({ toc }: { toc: TocItem[] }) {
//   return (
//     <Card className="p-5">
//       <ul className="w-full">
//         {toc.map((item, index) => {
//           return (
//             <li
//               key={index}
//               className={cn('hover:bg-zinc-500 rounded-xl p-1 w-full',`ml-${item.depth-2}`)}
//             >
//               <Link className="w-full" href={item.href}>
//                 {item.value}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </Card>
//   );
// }
