"use client"
import { useEffect, useState } from "react";
import "./globals.css"

export default function Home() {
  const [posx, setPosx] = useState(0)
  const [posy, setPosy] = useState(0)

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        setPosy(oldPosy => oldPosy - 1);
      } else if (e.key === "ArrowDown") {
        setPosy(oldPosy => oldPosy + 1);
      } else if (e.key === "ArrowLeft") {
        setPosx(oldPosx => oldPosx - 1);
      } else if (e.key === "ArrowRight") {
        setPosx(oldPosx => oldPosx + 1);
      }
    }
    )
  }, []);



  return (
    <div className="quadro">
      <div className="jogador" 
        style={{
          top: posy * 10,
          left: posx * 10
        }}
      ></div>
    </div>
  );
}
