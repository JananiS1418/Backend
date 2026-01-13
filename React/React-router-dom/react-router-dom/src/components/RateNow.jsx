import React, { useState } from 'react';
import images from '../assets/images/court1.jpg';

const RateNow = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [userName, setUserName] = useState('');

  // Movie details
  const movieDetails = {
    title: "COURT: State vs A Nobody",
    year: "2025",
    director: "Ram Jagadeesh",
    genre: "Legal Drama",
    duration: "2h 28m",
  };

  // Sample existing reviews
  const sampleReviews = [
    { id: 1, name: "Aarav Sharma", rating: 5, comment: "Brilliant courtroom drama! The performances were outstanding and the plot kept me on the edge of my seat.", date: "2024-01-10", helpful: 42 },
    { id: 2, name: "Priya Patel", rating: 4, comment: "Powerful storytelling with strong social message. A must-watch for legal drama enthusiasts.", date: "2024-01-09", helpful: 28 },
    { id: 3, name: "Rohit Verma", rating: 5, comment: "One of the best Telugu films I've seen in recent years. The climax courtroom scene gave me goosebumps!", date: "2024-01-08", helpful: 56 },
    { id: 4, name: "Sneha Reddy", rating: 3, comment: "Good performances but the pacing could have been better in the second half.", date: "2024-01-07", helpful: 15 },
  ];

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting!");
      return;
    }
    
    const newReview = {
      id: Date.now(),
      name: userName || "Anonymous",
      rating,
      comment: review,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    
    setSubmittedReviews([newReview, ...submittedReviews]);
    setReview('');
    setUserName('');
    setRating(0);
    
    alert("Thank you for your review! It has been submitted.");
  };

  const allReviews = [...submittedReviews, ...sampleReviews];

  const ratingStats = {
    average: (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1),
    total: allReviews.length,
    distribution: [5, 4, 3, 2, 1].map(star => ({
      star,
      count: allReviews.filter(r => r.rating === star).length,
      percentage: (allReviews.filter(r => r.rating === star).length / allReviews.length * 100).toFixed(0)
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950 p-4 sm:p-6 md:p-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              RATE & REVIEW
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Share your thoughts on "COURT: State vs A Nobody". Your review helps others discover this compelling legal drama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Rating & Review Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Movie Info Card with Image */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Movie Poster Image */}
                <div className="w-24 h-32 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={images} 
                    alt="Court Movie Poster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{movieDetails.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      🎭 {movieDetails.genre}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      📅 {movieDetails.year}
                    </span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">
                      ⏱️ {movieDetails.duration}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      🎥 {movieDetails.director}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Rate This Movie</h2>
              
              {/* Star Rating */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-5xl transform transition-transform duration-200 hover:scale-110"
                    >
                      <span className={
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-600'
                      }>
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 text-lg mb-2">
                    {rating === 0 ? 'Select your rating' : `You rated: ${rating} star${rating > 1 ? 's' : ''}`}
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${rating >= 1 ? 'bg-red-500/20 text-red-300' : 'bg-gray-800/50 text-gray-500'}`}>
                      Poor
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${rating >= 2 ? 'bg-orange-500/20 text-orange-300' : 'bg-gray-800/50 text-gray-500'}`}>
                      Fair
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${rating >= 3 ? 'bg-yellow-500/20 text-yellow-300' : 'bg-gray-800/50 text-gray-500'}`}>
                      Good
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${rating >= 4 ? 'bg-green-500/20 text-green-300' : 'bg-gray-800/50 text-gray-500'}`}>
                      Very Good
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${rating === 5 ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800/50 text-gray-500'}`}>
                      Excellent
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <form onSubmit={handleSubmitReview}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Your Name (Optional)</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Your Review</label>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Share your thoughts about the movie... What did you like? What could be better?"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-gray-500 text-sm mt-2">
                      {review.length}/500 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={rating === 0}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      rating === 0
                        ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]'
                    }`}
                  >
                    {rating === 0 ? 'SELECT A RATING FIRST' : 'SUBMIT YOUR REVIEW'}
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Reviews */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Reviews ({allReviews.length})</h2>
              
              <div className="space-y-6">
                {allReviews.map((review) => (
                  <div key={review.id} className="bg-gray-900/30 rounded-xl p-5 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{review.name}</h4>
                            <p className="text-sm text-gray-400">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={star <= review.rating ? 'text-yellow-400' : 'text-gray-600'}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-purple-300 transition-colors">
                        <span className="text-xl">👍</span>
                        <span className="ml-1 text-sm">{review.helpful}</span>
                      </button>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700/30 flex gap-4">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors">
                        <span>👍</span>
                        <span className="text-sm">Helpful</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">Reply</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors">
                        <span>🔗</span>
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Rating Stats & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Overall Rating with Image - UPDATED LAYOUT */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center gap-6 mb-6">
                  {/* Movie Image - Larger and centered */}
                  <div className="w-32 h-44 rounded-xl overflow-hidden shadow-xl flex-shrink-0">
                    <img 
                      src={images} 
                      alt="Court Movie Poster" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Rating Info - Better alignment */}
                  <div className="text-center md:text-left lg:text-center flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Overall Rating</h3>
                    
                    <div className="flex flex-col items-center md:items-start lg:items-center">
                      <div className="text-5xl font-bold text-white mb-2">{ratingStats.average}</div>
                      <div className="flex justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={star <= Math.round(parseFloat(ratingStats.average)) ? 'text-yellow-400 text-2xl' : 'text-gray-600 text-2xl'}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-400">Based on {ratingStats.total} reviews</p>
                    </div>
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-3">
                  {ratingStats.distribution.map((item) => (
                    <div key={item.star} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-10">
                        <span className="text-gray-300">{item.star}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="w-10 text-right text-gray-400 text-sm">
                        {item.count} ({item.percentage}%)
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Tips */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">💡 Rating Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 text-lg">⭐</span>
                    <span className="text-gray-300 text-sm">Consider acting, direction, story, and cinematography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 text-lg">📝</span>
                    <span className="text-gray-300 text-sm">Be specific about what you liked or didn't like</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 text-lg">🎯</span>
                    <span className="text-gray-300 text-sm">Avoid spoilers in your review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 text-lg">🤝</span>
                    <span className="text-gray-300 text-sm">Be respectful of others' opinions</span>
                  </li>
                </ul>
              </div>

              {/* Review Guidelines */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">📋 Review Guidelines</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-900/30 rounded-lg">
                    <h4 className="font-medium text-purple-300 mb-1">Do's</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Share your honest opinion</li>
                      <li>• Focus on the movie's strengths and weaknesses</li>
                      <li>• Be constructive in criticism</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-900/30 rounded-lg">
                    <h4 className="font-medium text-red-300 mb-1">Don'ts</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Include spoilers without warning</li>
                      <li>• Use offensive language</li>
                      <li>• Post irrelevant content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Share with Movie Image - UPDATED LAYOUT */}
              <div className="bg-gradient-to-r from-gray-800/40 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">📱 Share Your Review</h3>
                
                {/* Content layout with image and buttons */}
                <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center gap-4">
                  {/* Movie Image - Square format */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src={images} 
                      alt="Court Movie Poster" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Social buttons - Better alignment */}
                  <div className="flex-1 w-full">
                    <p className="text-gray-300 text-sm mb-4 text-center md:text-left lg:text-center">
                      Share your thoughts about this movie with friends
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <button className="p-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl transition-colors flex flex-col items-center justify-center gap-1">
                        <span className="text-xl">🐦</span>
                        <span className="text-white text-xs font-medium">Twitter</span>
                      </button>
                      <button className="p-3 bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/30 rounded-xl transition-colors flex flex-col items-center justify-center gap-1">
                        <span className="text-xl">📘</span>
                        <span className="text-white text-xs font-medium">Facebook</span>
                      </button>
                      <button className="p-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl transition-colors flex flex-col items-center justify-center gap-1">
                        <span className="text-xl">📸</span>
                        <span className="text-white text-xs font-medium">Instagram</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateNow;