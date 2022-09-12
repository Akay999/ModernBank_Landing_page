import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`flex-col md:flex-row mb-8 w-full ${styles.flexStart}`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain " />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, relaible and secure.</p>
      </div>

      <div className="flex-[1.5] flex flex-row w-full flex-wrap justify-between md:mt-0 mt-10">
        {footerLinks.map( (footerlink) => (
          <div key={footerlink.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px] `}>
            <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerlink.links.map( (link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'} `}>
                  {link.name}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </div>

    <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-white text-center text-[18px] leading-[27px]">
        2022, Hoobank. All rights reserved.
      </p>

      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map( (social, index) => (
          <img src={social.icon} key={social.id} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>
    </div>

  </section>    
)

export default Footer