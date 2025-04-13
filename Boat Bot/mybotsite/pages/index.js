
export default function Home() {
  const CLIENT_ID = '1353371586282913832';
  const REDIRECT_URI = 'https://mybotsite.com/callback';
  const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${1353371586282913832}&permissions=8&scope=bot%20applications.commands&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4">🎮 My Awesome Discord Bot</h1>
      <p className="text-xl mb-8 text-gray-300 text-center max-w-xl">
        Add a powerful and smart bot to your server that makes moderation, music, and memes easy!
      </p>
      <a
        href={INVITE_URL}
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-xl font-semibold transition-all"
      >
        ➕ Add to Discord
      </a>
    </main>
  );
}
