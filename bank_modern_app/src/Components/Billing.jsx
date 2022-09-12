import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[3] w-[50%] h-[50%] rounded-full  top-0 pink__gradient -left-1/2" />
      <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-0 pink__gradient -left-1/2" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing and invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus, facere tempora repudiandae, repellat quia dolores nemo nihil reiciendis iusto impedit recusandae fuga, pariatur veniam maiores delectus libero voluptate alias?
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={google} alt="google_store" className="w-[128px] h-[42px] cursor-pointer object-contain mr-5 " />
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] cursor-pointer object-contain " />
      </div>
    </div>
  </section>
)

export default Billing