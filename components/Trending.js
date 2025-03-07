import React,{ useState } from 'react'
import fire from '../assets/fire.png'
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate'
import TrendingCard from './TrendingCard'

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center`
}

const trendingData = [
    {
        number:1,
        symbol: "TLOS",
        name: "Telos",
        icon: btc,
        isIncrement: true,
        rate: "2.39%"
    },
    {
        number:2,
        symbol: "EOS",
        name: "EOS",
        icon: btc,
        isIncrement: true,
        rate: "9.23%"
    },
    {
        number:3,
        symbol: "WAXP",
        name: "WAXP",
        icon: btc,
        isIncrement: true,
        rate: "2.34%"
    },
]

const Trending = () => {
    const [checked,setChecked] = useState(false)

  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Today's Antelope market capitalization</h1>

            </div>
            <br/>
            <div className='flex'>
                <p className='text-gray-400'>The global crypto market cap is $1.74T, a &nbsp;</p>
                <span><Rate isIncrement={true} rate ='0.53%' /></span>
                <p> &nbsp; change over the last day. <span className='underline'>Read More</span></p>
            </div>
            <br/>

            <div className={styles.flexCenter}>
                
                <TrendingCard title ='Trending' icon={fire} trendingData = {trendingData} />
                <TrendingCard title ='Biggest Gainers' icon={gainers} trendingData = {trendingData} />
                <TrendingCard title ='Recently Added' icon={recent} trendingData = {trendingData} />
               
            </div>
        </div>
    </div>
  )
}

export default Trending