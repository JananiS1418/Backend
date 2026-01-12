import { useNavigate } from "react-router-dom";
import image from '../assets/Images/img1.jpg'; // Fixed: removed space from filename

const Family = () => {
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate("/");
    };
    
    const handleToObstacles = () => {
        navigate("/Obstacles"); // Fixed: Added 's' to match route
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 flex flex-col items-center justify-center p-8">
            <div className="max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/30">
                
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    My Family
                </h1>
                
                {/* Image */}
                <div className="flex justify-center mb-8">
                    <div className="w-100 h-72 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                        <img 
                            src={image} 
                            alt="Family" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Paragraph Content */}
                <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-gray-800 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-400">
                        <span className="font-bold text-purple-700">I am Janani S.</span> I completed B.Tech Information Technology in Paavai Engineering College. I did my Schooling at Adhiyaman Matric Higher Secondary School.
                    </p>
                    
                    <p className="text-gray-800 p-6 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-400">
                        In my family there are four members: Myself, my father, my mother and my brother. My father's name is <span className="font-bold text-pink-700">K. Somasundaram</span> and he is a business man.
                    </p>
                    
                    <p className="text-gray-800 p-6 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400">
                        My mother's name is <span className="font-bold text-amber-700">S. Savitha</span> and she is a home maker. My brother's name is <span className="font-bold text-orange-700">S. Mohana Krishnan</span> and he is currently pursuing B.Tech Bio Technology in Karapagam College, Coimbatore.
                    </p>
                    
                    <p className="text-gray-800 p-6 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400">
                        My hobbies are watching movies, listening to music and dancing. These activities help me relax and enjoy my free time with creative expression.
                    </p>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10">
                    <button 
                        onClick={handleBack}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg shadow-purple-200"
                    >
                        ← Back to Story
                    </button>
                    
                    <button 
                        onClick={handleToObstacles}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg shadow-blue-200"
                    >
                        My Obstacles →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Family;