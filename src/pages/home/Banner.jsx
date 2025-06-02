import React from 'react';
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className=" bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y: [100, 150, 100],
                            transition: {duration: 5, repeat: Infinity}
                        }}
                        src={team1}
                        className="max-w-sm rounded-lg shadow-2xl border-green-400 border-l-8 border-b-8 rounded-t-4xl"                    />
                    <motion.img
                        animate={{
                            x: [150, 250, 150],
                            transition: {duration: 10, delay: 5, repeat: Infinity}
                        }}
                        src={team2}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>

                    <h1 className='text-4xl font-bold'>I am <motion.span
                        animate={
                            {
                                color: ['#8ee833', '#3349e8', '#d233e8'],
                                transition: { duration: 3, repeat: Infinity }
                            }
                        }
                    >Nazmul</motion.span></h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;