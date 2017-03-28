import assert from 'assert'
import { describe, it } from 'mocha'
import webdriverio from 'webdriverio'

describe('auto-cookie', () => {
  const name = 'auto-cookie'
  const config = {
    desiredCapabilities: { browserName: 'chrome' }
  }
  const client = webdriverio.remote(config)
  it('set cookie', () => {
    client
      .init()
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(name)
      .then((cookie) => {
        assert(cookie === 'data')
      })
  })
})