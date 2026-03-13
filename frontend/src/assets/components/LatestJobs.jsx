import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import useGetAllJobs from './hooks/UseGetAllJobs';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const LatestJobs = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const navigate= useNavigate();
  
  return (
    <div className='max-w-7xl mx-auto my-24 px-4'>
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-5xl font-display font-bold text-slate-900 mb-10'
      >
        <span className='text-gradient'> Latest & Top</span> Job Openings
      </motion.h1>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'
      >
        {!Array.isArray(allJobs) || allJobs.length === 0 ? (
          <span className="text-slate-500">No jobs available</span>
        ) : (
          allJobs.slice(0, 6).map((job) => (
            <motion.div variants={item} key={job._id}>
              <LatestJobCards job={job} />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default LatestJobs;
