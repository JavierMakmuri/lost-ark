import Head from 'next/head'
import Image from 'next/image'
import MariConverter from './mariConverter'
import styles from '../styles/MariShop.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <MariConverter />
    </div>
  )
}
