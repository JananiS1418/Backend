import React from 'react';

const Character = () => {
  const characters = [
    {
      name: "Priyadarshi Pulikonda",
      role: "Adv. Surya Teja",
      description: "Main protagonist, passionate lawyer fighting for justice",
      importance: "Lead Role"
    },
    {
      name: "P. Sai Kumar",
      role: "Advocate G. Mohan Rao",
      description: "Surya Teja's senior and mentor, experienced lawyer",
      importance: "Supporting Role"
    },
    {
      name: "Sivaji",
      role: "Mangapathi",
      description: "Jabilli's uncle, key character in the legal battle",
      importance: "Supporting Role"
    },
    {
      name: "Rohini",
      role: "Meruvalli Seetha Ratnam",
      description: "Jabilli's mother, emotionally strong matriarch",
      importance: "Supporting Role"
    },
    {
      name: "Harsha Vardhan",
      role: "Advocate K. S. Damodhar 'Damu'",
      description: "Mangapathi's personal friend and lawyer",
      importance: "Supporting Role"
    },
    {
      name: "Subhalekha Sudhakar",
      role: "Meruvalli Ramachandrayya",
      description: "Jabilli's paternal grandfather, family head",
      importance: "Supporting Role"
    },
    {
      name: "Harsh Roshan",
      role: "Mettu Chandrasekhar 'Chandu'",
      description: "Young entrepreneur, pivotal character",
      importance: "Lead Role"
    },
    {
      name: "Sridevi Apalla",
      role: "Meruvalli Jabilli",
      description: "Central female character, key to the plot",
      importance: "Lead Role"
    },
    {
      name: "Vadlamani Srinivas",
      role: "Lawyer Sivaram",
      description: "Legal counsel, courtroom veteran",
      importance: "Supporting Role"
    },
    {
      name: "Surabhi Prabhavathi",
      role: "Mettu Nagalakshmi",
      description: "Chandu's mother, traditional homemaker",
      importance: "Supporting Role"
    },
    {
      name: "Rajasekhar Aningi",
      role: "Chandu's father",
      description: "Businessman, family patriarch",
      importance: "Supporting Role"
    },
    {
      name: "Vishika",
      role: "Lahari",
      description: "Supporting character, adds romantic subplot",
      importance: "Supporting Role"
    },
    {
      name: "Raghuram",
      role: "Reddy",
      description: "Local influential person",
      importance: "Cameo"
    },
    {
      name: "Srinivas Bhogireddy",
      role: "Judge",
      description: "Courtroom authority, delivers key judgements",
      importance: "Supporting Role"
    },
    {
      name: "Kamal",
      role: "Doctor Prabhakar",
      description: "Medical professional, provides critical evidence",
      importance: "Cameo"
    },
    {
      name: "Jwala Koti",
      role: "CI K. Ramesh Reddy",
      description: "Police officer investigating the case",
      importance: "Supporting Role"
    },
    {
      name: "Ramu",
      role: "SI S. Ravi Kumar",
      description: "Sub-inspector, assists in investigation",
      importance: "Supporting Role"
    },
    {
      name: "Sai Raj",
      role: "Bench Clerk",
      description: "Courtroom administrative staff",
      importance: "Cameo"
    },
    {
      name: "Srivani Tripuraneni",
      role: "Surya Teja's mother",
      description: "Supportive parent, emotional anchor",
      importance: "Cameo"
    },
    {
      name: "Surya Teja",
      role: "Jabilli's paternal uncle",
      description: "Family member with hidden motives",
      importance: "Cameo"
    },
    {
      name: "Vani Shalini",
      role: "Jabilli's aunt",
      description: "Supporting family member",
      importance: "Cameo"
    },
    {
      name: "Godavari Gopi",
      role: "Koti",
      description: "Village character, provides local context",
      importance: "Cameo"
    },
    {
      name: "Vidyasagar Karampuri",
      role: "Ramu Naidu",
      description: "Local politician, influential figure",
      importance: "Cameo"
    },
    {
      name: "Srihari",
      role: "Jabilli's father",
      description: "Photographic appearance, deceased character",
      importance: "Special Appearance"
    }
  ];

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'Lead Role':
        return 'bg-gradient-to-r from-blue-600 to-cyan-500';
      case 'Supporting Role':
        return 'bg-gradient-to-r from-purple-600 to-pink-500';
      case 'Cameo':
        return 'bg-gradient-to-r from-green-600 to-emerald-500';
      case 'Special Appearance':
        return 'bg-gradient-to-r from-amber-600 to-orange-500';
      default:
        return 'bg-gradient-to-r from-gray-600 to-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Character Ensemble
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Meet the talented cast bringing the story to life. Each character plays a crucial role 
            in this compelling cinematic journey through justice, relationships, and family drama.
          </p>
        </div>

        {/* Legend */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-cyan-300">Character Importance</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mr-2"></div>
              <span className="text-sm">Lead Role</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mr-2"></div>
              <span className="text-sm">Supporting Role</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 mr-2"></div>
              <span className="text-sm">Cameo</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 mr-2"></div>
              <span className="text-sm">Special Appearance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Importance Indicator */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getImportanceColor(character.importance)} text-white`}>
                  {character.importance}
                </span>
              </div>

              {/* Character Number */}
              <div className="text-4xl font-bold text-gray-700/50 mb-4 group-hover:text-blue-500/30 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Character Name */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                {character.name}
              </h3>

              {/* Character Role */}
              <div className="mb-3">
                <span className="text-sm text-gray-400">Plays</span>
                <h4 className="text-lg font-semibold text-blue-300">{character.role}</h4>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {character.description}
              </p>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Production Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-black/50 rounded-xl border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Production Team</h3>
          <p className="text-gray-300">
            This stellar ensemble cast was brought together by an experienced production team 
            dedicated to creating authentic performances and compelling storytelling. Each actor 
            was carefully selected to ensure they perfectly embody their character's essence, 
            contributing to the film's emotional depth and narrative power.
          </p>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">{characters.length}</div>
            <div className="text-gray-400 text-sm">Total Characters</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {characters.filter(c => c.importance === 'Lead Role').length}
            </div>
            <div className="text-gray-400 text-sm">Lead Roles</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {characters.filter(c => c.importance === 'Supporting Role').length}
            </div>
            <div className="text-gray-400 text-sm">Supporting Roles</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">
              {characters.filter(c => c.importance === 'Cameo').length}
            </div>
            <div className="text-gray-400 text-sm">Cameo Appearances</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;