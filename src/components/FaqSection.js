import styled from "styled-components"
import { AnimateSharedLayout } from "framer-motion"

import { About } from "../styles"
import Toggle from "./Toggle"
import { ScrollReveal } from "../animation"
import { useScroll } from "./useScroll"

const Faq = styled(About)`
  display: block;

  @media (max-width: 1100px) {
    text-align: left;
  }

  span {
    display: inline;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;

    @media (max-width: 1100px) {
      text-align: center;
      padding-bottom: 5rem;
    }
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`

const FaqSection = () => {
  const [element, controls] = useScroll()

  return (
    <>
      <Faq
        variants={ScrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            <div className="answer">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
              </p>
            </div>
          </Toggle>
          <Toggle title="What Products do You Offer">
            <div className="answer">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </>
  )
}

export default FaqSection
