import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 2 seconds
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      }
      setProgress(currentProgress);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Pixel Grid Animation */}
        <div className="pixel-grid">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="pixel-box"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Brand Name */}
        <h1 className="loading-title">
          <span className="pixel-text">Pixel</span>
          <span className="palette-text">Palette</span>
        </h1>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Loading Text */}
        <p className="loading-subtitle">Loading your creative toolkit...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
