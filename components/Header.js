import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
    navLink: `text-white flex mx-[10px]` ,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
    
}

const Header = () => {
  return (
    <div className={styles.header}>
        <Image 
        src='data:image/png;base64,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'
        alt='logo'
        width={220}
        height={220}
        />

        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Cryptocurrencies</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Exchanges</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>NFT</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Cryptown</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Portfolio</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Watchlist</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Products</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Learn</div>
                </div>
            </nav>

            <div className='flex items-center'>
                <ConnectButton/>
                <div className={styles.inputContainer}>
                    <Search />
                    <input className={styles.input} placeholder = 'Search'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header 