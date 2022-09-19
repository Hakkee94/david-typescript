function deliveryMethod(): string {
  // TODO
  return 'overnight'
}

function shipWeight(): number {
  const el: HTMLElement = document.getElementById('weight')
  if (!el) {
    return 0
  }
  return parseInt(el.innerHTML)
}

function sendUpdates(emailAddr: string | string[]): void {
  function sendEmail(addr: string): void {
    console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`)
    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package')
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.map((item, key) => {
      sendEmail(item.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}