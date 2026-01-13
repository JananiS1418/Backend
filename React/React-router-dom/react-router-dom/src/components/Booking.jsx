import  { useState } from 'react';
import poster from '../assets/images/court1.jpg';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState('matinee');
  const [theater, setTheater] = useState('pvr');
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Movie details
  const movieDetails = {
    title: "COURT: State vs A Nobody",
    duration: "2h 28m",
    language: "Telugu",
    certification: "U/A",
    format: "2D",
  };

  // Available dates (next 7 days)
  const availableDates = [
    { date: '2024-01-15', day: 'Today', label: '15 Jan' },
    { date: '2024-01-16', day: 'Tue', label: '16 Jan' },
    { date: '2024-01-17', day: 'Wed', label: '17 Jan' },
    { date: '2024-01-18', day: 'Thu', label: '18 Jan' },
    { date: '2024-01-19', day: 'Fri', label: '19 Jan' },
    { date: '2024-01-20', day: 'Sat', label: '20 Jan' },
    { date: '2024-01-21', day: 'Sun', label: '21 Jan' },
  ];

  // Show times
  const showTimes = {
    matinee: ['09:00 AM', '10:30 AM', '12:00 PM'],
    afternoon: ['02:30 PM', '03:45 PM', '05:00 PM'],
    evening: ['06:30 PM', '08:00 PM', '09:30 PM'],
  };

  // Theaters
  const theaters = [
    { id: 'pvrcinemas', name: 'PVR Cinemas', location: 'Phoenix Marketcity, Whitefield' },
    { id: 'inox', name: 'INOX', location: 'VR Bengaluru, Whitefield' },
    { id: 'cinepolis', name: 'Cinepolis', location: 'Forum Mall, Koramangala' },
    { id: 'imax', name: 'IMAX', location: 'Lulu Mall, Bengaluru' },
  ];

  // Seating layout
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const columns = Array.from({ length: 12 }, (_, i) => i + 1);

  // Price configuration
  const priceConfig = {
    regular: 180,
    premium: 250,
    recliner: 350,
  };

  const handleSeatSelect = (seatId) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const calculateTotal = () => {
    return selectedSeats.length * priceConfig.regular;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-950 p-4 sm:p-6 md:p-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              BOOK YOUR SEATS
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the gripping legal drama in theaters. Select your preferred date, time, and seats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Movie Info & Booking Steps */}
          <div className="lg:col-span-2 space-y-8">
            {/* Movie Info Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Movie Poster Image */}
                <div className="w-24 h-32 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={poster} 
                    alt="Court Movie Poster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{movieDetails.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      ⏱️ {movieDetails.duration}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      🎭 {movieDetails.language}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                      {movieDetails.certification}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      🎦 {movieDetails.format}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Select Theater */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Select Theater</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {theaters.map((theaterItem) => (
                  <button
                    key={theaterItem.id}
                    onClick={() => setTheater(theaterItem.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      theater === theaterItem.id 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-blue-500/50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">🎭</span>
                        <span className="font-bold text-white">{theaterItem.name}</span>
                      </div>
                      <p className="text-sm text-gray-400">{theaterItem.location}</p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="text-green-400">✅ Available</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-amber-400">🎦 Dolby Atmos</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Date & Time */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Select Date & Time</h3>
              </div>

              {/* Date Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">📅 Select Date</h4>
                <div className="flex overflow-x-auto gap-3 pb-4">
                  {availableDates.map((date) => (
                    <button
                      key={date.date}
                      onClick={() => setSelectedDate(date.date)}
                      className={`min-w-20 flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                        selectedDate === date.date 
                          ? 'border-blue-500 bg-blue-500/20' 
                          : 'border-gray-700/50 bg-gray-800/30 hover:border-blue-500/50'
                      }`}
                    >
                      <span className={`text-sm ${selectedDate === date.date ? 'text-blue-300' : 'text-gray-400'}`}>
                        {date.day}
                      </span>
                      <span className={`text-lg font-bold ${selectedDate === date.date ? 'text-white' : 'text-gray-300'}`}>
                        {date.label.split(' ')[0]}
                      </span>
                      <span className="text-xs text-gray-500">{date.label.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">⏰ Select Show Time</h4>
                <div className="space-y-4">
                  {Object.entries(showTimes).map(([timeSlot, times]) => (
                    <div key={timeSlot}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="capitalize text-gray-300 font-medium">
                          {timeSlot === 'matinee' ? '🌅 Matinee' : 
                           timeSlot === 'afternoon' ? '☀️ Afternoon' : '🌙 Evening'}
                        </span>
                        <div className="h-px flex-1 bg-gray-700/50"></div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {times.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-5 py-3 rounded-xl border transition-all duration-300 ${
                              selectedTime === time 
                                ? 'border-blue-500 bg-blue-500/20 text-white' 
                                : 'border-gray-700/50 bg-gray-800/30 text-gray-300 hover:border-blue-500/50 hover:text-white'
                            }`}
                          >
                            <span className="font-medium">{time}</span>
                            <div className="text-xs text-gray-500 mt-1">₹{priceConfig.regular}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Select Seats */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Select Seats</h3>
              </div>

              {/* Screen */}
              <div className="mb-8 text-center">
                <div className="w-full h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-4 mx-auto max-w-2xl">
                  <span className="text-gray-400 font-medium">🎦 SCREEN THIS WAY</span>
                </div>
              </div>

              {/* Seating Layout */}
              <div className="space-y-4">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-center gap-2">
                    <div className="w-8 text-center text-gray-400 font-medium">{row}</div>
                    <div className="flex gap-2">
                      {columns.map((col) => {
                        const seatId = `${row}${col}`;
                        const isSelected = selectedSeats.includes(seatId);
                        const isPremium = row === 'A' || row === 'B';
                        const isRecliner = row === 'G';
                        
                        let seatClass = 'regular';
                        if (isPremium) seatClass = 'premium';
                        if (isRecliner) seatClass = 'recliner';

                        return (
                          <button
                            key={col}
                            onClick={() => handleSeatSelect(seatId)}
                            disabled={Math.random() < 0.2} // Randomly disable some seats
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white transform scale-110'
                                : seatClass === 'premium'
                                ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/20 border border-amber-500/50 text-amber-300'
                                : seatClass === 'recliner'
                                ? 'bg-gradient-to-r from-purple-500/30 to-purple-600/20 border border-purple-500/50 text-purple-300'
                                : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:border-blue-500/50 hover:text-white'
                            } ${Math.random() < 0.2 ? 'opacity-30 cursor-not-allowed' : ''}`}
                          >
                            {col}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Seat Legend */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Seat Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-gray-800/50 border border-gray-700/50 rounded-lg"></div>
                    <div>
                      <div className="text-white font-medium">Regular</div>
                      <div className="text-sm text-gray-400">₹{priceConfig.regular}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500/30 to-amber-600/20 border border-amber-500/50 rounded-lg"></div>
                    <div>
                      <div className="text-white font-medium">Premium</div>
                      <div className="text-sm text-gray-400">₹{priceConfig.premium}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500/30 to-purple-600/20 border border-purple-500/50 rounded-lg"></div>
                    <div>
                      <div className="text-white font-medium">Recliner</div>
                      <div className="text-sm text-gray-400">₹{priceConfig.recliner}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Payment Method */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Payment Method</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'card', label: '💳 Credit/Debit Card', icon: '💳' },
                  { id: 'upi', label: '📱 UPI', icon: '📱' },
                  { id: 'wallet', label: '👛 Wallet', icon: '👛' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                      paymentMethod === method.id 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-blue-500/50'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium text-white">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Booking Summary</h3>
                
                {/* Movie Info with Image */}
                <div className="mb-6 p-4 bg-gray-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    {/* Movie Poster Image in Summary */}
                    <div className="w-16 h-20 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={poster} 
                        alt="Court Movie Poster" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{movieDetails.title}</h4>
                      <p className="text-sm text-gray-400">{selectedDate || 'Select Date'} • {selectedTime || 'Select Time'}</p>
                      <p className="text-sm text-gray-400">{theaters.find(t => t.id === theater)?.name || 'Select Theater'}</p>
                    </div>
                  </div>
                </div>

                {/* Selected Seats */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Selected Seats ({selectedSeats.length})</h4>
                  <div className="space-y-2">
                    {selectedSeats.length > 0 ? (
                      selectedSeats.map((seat) => (
                        <div key={seat} className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white">
                              {seat}
                            </div>
                            <span className="text-white font-medium">Seat {seat}</span>
                          </div>
                          <span className="text-blue-300 font-medium">₹{priceConfig.regular}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        🪑 No seats selected yet
                      </div>
                    )}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Ticket Price ({selectedSeats.length} seats)</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Convenience Fee</span>
                    <span>₹{(selectedSeats.length * 20)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>GST (18%)</span>
                    <span>₹{(calculateTotal() * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total Amount</span>
                      <span>₹{(calculateTotal() + (selectedSeats.length * 20) + (calculateTotal() * 0.18)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Proceed Button */}
                <button 
                  disabled={selectedSeats.length === 0 || !selectedDate || !selectedTime}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    selectedSeats.length === 0 || !selectedDate || !selectedTime
                      ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]'
                  }`}
                >
                  {selectedSeats.length === 0 ? 'SELECT SEATS' : 
                   !selectedDate || !selectedTime ? 'SELECT DATE & TIME' : 
                   'PROCEED TO PAY ₹' + (calculateTotal() + (selectedSeats.length * 20) + (calculateTotal() * 0.18)).toFixed(2)}
                </button>

                {/* Offers */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">💎 Available Offers</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 rounded-lg border border-blue-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300 font-medium">FLAT50OFF</span>
                        <span className="text-sm text-green-400">₹50 OFF</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">On min purchase of ₹500</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/10 rounded-lg border border-purple-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-300 font-medium">MOVIE25</span>
                        <span className="text-sm text-green-400">₹25 OFF</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Valid on all movies</p>
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

export default Booking;