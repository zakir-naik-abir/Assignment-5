/* seat control */ 

const allSeat = document.getElementsByClassName('seat');

for (const seat of allSeat) {
  seat.addEventListener('click', function(e){

    const seatName = e.target.innerText;

    const price = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[3].childNodes[3].childNodes[3].childNodes[0].innerText;

    const selectedSeat = document.getElementById('selected-seat');

    const count = getConvertedValue('count-seat');
    if(count+1 > 4){
      alert('You selected maximum seat');
      return
    }

    const seatLeft = getConvertedValue('seat-left');
    document.getElementById('seat-left').innerText = seatLeft - 1;
    
    const seatCount = getConvertedValue('count-seat');
    document.getElementById('count-seat').innerText = seatCount + 1;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = seatName;
    const p1 = document.createElement('p');
    p1.innerText = 'Economy';
    const p2 = document.createElement('p');
    p2.innerText = price + ' ' + 'Taka'; 

    e.target.style.backgroundColor = '#1dd100';
    e.target.setAttribute('disabled', false)

    li.appendChild(p); li.appendChild(p1); li.appendChild(p2);
    selectedSeat.appendChild(li);

    updateTotalPrice(price);
    grandTotalPrice();

  });
};

function updateTotalPrice(price){
  const totalPrice = getConvertedValue('total-price');
  const convertTotalPrice = parseInt(totalPrice);
  const convertedPrice = parseInt(price);
  const NewTotalPrice = convertTotalPrice + convertedPrice;
  document.getElementById('total-price').innerText = NewTotalPrice;
};


function grandTotalPrice(status){
  console.log(status)
  const totalPrice = getConvertedValue('total-price');
  console.log(totalPrice)
  if(status == undefined){
    document.getElementById('grand-total').innerText = totalPrice;
  }else{
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode=='NEW15'){
      document.getElementById('grand-total').innerText = totalPrice - (totalPrice/100)*15
    }else if(couponCode=='Couple20'){
      document.getElementById('grand-total').innerText = totalPrice - (totalPrice/100)*20
    }else{
      alert('Please enter a valid coupon code')
    }
  }
};


function getConvertedValue(id){
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice
};



/*  Next page control  */ 
function hideElementById(elementId){
  const element = document.getElementById(elementId)
  element.classList.add('hidden')
};

function showElementById(elementId){
  const element = document.getElementById(elementId)
  element.classList.remove('hidden')
};

function next(){
  hideElementById('first-page');
  showElementById('success-page');
};
function Continue(){
  hideElementById('success-page');
  showElementById('first-page');
};




