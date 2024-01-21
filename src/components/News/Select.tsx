import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { calcTime } from '~/lib/datetime'

const NewsSelection = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState('all')
  const box = useRef<any>()
  useEffect(() => {
    if (show) {
      if (document.getElementById('dropdownSelectionDate'))
        document
          .getElementById('dropdownSelectionDate')!
          .classList.add('b-view')
      if (box.current) {
        setTimeout(() => {
          box.current.classList.add('b-view-ani')
        }, 300)
      }
    } else {
      if (box.current) {
        box.current.classList.remove('b-view-ani')
      }
      if (document.getElementById('dropdownSelectionDate')) {
        setTimeout(() => {
          document
            .getElementById('dropdownSelectionDate')!
            .classList.remove('b-view')
        }, 1000)
      }
    }
  }, [show])

  useEffect(() => {
    if (active) {
      setShow(false)
    }
  }, [active])

  const allTime = calcTime()
  return (
    <motion.div
      id="newsselection"
      className="in-view"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pg-container">
        <div id="filterButton">
          <a className="fcategory fAll active">ALL</a>
          <a className="fcategory fPressRelease">PRESS</a>
          <a className="fcategory fGameRelease">GAME</a>
        </div>
        <a id="btnScrollDown">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NC40NiAxNS4wMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5NTk1OTU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgNDM8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyNy40OSAxNS4wMSAwIDAuOTIgMC40NiAwLjAzIDI3LjQ5IDEzLjg4IDU0IDAgNTQuNDYgMC44OSAyNy40OSAxNS4wMSIvPjwvZz48L2c+PC9zdmc+"
            alt="Scroll Down"
          />
        </a>
        <a id="btnSelectDate" onClick={() => setShow(!show)}>
          <div>Date</div>
        </a>
        <a id="btnSelectDate2">
          <img
            src="/img/news_DateFilter_btn_date.9e10833.svg"
            alt="Select Date"
          />
        </a>
        <div id="dropdownSelectionDate">
          <a className="cover" onClick={() => setShow(!show)} />
          <div className="box" ref={box}>
            <a
              className={clsx('all cursor-pointer', show && 'b-view-ani')}
              onClick={() => setActive('all')}
            >
              {active === 'all' ? (
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NGU5OTg7fS5jbHMtMntmaWxsOiMwNWI4NjE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMzU8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNy41IiBjeT0iNy41IiByPSI2LjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03LjUsMkE1LjUsNS41LDAsMSwxLDIsNy41LDUuNTEsNS41MSwwLDAsMSw3LjUsMm0wLTJBNy41LDcuNSwwLDEsMCwxNSw3LjUsNy41LDcuNSwwLDAsMCw3LjUsMFoiLz48L2c+PC9nPjwvc3ZnPg=="
                  alt="Unselected"
                  className="selected"
                />
              ) : (
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkOWQ5ZDk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMzQ8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNSwwQTcuNSw3LjUsMCwxLDAsMTUsNy41LDcuNSw3LjUsMCwwLDAsNy41LDBabTAsMTNBNS41LDUuNSwwLDEsMSwxMyw3LjUsNS41MSw1LjUxLDAsMCwxLDcuNSwxM1oiLz48L2c+PC9nPjwvc3ZnPg=="
                  alt="Selected"
                  className="selected"
                />
              )}
              ALL
            </a>
            <div className={clsx('multiple', show && 'b-view-ani')}>
              {allTime.map((item: any, index: number) => (
                <div key={index}>
                  <dl className="year">{item[0]}</dl>
                  {item[1].length > 0 &&
                    item[1].map((v: any, key: number) => (
                      <a
                        className="month cursor-pointer"
                        key={key}
                        onClick={() => setActive(`${item[0]}_${v}`)}
                      >
                        {active === `${item[0]}_${v}` ? (
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NGU5OTg7fS5jbHMtMntmaWxsOiMwNWI4NjE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMzU8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNy41IiBjeT0iNy41IiByPSI2LjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03LjUsMkE1LjUsNS41LDAsMSwxLDIsNy41LDUuNTEsNS41MSwwLDAsMSw3LjUsMm0wLTJBNy41LDcuNSwwLDEsMCwxNSw3LjUsNy41LDcuNSwwLDAsMCw3LjUsMFoiLz48L2c+PC9nPjwvc3ZnPg=="
                            alt="Unselected"
                            className="selected"
                          />
                        ) : (
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkOWQ5ZDk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMzQ8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNSwwQTcuNSw3LjUsMCwxLDAsMTUsNy41LDcuNSw3LjUsMCwwLDAsNy41LDBabTAsMTNBNS41LDUuNSwwLDEsMSwxMyw3LjUsNS41MSw1LjUxLDAsMCwxLDcuNSwxM1oiLz48L2c+PC9nPjwvc3ZnPg=="
                            alt="Selected"
                            className="selected"
                          />
                        )}
                        {v}
                      </a>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsSelection
