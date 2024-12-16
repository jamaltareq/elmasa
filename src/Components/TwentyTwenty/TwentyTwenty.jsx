import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function TwentyTwenty() {
    return (
        <div className="bg-main p-3 pt-4 mb-2" >
            <ReactCompareSlider style={{ height: '70vh', width: '90%', margin: '0 auto 40px', backgroundColor: '#607896' }}
                itemOne={<ReactCompareSliderImage src="https://previews.dropbox.com/p/thumb/ACcQERcb6e89YPrs-kqNOD9QDVeKfOFA8hiH8ZRXltek89aSbpyDQssLc6EF7iO8OJjtAdXkRy4yXmnE93b4AlDpIIizFvrEikiPs_8ggQAb8gnlBcOYHfPcwLeMO-UQNe4Cg_gD2SrdE9_GET5BNxRsE9VTOHQ50pHg9f2DmqFdDVpJtAq7JRzd38fWMsl25YJ47wL1KSPc1E7R_iuILdRROFfuhgh2hjSGCKFFkhJYmi6VVgy1SsQxtM5PoOHKkH6rlCy5cKVNJPA-ES1tCfI-NyyzuSNiRrCO_HlDbu6G8pNNjbOQ_uQ5Brmtu-3mWm0bCN1EWgpfXzpZ2QcEPc60/p.png?is_prewarmed=true" alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="https://previews.dropbox.com/p/thumb/ACdrt0nJW0qgeyOd_kAjIugGM0AgV6hKlI9pnM7K-4g163TG_QGNyvwxcmEcu6n0N5IOgO1crUiKOSj0G9-Tq4jF7pLz80qm5Dfg-H0vDZoBRABmWwCaynO6wLfsdBrqCRVW0QV1_1cvskj3YiX9RftpfXfH2EYB4qRNz_Up-PR4a8SnTXftrcFgLidE6JkIRVkR__48iuveQzLr8sveAXOf0vUW0XOx_gXEaw5iaFvDxJrZM0hZeBzw3gSze3eMaED47D7EldyUWhw6_pOmle50klvt_ffmwsLzFR3qeyDQYgsrjnwBZh91SQZLWKmczUwSQzrPPIcx54etTuVQtz-H/p.png?is_prewarmed=true" alt="Image two" />}
            />
        </div>
    );

}
