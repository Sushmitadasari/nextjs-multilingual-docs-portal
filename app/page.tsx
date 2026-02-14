import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
//       <main className="text-center space-y-6">
//         <h1 className="text-4xl font-bold">
//           Next.js Multi-Language Docs Portal
//         </h1>

//         <p className="text-lg text-gray-600 dark:text-gray-400">
//           High-performance documentation site with ISR, i18n, Docker and Swagger.
//         </p>

//         <div className="flex justify-center gap-4">
//           <Link
//             href="/en/docs/v1/introduction"
//             className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md transition"
//           >
//             View English Docs
//           </Link>

//           <Link
//             href="/es/docs/v1/introduction"
//             className="px-6 py-2 border border-black dark:border-white rounded-md transition"
//           >
//             Ver Documentación
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-red-500 text-black dark:text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        If this turns RED in dark mode, it works.
      </h1>
    </div>
  );
}
