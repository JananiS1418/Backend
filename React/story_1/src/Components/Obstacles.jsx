import { useNavigate } from "react-router-dom";
import story from '../assets/Images/story.jpg';

const Obstacles = () => {
    const navigate = useNavigate();
    
    const handleBackToFamily = () => {
        navigate("/Family");
    };
    
    const handleEndJourney = () => {
        alert("End of Journey! Your story is inspiring.");
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-slate-800 rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-700">
                
                {/* Header */}
                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        My Obstacles
                    </h1>
                    <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    
                    {/* Image Section */}
                    <div className="mt-8 mb-6 flex justify-center">
                        <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-xl">
                            <img 
                                src={story} 
                                alt="My Journey" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                                <p className="text-white text-lg font-medium">My Journey of Resilience and Recovery</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Content in paragraph sections */}
                <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-cyan-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-cyan-300">When I was studying in 11th standard,</span> it started as a small health problem. But when I entered 12th, my health condition became worse, and I couldn't attend school regularly. Because of that, I had to discontinue my 12th.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-blue-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-blue-300">With the support of my family and my own fighting spirit,</span> I decided to continue my studies the next year. It was during the corona batch — most students were passed directly, but in my case, they said I had to write the exams because my hall ticket was already issued the previous year. At that time, I was really struggling with my health. I didn't know what to do, and it was very difficult for me.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-purple-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-purple-300">But my family kept encouraging me,</span> saying, "You can do it, if you don't write these exams your life will be wasted." Their support gave me strength. So, I prepared for each exam overnight and went to write it the next day. Finally, all my efforts paid off, and I got my results successfully. Because the counseling seats were full, I took an IT seat through management quota.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-pink-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-pink-300">During my 1st and 2nd years I did fairly well</span> — though the health problems persisted, I managed to cope and continue. But in my 3rd year things became much worse. I began having severe episodes and my strength became very weak. When I first had an episode, my family and friends were all very scared.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-amber-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-amber-300">We went to the hospital and the doctors told me</span> there was a problem in my brain — they said something like "10% problem." They started me on tablets, but the medication didn't fully help; it became more like a 20% problem. I went through many treatments and medicines, but nothing fixed it completely.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-red-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-red-300">Some days I would have episodes four or five times,</span> and I couldn't fully recover each time. My family suffered a lot because of this, and I felt so helpless that at times I even thought about ending my life. I had terrible pain in my hands, legs, and head — I couldn't move freely.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border-l-4 border-green-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-green-300">Then there was a turning point.</span> The doctors warned that if it kept getting worse, I could go into a coma. The allopathic medicines didn't suit me and caused many side effects. After that, I decided to try Siddha medicine.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-700/20 to-green-800/20 p-6 rounded-2xl border-l-4 border-emerald-400">
                        <p className="text-gray-200 leading-relaxed text-lg">
                            <span className="font-bold text-emerald-300">Gradually, with the Siddha treatment,</span> I started to improve and the condition came under control. Within five months I was almost completely cured. I truly believe that without my family's support and my determination, I would not have recovered.
                        </p>
                    </div>
                </div>
                
                {/* Key Takeaways */}
                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">🌟 Key Lessons</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                            <div className="text-3xl mb-2">💪</div>
                            <p className="text-white font-medium">Family Support is Everything</p>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                            <div className="text-3xl mb-2">🧠</div>
                            <p className="text-white font-medium">Never Give Up Hope</p>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                            <div className="text-3xl mb-2">⚕️</div>
                            <p className="text-white font-medium">Find What Works For You</p>
                        </div>
                    </div>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10">
                    <button 
                        onClick={handleBackToFamily}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-slate-700 text-gray-300 font-semibold hover:from-gray-600 hover:to-slate-600 hover:text-white transition-all duration-300 hover:shadow-lg border border-gray-600"
                    >
                        ← Back to Family
                    </button>
                    
                    <button 
                        onClick={handleEndJourney}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                        End of Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Obstacles;