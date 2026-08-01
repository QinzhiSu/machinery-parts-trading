import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Review {
  id: string;
  partId: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  author: string;
  date: number; // timestamp
  helpful: number; // count of helpful votes
}

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
  getReviewsByPart: (partId: string) => Review[];
  getAverageRating: (partId: string) => number;
  getReviewCount: (partId: string) => number;
  markHelpful: (reviewId: string) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

const STORAGE_KEY = 'machinery-reviews';

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load reviews:', e);
      }
    }
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review: Omit<Review, 'id' | 'date' | 'helpful'>) => {
    const newReview: Review = {
      ...review,
      id: `review-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      date: Date.now(),
      helpful: 0,
    };
    setReviews([newReview, ...reviews]);
  };

  const getReviewsByPart = (partId: string) => {
    return reviews
      .filter(r => r.partId === partId)
      .sort((a, b) => b.date - a.date);
  };

  const getAverageRating = (partId: string) => {
    const partReviews = getReviewsByPart(partId);
    if (partReviews.length === 0) return 0;
    const sum = partReviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / partReviews.length) * 10) / 10;
  };

  const getReviewCount = (partId: string) => {
    return getReviewsByPart(partId).length;
  };

  const markHelpful = (reviewId: string) => {
    setReviews(reviews.map(r => 
      r.id === reviewId ? { ...r, helpful: r.helpful + 1 } : r
    ));
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
        getReviewsByPart,
        getAverageRating,
        getReviewCount,
        markHelpful,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviews must be used within ReviewProvider');
  }
  return context;
}
