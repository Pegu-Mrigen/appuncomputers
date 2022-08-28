import styles from '../styles/Contact.module.css'
import Circle from "../components/Circle"

const contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="green" left="-50vh" top="-50vh" />
        <Circle  backgroundColor="yellow" right="-100vh" bottom="-55vh"/>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="Username" type="" name="" value="" />
            <input className={styles.inputS} placeholder="Phone" type="" name="" value="" />
            <input className={styles.inputL} placeholder="Email" type="" name="" value="" />
            <input className={styles.inputL} placeholder="Subject" type="" name="" value="" />
            <textarea className={styles.textarea} placeholder="Message" rows={6} cols=""></textarea>
            <button type="" className={styles.buttonF}>Submit</button>
        </form>
    </div>
  )
}

export default contact