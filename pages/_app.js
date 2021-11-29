import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen font-Josefin">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
