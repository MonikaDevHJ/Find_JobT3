import React from 'react'

type Props = {
    onNext: () => void;
    onBack : ()=>void

}

const CompanyDeatils = ({onNext, onBack}:Props) => {
    return (
        <div>
            <div>
                Employer Details
            </div>
        </div>
    )
}

export default CompanyDeatils
