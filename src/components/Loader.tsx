import { useState, useEffect } from "react";

const Loader = () => {
  const [text, setText] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const texts = ["Curating Experience", "Loading Assets", "Initializing Design"];
    let currentIndex = 0;

    // Rotate text
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setText(texts[currentIndex]);
    }, 1500);

    // Initial text
    setText(texts[0]);

    // Finish loading
    setTimeout(() => {
      clearInterval(textInterval);
      setLoadingComplete(true);
    }, 4500); // 4.5 seconds load

    return () => clearInterval(textInterval);
  }, []);

  if (loadingComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-black to-background z-0" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Orbs */}
        <div className="relative w-32 h-32 mb-12">
          <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-2 bg-gradient-to-tr from-primary to-accent rounded-full animate-spin [animation-duration:3s]" />
          <div className="absolute inset-4 bg-background rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-bl from-accent to-primary rounded-full animate-float blur-sm opacity-60" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-wider">
            VIVEK VERNEKAR
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground uppercase tracking-[0.2em] animate-pulse">
              {text}
            </span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0s]" />
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-[shimmer_2s_infinite] w-full" />
    </div>
  );
};

export default Loader;