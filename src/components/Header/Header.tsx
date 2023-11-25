import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.css";
import Logo from "@assets/larpfi_logo.jpg";

export const Header = () => {
  return (
    <header>
      <div className="title">
        <Image src={Logo} alt="Larp.fi logo" />
        <h1>Tapahtumakalenteri</h1>
      </div>
      <ul className="navbar">
        <li>
          <Link href="/">Kalenteri</Link>
        </li>
        <li>
          <Link href="/events">Tapahtumalista</Link>
        </li>
        <li>
          <Link href="/create">Luo tapahtuma</Link>
        </li>
        <li>
          <Link href="/info">Ohjeet</Link>
        </li>
        <li>
          <Link href="/login">Kirjaudu sisään</Link>
        </li>
      </ul>
    </header>
  );
};
