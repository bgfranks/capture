import styled from "styled-components"
import { About } from "../styles"

const Faq = styled(About)`
  display: block;

  span {
    display: inline;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`

const FaqSection = () => {
  return (
    <>
      <Faq>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <div className="question">
          <h4>How do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
            </p>
          </div>
          <div className="faq-line" />
        </div>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
            </p>
          </div>
          <div className="faq-line" />
        </div>
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
            </p>
          </div>
          <div className="faq-line" />
        </div>
        <div className="question">
          <h4>What Products do You Offer?</h4>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis nulla veritatis suscipit doloribus obcaecati.
            </p>
          </div>
          <div className="faq-line" />
        </div>
      </Faq>
    </>
  )
}

export default FaqSection
