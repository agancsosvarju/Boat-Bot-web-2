import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">ProBot Clone irányítópult</h1>
      <Link href="/dashboard">
        <button className="mt-5 px-5 py-2 bg-red-600 rounded-lg">
          Megnyitása irányítópult
        </button>
      </Link>
    </div>
  );
}
