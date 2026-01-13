import image from '../assets/images/court.jpg';

const MovieDetails = () => {
  const cast = [
    { name: "Priyadarshi Pulikonda", role: "Adv. Surya Teja" },
    { name: "P. Sai Kumar", role: "Advocate G. Mohan Rao" },
    { name: "Sivaji", role: "Mangapathi" },
    { name: "Rohini", role: "Meruvalli Seetha Ratnam" },
    { name: "Harsha Vardhan", role: "Advocate K. S. Damodhar" },
    { name: "Subhalekha Sudhakar", role: "Meruvalli Ramachandrayya" },
    { name: "Harsh Roshan", role: "Mettu Chandrasekhar" },
    { name: "Sridevi Apalla", role: "Meruvalli Jabilli" },
  ];

  const movieStats = [
    { icon: "📅", label: "Release Date", value: "2025" },
    { icon: "⏱️", label: "Duration", value: "2h 28m" },
    { icon: "⭐", label: "IMDb Rating", value: "8.5/10" },
    { icon: "🎭", label: "Genre", value: "Legal Drama" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-950 p-4 sm:p-6 md:p-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-gray-700/50">
            <span className="text-cyan-300">🎬</span>
            <span className="text-sm text-gray-300">Telugu Cinema • 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              COURT
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2">
              State vs A Nobody
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A gripping legal drama that challenges the justice system
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Poster & Stats */}
          <div className="lg:col-span-1">
            {/* Movie Poster */}
            <div className="relative group">
              <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700/50">
                {/* Movie Poster Image */}
                <img 
                  src={image} 
                  alt="Court Movie Poster" 
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-blue-500/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {movieStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                  <div className="text-lg font-semibold text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Production Info */}
            <div className="mt-6 bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold mb-3 text-cyan-300">Production</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-400">Director</div>
                  <div className="font-medium">Ram Jagadeesh</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Producer</div>
                  <div className="font-medium">Prashanti Tipirneni</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Presenter</div>
                  <div className="font-medium">Nani</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Banner</div>
                  <div className="font-medium">Wall Poster Cinema</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details & Cast */}
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded"></span>
                Film Synopsis
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="font-semibold text-white">"Court: State vs A Nobody"</span> is a compelling 2025 Indian Telugu-language legal drama film that marks the directorial debut of <span className="text-cyan-300">Ram Jagadeesh</span>. This thought-provoking narrative delves into the complexities of the judicial system, challenging conventional notions of justice and morality.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Produced by <span className="text-amber-300">Prashanti Tipirneni</span> and presented by <span className="text-amber-300">Nani</span> under Wall Poster Cinema, the film follows a young lawyer's journey through a landmark case that questions the very foundations of legal ethics and human rights.
              </p>
            </div>

            {/* Cast Section */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-2xl text-blue-400">👥</span>
                Main Cast
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cast.map((actor, index) => (
                  <div 
                    key={index}
                    className="group bg-gray-900/50 rounded-xl p-4 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                          {actor.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-black text-xs">⭐</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {actor.name}
                        </h4>
                        <p className="text-sm text-gray-400">{actor.role}</p>
                        <div className="mt-2">
                          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                            Character Role
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                <span className="text-xl">▶</span>
                Watch Trailer
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
              </button>
              
              <button className="flex-1 group bg-gray-800/50 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                <span className="text-xl">🎫</span>
                Book Tickets
              </button>
              
              <button className="flex-1 group bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                <span className="text-xl">⭐</span>
                Rate Now
              </button>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-gradient-to-r from-gray-800/40 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">🏆 Awards & Recognition</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-black/30 p-3 rounded-lg">
                  <span className="text-2xl text-amber-400">🏆</span>
                  <div>
                    <div className="font-medium">Best Legal Drama</div>
                    <div className="text-sm text-gray-400">South Indian Film Awards 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-black/30 p-3 rounded-lg">
                  <span className="text-2xl text-amber-400">🏆</span>
                  <div>
                    <div className="font-medium">Best Debut Director</div>
                    <div className="text-sm text-gray-400">Filmfare Awards South 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-xl font-bold mb-4 text-white">ℹ️ Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Language</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Telugu</span>
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">English Subtitles</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Certification</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">U/A</span>
                    <span className="text-sm text-gray-400">Suitable for 12+</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Format</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">2D</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Dolby Atmos</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Availability</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Theaters</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Coming to OTT</span>
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

export default MovieDetails;