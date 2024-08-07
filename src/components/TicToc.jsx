import React from 'react'

const TicToc = ({ info, onClick }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {info && info.map((item, index) => {
                    return <Box key={index} value={item.user} onClick={() => onClick(index)} />
                })}
            </div>
        </>
    )
}


const Box = ({ onClick, value }) => {
    return (
        <div>
            <button className="w-16 h-16 bg-white border-2 border-gray-300 flex items-center justify-center text-2xl font-bold" onClick={onClick}>
                {value}
            </button>
        </div>
    )
}


export default TicToc
