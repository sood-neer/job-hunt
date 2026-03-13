import { useNavigate } from 'react-router-dom';
import Badge from './ui/Badge';
import React from 'react';

const LatestJobCards = ({ job }) => {
  const naviagte = useNavigate();
  return (
    <div onClick={() => naviagte(`/jobs/description/${job._id}`)} className='p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border border-slate-100 cursor-pointer group'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-lg text-slate-800 group-hover:text-brand-600 transition-colors'>{job?.company?.name || 'Unknown Company'}</h1>
        <p className='text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100'>India</p>
      </div>
      <div className='mt-4'>
        <h1 className='font-bold text-xl my-2 text-slate-900'>{job?.title || 'Job Title Not Available'}</h1>
        <p className='text-sm text-slate-600 line-clamp-2 leading-relaxed break-words'>{job?.description || 'No description available.'}</p>
        <div className='flex flex-wrap items-center gap-3 mt-6'>
          <Badge className='text-brand-600 bg-brand-50 border-brand-100' text={`${job?.position} Positions`} />
          <Badge className='text-accent-600 bg-accent-50 border-accent-100' text={job?.jobType} />
          <Badge className='text-indigo-600 bg-indigo-50 border-indigo-100' text={`${job?.salary} LPA`} />
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
