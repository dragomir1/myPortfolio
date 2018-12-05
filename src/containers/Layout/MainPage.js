import React from 'react';
import './MainPage.css';
import Contact from '../Contact/Contact';

const MainPage = () => {
  return (
    <div>
        <div id="parallax-world-of-ugg">
            <section>
              <div className="title">
                <h3>Michael Dragomir</h3>
                <p className="line-break2 margin-top-10"></p>
                <h1>Front End - Full Stack - M.E.R.N - React Native</h1>
              </div>
            </section>
            <section>
                <div className="parallax-one">
                  <h2>ABOUT</h2>
                </div>
            </section>
            <section>
              <div className="block">
                <p className="placeholder"><img src="https://via.placeholder.com/698x450" alt="holder"/></p>
                <p className="line-break margin-top-10"></p>
                <p className="margin-top-10"><span className="first-character sc">T</span>he UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p>
              </div>
            </section>
            <section>
              <div className="parallax-two">
                <h2>PORTFOLIO</h2>
              </div>
            </section>
            <section>
              <div className="block">
                <p><span className="first-character ny">B</span>In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
                <p className="line-break margin-top-10"></p>
                <p className="margin-top-10">UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
              </div>
            </section>
            <section>
              <div className="parallax-three">
                <h2>SKILLS</h2>
              </div>
            </section>
            <section>
              <div className="block">
                <p><span className="first-character atw">W</span>hen the New York fashion community notices your brand, the world soon follows. The widespread love for UGG extended to Europe in the mid-2000's along with the stylish casual movement and demand for premium casual fashion. UGG boots and shoes were now seen walking the streets of London, Paris and Amsterdam with regularity. To meet the rising demand from new fans, UGG opened flagship stores in the UK and an additional location in Moscow. As the love spread farther East, concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an international brand that is loved by all. This love is a result of a magical combination of the amazing functional benefits of sheepskin and the heightened emotional feeling you get when you slip them on your feet. In short, you just feel better all over when you wear UGG boots, slippers, and shoes.</p>
              <p className="line-break margin-top-10"></p>
              <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
            </div>
          </section>
          <section>
            <div className="parallax-four">
              <h2>CONTACT</h2>
            </div>
          </section>
          <section>
            <div className="block">

              <Contact />
            </div>
          </section>
        </div>
      </div>
  )
}


export default MainPage;
