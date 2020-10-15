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
