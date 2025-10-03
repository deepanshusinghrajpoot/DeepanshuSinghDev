import React from 'react'

export default function Title({ data  }) {
    return (
        <div className="flex flex-col gap-4        font-titleFont  " >
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide ">{data.title}</h3>
            <h1 className="text-5xl text-gray-300 font-bold capitalize">{data.des}</h1>
        </div>

    )
}
