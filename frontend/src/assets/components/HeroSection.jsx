import { Search } from 'lucide-react';
import React, { useState } from 'react'; // Import useState
import Button from './ui/Button';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    if (query.trim()) { // Check if query is not just whitespace
      dispatch(setSearchQuery(query));
      navigate("/browse");
    }
  };

  return (
    <div className='text-center py-20 bg-gradient-to-b from-brand-50 to-white'>
      <div className='flex flex-col gap-6 my-10 max-w-4xl mx-auto px-4'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='mx-auto px-5 py-2.5 rounded-full bg-white text-brand-600 font-semibold tracking-wide text-sm shadow-sm border border-brand-100'>
            No. 1 Job Hunt Website
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-tight mt-4'
        >
          Search, Apply & <br className="hidden md:block" /> Get Your <span className='text-gradient'>Dream Jobs</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-lg text-slate-500 max-w-2xl mx-auto mt-2'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium dignissimos obcaecati quis, voluptate error.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex w-full md:w-[60%] lg:w-[50%] bg-white shadow-xl shadow-brand-500/10 border border-slate-200 pl-6 pr-2 py-2 rounded-full items-center gap-4 mx-auto mt-8 transition-shadow focus-within:shadow-brand-500/20 focus-within:border-brand-300'
        >
          <input
            type='text'
            placeholder="Find your dream job..."
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full bg-transparent text-slate-800 placeholder-slate-400 font-medium'
            aria-label="Search for jobs"
          />
          <Button className='rounded-full w-12 h-12 flex items-center justify-center p-0' onClick={searchJobHandler}>
            <Search className='h-5 w-5' />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
