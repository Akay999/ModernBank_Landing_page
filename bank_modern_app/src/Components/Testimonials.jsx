import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
    <div className="absolute w-[60%] h-[60%] -right-[50%] blue__gradient z-0 rounded-full " />

    <div className="flex flex-col w-full justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
      What people are saying about us <br className="sm:block hidden"/>
      saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map( (card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials