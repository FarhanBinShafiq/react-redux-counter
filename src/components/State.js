import React from 'react';

const State = ({count}) => {
    return (
        <div>
            <div className='p-4 h-40 flex flex-col items-center justify-center
             space-y-5 bg-white rounded shadow'>
                <div className='text-2xl font-semibold'>
                      total count:{count}
                </div>
            </div>
        </div>
    );
};

export default State;