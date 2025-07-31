"use client"

import React from "react"

type props = {
    message: string
}

const SuccessModal = ({message}:props)=>{

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="rounded-xl bg-white px-8 py-6 text-center shadow-lg">
                <div className="text-2xl font-semibold text-green-700 mb-3">
                        <p className="text-2xl font-semibold text-green-700 mb-3">Success</p>
                        <p className="text-gray-800">{message}</p>
                </div>

            </div>

        </div>
    )
}

export default SuccessModal;