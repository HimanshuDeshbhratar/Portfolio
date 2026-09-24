"use client";

export function ForestScene({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <div className={`forest-stage${reduceMotion ? " reduced" : ""}`} aria-hidden="true">
      <div className="forest-photo" />
      <div className="forest-vignette" />
    </div>
  );
}
