import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <img 
        src="/logo.png" 
        alt="Elite School of Indian Film Music" 
        className="h-16 w-16 object-contain"
      />
      <div className="hidden sm:block">
        <h1 className="text-xl font-serif font-bold text-black">ELITE</h1>
        <p className="text-xs text-yellow-600 font-semibold tracking-widest">SCHOOL OF INDIAN FILM MUSIC</p>
      </div>
    </Link>
  );
};