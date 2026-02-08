import Image from "next/image";
import { Card } from "./Card";
import { Button } from "./Button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location?: string;
  description: string;
  image?: string;
  category?: string;
  featured?: boolean;
}

/**
 * Event card component for consistent event presentation
 * Includes date badge, image, and RSVP button
 */
export function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
  category,
  featured = false,
}: EventCardProps) {
  return (
    <Card
      variant={featured ? "elevated" : "default"}
      padding="sm"
      hover
      className="overflow-hidden h-full flex flex-col"
    >
      {/* Event Image */}
      {image && (
        <div className="relative h-48 -m-4 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 text-center min-w-[70px]">
            <div className="text-2xl font-bold text-teal-600">
              {new Date(date).getDate()}
            </div>
            <div className="text-xs font-medium text-stone-600 uppercase">
              {new Date(date).toLocaleDateString("en-US", { month: "short" })}
            </div>
          </div>

          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </div>
          )}
        </div>
      )}

      {/* Event Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>

        <div className="flex flex-col gap-2 text-sm text-stone-600 mb-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{time}</span>
          </div>

          {location && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-stone-600 mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        <Button variant="primary" size="sm" className="w-full">
          RSVP
        </Button>
      </div>
    </Card>
  );
}
