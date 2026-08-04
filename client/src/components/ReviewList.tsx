import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { useReviews } from '@/contexts/ReviewContext';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';

interface ReviewListProps {
  partId: string;
}

export default function ReviewList({ partId }: ReviewListProps) {
  const { getReviewsByPart, getAverageRating, getReviewCount, markHelpful } = useReviews();
  const reviews = getReviewsByPart(partId);
  const averageRating = getAverageRating(partId);
  const reviewCount = getReviewCount(partId);

  if (reviewCount === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <p className="text-sm">暂无评价，成为第一个评价者吧！</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Rating Summary */}
      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
        <div className="text-center">
          <div className="text-3xl font-bold">{averageRating}</div>
          <div className="flex gap-0.5 justify-center">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                size={14}
                fill={star <= Math.round(averageRating) ? 'oklch(0.68 0.18 42)' : 'none'}
                stroke={star <= Math.round(averageRating) ? 'oklch(0.68 0.18 42)' : 'oklch(0.88 0.008 90)'}
              />
            ))}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {reviewCount} 个评价
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-3">
        {reviews.map(review => (
          <div key={review.id} className="p-3 border border-border rounded-lg space-y-2">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      size={12}
                      fill={star <= review.rating ? 'oklch(0.68 0.18 42)' : 'none'}
                      stroke={star <= review.rating ? 'oklch(0.68 0.18 42)' : 'oklch(0.88 0.008 90)'}
                    />
                  ))}
                </div>
                <h4 className="font-semibold text-sm mt-1">{review.title}</h4>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-foreground">{review.comment}</p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
              <div>
                <span className="font-semibold">{review.author}</span>
                <span className="mx-1">•</span>
                <span>
                  {formatDistanceToNow(review.date, { locale: zhCN, addSuffix: true })}
                </span>
              </div>
              <button
                onClick={() => markHelpful(review.id)}
                className="flex items-center gap-1 px-2 py-1 hover:bg-muted rounded transition-colors"
              >
                <ThumbsUp size={12} />
                <span>{review.helpful > 0 ? review.helpful : '有用'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
