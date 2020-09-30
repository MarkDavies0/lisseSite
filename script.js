function hoverImg(element) {
    element.setAttribute('src', 'firstShotLIGHT.jpg');
  }
  
  function unhoverImg(element) {
    element.setAttribute('src', 'firstShotDARK.jpg');
  }

  function hoverSvg(element) {
    let ele = element.getElementsByTagName("IMG")[0];
    ele.setAttribute('src', 'flagBlue.png');
    ele.style.transform = 'scale(1.1)';
  }
  
  function unhoverSvg(element) {
    let ele = element.getElementsByTagName("IMG")[0];
    ele.setAttribute('src', 'flagRegular.png');
    ele.style.transform = 'scale(1.0)';
  }
