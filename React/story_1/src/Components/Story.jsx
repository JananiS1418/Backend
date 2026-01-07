import { useNavigate } from "react-router-dom";

const Story = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/Family");
    };
    
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-purple-900 via-violet-800 to-indigo-900 p-4">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-center space-y-8 max-w-lg">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-white tracking-tight">
                        Welcome to my Story
                    </h1>
                    <div 
                        className="h-1 w-20 mx-auto rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, #f472b6 0%, #a855f7 100%)'
                        }}
                    ></div>
                    <p className="text-white/80 text-lg">
                        Overcoming obstacles, embracing challenges, and finding strength in the struggle
                    </p>
                </div>
                
                <button 
                    onClick={handleClick}
                    className="group relative overflow-hidden text-white text-lg font-semibold py-4 px-12 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                    aria-label="Navigate to Family page"
                    style={{
                        background: 'linear-gradient(90deg, #ec4899 0%, #7c3aed 100%)'
                    }}
                >
                    <span className="relative z-10">Click to Explore More</span>
                    <div 
                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        style={{
                            background: 'linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)'
                        }}
                    ></div>
                </button>
            </div>
        </div>
    );
};

export default Story;