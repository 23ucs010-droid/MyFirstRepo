import React from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { lang } = useLanguage();
  const { user, signIn, signOut } = useAuth();
  return (
    <header className="w-full bg-white/70 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">SG</div>
          <div>
            <div className="text-lg font-bold">{t(lang, "appTitle")}</div>
            <div className="text-xs text-slate-600">{t(lang, "browseCategories")}</div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/search" className="px-3 py-1 rounded-md bg-primary text-white text-sm">{t(lang, "searchPlaceholder")}</Link>
          <LanguageToggle />
          {user ? (
            <>
              <span className="text-sm">{user.displayName || user.email}</span>
              <button onClick={signOut} className="px-3 py-1 border rounded text-sm">{t(lang, "signOut")}</button>
            </>
          ) : (
            <button onClick={signIn} className="px-3 py-1 border rounded text-sm">{t(lang, "signIn")}</button>
          )}
        </div>
      </div>
    </header>
  );
}
