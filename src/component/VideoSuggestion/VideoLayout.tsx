
interface VideoSuggestionProps {
  id: string;
  title: string;
  channelName: string;
  views: number;
  thumbnail: string;
}

export default function VideoSuggestion({ id, title, channelName, views, thumbnail }: VideoSuggestionProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-2 max-w-md hover:bg-gray-100 transition-colors duration-200 p-2 rounded-lg">
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full sm:w-40 aspect-video rounded-lg overflow-hidden"
      >
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={`Thumbnail for ${title}`}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </a>
      <div className="flex-1 min-w-0">
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-sm font-semibold line-clamp-2 mb-1">{title}</h3>
        </a>
        <p className="text-xs text-gray-600 mb-1">{channelName}</p>
        <p className="text-xs text-gray-600">{formatViews(views)} views</p>
      </div>
    </div>
  );
}

function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}
