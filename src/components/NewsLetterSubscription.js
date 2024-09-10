import React from 'react'

function NewsLetterSubscription() {
  return (
    <div className="news-letter-wrapper">
      <div className="news-letter-content">
        <div className="left">
          <h1>Subcribe to news letters!</h1>
          <p>Should we come across latest news that are developing, we shall keep you in the know</p>
        </div>
        <div className="right">
          <form>
            <input type="email"  placeholder='example@gmail.com' required/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterSubscription;
