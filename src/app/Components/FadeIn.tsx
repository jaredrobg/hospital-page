<<<<<<< HEAD
"use client";
import { useRef, useEffect, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  direction
  }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" |"left" | "right">("up");
  

  useEffect(() => {
    if(direction) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (direction) {
    scrollDirection !== direction && setScrollDirection(direction);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // 🔄 Reinicia al salir
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <div
      ref={ref}
      className={`fade-in fade-${scrollDirection} ${isVisible ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>

  );
}
=======
"use client";
import { useRef, useEffect, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  direction
  }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" |"left" | "right">("up");
  

  useEffect(() => {
    if(direction) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (direction) {
    scrollDirection !== direction && setScrollDirection(direction);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // 🔄 Reinicia al salir
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <div
      ref={ref}
      className={`fade-in fade-${scrollDirection} ${isVisible ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>

  );
}
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
