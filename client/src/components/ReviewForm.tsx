import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { useReviews } from '@/contexts/ReviewContext';

interface ReviewFormProps {
  partId: string;
  partName: string;
  onSubmit?: () => void;
}

export default function ReviewForm({ partId, partName, onSubmit }: ReviewFormProps) {
  const { addReview } = useReviews();
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !comment.trim() || !author.trim()) {
      alert('请填写所有字段');
      return;
    }

    setIsSubmitting(true);
    // Simulate async operation
    setTimeout(() => {
      addReview({
        partId,
        rating,
        title,
        comment,
        author,
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setTitle('');
      setComment('');
      setAuthor('');
      setRating(5);

      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
      onSubmit?.();
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
        <p className="text-sm font-semibold text-green-800">✓ 感谢您的评价！</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted rounded-lg">
      <h3 className="font-bold text-sm uppercase tracking-wide">添加评价</h3>

      {/* Star Rating */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase">评分</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={20}
                fill={star <= rating ? 'oklch(0.68 0.18 42)' : 'none'}
                stroke={star <= rating ? 'oklch(0.68 0.18 42)' : 'oklch(0.88 0.008 90)'}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase">标题</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="例如：质量很好，推荐"
          className="w-full px-3 py-2 text-sm border border-border rounded bg-background"
          maxLength={100}
        />
      </div>

      {/* Comment */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase">评论</label>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="分享您使用此配件的体验..."
          className="w-full px-3 py-2 text-sm border border-border rounded bg-background resize-none"
          rows={3}
          maxLength={500}
        />
        <div className="text-xs text-muted-foreground text-right">
          {comment.length}/500
        </div>
      </div>

      {/* Author */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase">您的名字</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="例如：张三"
          className="w-full px-3 py-2 text-sm border border-border rounded bg-background"
          maxLength={50}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all rounded disabled:opacity-50"
        style={{
          background: 'oklch(0.68 0.18 42)',
          color: 'white',
        }}
      >
        <Send size={12} />
        {isSubmitting ? '提交中...' : '提交评价'}
      </button>
    </form>
  );
}
