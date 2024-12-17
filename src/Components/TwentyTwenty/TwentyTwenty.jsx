import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function TwentyTwenty() {
    return (
        <div className="bg-main p-3 pt-4 mb-2" >
            <ReactCompareSlider style={{ height: '70vh', width: '90%', margin: '0 auto 40px', backgroundColor: '#607896' }}
                itemOne={<ReactCompareSliderImage src={require('./../../Assets/R1.png')} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={require('./../../Assets/R2.png')} alt="Image two" />}
            />
        </div>
    );

}
