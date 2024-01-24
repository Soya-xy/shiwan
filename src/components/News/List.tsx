import { motion } from 'framer-motion'

import { useRouter } from '~/i18n'

const NewsList = () => {
  const router = useRouter()
  return (
    <div id="newslist">
      <div className="media-list">
        <div
          style={{
            textAlign: 'center',
            color: 'rgb(0, 0, 0)',
            fontSize: '15px',
            lineHeight: '21px',
            padding: '100px 20px',
            display: 'none',
          }}
        >
          <img
            src="/img/NewsPage_NotFound.df6de45.png"
            style={{ marginBottom: '10px' }}
            alt="Not Found"
          />
          <dl style={{ fontSize: '18px', marginBottom: '3px' }}>WHOOPS!</dl>
          <dl>
            We couldn`t find the news
            <br />
            you were looking for.
          </dl>
        </div>
        <div
          style={{
            textAlign: 'center',
            color: 'rgb(0, 0, 0)',
            fontSize: '15px',
            lineHeight: '21px',
            padding: '100px 20px',
            display: 'none',
          }}
        >
          <img
            src="/img/NewsPage_loading.f9f1e89.gif"
            style={{ marginBottom: '10px' }}
            alt="Loading"
          />
          <dl style={{ fontSize: '18px', marginBottom: '0px' }}>Loading...</dl>
          <dl>Just a moment, please.</dl>
        </div>
        <ul id="news-timeline">
          {Array.from({ length: 12 }).map((_v: any, k: number) => (
            <motion.li
              key={k}
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className=" in-view"
            >
              <span className="line" />
              <article
                className="news cursor-pointer"
                onClick={() => {
                  router.push('/news/detail/123')
                }}
              >
                {/* Additional content for the news article can be added here */}
                <a
                  title="AWAKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH 2”!"
                  className="img"
                  style={{
                    backgroundImage:
                      'url("https://www.pgsoft.com/uploads/News/Images/b10d2c75-704e-4aec-a0ac-c5e23d7bcd7b.jpg")',
                  }}
                />
                <div className="news-content">
                  {/* Additional content for the news content can be added here */}
                  <a
                    title="AWAKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH 2”!"
                    className="news-title"
                  >
                    <h2>AWAKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH 2”!</h2>
                  </a>
                  <div className="news-category">GAME RELEASE</div>
                  <div className="news-date">
                    <div className="day">31</div>
                    <div className="year-month">
                      <span className="year">2023</span>
                      <span className="dash">-</span>
                      <span className="month">12</span>
                    </div>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
        <a className="loadmore">
          <div className="flex flex-col !d-center">
            <div>Load More</div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NC40NiAxNS4wMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5NTk1OTU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgNDM8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyNy40OSAxNS4wMSAwIDAuOTIgMC40NiAwLjAzIDI3LjQ5IDEzLjg4IDU0IDAgNTQuNDYgMC44OSAyNy40OSAxNS4wMSIvPjwvZz48L2c+PC9zdmc+"
              alt="Load More"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default NewsList
