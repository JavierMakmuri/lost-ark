import React, { useState } from 'react'
import styles from '../styles/MariShop.module.css'
import Image from 'next/image'

const MariConverter = () => {
  const [crystalPrice, setCrystalPrice] = useState(0)
  // gpc = gold per crystal
  const [GPC, setGPC] = useState(0)

  const round2dp = (num) => {
    return Math.round(num * 100) / 100
  }

  return (
    <div>
      <img src="/mari.png" alt="image of mari" className={styles.mari}/>
      <h1 className={styles.h1}>Mari&#x27;s Secret Shop Crystal to Gold converter</h1>

      <form className={styles.form}>
        <label>Crystal Price: </label>
        <input onChange={({target}) => setGPC(target.value/95)} placeholder="per 95 crystals"/>
      </form>

      {/* price calculated using: gpc * cost of purchase * num of mats */}
      <div className={styles.itemDisplay}>
        <p className={styles.gold}>Prices shown as gold/piece</p>
        <h3 className={styles.itemTitle}>Honing Mats</h3>
        <p>Guardian Crystal (bundles of 10): <span className={styles.price}>{round2dp(GPC * 270 / 1000 * 10)}</span></p>
        <p>Destruction Crystal (bundles of 10): <span className={styles.price}>{round2dp(GPC * 300 / 500 * 10)}</span></p>
        <p>Honor Leapstone: <span className={styles.price}>{round2dp(GPC * 40 / 20)}</span></p>
        <p>Great Honor Leapstone: <span className={styles.price}>{round2dp(GPC * 50 / 5)}</span></p>

        <h3 className={styles.itemTitle}>Honing Boosters</h3>
        <p>Solar Grace: <span className={styles.price}>{round2dp(GPC * 160 / 40)}</span></p>
        <p>Solar Blessing: <span className={styles.price}>{round2dp(GPC * 300 / 30)}</span></p>
        <p>Solar Protection: <span className={styles.price}>{round2dp(GPC * 360 / 8)}</span></p>
      </div>

    </div>
  )
}

export default MariConverter