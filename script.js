function hoverImg(element) {
    element.setAttribute('src', 'firstShotLIGHT1.jpg');
  }
  
  function unhoverImg(element) {
    element.setAttribute('src', 'firstShotDARK1.jpg');
  }

  function hoverSvg(element) {
    let ele = element.getElementsByTagName("IMG")[0];
    ele.setAttribute('src', 'icons/flagBlue.png');
    ele.style.transform = 'scale(1.1)';
  }
  
  function unhoverSvg(element) {
    let ele = element.getElementsByTagName("IMG")[0];
    ele.setAttribute('src', 'icons/flagRegular.png');
    ele.style.transform = 'scale(1.0)';
  }

  function updateFooterDate() {
    const date = new Date();
    document.getElementById('footer').innerHTML = `© ${date.getFullYear()} <a href="https://www.mark--davies.com" style="color: grey;">Mark Davies</a>`;
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    updateFooterDate();
  })
