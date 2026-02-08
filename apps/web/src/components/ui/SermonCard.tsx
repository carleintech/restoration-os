import Image from "next/image";
import { Card } from "./Card";

interface SermonCardProps {
  title: string;
  speaker: string;
  date: string;
  series?: string;
  scripture?: string;
  thumbnail?: string;
  duration?: string;
}

/**
 * Sermon card component for displaying sermon information
 * Includes play button overlay and metadata
 */
export function SermonCard({
  title,
  speaker,
  date,
  series,
  scripture,
  thumbnail = "/hero/hero.png",
  duration,
}: SermonCardProps) {
  return (
    <Card variant="default" padding="sm" hover className="overflow-hidden h-full flex flex-col">
      {/* Sermon Thumbnail */}
      <div className="relative h-48 -m-4 mb-4 group cursor-pointer">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 smooth-transition"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 smooth-transition">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 smooth-transition">
            <svg className="w-8 h-8 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
            {duration}
          </div>
        )}

        {/* Series Badge */}
        {series && (
          <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {series}
          </div>
        )}
      </div>

      {/* Sermon Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-lg font-semibold text-stone-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-col gap-1 text-sm text-stone-600 mb-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{speaker}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>

          {scripture && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-teal-600 font-medium">{scripture}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
